import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Прямые участки с касательными скруглениями, без щелей между цилиндрами. */
export function pipeCurve(points: readonly (readonly number[])[], bend = .18) {
  const vertices = points.map(p => new THREE.Vector3(p[0], p[1], p[2]));
  const curve = new THREE.CurvePath<THREE.Vector3>();
  let cursor = vertices[0];
  for (let i = 1; i < vertices.length - 1; i++) {
    const corner = vertices[i], before = vertices[i - 1], after = vertices[i + 1];
    const trim = Math.min(bend, corner.distanceTo(before) * .35, corner.distanceTo(after) * .35);
    const entry = corner.clone().add(before.clone().sub(corner).normalize().multiplyScalar(trim));
    const exit = corner.clone().add(after.clone().sub(corner).normalize().multiplyScalar(trim));
    if (cursor.distanceTo(entry) > .00001) curve.add(new THREE.LineCurve3(cursor, entry));
    curve.add(new THREE.QuadraticBezierCurve3(entry, corner, exit)); cursor = exit;
  }
  curve.add(new THREE.LineCurve3(cursor, vertices.at(-1)!));
  return curve;
}

/** Добавляем разбиение на отводах. Прямому участку достаточно одного пролёта. */
export function pipeGeometry(points: number[][], radius: number) {
  const centerline = pipeCurve(points);
  const pieces = centerline.curves.map(curve => ({ curve, segments: curve instanceof THREE.LineCurve3 ? 1 : 8 }));
  const segments = pieces.reduce((sum, piece) => sum + piece.segments, 0);
  const findPiece = (t: number) => {
    let remaining = t * segments;
    for (const piece of pieces) {
      if (remaining <= piece.segments) return { curve: piece.curve, t: remaining / piece.segments };
      remaining -= piece.segments;
    }
    return { curve: pieces[pieces.length - 1].curve, t: 1 };
  };
  const path = new class extends THREE.Curve<THREE.Vector3> {
    constructor() { super(); }
    getPoint(t: number, target?: THREE.Vector3) {
      const piece = findPiece(t);
      return piece.curve.getPoint(piece.t, target);
    }
    getPointAt(t: number, target?: THREE.Vector3) { return this.getPoint(t, target); }
    getTangentAt(t: number, target?: THREE.Vector3) {
      const piece = findPiece(t);
      return piece.curve.getTangent(piece.t, target);
    }
  }();
  return new THREE.TubeGeometry(path, segments, radius, 12, false);
}

/** Объединяем только неподвижные дочерние детали; движущиеся узлы сохраняются. */
export function batchStaticParts(root: THREE.Object3D, excluded: Set<THREE.Object3D>) {
  for (const child of [...root.children]) if (child instanceof THREE.Group) batchStaticParts(child, excluded);
  const buckets = new Map<string, THREE.Mesh[]>();
  for (const child of root.children) {
    if (!(child instanceof THREE.Mesh) || child.children.length || excluded.has(child) || Array.isArray(child.material)) continue;
    const key = `${child.material.uuid}/${child.castShadow}/${child.receiveShadow}`;
    const bucket = buckets.get(key) || []; bucket.push(child); buckets.set(key, bucket);
  }
  for (const meshes of buckets.values()) {
    if (meshes.length < 2) continue;
    const preserveIndex = meshes.every(mesh => mesh.geometry.index);
    const parts = meshes.map(mesh => {
      mesh.updateMatrix();
      const part = !preserveIndex && mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      return part.applyMatrix4(mesh.matrix);
    });
    const geometry = mergeGeometries(parts, false); parts.forEach(part => part.dispose());
    if (!geometry) continue;
    const merged = new THREE.Mesh(geometry, meshes[0].material);
    merged.castShadow = meshes[0].castShadow; merged.receiveShadow = meshes[0].receiveShadow;
    for (const mesh of meshes) { root.remove(mesh); mesh.geometry.dispose(); }
    root.add(merged);
  }
}
