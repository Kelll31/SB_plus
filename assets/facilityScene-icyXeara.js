import{k as Wa,l as sn,m as Hc,n as Ot,o as fn,p as Vc,G as Ws,q as xr,s as kc,t as Wc,v as ji,w as Sl,V as Us,x as Xa,y as Dr,z as Xc,D as qa,I as ai,R as yn,J as Qt,K as er,O as Xs,T as qc,Q as Yc,U as Ya,Y as Fi,Z as ch,_ as uh,$ as hh,a0 as fh,a1 as Bn,a2 as dh,a3 as ph,a4 as Ml,a5 as yl,a6 as zn,a7 as oa,a8 as mh,a9 as gh}from"./index-9gZ1gIk4.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="187",_h=0,El=1,xh=2,Ir=1,vh=2,wr=3,yi=0,jt=1,Pn=2,tr=0,Nr=1,bl=2,Tl=3,Al=4,Sh=5,$i=100,Mh=101,yh=102,Eh=103,bh=104,Th=200,Ah=201,wh=202,Rh=203,Zc=204,Jc=205,Ch=206,Ph=207,Lh=208,Dh=209,Ih=210,Nh=211,Uh=212,Fh=213,Oh=214,Za=0,Ja=1,Ka=2,Hr=3,$a=4,Qa=5,ja=6,eo=7,Kc=0,Bh=1,zh=2,Jn=0,$c=1,Qc=2,jc=3,Wo=4,eu=5,tu=6,nu=7,iu=300,rr=301,Vr=302,Fs=303,la=304,kr=1e3,En=1001,to=1002,zt=1003,Gh=1004,is=1005,Lt=1006,ca=1007,Zn=1008,on=1009,ru=1010,su=1011,Wr=1012,Xo=1013,In=1014,ln=1015,cn=1016,qo=1017,Yo=1018,sr=1020,au=35902,ou=35899,lu=1021,cu=1022,Ln=1023,ci=1026,oi=1027,Zo=1028,Jo=1029,Ei=1030,Ko=1031,$o=1033,Os=33776,Bs=33777,zs=33778,Gs=33779,no=35840,io=35841,ro=35842,so=35843,ao=36196,oo=37492,lo=37496,co=37488,uo=37489,qs=37490,ho=37491,fo=37808,po=37809,mo=37810,go=37811,_o=37812,xo=37813,vo=37814,So=37815,Mo=37816,yo=37817,Eo=37818,bo=37819,To=37820,Ao=37821,wo=36492,Ro=36494,Co=36495,Po=36283,Lo=36284,Ys=36285,Do=36286,Hh=3200,Io=0,Vh=1,qn="",Pt="srgb",Xr="srgb-linear",Zs="linear",ht="srgb",ua=7680,kh=519,Wh=512,Xh=513,qh=514,uu=515,Yh=516,Zh=517,hu=518,fu=519,Jh=35044,Kh=35048,wl="300 es",bn=2e3,qr=2001;function $h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){const i=Yr("canvas");return i.style.display="block",i}const Rl={};function Cl(...i){const e="THREE."+i.shift();console.log(e,...i)}function du(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=du(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=du(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hs(...i){const e=i.join(" ");e in Rl||(Rl[e]=!0,Be(...i))}function jh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ef={[Za]:Za,[Ka]:ja,[$a]:$a,[Hr]:Qa,[Ja]:Ja,[ja]:Ka,[eo]:eo,[Qa]:Hr};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const nr=Math.PI/180,Zr=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Qo(i,e){return(i%e+e)%e}function tf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function rf(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function sf(i,e=1){return e-Math.abs(Qo(i,e*2)-e)}function af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cf(i,e){return i+Math.random()*(e-i)}function uf(i){return i*(.5-Math.random())}function hf(i){i!==void 0&&(Pl=i);let e=Pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ff(i){return i*nr}function df(i){return i*Zr}function pf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gf(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),p=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*p,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mu(i,e){if(e.constructor===Float32Array)return i;const t=jo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gu(i,e){if(e.constructor===Float32Array)return i;const t=jo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const No={DEG2RAD:nr,RAD2DEG:Zr,generateUUID:wi,clamp:$e,euclideanModulo:Qo,mapLinear:tf,inverseLerp:nf,lerp:Ur,damp:rf,pingpong:sf,smoothstep:af,smootherstep:of,randInt:lf,randFloat:cf,randFloatSpread:uf,seededRandom:hf,degToRad:ff,radToDeg:df,isPowerOfTwo:pf,ceilPowerOfTwo:mf,floorPowerOfTwo:pu,setQuaternionFromProperEuler:gf,normalize:gu,denormalize:mu},gl=class gl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;let Ce=gl;class hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3],d=s[a+0],h=s[a+1],g=s[a+2],M=s[a+3];if(p!==M||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+p*M;m<0&&(d=-d,h=-h,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y,l=l*f+d*o,c=c*f+h*o,u=u*f+g*o,p=p*f+M*o}else{l=l*f+d*o,c=c*f+h*o,u=u*f+g*o,p=p*f+M*o;const x=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=x,c*=x,u*=x,p*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*p+l*h-c*d,e[t+1]=l*g+u*d+c*p-o*h,e[t+2]=c*g+u*h+o*d-l*p,e[t+3]=u*g-o*p-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),p=o(s/2),d=l(n/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"YXZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"ZXY":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"ZYX":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"YZX":this._x=d*u*p+c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p-d*h*g;break;case"XZY":this._x=d*u*p-c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p+d*h*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>p){const h=2*Math.sqrt(1+n-o-p);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-n-p);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _l=class _l{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*c+a*p-o*u,this.y=n+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;let D=_l;const ha=new D,Ll=new hi,xl=class xl{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],g=n[8],M=r[0],m=r[3],f=r[6],x=r[1],y=r[4],S=r[7],A=r[2],T=r[5],_=r[8];return s[0]=a*M+o*x+l*A,s[3]=a*m+o*y+l*T,s[6]=a*f+o*S+l*_,s[1]=c*M+u*x+p*A,s[4]=c*m+u*y+p*T,s[7]=c*f+u*S+p*_,s[2]=d*M+h*x+g*A,s[5]=d*m+h*y+g*T,s[8]=d*f+h*S+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*p+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=p*M,e[1]=(r*c-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=h*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fa.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xl.prototype.isMatrix3=!0;let Xe=xl;const fa=new Xe,Dl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const tt=_f();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=Yr("canvas")),Oi.width=e.width,Oi.height=e.height;const r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class el{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(da(r[a].image)):s.push(da(r[a]))}else s=da(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Sf=0;const pa=new D;class Ht extends Ai{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=En,r=En,s=Lt,a=Zn,o=Ln,l=on,c=Ht.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=wi(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=iu;Ht.DEFAULT_ANISOTROPY=1;const vl=class vl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(h+1)/2,A=(f+1)/2,T=(u+d)/4,_=(p+M)/4,v=(g+m)/4;return y>S&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=_/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=v/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=_/s,r=v/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(p-M)*(p-M)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(p-M)/x,this.z=(d-u)/x,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vl.prototype.isVector4=!0;let St=vl;class Mf extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Ht({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new el(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _u extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const na=class na{constructor(e,t,n,r,s,a,o,l,c,u,p,d,h,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,p,d,h,g,M,m)}set(e,t,n,r,s,a,o,l,c,u,p,d,h,g,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new na().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*p,g=o*u,M=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+g*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*p,g=c*u,M=c*p;t[0]=d+M*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*p,g=c*u,M=c*p;t[0]=d-M*o,t[4]=-a*p,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*p,g=o*u,M=o*p;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+M,t[1]=l*p,t[5]=M*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=M-d*p,t[8]=g*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*p+g,t[10]=d-M*p}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+M,t[5]=a*u,t[9]=h*p-g,t[2]=g*p-h,t[6]=o*u,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,bf)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ei.crossVectors(n,tn),ei.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ei.crossVectors(n,tn)),ei.normalize(),rs.crossVectors(tn,ei),r[0]=ei.x,r[4]=rs.x,r[8]=tn.x,r[1]=ei.y,r[5]=rs.y,r[9]=tn.y,r[2]=ei.z,r[6]=rs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],g=n[2],M=n[6],m=n[10],f=n[14],x=n[3],y=n[7],S=n[11],A=n[15],T=r[0],_=r[4],v=r[8],P=r[12],R=r[1],N=r[5],O=r[9],k=r[13],C=r[2],V=r[6],I=r[10],G=r[14],j=r[3],B=r[7],Y=r[11],ee=r[15];return s[0]=a*T+o*R+l*C+c*j,s[4]=a*_+o*N+l*V+c*B,s[8]=a*v+o*O+l*I+c*Y,s[12]=a*P+o*k+l*G+c*ee,s[1]=u*T+p*R+d*C+h*j,s[5]=u*_+p*N+d*V+h*B,s[9]=u*v+p*O+d*I+h*Y,s[13]=u*P+p*k+d*G+h*ee,s[2]=g*T+M*R+m*C+f*j,s[6]=g*_+M*N+m*V+f*B,s[10]=g*v+M*O+m*I+f*Y,s[14]=g*P+M*k+m*G+f*ee,s[3]=x*T+y*R+S*C+A*j,s[7]=x*_+y*N+S*V+A*B,s[11]=x*v+y*O+S*I+A*Y,s[15]=x*P+y*k+S*G+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],h=e[14],g=e[3],M=e[7],m=e[11],f=e[15],x=l*h-c*d,y=o*h-c*p,S=o*d-l*p,A=a*h-c*u,T=a*d-l*u,_=a*p-o*u;return t*(M*x-m*y+f*S)-n*(g*x-m*A+f*T)+r*(g*y-M*A+f*_)-s*(g*S-M*T+m*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],h=e[11],g=e[12],M=e[13],m=e[14],f=e[15],x=t*o-n*a,y=t*l-r*a,S=t*c-s*a,A=n*l-r*o,T=n*c-s*o,_=r*c-s*l,v=u*M-p*g,P=u*m-d*g,R=u*f-h*g,N=p*m-d*M,O=p*f-h*M,k=d*f-h*m,C=x*k-y*O+S*N+A*R-T*P+_*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/C;return e[0]=(o*k-l*O+c*N)*V,e[1]=(r*O-n*k-s*N)*V,e[2]=(M*_-m*T+f*A)*V,e[3]=(d*T-p*_-h*A)*V,e[4]=(l*R-a*k-c*P)*V,e[5]=(t*k-r*R+s*P)*V,e[6]=(m*S-g*_-f*y)*V,e[7]=(u*_-d*S+h*y)*V,e[8]=(a*O-o*R+c*v)*V,e[9]=(n*R-t*O-s*v)*V,e[10]=(g*T-M*S+f*x)*V,e[11]=(p*S-u*T-h*x)*V,e[12]=(o*P-a*N-l*v)*V,e[13]=(t*N-n*P+r*v)*V,e[14]=(M*y-g*A-m*x)*V,e[15]=(u*A-p*y+d*x)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,p=o+o,d=s*c,h=s*u,g=s*p,M=a*u,m=a*p,f=o*p,x=l*c,y=l*u,S=l*p,A=n.x,T=n.y,_=n.z;return r[0]=(1-(M+f))*A,r[1]=(h+S)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+y)*_,r[9]=(m-x)*_,r[10]=(1-(d+M))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),l=Bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vn.copy(this);const c=1/a,u=1/o,p=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=bn,l=!1){const c=this.elements,u=2*s/(t-e),p=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===bn)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=bn,l=!1){const c=this.elements,u=2/(t-e),p=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===bn)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};na.prototype.isMatrix4=!0;let ut=na;const Bi=new D,vn=new ut,Ef=new D(0,0,0),bf=new D(1,1,1),ei=new D,rs=new D,tn=new D,Nl=new ut,Ul=new hi;class ui{constructor(e=0,t=0,n=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tf=0;const Fl=new D,zi=new hi,Gn=new ut,ss=new D,vr=new D,Af=new D,wf=new hi,Ol=new D(1,0,0),Bl=new D(0,1,0),zl=new D(0,0,1),Gl={type:"added"},Rf={type:"removed"},Gi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Dt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new D,t=new ui,n=new hi,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(vr,ss,this.up):Gn.lookAt(ss,vr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Gn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},as={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Qo(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return tt.workingToColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Pt){tt.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(as);const n=Ur(ti.h,as.h,t),r=Ur(ti.s,as.s,t),s=Ur(ti.l,as.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=vu;class tl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pf extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new D,Hn=new D,xa=new D,Vn=new D,Hi=new D,Vi=new D,Hl=new D,va=new D,Sa=new D,Ma=new D,ya=new St,Ea=new St,ba=new St;class mn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Sn.subVectors(r,t),Hn.subVectors(n,t),xa.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Hn),l=Sn.dot(xa),c=Hn.dot(Hn),u=Hn.dot(xa),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ya.setScalar(0),Ea.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ya,s.x),a.addScaledVector(Ea,s.y),a.addScaledVector(ba,s.z),a}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Hn.subVectors(e,t),Sn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,n),Vi.subVectors(s,n),va.subVectors(e,n);const l=Hi.dot(va),c=Vi.dot(va);if(l<=0&&c<=0)return t.copy(n);Sa.subVectors(e,r);const u=Hi.dot(Sa),p=Vi.dot(Sa);if(u>=0&&p<=u)return t.copy(r);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Hi,a);Ma.subVectors(e,s);const h=Hi.dot(Ma),g=Vi.dot(Ma);if(g>=0&&h<=g)return t.copy(s);const M=h*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vi,o);const m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return Hl.subVectors(s,r),o=(p-u)/(p-u+(h-g)),t.copy(r).addScaledVector(Hl,o);const f=1/(m+M+d);return a=M*f,o=d*f,t.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ls.subVectors(this.max,Sr),ki.subVectors(e.a,Sr),Wi.subVectors(e.b,Sr),Xi.subVectors(e.c,Sr),ni.subVectors(Wi,ki),ii.subVectors(Xi,Wi),_i.subVectors(ki,Xi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!Ta(t,ki,Wi,Xi,ls)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,ki,Wi,Xi,ls))?!1:(cs.crossVectors(ni,ii),t=[cs.x,cs.y,cs.z],Ta(t,ki,Wi,Xi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,os=new Ri,ki=new D,Wi=new D,Xi=new D,ni=new D,ii=new D,_i=new D,Sr=new D,ls=new D,cs=new D,xi=new D;function Ta(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yn=Lf();function Lf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Df(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=$e(i,-65504,65504),Yn.floatView[0]=i;const e=Yn.uint32View[0],t=e>>23&511;return Yn.baseTable[t]+((e&8388607)>>Yn.shiftTable[t])}function If(i){const e=i>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[e]+(i&1023)]+Yn.exponentTable[e],Yn.floatView[0]}class us{static toHalfFloat(e){return Df(e)}static fromHalfFloat(e){return If(e)}}const wt=new D,hs=new Ce;let Nf=0;class $n extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?jo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):gu(e,this.array)}}class Su extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mu extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Uf=new Ri,Mr=new D,Aa=new D;class cr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Aa)),this.expandByPoint(Mr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ff=0;const hn=new ut,wa=new Dt,qi=new D,nn=new Ri,yr=new Ri,Ft=new D;class Rt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?Mu:Su)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(nn.min,yr.min),nn.expandByPoint(Ft),Ft.addVectors(nn.max,yr.max),nn.expandByPoint(Ft)):(nn.expandByPoint(yr.min),nn.expandByPoint(yr.max))}nn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Ft.add(qi)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;const u=new D,p=new D,d=new D,h=new Ce,g=new Ce,M=new Ce,m=new D,f=new D;function x(P,R,N){c[P]=c[R]=c[N]=1,u.fromBufferAttribute(n,P),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,N),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,R),M.fromBufferAttribute(s,N),p.sub(u),d.sub(u),g.sub(h),M.sub(h);const O=1/(g.x*M.y-M.x*g.y);isFinite(O)&&(m.copy(p).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(O),f.copy(d).multiplyScalar(g.x).addScaledVector(p,-M.x).multiplyScalar(O),o[P].add(m),o[R].add(m),o[N].add(m),l[P].add(f),l[R].add(f),l[N].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,R=y.length;P<R;++P){const N=y[P],O=N.start,k=N.count;for(let C=O,V=O+k;C<V;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const S=new D,A=new D,T=new D,_=new D;function v(P){T.fromBufferAttribute(r,P),_.copy(T);const R=o[P];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(_,R);const O=A.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,O)}for(let P=0,R=n.count;P<R;++P)c[P]&&v(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,p=new D;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[h++]}return new $n(d,u,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new D,Of=new D,Bf=new Xe;class si{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ra.subVectors(n,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ra),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let zf=0;class ur extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Nr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wn=new D,Ca=new D,fs=new D,ds=new D;class yu{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ca.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=ds.dot(this.direction),l=-ds.dot(fs),c=ds.lengthSq(),u=Math.abs(1-a*a);let p,d,h,g;if(u>0)if(p=a*l-o,d=a*o-l,g=s*u,p>=0)if(d>=-g)if(d<=g){const M=1/u;p*=M,d*=M,h=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ca).addScaledVector(fs,d),h}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,x=n.y-a.y,y=n.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(u);let _,v,P,R,N,O,k,C,V,I,G,j;if(S>=A&&S>=T?(P=l,O=p,V=g,j=f,l>=0?(_=c,v=u,R=d,N=h,k=M,C=m,I=x,G=y):(_=u,v=c,R=h,N=d,k=m,C=M,I=y,G=x)):A>=T?(P=c,O=d,V=M,j=x,c>=0?(_=u,v=l,R=h,N=p,k=m,C=g,I=y,G=f):(_=l,v=u,R=p,N=h,k=g,C=m,I=f,G=y)):(P=u,O=h,V=m,j=y,u>=0?(_=l,v=c,R=p,N=d,k=g,C=M,I=f,G=x):(_=c,v=l,R=d,N=p,k=M,C=g,I=x,G=f)),P===0)return null;const B=_/P,Y=v/P,ee=1/P,Q=R-B*O,he=N-Y*O,Z=k-B*V,le=C-Y*V,Ee=I-B*j,Fe=G-Y*j,Te=Ee*le-Fe*Z,Ge=Q*Fe-he*Ee,Ne=Z*he-le*Q;if(r){if(Te<0||Ge<0||Ne<0)return null}else if((Te<0||Ge<0||Ne<0)&&(Te>0||Ge>0||Ne>0))return null;const ie=Te+Ge+Ne;if(ie===0)return null;const rt=ee*(Te*O+Ge*V+Ne*j);return(ie>0?rt<0:rt>0)?null:this.at(rt/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vl=new ut,vi=new yu,ps=new cr,kl=new D,ms=new D,gs=new D,_s=new D,Pa=new D,xs=new D,Wl=new D,vs=new D;class Gt extends Dt{constructor(e=new Rt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(Pa.fromBufferAttribute(p,e),a?xs.addScaledVector(Pa,u):xs.addScaledVector(Pa.sub(t),u))}t.add(xs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(ps.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ps,kl)===null||vi.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Vl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=x,A=y;S<A;S+=3){const T=o.getX(S),_=o.getX(S+1),v=o.getX(S+2);r=Ss(this,f,e,n,c,u,p,T,_,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Ss(this,a,e,n,c,u,p,x,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=x,A=y;S<A;S+=3){const T=S,_=S+1,v=S+2;r=Ss(this,f,e,n,c,u,p,T,_,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const x=m,y=m+1,S=m+2;r=Ss(this,a,e,n,c,u,p,x,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gf(i,e,t,n,r,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===yi,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:i}}function Ss(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ms),i.getVertexPosition(l,gs),i.getVertexPosition(c,_s);const u=Gf(i,e,t,n,ms,gs,_s,Wl);if(u){const p=new D;mn.getBarycoord(Wl,ms,gs,_s,p),r&&(u.uv=mn.getInterpolatedAttribute(r,o,l,c,p,new Ce)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,l,c,p,new Ce)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,p,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};mn.getNormal(ms,gs,_s,d.normal),u.face=d,u.barycoord=p}return u}class Js extends Ht{constructor(e=null,t=1,n=1,r,s,a,o,l,c=zt,u=zt,p,d){super(null,a,o,l,c,u,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl extends $n{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new ut,ql=new ut,Ms=[],Yl=new Ri,Hf=new ut,Er=new Gt,br=new cr;class Vf extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Hf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Yl.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),br.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yi),ql.multiplyMatrices(n,Yi),Er.matrixWorld=ql,Er.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const l=Ms[a];l.instanceId=s,l.object=this,t.push(l)}Ms.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Js(new Float32Array(r*this.count),r,this.count,Zo,ln));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new cr,kf=new Ce(.5,.5),ys=new D;class Jr{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],p=s[5],d=s[6],h=s[7],g=s[8],M=s[9],m=s[10],f=s[11],x=s[12],y=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,h-u,f-g,A-x).normalize(),r[1].setComponents(c+a,h+u,f+g,A+x).normalize(),r[2].setComponents(c+o,h+p,f+M,A+y).normalize(),r[3].setComponents(c-o,h-p,f-M,A-y).normalize(),n)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,h-d,f-m,A-S).normalize();else if(r[4].setComponents(c-l,h-d,f-m,A-S).normalize(),t===bn)r[5].setComponents(c+l,h+d,f+m,A+S).normalize();else if(t===qr)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=kf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zl=new ut;class nl{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Zl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Jr),n[r].setFromProjectionMatrix(Zl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Jr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new nl().copy(this)}}class Qi extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new D,$s=new D,Jl=new ut,Tr=new yu,Es=new cr,La=new D,Kl=new D;class Eu extends Dt{constructor(e=new Rt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ks.fromBufferAttribute(t,r-1),$s.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ks.distanceTo($s);e.setAttribute("lineDistance",new nt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Es.radius+=s,e.ray.intersectsSphere(Es)===!1)return;Jl.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Jl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=h,m=g-1;M<m;M+=c){const f=u.getX(M),x=u.getX(M+1),y=bs(this,e,Tr,l,f,x,M);y&&t.push(y)}if(this.isLineLoop){const M=u.getX(g-1),m=u.getX(h),f=bs(this,e,Tr,l,M,m,g-1);f&&t.push(f)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=h,m=g-1;M<m;M+=c){const f=bs(this,e,Tr,l,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=bs(this,e,Tr,l,g-1,h,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bs(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ks.fromBufferAttribute(o,r),$s.fromBufferAttribute(o,s),t.distanceSqToSegment(Ks,$s,La,Kl)>n)return;La.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:Kl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const $l=new D,Ql=new D;class Da extends Eu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)$l.fromBufferAttribute(t,r),Ql.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$l.distanceTo(Ql);e.setAttribute("lineDistance",new nt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bu extends Ht{constructor(e=[],t=rr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends Ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends Ht{constructor(e,t,n=In,r,s,a,o=zt,l=zt,c,u=ci,p=1){if(u!==ci&&u!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Tu extends ar{constructor(e,t=In,n=rr,r,s,a=zt,o=zt,l,c=ci){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Au extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends Rt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2));function g(M,m,f,x,y,S,A,T,_,v,P){const R=S/_,N=A/v,O=S/2,k=A/2,C=T/2,V=_+1,I=v+1;let G=0,j=0;const B=new D;for(let Y=0;Y<I;Y++){const ee=Y*N-k;for(let Q=0;Q<V;Q++){const he=Q*R-O;B[M]=he*x,B[m]=ee*y,B[f]=C,c.push(B.x,B.y,B.z),B[M]=0,B[m]=0,B[f]=T>0?1:-1,u.push(B.x,B.y,B.z),p.push(Q/_),p.push(1-Y/v),G+=1}}for(let Y=0;Y<v;Y++)for(let ee=0;ee<_;ee++){const Q=d+ee+V*Y,he=d+ee+V*(Y+1),Z=d+(ee+1)+V*(Y+1),le=d+(ee+1)+V*Y;l.push(Q,he,le),l.push(he,Z,le),j+=6}o.addGroup(h,j,P),h+=j,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class il extends Rt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new D,u=new Ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){const h=n+p/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Et extends Rt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],d=[],h=[];let g=0;const M=[],m=n/2;let f=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(h,2));function x(){const S=new D,A=new D;let T=0;const _=(t-e)/n;for(let v=0;v<=s;v++){const P=[],R=v/s,N=R*(t-e)+e;for(let O=0;O<=r;O++){const k=O/r,C=k*l+o,V=Math.sin(C),I=Math.cos(C);A.x=N*V,A.y=-R*n+m,A.z=N*I,p.push(A.x,A.y,A.z),S.set(V,_,I).normalize(),d.push(S.x,S.y,S.z),h.push(k,1-R),P.push(g++)}M.push(P)}for(let v=0;v<r;v++)for(let P=0;P<s;P++){const R=M[P][v],N=M[P+1][v],O=M[P+1][v+1],k=M[P][v+1];(e>0||P!==0)&&(u.push(R,N,k),T+=3),(t>0||P!==s-1)&&(u.push(N,O,k),T+=3)}c.addGroup(f,T,0),f+=T}function y(S){const A=g,T=new Ce,_=new D;let v=0;const P=S===!0?e:t,R=S===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,m*R,0),d.push(0,R,0),h.push(.5,.5),g++;const N=g;for(let O=0;O<=r;O++){const C=O/r*l+o,V=Math.cos(C),I=Math.sin(C);_.x=P*I,_.y=m*R,_.z=P*V,p.push(_.x,_.y,_.z),d.push(0,R,0),T.x=V*.5+.5,T.y=I*.5*R+.5,h.push(T.x,T.y),g++}for(let O=0;O<r;O++){const k=A+O,C=N+O;S===!0?u.push(C,C+1,k):u.push(C+1,C,k),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rl extends Et{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new rl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends Rt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new D,S=new D,A=new D;for(let T=0;T<t.length;T+=3)h(t[T+0],y),h(t[T+1],S),h(t[T+2],A),l(y,S,A,x)}function l(x,y,S,A){const T=A+1,_=[];for(let v=0;v<=T;v++){_[v]=[];const P=x.clone().lerp(S,v/T),R=y.clone().lerp(S,v/T),N=T-v;for(let O=0;O<=N;O++)O===0&&v===T?_[v][O]=P:_[v][O]=P.clone().lerp(R,O/N)}for(let v=0;v<T;v++)for(let P=0;P<2*(T-v)-1;P++){const R=Math.floor(P/2);P%2===0?(d(_[v][R+1]),d(_[v+1][R]),d(_[v][R])):(d(_[v][R+1]),d(_[v+1][R+1]),d(_[v+1][R]))}}function c(x){const y=new D;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(x),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function u(){const x=new D;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const S=m(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;a.push(S,1-A)}g(),p()}function p(){for(let x=0;x<a.length;x+=6){const y=a[x+0],S=a[x+2],A=a[x+4],T=Math.max(y,S,A),_=Math.min(y,S,A);T>.9&&_<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function h(x,y){const S=x*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function g(){const x=new D,y=new D,S=new D,A=new D,T=new Ce,_=new Ce,v=new Ce;for(let P=0,R=0;P<s.length;P+=9,R+=6){x.set(s[P+0],s[P+1],s[P+2]),y.set(s[P+3],s[P+4],s[P+5]),S.set(s[P+6],s[P+7],s[P+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),A.copy(x).add(y).add(S).divideScalar(3);const N=m(A);M(T,R+0,x,N),M(_,R+2,y,N),M(v,R+4,S,N)}}function M(x,y,S,A){A<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.vertices,e.indices,e.radius,e.detail)}}const Ts=new D,As=new D,Ia=new D,ws=new mn;class Wf extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(nr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],p=new Array(3),d=new Map,h=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:M,b:m,c:f}=ws;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ws.getNormal(Ia),p[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let x=0;x<3;x++){const y=(x+1)%3,S=p[x],A=p[y],T=ws[u[x]],_=ws[u[y]],v=`${S}_${A}`,P=`${A}_${S}`,R=d.get(P);R?(Ia.dot(R.normal)<=s&&(h.push(T.x,T.y,T.z),h.push(_.x,_.y,_.z)),d.set(P,null)):d.has(v)||d.set(v,{index0:c[x],index1:c[y],normal:Ia.clone()})}}for(const g of d.values())if(g){const{index0:M,index1:m}=g;Ts.fromBufferAttribute(o,M),As.fromBufferAttribute(o,m),h.push(Ts.x,Ts.y,Ts.z),h.push(As.x,As.y,As.z)}this.setAttribute("position",new nt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,h=(a-u)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Ce:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,r=[],s=[],a=[],o=new D,l=new ut;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos($e(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class al extends Tn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ce){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*p+this.aX,c=d*p+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xf extends al{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,p){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,h*=u,r(a,o,d,h)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const jl=new D,ec=new D,Na=new ol,Ua=new ol,Fa=new ol;class ll extends Tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(ec.subVectors(r[0],r[1]).add(r[0]),c=ec);const p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(jl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=jl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),h),M=Math.pow(p.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Na.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,M,m),Ua.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,M,m),Fa.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Ua.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),Fa.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(Na.calc(l),Ua.calc(l),Fa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tc(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function qf(i,e){const t=1-i;return t*t*e}function Yf(i,e){return 2*(1-i)*i*e}function Zf(i,e){return i*i*e}function Fr(i,e,t,n){return qf(i,e)+Yf(i,t)+Zf(i,n)}function Jf(i,e){const t=1-i;return t*t*t*e}function Kf(i,e){const t=1-i;return 3*t*t*i*e}function $f(i,e){return 3*(1-i)*i*i*e}function Qf(i,e){return i*i*i*e}function Or(i,e,t,n,r){return Jf(i,e)+Kf(i,t)+$f(i,n)+Qf(i,r)}class wu extends Tn{constructor(e=new Ce,t=new Ce,n=new Ce,r=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ce){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ia extends Tn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,r.x,s.x,a.x,o.x),Or(e,r.y,s.y,a.y,o.y),Or(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ru extends Tn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qs extends Tn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends Tn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,r.x,s.x,a.x),Fr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cl extends Tn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fr(e,r.x,s.x,a.x),Fr(e,r.y,s.y,a.y),Fr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pu extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return n.set(tc(o,l.x,c.x,u.x,p.x),tc(o,l.y,c.y,u.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ce().fromArray(r))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:ll,CubicBezierCurve:wu,CubicBezierCurve3:ia,EllipseCurve:al,LineCurve:Ru,LineCurve3:Qs,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:cl,SplineCurve:Pu});class Lu extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Uo[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class nc extends Lu{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ru(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Cu(this.currentPoint.clone(),new Ce(e,t),new Ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new wu(this.currentPoint.clone(),new Ce(e,t),new Ce(n,r),new Ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new al(e,t,n,r,s,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Du extends nc{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new nc().fromJSON(r))}return this}}function jf(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Iu(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=rd(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,p=l;for(let d=t;d<r;d+=t){const h=i[d],g=i[d+1];h<o&&(o=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return Kr(s,a,t,o,l,c,0),a}function Iu(i,e,t,n,r){let s;if(r===md(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=ic(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=ic(a/n|0,i[a],i[a+1],s);return s&&or(s,s.next)&&(Qr(s),s=s.next),s}function bi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(or(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&cd(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?td(i,n,r,s):ed(i)){e.push(l.i,i.i,c.i),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=nd(bi(i),e),Kr(i,e,t,n,r,s,2)):a===2&&id(i,e,t,n,r,s):Kr(bi(i),e,t,n,r,s,1);break}}}function ed(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),p=Math.min(o,l,c),d=Math.max(r,s,a),h=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=h&&Rr(r,o,s,l,a,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function td(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Mt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,p=s.y,d=a.y,h=Math.min(o,l,c),g=Math.min(u,p,d),M=Math.max(o,l,c),m=Math.max(u,p,d),f=Fo(h,g,e,t,n),x=Fo(M,m,e,t,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=f&&S&&S.z<=x;){if(y.x>=h&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Rr(o,u,l,p,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Rr(o,u,l,p,c,d,S.x,S.y)&&Mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=f;){if(y.x>=h&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Rr(o,u,l,p,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=x;){if(S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Rr(o,u,l,p,c,d,S.x,S.y)&&Mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function nd(i,e){let t=i;do{const n=t.prev,r=t.next.next;!or(n,r)&&Uu(n,t,t.next,r)&&$r(n,r)&&$r(r,n)&&(e.push(n.i,t.i,r.i),Qr(t),Qr(t.next),t=i=r),t=t.next}while(t!==i);return bi(t)}function id(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fd(a,o)){let l=Fu(a,o);a=bi(a,a.next),l=bi(l,l.next),Kr(a,e,t,n,r,s,0),Kr(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function rd(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Iu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(hd(c))}r.sort(sd);for(let s=0;s<r.length;s++)t=ad(r[s],t);return t}function sd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function ad(i,e){const t=od(i,e);if(!t)return e;const n=Fu(t,i);return bi(n,n.next),bi(t,t.next)}function od(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(or(i,t))return t;do{if(or(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const p=Math.abs(r-t.y)/(n-t.x);$r(t,i)&&(p<u||p===u&&(t.x>a.x||t.x===a.x&&ld(a,t)))&&(a=t,u=p)}t=t.next}while(t!==o);return a}function ld(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function cd(i,e,t,n){let r=i;do r.z===0&&(r.z=Fo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ud(r)}function ud(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Fo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nu(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Rr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Nu(i,e,t,n,r,s,a,o)}function fd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dd(i,e)&&($r(i,e)&&$r(e,i)&&pd(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||or(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function or(i,e){return i.x===e.x&&i.y===e.y}function Uu(i,e,t,n){const r=Cs(Mt(i,e,t)),s=Cs(Mt(i,e,n)),a=Cs(Mt(t,n,i)),o=Cs(Mt(t,n,e));return!!(r!==s&&a!==o||r===0&&Rs(i,t,e)||s===0&&Rs(i,n,e)||a===0&&Rs(t,i,n)||o===0&&Rs(t,e,n))}function Rs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cs(i){return i>0?1:i<0?-1:0}function dd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function pd(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fu(i,e){const t=Oo(i.i,i.x,i.y),n=Oo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ic(i,e,t,n){const r=Oo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function md(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class gd{static triangulate(e,t,n=2){return jf(e,t,n)}}class Br{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];rc(e),sc(n,e);let a=e.length;t.forEach(rc);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,sc(n,t[l]);const o=gd.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function rc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ul extends sl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ul(e.radius,e.detail)}}class li extends Rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,p=e/o,d=t/l,h=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let y=0;y<c;y++){const S=y*p-s;g.push(S,-x,0),M.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,S=x+c*(f+1),A=x+1+c*(f+1),T=x+1+c*f;h.push(y,S,T),h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}class hl extends Rt{constructor(e=new Du([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(s,3)),this.setAttribute("uv",new nt(a,2));function c(u){const p=r.length/3,d=u.extractPoints(t);let h=d.shape;const g=d.holes;Br.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=g.length;m<f;m++){const x=g[m];Br.isClockWise(x)===!0&&(g[m]=x.reverse())}const M=Br.triangulateShape(h,g);for(let m=0,f=g.length;m<f;m++){const x=g[m];h=h.concat(x)}for(let m=0,f=h.length;m<f;m++){const x=h[m];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=M.length;m<f;m++){const x=M[m],y=x[0]+p,S=x[1]+p,A=x[2]+p;n.push(y,S,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _d(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new hl(n,e.curveSegments)}}function _d(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class rn extends Rt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],p=new D,d=new D,h=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n,S=a+y*o,A=e*Math.cos(S),T=Math.sqrt(e*e-A*A);let _=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){const P=v/t,R=r+P*s;p.x=-T*Math.cos(R),p.y=A,p.z=T*Math.sin(R),g.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),m.push(P+_,1-y),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const y=u[f][x+1],S=u[f][x],A=u[f+1][x],T=u[f+1][x+1];(f!==0||a>0)&&h.push(y,S,T),(f!==n-1||l<Math.PI)&&h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class an extends Rt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],p=[],d=new D,h=new D,g=new D;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let f=0;f<=r;f++){const x=f/r*s;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),p.push(f/r),p.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=r;m++){const f=(r+1)*M+m-1,x=(r+1)*(M-1)+m-1,y=(r+1)*(M-1)+m,S=(r+1)*M+m;l.push(f,x,S),l.push(x,y,S)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class fl extends Rt{constructor(e=new cl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new Ce;let u=new D;const p=[],d=[],h=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(h,2));function M(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),x(),f()}function m(y){u=e.getPointAt(y/t,u);const S=a.normals[y],A=a.binormals[y];for(let T=0;T<=r;T++){const _=T/r*Math.PI*2,v=Math.sin(_),P=-Math.cos(_);l.x=P*S.x+v*A.x,l.y=P*S.y+v*A.y,l.z=P*S.z+v*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let S=1;S<=r;S++){const A=(r+1)*(y-1)+(S-1),T=(r+1)*y+(S-1),_=(r+1)*y+S,v=(r+1)*(y-1)+S;g.push(A,T,v),g.push(T,_,v)}}function x(){for(let y=0;y<=t;y++)for(let S=0;S<=r;S++)c.x=y/t,c.y=S/r,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fl(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ac(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ac(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const r in n)e[r]=n[r]}return e}function ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const vd={clone:lr,merge:$t};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new St().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yd extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cr extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ed extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bd extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(oc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!oc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function oc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Bu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){const p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){const h=c[p],g=c[p+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Td=new Bu;class es{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Ad extends Error{constructor(e,t){super(e),this.response=t}}class wd extends es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xn[e],p=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let M=0;const m=new ReadableStream({start(f){x();function x(){p.read().then(({done:y,value:S})=>{if(y)f.close();else{M+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:h});for(let T=0,_=u.length;T<_;T++){const v=u[T];v.onProgress&&v.onProgress(A)}f.enqueue(S),x()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Ad(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),d=p&&p[1]?p[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{zr.add(`file:${e}`,c);const u=Xn[e];delete Xn[e];for(let p=0,d=u.length;p<d;p++){const h=u[p];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let p=0,d=u.length;p<d;p++){const h=u[p];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class Rd extends es{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=Zi.get(a);p===void 0&&(p=[],Zi.set(a,p)),p.push({onLoad:t,onError:r})}return a}const o=Yr("img");function l(){u(),t&&t(this);const p=Zi.get(this)||[];for(let d=0;d<p.length;d++){const h=p[d];h.onLoad&&h.onLoad(this)}Zi.delete(this),s.manager.itemEnd(e)}function c(p){u(),r&&r(p),zr.remove(`image:${e}`);const d=Zi.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(p)}Zi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zr.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Cd extends es{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Js,o=new wd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){r!==void 0?r(u):st(u);return}s._applyTexData(a,c),t&&t(a,c)},n,r),a}createDataTexture(e){const t=new Js;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:En,e.wrapT=t.wrapT!==void 0?t.wrapT:En,e.magFilter=t.magFilter!==void 0?t.magFilter:Lt,e.minFilter=t.minFilter!==void 0?t.minFilter:Lt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Zn),t.mipmapCount===1&&(e.minFilter=Lt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Pd extends es{constructor(e){super(e)}load(e,t,n,r){const s=new Ht,a=new Rd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class dl extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ld extends dl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Oa=new ut,lc=new D,cc=new D;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ps=new D,Ls=new hi,wn=new D;class Gu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ps,Ls,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ps,Ls,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ps,Ls,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ps,Ls,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new D,uc=new Ce,hc=new Ce;class pn extends Gu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,uc,hc),t.subVectors(hc,uc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dd extends zu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class Id extends dl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hu extends Gu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nd extends zu{constructor(){super(new Hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fc extends dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Nd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ji=-90,Ki=1;class Bo extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Ji,Ki,e,t);r.layers=this.layers,this.add(r);const s=new pn(Ji,Ki,e,t);s.layers=this.layers,this.add(s);const a=new pn(Ji,Ki,e,t);a.layers=this.layers,this.add(a);const o=new pn(Ji,Ki,e,t);o.layers=this.layers,this.add(o);const l=new pn(Ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new pn(Ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ud extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function dc(i,e,t,n){const r=Fd(n);switch(t){case lu:return i*e;case Zo:return i*e/r.components*r.byteLength;case Jo:return i*e/r.components*r.byteLength;case Ei:return i*e*2/r.components*r.byteLength;case Ko:return i*e*2/r.components*r.byteLength;case cu:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case $o:return i*e*4/r.components*r.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case so:return Math.max(i,16)*Math.max(e,8)/4;case no:case ro:return Math.max(i,8)*Math.max(e,8)/2;case ao:case oo:case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case qs:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ys:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case on:case ru:return{byteLength:1,components:1};case Wr:case su:case cn:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case In:case Xo:case ln:return{byteLength:4,components:1};case au:case ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vu(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Od(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<p.length;h++){const g=p[d],M=p[h];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,p[d]=M)}p.length=d+1;for(let h=0,g=p.length;h<g;h++){const M=p[h];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:Gd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:kd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Kd,iridescence_fragment:$d,bumpmap_pars_fragment:Qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:rp,color_pars_vertex:sp,color_vertex:ap,common:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:hp,emissivemap_pars_fragment:fp,colorspace_fragment:dp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Cp,envmap_vertex:vp,fog_vertex:Sp,fog_pars_vertex:Mp,fog_fragment:yp,fog_pars_fragment:Ep,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:wp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:kp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Kp,morphcolor_vertex:$p,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:rm,normal_vertex:sm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:um,opaque_fragment:hm,packing:fm,premultiplied_alpha_fragment:dm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Mm,shadowmask_pars_fragment:ym,skinbase_vertex:Em,skinning_pars_vertex:bm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:wm,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Im,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:Gm,cube_vert:Hm,cube_frag:Vm,depth_vert:km,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:Km,meshbasic_vert:$m,meshbasic_frag:Qm,meshlambert_vert:jm,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:r0,meshphong_vert:s0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:u0,points_vert:h0,points_frag:f0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},Ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Cn={basic:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:$t([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:$t([Ae.lights,Ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:$t([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ds={r:0,b:0,g:0},_0=new ut,ku=new Xe;ku.set(-1,0,0,0,1,0,0,0,1);function x0(i,e,t,n,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,u=null,p=0,d=null;function h(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(x){let y=!1;const S=h(x);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){const S=h(y);S&&S.isCubeTexture?(c===void 0&&(c=new Gt(new Ci(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:lr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ku),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,(u!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Gt(new li(2,2),new Ti({name:"BackgroundMaterial",uniforms:lr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(Ds,Ou(i)),t.buffers.color.setClear(Ds.r,Ds.g,Ds.b,y,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:M,dispose:f}}function v0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(N,O,k,C,V){let I=!1;const G=p(N,C,k,O);s!==G&&(s=G,c(s.object)),I=h(N,C,k,V),I&&g(N,C,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,S(N,O,k,C),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function p(N,O,k,C){const V=C.wireframe===!0;let I=n[O.id];I===void 0&&(I={},n[O.id]=I);const G=N.isInstancedMesh===!0?N.id:0;let j=I[G];j===void 0&&(j={},I[G]=j);let B=j[k.id];B===void 0&&(B={},j[k.id]=B);let Y=B[V];return Y===void 0&&(Y=d(l()),B[V]=Y),Y}function d(N){const O=[],k=[],C=[];for(let V=0;V<t;V++)O[V]=0,k[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:C,object:N,attributes:{},index:null}}function h(N,O,k,C){const V=s.attributes,I=O.attributes;let G=0;const j=k.getAttributes();for(const B in j)if(j[B].location>=0){const ee=V[B];let Q=I[B];if(Q===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),ee===void 0||ee.attribute!==Q||Q&&ee.data!==Q.data)return!0;G++}return s.attributesNum!==G||s.index!==C}function g(N,O,k,C){const V={},I=O.attributes;let G=0;const j=k.getAttributes();for(const B in j)if(j[B].location>=0){let ee=I[B];ee===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const Q={};Q.attribute=ee,ee&&ee.data&&(Q.data=ee.data),V[B]=Q,G++}s.attributes=V,s.attributesNum=G,s.index=C}function M(){const N=s.newAttributes;for(let O=0,k=N.length;O<k;O++)N[O]=0}function m(N){f(N,0)}function f(N,O){const k=s.newAttributes,C=s.enabledAttributes,V=s.attributeDivisors;k[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),V[N]!==O&&(i.vertexAttribDivisor(N,O),V[N]=O)}function x(){const N=s.newAttributes,O=s.enabledAttributes;for(let k=0,C=O.length;k<C;k++)O[k]!==N[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function y(N,O,k,C,V,I,G){G===!0?i.vertexAttribIPointer(N,O,k,V,I):i.vertexAttribPointer(N,O,k,C,V,I)}function S(N,O,k,C){M();const V=C.attributes,I=k.getAttributes(),G=O.defaultAttributeValues;for(const j in I){const B=I[j];if(B.location>=0){let Y=V[j];if(Y===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){const ee=Y.normalized,Q=Y.itemSize,he=e.get(Y);if(he===void 0)continue;const Z=he.buffer,le=he.type,Ee=he.bytesPerElement,Fe=le===i.INT||le===i.UNSIGNED_INT||Y.gpuType===Xo;if(Y.isInterleavedBufferAttribute){const Te=Y.data,Ge=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,Ne=Y.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,Te.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ie=0;ie<B.locationSize;ie++)y(B.location+ie,Q/B.locationSize,le,ee,Ge*Ee,(Ne+Q/B.locationSize*ie)*Ee,Fe)}else{if(Y.isInstancedBufferAttribute){for(let Te=0;Te<B.locationSize;Te++)f(B.location+Te,Y.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Te=0;Te<B.locationSize;Te++)m(B.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Te=0;Te<B.locationSize;Te++)y(B.location+Te,Q/B.locationSize,le,ee,Q*Ee,Q/B.locationSize*Te*Ee,Fe)}}else if(G!==void 0){const ee=G[j];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(B.location,ee);break;case 3:i.vertexAttrib3fv(B.location,ee);break;case 4:i.vertexAttrib4fv(B.location,ee);break;default:i.vertexAttrib1fv(B.location,ee)}}}}x()}function A(){P();for(const N in n){const O=n[N];for(const k in O){const C=O[k];for(const V in C){const I=C[V];for(const G in I)u(I[G].object),delete I[G];delete C[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const O=n[N.id];for(const k in O){const C=O[k];for(const V in C){const I=C[V];for(const G in I)u(I[G].object),delete I[G];delete C[V]}}delete n[N.id]}function _(N){for(const O in n){const k=n[O];for(const C in k){const V=k[C];if(V[N.id]===void 0)continue;const I=V[N.id];for(const G in I)u(I[G].object),delete I[G];delete V[N.id]}}}function v(N){for(const O in n){const k=n[O],C=N.isInstancedMesh===!0?N.id:0,V=k[C];if(V!==void 0){for(const I in V){const G=V[I];for(const j in G)u(G[j].object),delete G[j];delete V[I]}delete k[C],Object.keys(k).length===0&&delete n[O]}}}function P(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function S0(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function M0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const v=_===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==on&&_!==ln&&!v&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:A,samples:T}}function y0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new si,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const h=p.length!==0||d||n!==0||r;return r=d,n=p.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,h){const g=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,y=x*4;let S=f.clippingState||null;l.value=S,S=u(g,d,y,h);for(let A=0;A!==y;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,h,g){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=h+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=h;y!==M;++y,S+=4)a.copy(p[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class pl extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:tr});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Lt),new Bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const pc=256,E0=3,b0=20,Wu=256,Xu=16,T0=3,A0=new D,w0=new Qe;class js{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new Gt(new Ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=A0}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(w0));const m=new Bo(n,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=g,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(pc,pu(e))}_fromTexture(e,t){e.mapping===rr||e.mapping===Vr?this._setSize(e.image.length===0?pc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=mc(e,!1,!1),n=Math.log2(e)-E0;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===rr||e.mapping===Vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=R0(),this._integrationMaterial=C0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Xu);for(let a=0;a<=n;a++){const o=js.lodToRoughness(a,n);if(a>n-T0)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Wu*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=P0());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function mc(i,e,t){return new pl(i,{minFilter:Zn,generateMipmaps:e,type:cn,colorSpace:Xr,depthBuffer:t})}function ts(i,e,t){return new Ti({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:jt,blending:tr,depthTest:!1,depthWrite:!1})}function R0(){return ts("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function C0(){return ts("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function P0(){return ts("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gc(){return ts("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _c(){return ts("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function L0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fs||h===la)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new pl(g.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,g=h===Fs||h===la,M=h===rr||h===Vr;if(g||M){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new js(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return g&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new js(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===Fs?d.mapping=rr:h===la&&(d.mapping=Vr),d}function l(d){let h=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function D0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hs("WebGLRenderer: "+n+" extension not supported."),r}}}function I0(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const M=s.get(g);M&&(e.remove(M),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return r[M.id]!==void 0||(M.addEventListener("dispose",o),r[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(g){const M=g.attributes;for(const m in M)e.update(M[m],i.ARRAY_BUFFER)}function p(g){const M=g.index,m=g.attributes.position;let f=0;if(m===void 0)return;const x=M!==null?M.array.length:m.array.length/3-1,y=m.count>=65535?Mu:Su,S=new y(Math.ceil(x/3)*6,1),A=S.array;if(M!==null){const _=M.array;f=M.version;for(let v=0,P=0;v<x;v+=3){const R=_[v+0],N=_[v+1],O=_[v+2];A[P++]=R,A[P++]=N,A[P++]=N,A[P++]=O,A[P++]=O,A[P++]=R}}else{f=m.version;for(let _=0,v=0;_<x;_+=3){const P=_+0,R=_+1,N=_+2;A[v++]=P,A[v++]=R,A[v++]=R,A[v++]=N,A[v++]=N,A[v++]=P}}S.version=f;const T=s.get(g);T&&e.remove(T),s.set(g,S)}function d(g){const M=s.get(g);if(M){const m=g.index;m!==null&&M.version<m.version&&p(g)}else p(g);return s.get(g)}function h(){for(const g in r){const M=r[g].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function N0(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*a),t.update(d,n,1)}function c(p,d,h){h!==0&&(i.drawElementsInstanced(n,d,s,p*a,h),t.update(d,n,h))}function u(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,h);let M=0;for(let m=0;m<h;m++)M+=d[m];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function U0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F0(i,e,t){const n=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),M===!0&&(y=3);let S=o.attributes.position.count*y,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*A*4*p),_=new _u(T,S,A,p);_.type=ln,_.needsUpdate=!0;const v=y*4;for(let R=0;R<p;R++){const N=m[R],O=f[R],k=x[R],C=S*A*4*R;for(let V=0;V<N.count;V++){const I=V*v;h===!0&&(r.fromBufferAttribute(N,V),T[C+I+0]=r.x,T[C+I+1]=r.y,T[C+I+2]=r.z,T[C+I+3]=0),g===!0&&(r.fromBufferAttribute(O,V),T[C+I+4]=r.x,T[C+I+5]=r.y,T[C+I+6]=r.z,T[C+I+7]=0),M===!0&&(r.fromBufferAttribute(k,V),T[C+I+8]=r.x,T[C+I+9]=r.y,T[C+I+10]=r.z,T[C+I+11]=k.itemSize===4?r.w:1)}}d={count:p,texture:_,size:new Ce(S,A)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function O0(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const B0={[$c]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[tu]:"AGX_TONE_MAPPING",[nu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function z0(i,e,t,n,r,s){const a=new Dn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Rt;u.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new nt([0,2,0,0,2,0],2));const p=new yd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Gt(u,p),h=new Hu(-1,1,1,-1,0,1);let g=null,M=null,m=!1,f,x=null,y=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<y.length;_++){const v=y[_];v.setSize&&v.setSize(A,T)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const T=a.width,_=a.height;y.length>0&&o===null&&(o=new Dn(T,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(T,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const v=r===!0&&y.some(P=>P.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new ar(T,_),s===!0&&(c.format=oi,c.type=sr)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let P=0;P<y.length;P++){const R=y[P];R.setSize&&R.setSize(T,_),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Jn&&y.length===0)return!1;if(x=T,T!==null){const _=T.width,v=T.height;(a.width!==_||a.height!==v)&&this.setSize(_,v)}return S===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Jn,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=f,m=!0;let _=a,v=o;for(let P=0;P<y.length;P++){const R=y[P];R.enabled!==!1&&(R.render(A,v,_,T),R.needsSwap!==!1&&(_=v,v=v===o?l:o))}if(g!==A.outputColorSpace||M!==A.toneMapping){g=A.outputColorSpace,M=A.toneMapping,p.defines={},tt.getTransfer(g)===ht&&(p.defines.SRGB_TRANSFER="");const P=B0[M];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,h),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}const qu=new Ht,Yu=new ar(1,1),Zu=new Tu(1),Ju=new _u,Ku=new yf,$u=new bu,xc=[],vc=[],Sc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xc[r];if(s===void 0&&(s=new Float32Array(r),xc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function W0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Nt(t,n)}}function X0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),Nt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),Nt(t,n)}}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function sa(i){return i.version===0&&(i.compareFunction=fu,i.needsUpdate=!0),i}function tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=sa(Yu):s=qu,t.setTexture2D(e||s,r)}function ng(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ku,r)}function ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=sa(Zu):s=$u,t.setTextureCube(e||s,r)}function rg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ju,r)}function sg(i){switch(i){case 5126:return G0;case 35664:return H0;case 35665:return V0;case 35666:return k0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return $0;case 36294:return Q0;case 36295:return j0;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(i,e){i.uniform1fv(this.addr,e)}function og(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function lg(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function cg(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function ug(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hg(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fg(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dg(i,e){i.uniform1iv(this.addr,e)}function pg(i,e){i.uniform2iv(this.addr,e)}function mg(i,e){i.uniform3iv(this.addr,e)}function gg(i,e){i.uniform4iv(this.addr,e)}function _g(i,e){i.uniform1uiv(this.addr,e)}function xg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function Sg(i,e){i.uniform4uiv(this.addr,e)}function Mg(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=sa(Yu):a=qu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function yg(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ku,s[a])}function Eg(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sa(Zu):a=$u;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function bg(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ju,s[a])}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return ug;case 35675:return hg;case 35676:return fg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return bg}}class Ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}}class wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}}class Rg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Ec(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),a=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ec(t,c===void 0?new Ag(o,i,e):new wg(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Rg(o),Ec(t,p)),t=p}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Cg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pg=37297;let Lg=0;function Dg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tc=new Xe;function Ig(i){tt._getMatrix(Tc,tt.workingColorSpace,i);const e=`mat3( ${Tc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Zs:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ac(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Dg(i.getShaderSource(e),o)}else return s}function Ng(i,e){const t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ug={[$c]:"Linear",[Qc]:"Reinhard",[jc]:"Cineon",[Wo]:"ACESFilmic",[tu]:"AgX",[nu]:"Neutral",[eu]:"Custom"};function Fg(i,e){const t=Ug[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new D;function Og(){tt.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pr(i){return i!==""}function wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Hg,Vg)}function Vg(i,e){const t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zo(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(kg,Wg)}function Wg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Xg={[Ir]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function qg(i){return Xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yg={[Vr]:"ENVMAP_MODE_REFRACTION"};function Zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jg={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jg[i.combine]||"ENVMAP_BLENDING_NONE"}function $g(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Zg(t),p=Kg(t),d=Bg(t),h=zg(s),g=r.createProgram();let M,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Pr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(M=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),Og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=zo(a),a=wc(a,t),a=Rc(a,t),o=zo(o),o=wc(o,t),o=Rc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=f+M+a,y=f+m+o,S=bc(r,r.VERTEX_SHADER,x),A=bc(r,r.FRAGMENT_SHADER,y);r.attachShader(g,S),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(S)||"",k=r.getShaderInfoLog(A)||"",C=N.trim(),V=O.trim(),I=k.trim();let G=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,S,A);else{const B=Ac(r,S,"vertex"),Y=Ac(r,A,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+B+`
`+Y)}else C!==""?Be("WebGLProgram: Program Info Log:",C):(V===""||I==="")&&(j=!1);j&&(R.diagnostics={runnable:G,programLog:C,vertexShader:{log:V,prefix:M},fragmentShader:{log:I,prefix:m}})}r.deleteShader(S),r.deleteShader(A),_=new Vs(r,g),v=Gg(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,Pg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}let Qg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e_(e),t.set(e,n)),n}}class e_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function t_(i){return i===Ei||i===qs||i===Ys}function n_(i,e,t,n,r,s){const a=new xu,o=new jg,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,v,P,R,N,O){const k=R.fog,C=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||V,I),j=d[_.type];let B=n.precision;_.precision!==null&&(B=n.getMaxPrecision(_.precision),B!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));const Y=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=Y!==void 0?Y.length:0;let Q=0;C.morphAttributes.position!==void 0&&(Q=1),C.morphAttributes.normal!==void 0&&(Q=2),C.morphAttributes.color!==void 0&&(Q=3);let he,Z,le,Ee;if(j){const ve=Cn[j];he=ve.vertexShader,Z=ve.fragmentShader}else{he=_.vertexShader,Z=_.fragmentShader;const ve=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,ve,lt),le=ve.id,Ee=lt.id}const Fe=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ge=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,ie=!!_.map,rt=!!_.matcap,at=!!G,Ue=at&&G.isPMREMTexture===!0,gt=!!_.aoMap,ft=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,en=!!_.displacementMap,bt=!!_.emissiveMap,kt=!!_.metalnessMap,Bt=!!_.roughnessMap,Wt=_.anisotropy>0,z=_.clearcoat>0,Jt=_.diffuseRoughness>0,_t=_.dispersion>0,mt=_.retroreflectivity>0,ye=_.iridescence>0,it=_.sheen>0,oe=_.transmission>0,He=Wt&&!!_.anisotropyMap,w=z&&!!_.clearcoatMap,E=z&&!!_.clearcoatNormalMap,W=z&&!!_.clearcoatRoughnessMap,ue=Jt&&!!_.diffuseRoughnessMap,ae=ye&&!!_.iridescenceMap,_e=ye&&!!_.iridescenceThicknessMap,me=it&&!!_.sheenColorMap,ne=it&&!!_.sheenRoughnessMap,re=!!_.specularMap,fe=!!_.specularColorMap,L=!!_.specularIntensityMap,se=oe&&!!_.transmissionMap,te=oe&&!!_.thicknessMap,xe=!!_.gradientMap,de=!!_.alphaMap,ge=_.alphaTest>0,De=!!_.alphaHash,qe=!!_.extensions;let ce=Jn;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Oe=Ue?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ze={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:Z,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:Ne,batchingColor:Ne&&N._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&N.instanceColor!==null,instancingMorph:Ge&&N.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:rt,envMap:at,envMapMode:at&&G.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?Oe.length-1:null,envMapSize:Ue?Oe[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Vt,normalMap:ot,displacementMap:en,emissiveMap:bt,normalMapObjectSpace:ot&&_.normalMapType===Vh,normalMapTangentSpace:ot&&_.normalMapType===Io,packedNormalMap:ot&&_.normalMapType===Io&&t_(_.normalMap.format),metalnessMap:kt,roughnessMap:Bt,anisotropy:Wt,anisotropyMap:He,clearcoat:z,clearcoatMap:w,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:Jt,diffuseRoughnessMap:ue,dispersion:_t,retroreflection:mt,iridescence:ye,iridescenceMap:ae,iridescenceThicknessMap:_e,sheen:it,sheenColorMap:me,sheenRoughnessMap:ne,specularMap:re,specularColorMap:fe,specularIntensityMap:L,transmission:oe,transmissionMap:se,thicknessMap:te,gradientMap:xe,opaque:_.transparent===!1&&_.blending===Nr&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:De,combine:_.combine,mapUv:ie&&h(_.map.channel),aoMapUv:gt&&h(_.aoMap.channel),lightMapUv:ft&&h(_.lightMap.channel),bumpMapUv:Vt&&h(_.bumpMap.channel),normalMapUv:ot&&h(_.normalMap.channel),displacementMapUv:en&&h(_.displacementMap.channel),emissiveMapUv:bt&&h(_.emissiveMap.channel),metalnessMapUv:kt&&h(_.metalnessMap.channel),roughnessMapUv:Bt&&h(_.roughnessMap.channel),anisotropyMapUv:He&&h(_.anisotropyMap.channel),clearcoatMapUv:w&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&h(_.sheenRoughnessMap.channel),specularMapUv:re&&h(_.specularMap.channel),specularColorMapUv:fe&&h(_.specularColorMap.channel),specularIntensityMapUv:L&&h(_.specularIntensityMap.channel),transmissionMapUv:se&&h(_.transmissionMap.channel),thicknessMapUv:te&&h(_.thicknessMap.channel),alphaMapUv:de&&h(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ot||Wt),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(ie||de),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Te,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:O.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function M(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)v.push(P),v.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(v,_),f(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function f(_,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const v=d[_.type];let P;if(v){const R=Cn[v];P=vd.clone(R.uniforms)}else P=_.uniforms;return P}function y(_,v){let P=u.get(v);return P!==void 0?++P.usedTimes:(P=new $g(i,v,_,r),c.push(P),u.set(v,P)),P}function S(_){if(--_.usedTimes===0){const v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function i_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function r_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,M,m,f){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[e]=x):(x.id=d.id,x.object=d,x.geometry=h,x.material=g,x.materialVariant=a(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=m,x.group=f),e++,x}function l(d,h,g,M,m,f,x){x.reversedDepth===!0&&(m=-m);const y=o(d,h,g,M,m,f);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(d,h,g,M,m,f){const x=o(d,h,g,M,m,f);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function u(d,h){t.length>1&&t.sort(d||r_),n.length>1&&n.sort(h||Lc),r.length>1&&r.sort(h||Lc)}function p(){for(let d=e,h=i.length;d<h;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:p,sort:u}}function s_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Dc,i.set(n,[a])):r>=s.length?(a=new Dc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function a_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Qe};break;case"SpotLight":t={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function o_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let l_=0;function c_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u_(i){const e=new a_,t=o_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new ut,a=new ut;function o(c){let u=0,p=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let h=0,g=0,M=0,m=0,f=0,x=0,y=0,S=0,A=0,T=0,_=0,v=0,P=0,R=0;c.sort(c_);for(let O=0,k=c.length;O<k;O++){const C=c[O],V=C.color,I=C.intensity,G=C.distance;let j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ei?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=V.r*I,p+=V.g*I,d+=V.b*I;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],I);R++}else if(C.isSunLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=j;const Q=Y.getViewportCount();for(let he=0;he<Q;he++)n.sunShadowMatrix[M+he]=Y.getMatrix(he),n.sunShadowCascade[M+he]=Y._cascadeData[he];M+=Q,g++}n.sun[h]=B,h++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=B,m++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(V).multiplyScalar(I),B.distance=G,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[x]=B;const Y=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,Y.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[x]=Y.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=j,_++}x++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(V).multiplyScalar(I),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=B,y++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=j,n.pointShadowMatrix[f]=C.shadow.matrix,T++}n.point[f]=B,f++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(I),B.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[S]=B,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const N=n.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==x||N.rectAreaLength!==y||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==v||N.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-P,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,N.sunLength=h,N.directionalLength=m,N.pointLength=f,N.spotLength=x,N.rectAreaLength=y,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=v,N.numLightProbes=R,n.version=l_++)}function l(c,u){let p=0,d=0,h=0,g=0,M=0,m=0;const f=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const S=c[x];if(S.isSunLight){const A=n.sun[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),d++}else if(S.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const A=n.point[h];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Ic(i){const e=new u_(i),t=[],n=[],r=[];function s(p){u.camera=p,t.length=0,n.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),r.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function h_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ic(i),e.set(r,[o])):s>=a.length?(o=new Ic(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],m_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Nc=new ut,Ar=new D,za=new D;function g_(i,e,t){let n=new Jr;const r=new Ce,s=new Ce,a=new St,o=new Ed,l=new bd,c={},u=t.maxTextureSize,p={[yi]:jt,[jt]:yi,[Pn]:Pn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:f_,fragmentShader:d_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let f=this.type;this.render=function(T,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===vh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ir);const P=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(tr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=f!==this.type;k&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(V=>V.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,V=T.length;C<V;C++){const I=T[C],G=I.shadow;if(G===void 0){Be("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const j=G.getFrameExtents();r.multiply(j),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,G.mapSize.y=s.y));const B=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===wr){if(I.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Dn(r.x,r.y,{format:Ei,type:cn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new ar(r.x,r.y,ln),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=ci,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else I.isPointLight?(G.map=new pl(r.x),G.map.depthTexture=new Tu(r.x,In)):(G.map=new Dn(r.x,r.y),G.map.depthTexture=new ar(r.x,r.y,In)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=ci,this.type===Ir?(G.map.depthTexture.compareFunction=B?hu:uu,G.map.depthTexture.minFilter=Lt,G.map.depthTexture.magFilter=Lt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const Y=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();I.isPointLight!==!0&&G.updateMatrices(I,v);const ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:v.layers;for(let Q=0;Q<Y;Q++){const he=G.getCamera(Q);if(I.isPointLight){const Z=G.camera,le=G.matrix,Ee=I.distance||Z.far;Ee!==Z.far&&(Z.far=Ee,Z.updateProjectionMatrix()),Ar.setFromMatrixPosition(I.matrixWorld),Z.position.copy(Ar),za.copy(Z.position),za.add(p_[Q]),Z.up.copy(m_[Q]),Z.lookAt(za),Z.updateMatrixWorld(),le.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Nc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nc,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(G.map),i.clear());const Z=G.getViewport(Q);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),O.viewport(a)}n=G.getFrustum(Q),S(_,v,he,I,ee,this.type)}G.isPointLightShadow!==!0&&this.type===wr&&x(G,v),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(P,R,N)};function x(T,_){const v=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Dn(r.x,r.y,{format:Ei,type:cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,v,d,M,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,v,h,M,null)}function y(T,_,v,P){let R=null;const N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=R.uuid,k=_.uuid;let C=c[O];C===void 0&&(C={},c[O]=C);let V=C[k];V===void 0&&(V=R.clone(),C[k]=V,_.addEventListener("dispose",A)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,P===wr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=v}return R}function S(T,_,v,P,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===wr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const C=e.update(T),V=T.material;if(Array.isArray(V)){const I=C.groups;for(let G=0,j=I.length;G<j;G++){const B=I[G],Y=V[B.materialIndex];if(Y&&Y.visible){const ee=y(T,Y,P,N);T.onBeforeShadow(i,T,_,v,C,ee,B),i.renderBufferDirect(v,null,C,ee,T,B),T.onAfterShadow(i,T,_,v,C,ee,B)}}}else if(V.visible){const I=y(T,V,P,N);T.onBeforeShadow(i,T,_,v,C,I,null),i.renderBufferDirect(v,null,C,I,T,null),T.onAfterShadow(i,T,_,v,C,I,null)}}const k=T.children;for(let C=0,V=k.length;C<V;C++)S(k[C],_,v,P,R,N)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const P=c[v],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function __(i,e){function t(){let L=!1;const se=new St;let te=null;const xe=new St(0,0,0,0);return{setMask:function(de){te!==de&&!L&&(i.colorMask(de,de,de,de),te=de)},setLocked:function(de){L=de},setClear:function(de,ge,De,qe,ce){ce===!0&&(de*=qe,ge*=qe,De*=qe),se.set(de,ge,De,qe),xe.equals(se)===!1&&(i.clearColor(de,ge,De,qe),xe.copy(se))},reset:function(){L=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,te=null,xe=null,de=null;return{setReversed:function(ge){if(se!==ge){const De=e.get("EXT_clip_control");ge?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),se=ge;const qe=de;de=null,this.setClear(qe)}},getReversed:function(){return se},setTest:function(ge){ge?Te(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ge){te!==ge&&!L&&(i.depthMask(ge),te=ge)},setFunc:function(ge){if(se&&(ge=ef[ge]),xe!==ge){switch(ge){case Za:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ge}},setLocked:function(ge){L=ge},setClear:function(ge){de!==ge&&(de=ge,se&&(ge=1-ge),i.clearDepth(ge))},reset:function(){L=!1,te=null,xe=null,de=null,se=!1}}}function r(){let L=!1,se=null,te=null,xe=null,de=null,ge=null,De=null,qe=null,ce=null;return{setTest:function(Oe){L||(Oe?Te(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Oe){se!==Oe&&!L&&(i.stencilMask(Oe),se=Oe)},setFunc:function(Oe,ze,ve){(te!==Oe||xe!==ze||de!==ve)&&(i.stencilFunc(Oe,ze,ve),te=Oe,xe=ze,de=ve)},setOp:function(Oe,ze,ve){(ge!==Oe||De!==ze||qe!==ve)&&(i.stencilOp(Oe,ze,ve),ge=Oe,De=ze,qe=ve)},setLocked:function(Oe){L=Oe},setClear:function(Oe){ce!==Oe&&(i.clearStencil(Oe),ce=Oe)},reset:function(){L=!1,se=null,te=null,xe=null,de=null,ge=null,De=null,qe=null,ce=null}}}const s=new t,a=new n,o=new r;let l={};const c=new WeakMap;let u={},p={},d={},h=new WeakMap,g=[],M=null,m=!1,f=null,x=null,y=null,S=null,A=null,T=null,_=null,v=new Qe(0,0,0),P=0,R=!1,N=null,O=null,k=null,C=null,V=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=j>=2);let Y=null,ee={};const Q=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Z=new St().fromArray(Q),le=new St().fromArray(he);function Ee(L,se,te,xe){const de=new Uint8Array(4),ge=i.createTexture();i.bindTexture(L,ge),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<te;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(se+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ge}const Fe={};Fe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Te(i.DEPTH_TEST),a.setFunc(Hr),Vt(!1),ot(El),Te(i.CULL_FACE),gt(tr);function Te(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Ge(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ne(L,se){return d[L]!==se?(i.bindFramebuffer(L,se),d[L]=se,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ie(L,se){let te=g,xe=!1;if(L){te=h.get(se),te===void 0&&(te=[],h.set(se,te));const de=L.textures;if(te.length!==de.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,De=de.length;ge<De;ge++)te[ge]=i.COLOR_ATTACHMENT0+ge;te.length=de.length,xe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,xe=!0);xe&&i.drawBuffers(te)}function rt(L){return M!==L?(i.useProgram(L),M=L,!0):!1}const at={[$i]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};at[Eh]=i.MIN,at[bh]=i.MAX;const Ue={[Th]:i.ZERO,[Ah]:i.ONE,[wh]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Ih]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(L,se,te,xe,de,ge,De,qe,ce,Oe){if(L===tr){m===!0&&(Ge(i.BLEND),m=!1);return}if(m===!1&&(Te(i.BLEND),m=!0),L!==Sh){if(L!==f||Oe!==R){if((x!==$i||A!==$i)&&(i.blendEquation(i.FUNC_ADD),x=$i,A=$i),Oe)switch(L){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}y=null,S=null,T=null,_=null,v.set(0,0,0),P=0,f=L,R=Oe}return}de=de||se,ge=ge||te,De=De||xe,(se!==x||de!==A)&&(i.blendEquationSeparate(at[se],at[de]),x=se,A=de),(te!==y||xe!==S||ge!==T||De!==_)&&(i.blendFuncSeparate(Ue[te],Ue[xe],Ue[ge],Ue[De]),y=te,S=xe,T=ge,_=De),(qe.equals(v)===!1||ce!==P)&&(i.blendColor(qe.r,qe.g,qe.b,ce),v.copy(qe),P=ce),f=L,R=!1}function ft(L,se){L.side===Pn?Ge(i.CULL_FACE):Te(i.CULL_FACE);let te=L.side===jt;se&&(te=!te),Vt(te),L.blending===Nr&&L.transparent===!1?gt(tr):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function ot(L){L!==_h?(Te(i.CULL_FACE),L!==O&&(L===El?i.cullFace(i.BACK):L===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),O=L}function en(L){L!==k&&(G&&i.lineWidth(L),k=L)}function bt(L,se,te){L?(Te(i.POLYGON_OFFSET_FILL),(C!==se||V!==te)&&(C=se,V=te,a.getReversed()&&(se=-se,te=-te),i.polygonOffset(se,te))):Ge(i.POLYGON_OFFSET_FILL)}function kt(L){L?Te(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function Bt(L){L===void 0&&(L=i.TEXTURE0+I-1),Y!==L&&(i.activeTexture(L),Y=L)}function Wt(L,se,te){te===void 0&&(Y===null?te=i.TEXTURE0+I-1:te=Y);let xe=ee[te];xe===void 0&&(xe={type:void 0,texture:void 0},ee[te]=xe),(xe.type!==L||xe.texture!==se)&&(Y!==te&&(i.activeTexture(te),Y=te),i.bindTexture(L,se||Fe[L]),xe.type=L,xe.texture=se)}function z(){const L=ee[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function _t(){try{i.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function mt(){try{i.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function ye(){try{i.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function He(){try{i.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function w(){try{i.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function E(){try{i.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function W(){try{i.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ue(L){return p[L]!==void 0?p[L]:i.getParameter(L)}function ae(L,se){p[L]!==se&&(i.pixelStorei(L,se),p[L]=se)}function _e(L){Z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function me(L){le.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function ne(L,se){let te=c.get(se);te===void 0&&(te=new WeakMap,c.set(se,te));let xe=te.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(se,L.name),i.uniformBlockBinding(se,xe,xe),te.set(L,xe))}function re(L,se,te){const de=c.get(se).get(L);l[de]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,te),l[de]=te)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Y=null,ee={},d={},l={},h=new WeakMap,g=[],M=null,m=!1,f=null,x=null,y=null,S=null,A=null,T=null,_=null,v=new Qe(0,0,0),P=0,R=!1,N=null,O=null,k=null,C=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Te,disable:Ge,bindFramebuffer:Ne,drawBuffers:ie,useProgram:rt,setBlending:gt,setMaterial:ft,setFlipSided:Vt,setCullFace:ot,setLineWidth:en,setPolygonOffset:bt,setScissorTest:kt,activeTexture:Bt,bindTexture:Wt,unbindTexture:z,compressedTexImage2D:Jt,compressedTexImage3D:_t,texImage2D:E,texImage3D:W,pixelStorei:ae,getParameter:ue,updateUBOMapping:ne,uniformBlockBinding:re,texStorage2D:He,texStorage3D:w,texSubImage2D:mt,texSubImage3D:ye,compressedTexSubImage2D:it,compressedTexSubImage3D:oe,scissor:_e,viewport:me,reset:fe}}function x_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,p=new Set;let d;const h=new WeakMap,g=new Set,M=new FinalizationRegistry(w=>g.delete(w));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,E){return m?new OffscreenCanvas(w,E):Yr("canvas")}function x(w,E,W){let ue=1;const ae=He(w);if((ae.width>W||ae.height>W)&&(ue=W/Math.max(ae.width,ae.height)),ue<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const _e=Math.floor(ue*ae.width),me=Math.floor(ue*ae.height);d===void 0&&(d=f(_e,me));const ne=E?f(_e,me):d;return ne.width=_e,ne.height=me,ne.getContext("2d").drawImage(w,0,0,_e,me),Be("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+_e+"x"+me+")."),ne}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),w;return w}function y(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,E,W,ue,ae,_e=!1){if(w!==null){if(i[w]!==void 0)return i[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me;ue&&(me=e.get("EXT_texture_norm16"),me||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=E;if(E===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8),W===i.UNSIGNED_SHORT&&me&&(ne=me.R16_EXT),W===i.SHORT&&me&&(ne=me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),E===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8),W===i.UNSIGNED_SHORT&&me&&(ne=me.RG16_EXT),W===i.SHORT&&me&&(ne=me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&me&&(ne=me.RGB16_EXT),W===i.SHORT&&me&&(ne=me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),E===i.RGBA){const re=_e?Zs:tt.getTransfer(ae);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=re===ht?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&me&&(ne=me.RGBA16_EXT),W===i.SHORT&&me&&(ne=me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(w,E){let W;return w?E===null||E===In||E===sr?W=i.DEPTH24_STENCIL8:E===ln?W=i.DEPTH32F_STENCIL8:E===Wr&&(W=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===In||E===sr?W=i.DEPTH_COMPONENT24:E===ln?W=i.DEPTH_COMPONENT32F:E===Wr&&(W=i.DEPTH_COMPONENT16),W}function v(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Lt?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function P(w){const E=new WeakRef(w);n.get(w).__ref=E,g.add(E),M.register(w,E,E)}function R(w){const E=n.get(w).__ref;E!==void 0&&(g.delete(E),M.unregister(E))}function N(w){k(w.target)}function O(w){C(w.target)}function k(w){w.removeEventListener("dispose",N),R(w),I(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&p.delete(w)}function C(w){w.removeEventListener("dispose",O),R(w),j(w)}function V(){for(const w of g){const E=w.deref();E!==void 0&&(E.isRenderTarget===!0?C(E):k(E))}g.clear(),p.clear()}function I(w){const E=n.get(w);if(E.__webglInit===void 0)return;const W=w.source,ue=h.get(W);if(ue){const ae=ue[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(w),Object.keys(ue).length===0&&h.delete(W)}n.remove(w)}function G(w){const E=n.get(w);i.deleteTexture(E.__webglTexture);const W=w.source,ue=h.get(W);delete ue[E.__cacheKey],a.memory.textures--}function j(w){const E=n.get(w);E.__depthDisposeCallback&&E.__depthDisposeCallback();const W=w.depthTexture;if(W&&W.renderTarget===w&&k(W),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let _e=0;_e<E.__webglFramebuffer[ae].length;_e++)i.deleteFramebuffer(E.__webglFramebuffer[ae][_e]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ue=w.textures;for(let ae=0,_e=ue.length;ae<_e;ae++){const me=n.get(ue[ae]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(ue[ae])}n.remove(w)}let B=0;function Y(){B=0}function ee(){return B}function Q(w){B=w}function he(){const w=B;return w>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,w}function Z(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.mipmapsAutoUpdate),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function le(w,E){const W=n.get(w);if(w.isVideoTexture&&it(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){const ue=w.image;if(ue===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(W,w,E);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function Ee(w,E){const W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ft(W,w,E);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function Fe(w,E){const W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ft(W,w,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function Te(w,E){const W=n.get(w);if(w.version>0&&W.__version!==w.version){Vt(W,w,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const Ge={[kr]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Ne={[zt]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},ie={[Wh]:i.NEVER,[fu]:i.ALWAYS,[Xh]:i.LESS,[uu]:i.LEQUAL,[qh]:i.EQUAL,[hu]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function rt(w,E){if(E.type===ln&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Lt||E.magFilter===ca||E.magFilter===is||E.magFilter===Zn||E.minFilter===Lt||E.minFilter===ca||E.minFilter===is||E.minFilter===Zn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ge[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ge[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ge[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ne[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ne[E.minFilter]),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==is&&E.minFilter!==Zn||E.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function at(w,E){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",N),P(E));const ue=E.source;let ae=h.get(ue);ae===void 0&&(ae={},h.set(ue,ae));const _e=Z(E);if(_e!==w.__cacheKey){ae[_e]===void 0&&(ae[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ae[_e].usedTimes++;const me=ae[w.__cacheKey];me!==void 0&&(ae[w.__cacheKey].usedTimes--,me.usedTimes===0&&G(E)),w.__cacheKey=_e,w.__webglTexture=ae[_e].texture}return W}function Ue(w,E,W){return Math.floor(Math.floor(w/W)/E)}function gt(w,E,W,ue){const _e=w.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,ue,E.data);else{_e.sort((L,se)=>L.start-se.start);let me=0;for(let L=1;L<_e.length;L++){const se=_e[me],te=_e[L],xe=se.start+se.count,de=Ue(te.start,E.width,4),ge=Ue(se.start,E.width,4);te.start<=xe+1&&de===ge&&Ue(te.start+te.count-1,E.width,4)===de?se.count=Math.max(se.count,te.start+te.count-se.start):(++me,_e[me]=te)}_e.length=me+1;const ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let L=0,se=_e.length;L<se;L++){const te=_e[L],xe=Math.floor(te.start/4),de=Math.ceil(te.count/4),ge=xe%E.width,De=Math.floor(xe/E.width),qe=de,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,ge,De,qe,ce,W,ue,E.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ft(w,E,W){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);const ae=at(w,E),_e=E.source;t.bindTexture(ue,w.__webglTexture,i.TEXTURE0+W);const me=n.get(_e);if(_e.version!==me.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ce=tt.getPrimaries(tt.workingColorSpace),Oe=E.colorSpace===qn?null:tt.getPrimaries(E.colorSpace),ze=E.colorSpace===qn||ce===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let re=x(E.image,!1,r.maxTextureSize);re=oe(E,re);const fe=s.convert(E.format,E.colorSpace),L=s.convert(E.type);let se=T(E.internalFormat,fe,L,E.normalized,E.colorSpace,E.isVideoTexture);rt(ue,E);let te;const xe=E.mipmaps,de=E.isVideoTexture!==!0,ge=me.__version===void 0||ae===!0,De=_e.dataReady,qe=v(E,re);if(E.isDepthTexture)se=_(E.format===oi,E.type),ge&&(de?t.texStorage2D(i.TEXTURE_2D,1,se,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,se,re.width,re.height,0,fe,L,null));else if(E.isDataTexture)if(xe.length>0){de&&ge&&t.texStorage2D(i.TEXTURE_2D,qe,se,xe[0].width,xe[0].height);for(let ce=0,Oe=xe.length;ce<Oe;ce++)te=xe[ce],de?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,te.width,te.height,fe,L,te.data):t.texImage2D(i.TEXTURE_2D,ce,se,te.width,te.height,0,fe,L,te.data);E.generateMipmaps=!1}else de?(ge&&t.texStorage2D(i.TEXTURE_2D,qe,se,re.width,re.height),De&&gt(E,re,fe,L)):t.texImage2D(i.TEXTURE_2D,0,se,re.width,re.height,0,fe,L,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,se,xe[0].width,xe[0].height,re.depth);for(let ce=0,Oe=xe.length;ce<Oe;ce++)if(te=xe[ce],E.format!==Ln)if(fe!==null)if(de){if(De)if(E.layerUpdates.size>0){const ze=dc(te.width,te.height,E.format,E.type);for(const ve of E.layerUpdates){const lt=te.data.subarray(ve*ze/te.data.BYTES_PER_ELEMENT,(ve+1)*ze/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,ve,te.width,te.height,1,fe,lt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,re.depth,fe,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,se,te.width,te.height,re.depth,0,te.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,re.depth,fe,L,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,se,te.width,te.height,re.depth,0,fe,L,te.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{de&&ge&&t.texStorage2D(i.TEXTURE_2D,qe,se,xe[0].width,xe[0].height);for(let ce=0,Oe=xe.length;ce<Oe;ce++)te=xe[ce],E.format!==Ln?fe!==null?de?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,se,te.width,te.height,0,te.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,te.width,te.height,fe,L,te.data):t.texImage2D(i.TEXTURE_2D,ce,se,te.width,te.height,0,fe,L,te.data)}else if(E.isDataArrayTexture)if(de){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,se,re.width,re.height,re.depth),De)if(E.layerUpdates.size>0){const ce=dc(re.width,re.height,E.format,E.type);for(const Oe of E.layerUpdates){const ze=re.data.subarray(Oe*ce/re.data.BYTES_PER_ELEMENT,(Oe+1)*ce/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,re.width,re.height,1,fe,L,ze)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,L,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,re.width,re.height,re.depth,0,fe,L,re.data);else if(E.isData3DTexture)de?(ge&&t.texStorage3D(i.TEXTURE_3D,qe,se,re.width,re.height,re.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,L,re.data)):t.texImage3D(i.TEXTURE_3D,0,se,re.width,re.height,re.depth,0,fe,L,re.data);else if(E.isFramebufferTexture){if(ge)if(de)t.texStorage2D(i.TEXTURE_2D,qe,se,re.width,re.height);else{let ce=re.width,Oe=re.height;for(let ze=0;ze<qe;ze++)t.texImage2D(i.TEXTURE_2D,ze,se,ce,Oe,0,fe,L,null),ce>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),re.parentNode!==ce){ce.appendChild(re),p.add(E),ce.onpaint=Oe=>{const ze=Oe.changedElements;for(const ve of p)ze.includes(ve.image)&&(ve.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const ze=i.RGBA,ve=i.RGBA,lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,ve,lt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(de&&ge){const ce=He(xe[0]);t.texStorage2D(i.TEXTURE_2D,qe,se,ce.width,ce.height)}for(let ce=0,Oe=xe.length;ce<Oe;ce++)te=xe[ce],de?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,fe,L,te):t.texImage2D(i.TEXTURE_2D,ce,se,fe,L,te);E.generateMipmaps=!1}else if(de){if(ge){const ce=He(re);t.texStorage2D(i.TEXTURE_2D,qe,se,ce.width,ce.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,L,re)}else t.texImage2D(i.TEXTURE_2D,0,se,fe,L,re);y(E)&&E.mipmapsAutoUpdate===!0&&S(ue),me.__version=_e.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Vt(w,E,W){if(E.image.length!==6)return;const ue=at(w,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+W);const _e=n.get(ae);if(ae.version!==_e.__version||ue===!0){t.activeTexture(i.TEXTURE0+W);const me=tt.getPrimaries(tt.workingColorSpace),ne=E.colorSpace===qn?null:tt.getPrimaries(E.colorSpace),re=E.colorSpace===qn||me===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,L=E.image[0]&&E.image[0].isDataTexture,se=[];for(let ve=0;ve<6;ve++)!fe&&!L?se[ve]=x(E.image[ve],!0,r.maxCubemapSize):se[ve]=L?E.image[ve].image:E.image[ve],se[ve]=oe(E,se[ve]);const te=se[0],xe=s.convert(E.format,E.colorSpace),de=s.convert(E.type);let ge=T(E.internalFormat,xe,de,E.normalized,E.colorSpace);const De=E.isVideoTexture!==!0,qe=_e.__version===void 0||ue===!0,ce=ae.dataReady;let Oe=v(E,te);rt(i.TEXTURE_CUBE_MAP,E);let ze;if(E.isDepthTexture){if(ge=_(E.format===oi,E.type),qe)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ge,te.width,te.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,te.width,te.height,0,xe,de,null)}else if(fe){De&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ge,te.width,te.height);for(let ve=0;ve<6;ve++){ze=se[ve].mipmaps;for(let lt=0;lt<ze.length;lt++){const Tt=ze[lt];E.format!==Ln?xe!==null?De?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt,0,0,Tt.width,Tt.height,xe,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt,ge,Tt.width,Tt.height,0,Tt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt,0,0,Tt.width,Tt.height,xe,de,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt,ge,Tt.width,Tt.height,0,xe,de,Tt.data)}}}else{if(ze=E.mipmaps,De&&qe){ze.length>0&&Oe++;const ve=He(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ge,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(L){De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,se[ve].width,se[ve].height,xe,de,se[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,se[ve].width,se[ve].height,0,xe,de,se[ve].data);for(let lt=0;lt<ze.length;lt++){const xt=ze[lt].image[ve].image;De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt+1,0,0,xt.width,xt.height,xe,de,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt+1,ge,xt.width,xt.height,0,xe,de,xt.data)}}else{De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,xe,de,se[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,xe,de,se[ve]);for(let lt=0;lt<ze.length;lt++){const Tt=ze[lt];De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt+1,0,0,xe,de,Tt.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,lt+1,ge,xe,de,Tt.image[ve])}}}y(E)&&E.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),_e.__version=ae.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ot(w,E,W,ue,ae,_e){const me=s.convert(W.format,W.colorSpace),ne=s.convert(W.type),re=T(W.internalFormat,me,ne,W.normalized,W.colorSpace),fe=n.get(E),L=n.get(W);if(L.__renderTarget=E,!fe.__hasExternalTextures){const se=Math.max(1,E.width>>_e),te=Math.max(1,E.height>>_e);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,_e,re,se,te,E.depth,0,me,ne,null):t.texImage2D(ae,_e,re,se,te,0,me,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,L.__webglTexture,0,mt(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,L.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function en(w,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer){const ue=E.depthTexture,ae=ue&&ue.isDepthTexture?ue.type:null,_e=_(E.stencilBuffer,ae),me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(E),_e,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,w)}else{const ue=E.textures;for(let ae=0;ae<ue.length;ae++){const _e=ue[ae],me=s.convert(_e.format,_e.colorSpace),ne=s.convert(_e.type),re=T(_e.internalFormat,me,ne,_e.normalized,_e.colorSpace);ye(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(E),re,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(w,E,W){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(E.depthTexture);ae.__renderTarget=E;const _e=ue?E.depthTexture.image[0]:E.depthTexture.image;(!ae.__webglTexture||_e.width!==E.width||_e.height!==E.height)&&(_e.width=E.width,_e.height=E.height,E.depthTexture.needsUpdate=!0),ue?Te(E.depthTexture,0):le(E.depthTexture,0);const me=ae.__webglTexture,ne=mt(E),re=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,fe=E.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ci)ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,re,me,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,fe,re,me,0);else if(E.depthTexture.format===oi)ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,re,me,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,fe,re,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(w){const E=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ue=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",ae)};ue.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ue}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ue=0;ue<6;ue++)bt(E.__webglFramebuffer[ue],w,ue);else w.texture.mipmaps.length>0?bt(E.__webglFramebuffer[0],w,0):bt(E.__webglFramebuffer,w,0);else if(W){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=i.createRenderbuffer(),en(E.__webglDepthbuffer[ue],w,!1);else{const ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,_e)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),en(E.__webglDepthbuffer,w,!1);else{const ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(w,E,W){const ue=n.get(w);E!==void 0&&ot(ue.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&kt(w)}function Wt(w){const E=w.texture,W=n.get(w),ue=n.get(E);w.addEventListener("dispose",O),P(w);const ae=w.textures,_e=w.isWebGLCubeRenderTarget===!0,me=ae.length>1;if(me||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,a.memory.textures++),_e){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(E.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let re=0;re<E.mipmaps.length;re++)W.__webglFramebuffer[ne][re]=i.createFramebuffer()}else W.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<E.mipmaps.length;ne++)W.__webglFramebuffer[ne]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(me)for(let ne=0,re=ae.length;ne<re;ne++){const fe=n.get(ae[ne]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){const re=ae[ne];W.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);const fe=s.convert(re.format,re.colorSpace),L=s.convert(re.type),se=T(re.internalFormat,fe,L,re.normalized,re.colorSpace,w.isXRRenderTarget===!0),te=mt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),en(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),rt(i.TEXTURE_CUBE_MAP,E);for(let ne=0;ne<6;ne++)if(E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)ot(W.__webglFramebuffer[ne][re],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else ot(W.__webglFramebuffer[ne],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);y(E)?S(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(me){for(let ne=0,re=ae.length;ne<re;ne++){const fe=ae[ne],L=n.get(fe);let se=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,L.__webglTexture),rt(se,fe),ot(W.__webglFramebuffer,w,fe,i.COLOR_ATTACHMENT0+ne,se,0),y(fe)&&S(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,ue.__webglTexture),rt(ne,E),E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)ot(W.__webglFramebuffer[re],w,E,i.COLOR_ATTACHMENT0,ne,re);else ot(W.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,ne,0);y(E)?S(ne):E.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&kt(w)}function z(w){const E=w.textures;for(let W=0,ue=E.length;W<ue;W++){const ae=E[W];if(y(ae)&&ae.mipmapsAutoUpdate===!0){const _e=A(w),me=n.get(ae).__webglTexture;t.bindTexture(_e,me),S(_e),t.unbindTexture()}}}const Jt=[];function _t(w){if(w.samples>0){if(ye(w)===!1){const E=w.textures,W=w.width,ue=w.height;let ae=i.COLOR_BUFFER_BIT;const _e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(w),ne=E.length>1;if(ne)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const L=n.get(E[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,ue,0,0,W,ue,ae,i.NEAREST),l===!0&&(Jt.length=0,Jt.push(i.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Jt.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const L=n.get(E[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const E=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function mt(w){return Math.min(r.maxSamples,w.samples)}function ye(w){const E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(w){const E=a.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function oe(w,E){const W=w.colorSpace,ue=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Xr&&W!==qn&&(tt.getTransfer(W)===ht?(ue!==Ln||ae!==on)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",W)),E}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=he,this.resetTextureUnits=Y,this.getTextureUnits=ee,this.setTextureUnits=Q,this.setTexture2D=le,this.setTexture2DArray=Ee,this.setTexture3D=Fe,this.setTextureCube=Te,this.rebindTextures=Bt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ye,this.dispose=V}function v_(i,e){function t(n,r=qn){let s;const a=tt.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===su)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===Ln)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===Gs)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===ro||n===so)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo||n===co||n===uo||n===qs||n===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ao||n===oo)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===co)return s.COMPRESSED_R11_EAC;if(n===uo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===So||n===Mo||n===yo||n===Eo||n===bo||n===To||n===Ao)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Ro||n===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Ys||n===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:S_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends Ai{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,g=null;const M=typeof XRWebGLBinding<"u",m=new y_,f={},x=t.getContextAttributes();let y=null,S=null;const A=[],T=[],_=new Ce;let v=null,P=null;const R=new pn;R.viewport=new St;const N=new pn;N.viewport=new St;const O=[R,N],k=new Ud;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=A[Z];return le===void 0&&(le=new ga,A[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=A[Z];return le===void 0&&(le=new ga,A[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=A[Z];return le===void 0&&(le=new ga,A[Z]=le),le.getHandSpace()};function I(Z){const le=T.indexOf(Z.inputSource);if(le===-1)return;const Ee=A[le];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<A.length;Z++){const le=T[Z];le!==null&&(T[Z]=null,A[Z].disconnect(le))}C=null,V=null,m.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(y),h=null,d=null,p=null,r=null,S=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),P!==null){const Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?oi:ci,Fe=x.stencil?sr:In);const Ge={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Dn(d.textureWidth,d.textureHeight,{format:Ln,type:on,depthTexture:new ar(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Dn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:on,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Z){for(let le=0;le<Z.removed.length;le++){const Ee=Z.removed[le],Fe=T.indexOf(Ee);Fe>=0&&(T[Fe]=null,A[Fe].disconnect(Ee))}for(let le=0;le<Z.added.length;le++){const Ee=Z.added[le];let Fe=T.indexOf(Ee);if(Fe===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=T.length){T.push(Ee),Fe=Ge;break}else if(T[Ge]===null){T[Ge]=Ee,Fe=Ge;break}if(Fe===-1)break}const Te=A[Fe];Te&&Te.connect(Ee)}}function B(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,Ee=Z.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),k.near=N.near=R.near=le,k.far=N.far=R.far=Ee,(C!==k.near||V!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,V=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const Fe=Z.parent,Te=k.cameras;B(k,Fe);for(let Ge=0;Ge<Te.length;Ge++)B(Te[Ge],Fe);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),Y(Z,k,Fe)};function Y(Z,le,Ee){Ee===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Zr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return f[Z]};let ee=null;function Q(Z,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Fe=!1;Ee.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let ie=0;ie<Ee.length;ie++){const rt=Ee[ie];let at=null;if(h!==null)at=h.getViewport(rt);else{const gt=p.getViewSubImage(d,rt);at=gt.viewport,ie===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let Ue=O[ie];Ue===void 0&&(Ue=new pn,Ue.layers.enable(ie),Ue.viewport=new St,O[ie]=Ue),Ue.matrix.fromArray(rt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(rt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(at.x,at.y,at.width,at.height),ie===0&&(k.matrix.copy(Ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(Ue)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const ie=p.getDepthInformation(Ee[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,r.renderState)}if(Te&&Te.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<Ee.length;ie++){const rt=Ee[ie].camera;if(rt){let at=f[rt];at||(at=new Au,f[rt]=at);const Ue=p.getCameraImage(rt);at.sourceTexture=Ue}}}}for(let Ee=0;Ee<A.length;Ee++){const Fe=T[Ee],Te=A[Ee];Fe!==null&&Te!==void 0&&Te.update(Fe,le,c||a)}ee&&ee(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const he=new Vu;he.setAnimationLoop(Q),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}}const b_=new ut,Qu=new Xe;Qu.set(-1,0,0,0,1,0,0,0,1);function T_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ou(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,S=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,x){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function A_(i,e,t,n){let r={},s={};function a(x,y){const S=y.program;n.uniformBlockBinding(x,S,r[x.id])}function o(x,y){let S=r[x.id];S===void 0&&(g(x),S=l(x),r[x.id]=S,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const T=e.render.frame;s[x.id]!==T&&(c(x),s[x.id]=T)}function l(x){const y=i.createBuffer(),S=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){const y=r[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,_=S.length;T<_;T++){const v=S[T];if(Array.isArray(v))for(let P=0,R=v.length;P<R;P++)u(v[P],T,P,A);else u(v,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,y,S,A){if(d(x,y,S,A)===!0){const T=x.__offset,_=x.value;if(Array.isArray(_)){let v=0;for(let P=0;P<_.length;P++){const R=_[P],N=M(R,!0);p(R,x.__data,v),v+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function p(x,y,S){typeof x=="number"||typeof x=="boolean"?y[S]=x:x.isMatrix3?(y[S]=x.elements[0],y[S+1]=x.elements[1],y[S+2]=x.elements[2],y[S+3]=0,y[S+4]=x.elements[3],y[S+5]=x.elements[4],y[S+6]=x.elements[5],y[S+7]=0,y[S+8]=x.elements[6],y[S+9]=x.elements[7],y[S+10]=x.elements[8],y[S+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-S),S):x.toArray(y,S)}function d(x,y,S,A){const T=x.value,_=y+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const v=A[_];let P=!1;for(let R=0;R<T.length;R++)h(T[R],v,R)===!0&&(P=!0);return P}return h(T,A,_)}function h(x,y,S){if(y[S]===void 0)return typeof x=="number"||typeof x=="boolean"?y[S]=x:ArrayBuffer.isView(x)?y[S]=x.slice():y[S]=x.clone(),!0;{const A=y[S];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return y[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(x){const y=x.uniforms;let S=0;const A=16;for(let _=0,v=y.length;_<v;_++){const P=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,N=P.length;R<N;R++){const O=P[R],k=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(y[_])||Array.isArray(O.value);let V=S;for(let G=0,j=k.length;G<j;G++){const B=k[G],Y=M(B,C),ee=S%A,Q=ee%Y.boundary,he=ee+Q;S+=Q,he!==0&&A-he<Y.storage&&(S+=A-he),G===0&&(V=S),S+=Y.storage}const I=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new I((S-V)/Float32Array.BYTES_PER_ELEMENT),O.__offset=V}}const T=S%A;return T>0&&(S+=A-T),x.__size=S,x.__cache={},this}function M(x,y){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(x){const y=x.target;y.removeEventListener("dispose",m),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);r={},s={}}return{bind:a,update:o,dispose:f}}const w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function R_(){return Rn===null&&(Rn=new Js(w_,16,16,Ei,cn),Rn.name="DFG_LUT",Rn.minFilter=Lt,Rn.magFilter=Lt,Rn.wrapS=En,Rn.wrapT=En,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class C_{constructor(e={}){const{canvas:t=Qh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=on}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=h,m=new Set([$o,Ko,Jo]),f=new Set([on,In,Wr,sr,qo,Yo]),x=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],v=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,O=null,k=null,C=null,V=null;this._outputColorSpace=Pt;let I=0,G=0,j=null,B=-1,Y=null;const ee=new St,Q=new St;let he=null;const Z=new Qe(0);let le=0,Ee=t.width,Fe=t.height,Te=1,Ge=null,Ne=null;const ie=new St(0,0,Ee,Fe),rt=new St(0,0,Ee,Fe);let at=!1;const Ue=new Jr,gt=new nl;let ft=!1,Vt=!1;const ot=new ut,en=new D,bt=new St,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Wt(){return j===null?Te:1}let z=n;function Jt(b,U){return t.getContext(b,U)}let _t,mt,ye,it,oe,He,w,E,W,ue,ae,_e,me,ne,re,fe,L,se,te,xe,de,ge,De;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ko}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const U="webgl2";if(z=Jt(U,b),z===null)throw Jt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(b){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),st("WebGLRenderer: "+b.message),b}function qe(){_t=new D0(z),_t.init(),de=new v_(z,_t),mt=new M0(z,_t,e,de),ye=new __(z,_t),mt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),k=z.createFramebuffer(),C=z.createFramebuffer(),V=z.createFramebuffer(),it=new U0(z),oe=new i_,He=new x_(z,_t,ye,oe,mt,de,it),w=new L0(R),E=new Od(z),ge=new v0(z,E),W=new I0(z,E,it,ge),ue=new O0(z,W,E,ge,it),se=new F0(z,mt,He),re=new y0(oe),ae=new n_(R,w,_t,mt,ge,re),_e=new T_(R,oe),me=new s_,ne=new h_(_t),L=new x0(R,w,ye,ue,g,l),fe=new g_(R,ue,mt),De=new A_(z,it,mt,ye),te=new S0(z,_t,it),xe=new N0(z,_t,it),it.programs=ae.programs,R.capabilities=mt,R.extensions=_t,R.properties=oe,R.renderLists=me,R.shadowMap=fe,R.state=ye,R.info=it}M!==on&&(P=new z0(M,t.width,t.height,o,r,s));const ce=new E_(R,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(b){b!==void 0&&(Te=b,this.setSize(Ee,Fe,!1))},this.getSize=function(b){return b.set(Ee,Fe)},this.setSize=function(b,U,J=!0){if(ce.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Fe=U,t.width=Math.floor(b*Te),t.height=Math.floor(U*Te),J===!0&&(t.style.width=b+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ee*Te,Fe*Te).floor()},this.setDrawingBufferSize=function(b,U,J){Ee=b,Fe=U,Te=J,t.width=Math.floor(b*J),t.height=Math.floor(U*J),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(M===on){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,U,J,X){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,U,J,X),ye.viewport(ee.copy(ie).multiplyScalar(Wt()).round())},this.getScissor=function(b){return b.copy(rt)},this.setScissor=function(b,U,J,X){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,U,J,X),ye.scissor(Q.copy(rt).multiplyScalar(Wt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){ye.setScissorTest(at=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,J=!0){let X=0;if(b){let q=!1;if(j!==null){const Se=j.texture.format;q=m.has(Se)}if(q){const Se=j.texture.type,Re=f.has(Se),pe=L.getClearColor(),be=L.getClearAlpha(),Ie=pe.r,ke=pe.g,Je=pe.b;Re?(x[0]=Ie,x[1]=ke,x[2]=Je,x[3]=be,z.clearBufferuiv(z.COLOR,0,x)):(y[0]=Ie,y[1]=ke,y[2]=Je,y[3]=be,z.clearBufferiv(z.COLOR,0,y))}else X|=z.COLOR_BUFFER_BIT}U&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),L.dispose(),me.dispose(),ne.dispose(),He.dispose(),oe.dispose(),w.dispose(),ue.dispose(),W.dispose(),ge.dispose(),De.dispose(),ae.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",di),ce.removeEventListener("sessionend",Nn),Un.stop()};function Oe(b){b.preventDefault(),Cl("WebGLRenderer: Context Lost."),N=!0}function ze(){Cl("WebGLRenderer: Context Restored."),N=!1;const b=it.autoReset,U=fe.enabled,J=fe.autoUpdate,X=fe.needsUpdate,q=fe.type;qe(),it.autoReset=b,fe.enabled=U,fe.autoUpdate=J,fe.needsUpdate=X,fe.type=q}function ve(b){st("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const U=b.target;U.removeEventListener("dispose",lt),Tt(U)}function Tt(b){xt(b),oe.remove(b)}function xt(b){const U=oe.get(b).programs;U!==void 0&&(U.forEach(function(J){ae.releaseProgram(J)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,J,X,q,Se){U===null&&(U=kt);const Re=q.isMesh&&q.matrixWorld.determinantAffine()<0,pe=mr(b,U,J,X,q);ye.setMaterial(X,Re);let be=J.index,Ie=1;if(X.wireframe===!0){if(be=W.getWireframeAttribute(J),be===void 0)return;Ie=2}const ke=J.drawRange,Je=J.attributes.position;let Le=ke.start*Ie,Ke=(ke.start+ke.count)*Ie;Se!==null&&(Le=Math.max(Le,Se.start*Ie),Ke=Math.min(Ke,(Se.start+Se.count)*Ie)),be!==null?(Le=Math.max(Le,0),Ke=Math.min(Ke,be.count)):Je!=null&&(Le=Math.max(Le,0),Ke=Math.min(Ke,Je.count));const yt=Ke-Le;if(yt<0||yt===1/0)return;ge.setup(q,X,pe,J,be);let dt,ct=te;if(be!==null&&(dt=E.get(be),ct=xe,ct.setIndex(dt)),q.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*Wt()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(q.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),ye.setLineWidth(Ct*Wt()),q.isLineSegments?ct.setMode(z.LINES):q.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else q.isPoints?ct.setMode(z.POINTS):q.isSprite&&ct.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))ct.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ct=q._multiDrawStarts,Pe=q._multiDrawCounts,Ut=q._multiDrawCount,Ye=be?E.get(be).bytesPerElement:1,Kt=oe.get(X).currentProgram.getUniforms();for(let At=0;At<Ut;At++)Kt.setValue(z,"_gl_DrawID",At),ct.render(Ct[At]/Ye,Pe[At])}else if(q.isInstancedMesh)ct.renderInstances(Le,yt,q.count);else if(J.isInstancedBufferGeometry){const Ct=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pe=Math.min(J.instanceCount,Ct);ct.renderInstances(Le,yt,Pe)}else ct.render(Le,yt)};function Pi(b,U,J,X){O!==null&&b.isNodeMaterial&&O.setObject(X,b),ft===!0&&re.setState(b,J,!1),b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,Fn(b,U,X),b.side=yi,b.needsUpdate=!0,Fn(b,U,X),b.side=Pn):Fn(b,U,X)}this.compile=function(b,U,J=null){J===null&&(J=b),O!==null&&O.renderStart(b,U,J),T=ne.get(J),T.init(U),v.push(T),J.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),b!==J&&b.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Vt=this.localClippingEnabled,ft=re.init(this.clippingPlanes,Vt),ft===!0&&re.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(T.state.shadowsArray,J,U);const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const pe=Se[Re];Pi(pe,J,U,q),X.add(pe)}else Pi(Se,J,U,q),X.add(Se)}),T=v.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(b,U,J=null){const X=this.compile(b,U,J);return new Promise(q=>{function Se(){if(X.forEach(function(Re){const be=oe.get(Re).currentProgram;(be===void 0||be.isReady())&&X.delete(Re)}),X.size===0){q(b);return}setTimeout(Se,10)}_t.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let fi=null;function Li(b){fi&&fi(b)}function di(){Un.stop()}function Nn(){Un.start()}const Un=new Vu;Un.setAnimationLoop(Li),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(b){fi=b,ce.setAnimationLoop(b),b===null?Un.stop():Un.start()},ce.addEventListener("sessionstart",di),ce.addEventListener("sessionend",Nn),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(b,U);const J=ce.enabled===!0&&ce.isPresenting===!0,X=P!==null&&(j===null||J)&&P.begin(R,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,j),T=ne.get(b,v.length),T.init(U),T.state.textureUnits=He.getTextureUnits(),v.push(T),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?gt.setFromArrayCamera(U):Ue.setFromProjectionMatrix(ot,bn,U.reversedDepth),Vt=this.localClippingEnabled,ft=re.init(this.clippingPlanes,Vt),A=me.get(b,_.length),A.init(),_.push(A),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&pi(Re,U,-1/0,R.sortObjects)}pi(b,U,0,R.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Ge,Ne),Bt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Bt&&L.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),ft===!0&&re.beginShadows();const q=T.state.shadowsArray;if(fe.render(q,b,U),ft===!0&&re.endShadows(),(X&&P.hasRenderPass())===!1){const Re=A.opaque,pe=A.transmissive;if(T.setupLights(),U.isArrayCamera){const be=U.cameras;if(pe.length>0)for(let Ie=0,ke=be.length;Ie<ke;Ie++){const Je=be[Ie];fr(Re,pe,b,Je)}Bt&&L.render(b);for(let Ie=0,ke=be.length;Ie<ke;Ie++){const Je=be[Ie];Di(A,b,Je,Je.viewport)}}else pe.length>0&&fr(Re,pe,b,U),Bt&&L.render(b),Di(A,b,U)}j!==null&&G===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),X&&P.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),ge.resetDefaultState(),B=-1,Y=null,v.pop(),v.length>0?(T=v[v.length-1],He.setTextureUnits(T.state.textureUnits),ft===!0&&re.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,O!==null&&O.renderEnd()};function pi(b,U,J,X){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Re=U.isArrayCamera?gt:Ue;if(!b.frustumCulled||b.intersectsFrustum(Re)){X&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const pe=ue.update(b),be=b.material;be.visible&&A.push(b,pe,be,J,bt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){const Re=U.isArrayCamera?gt:Ue;if(!b.frustumCulled||b.intersectsFrustum(Re)){const pe=ue.update(b),be=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),bt.copy(pe.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(be)){const Ie=pe.groups;for(let ke=0,Je=Ie.length;ke<Je;ke++){const Le=Ie[ke],Ke=be[Le.materialIndex];Ke&&Ke.visible&&A.push(b,pe,Ke,J,bt.z,Le,U)}}else be.visible&&A.push(b,pe,be,J,bt.z,null,U)}}}const Se=b.children;for(let Re=0,pe=Se.length;Re<pe;Re++)pi(Se[Re],U,J,X)}function Di(b,U,J,X){const{opaque:q,transmissive:Se,transparent:Re}=b;T.setupLightsView(J),ft===!0&&re.setGlobalState(R.clippingPlanes,J),X&&ye.viewport(ee.copy(X)),q.length>0&&mi(q,U,J),Se.length>0&&mi(Se,U,J),Re.length>0&&mi(Re,U,J),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function fr(b,U,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Le=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Dn(1,1,{generateMipmaps:!0,type:Le?cn:on,minFilter:Zn,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Se=T.state.transmissionRenderTarget[X.id],Re=X.viewport||ee;Se.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),be=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(Z),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),Bt&&L.render(J);const ke=R.toneMapping;R.toneMapping=Jn;const Je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ft===!0&&re.setGlobalState(R.clippingPlanes,X),mi(b,J,X),He.updateMultisampleRenderTarget(Se),He.updateRenderTargetMipmap(Se),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ke=0,yt=U.length;Ke<yt;Ke++){const dt=U[Ke],{object:ct,geometry:Ct,material:Pe,group:Ut}=dt;if(Pe.side===Pn&&ct.layers.test(X.layers)){const Ye=Pe.side;Pe.side=jt,Pe.needsUpdate=!0,Qn(ct,J,X,Ct,Pe,Ut),Pe.side=Ye,Pe.needsUpdate=!0,Le=!0}}Le===!0&&(He.updateMultisampleRenderTarget(Se),He.updateRenderTargetMipmap(Se))}R.setRenderTarget(pe,be,Ie),R.setClearColor(Z,le),Je!==void 0&&(X.viewport=Je),R.toneMapping=ke}function mi(b,U,J){const X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Se=b.length;q<Se;q++){const Re=b[q],{object:pe,geometry:be,group:Ie}=Re;let ke=Re.material;ke.allowOverride===!0&&X!==null&&(ke=X),pe.layers.test(J.layers)&&Qn(pe,U,J,be,ke,Ie)}}function Qn(b,U,J,X,q,Se){O!==null&&q.isNodeMaterial&&O.setObject(b,q),b.onBeforeRender(R,U,J,X,q,Se),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,U,J,X,b,Se),q.transparent===!0&&q.side===Pn&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,R.renderBufferDirect(J,U,X,q,b,Se),q.side=yi,q.needsUpdate=!0,R.renderBufferDirect(J,U,X,q,b,Se),q.side=Pn):R.renderBufferDirect(J,U,X,q,b,Se),b.onAfterRender(R,U,J,X,q,Se)}function Ii(b){let U=0;for(const J of b)J.texture!==null&&U++;return U}function Fn(b,U,J){U.isScene!==!0&&(U=kt);const X=oe.get(b),q=T.state.lights,Se=T.state.shadowsArray,Re=q.state.version,pe=ae.getParameters(b,q.state,Se,U,J,T.state.lightProbeGridArray),be=ae.getProgramCacheKey(pe);let Ie=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;const ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=w.get(b.envMap||X.environment,ke),X.envMapRotation=X.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",lt),Ie=new Map,X.programs=Ie,X.programVariants=new Map);let Je=Ie.get(be);if(Je!==void 0){if(X.currentProgram===Je&&X.lightsStateVersion===Re)return ns(b,pe),Je}else pe.uniforms=ae.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,J,pe),b.onBeforeCompile(pe,R),Je=ae.acquireProgram(pe,be),Ie.set(be,Je),X.uniforms=pe.uniforms;const Le=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=re.uniform),ns(b,pe),X.needsLights=gr(b),X.lightsStateVersion=Re,X.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.sunLights.value=q.state.sun,Le.sunLightShadows.value=q.state.sunShadow,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.sunShadowMatrix.value=q.state.sunShadowMatrix,Le.sunShadowCascade.value=q.state.sunShadowCascade,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),X.numLightProbeGrids=Ii(T.state.lightProbeGridArray),X.currentProgram=Je,X.uniformsList=null,Je}function dr(b,U,J,X,q){const Se=oe.get(b),Re=Se.currentProgram.id+","+X+","+q;let pe=Se.programVariants.get(Re);return pe===void 0?(pe=Fn(b,U,J),Se.programVariants.set(Re,pe)):(Se.currentProgram=pe,Se.uniformsList=null,Se.outputColorSpace=X,Se.toneMapping=q),pe}function pr(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Vs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ns(b,U){const J=oe.get(b);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function mr(b,U,J,X,q){U.isScene!==!0&&(U=kt),He.resetTextureUnits();const Se=U.fog,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,pe=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tt.workingColorSpace,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ie=w.get(X.envMap||Re,be),ke=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color;let dt=Jn;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(dt=R.toneMapping);const ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ct=ct!==void 0?ct.length:0,Pe=oe.get(X),Ut=T.state.lights;if(ft===!0&&(Vt===!0||b!==Y)){const $=b===Y&&X.id===B;re.setState(X,b,$)}let Ye=!1,Kt=!1;X.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Ut.state.version||q.isBatchedMesh&&Pe.batching===!1||!q.isBatchedMesh&&Pe.batching===!0||q.isBatchedMesh&&Pe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pe.instancing===!1||!q.isInstancedMesh&&Pe.instancing===!0||q.isSkinnedMesh&&Pe.skinning===!1||!q.isSkinnedMesh&&Pe.skinning===!0||q.isInstancedMesh&&Pe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pe.instancingMorph===!1&&q.morphTexture!==null||Pe.envMap!==Ie||X.fog===!0&&Pe.fog!==Se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==Je||Pe.morphTargets!==Le||Pe.morphNormals!==Ke||Pe.morphColors!==yt||Pe.morphTargetsCount!==Ct||Pe.numLightProbeGrids!==Ii(T.state.lightProbeGridArray)?Ye=!0:(Pe.outputColorSpace!==pe||Pe.toneMapping!==dt)&&(Kt=!0):(Ye=!0,Pe.__version=X.version);let At=Pe.currentProgram;(Ye===!0||Kt===!0)&&(At=Kt===!0?dr(X,U,q,pe,dt):Fn(X,U,q),O&&X.isNodeMaterial&&O.onUpdateProgram(X,At,Pe));let gi=!1,gn=!1,On=!1;const et=At.getUniforms(),F=Pe.uniforms;if(ye.useProgram(At.program)&&(gi=!0,gn=!0,On=!0),X.id!==B&&(B=X.id,gn=!0),gi||Y!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),et.setValue(z,"projectionMatrix",b.projectionMatrix),et.setValue(z,"viewMatrix",b.matrixWorldInverse);const H=et.map.cameraPosition;H!==void 0&&H.setValue(z,en.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&et.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&et.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,gn=!0,On=!0)}if(Pe.needsLights&&(Ut.state.sunShadowMap.length>0&&et.setValue(z,"sunShadowMap",Ut.state.sunShadowMap,He),Ut.state.directionalShadowMap.length>0&&et.setValue(z,"directionalShadowMap",Ut.state.directionalShadowMap,He),Ut.state.spotShadowMap.length>0&&et.setValue(z,"spotShadowMap",Ut.state.spotShadowMap,He),Ut.state.pointShadowMap.length>0&&et.setValue(z,"pointShadowMap",Ut.state.pointShadowMap,He)),q.isSkinnedMesh){et.setOptional(z,q,"bindMatrix"),et.setOptional(z,q,"bindMatrixInverse");const $=q.skeleton;$&&($.boneTexture===null&&$.computeBoneTexture(),et.setValue(z,"boneTexture",$.boneTexture,He))}q.isBatchedMesh&&(et.setOptional(z,q,"batchingTexture"),et.setValue(z,"batchingTexture",q._matricesTexture,He),et.setOptional(z,q,"batchingIdTexture"),et.setValue(z,"batchingIdTexture",q._indirectTexture,He),et.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&et.setValue(z,"batchingColorTexture",q._colorsTexture,He));const K=J.morphAttributes;if((K.position!==void 0||K.normal!==void 0||K.color!==void 0)&&se.update(q,J,At),(gn||Pe.receiveShadow!==q.receiveShadow)&&(Pe.receiveShadow=q.receiveShadow,et.setValue(z,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(F.envMapIntensity.value=U.environmentIntensity),F.dfgLUT!==void 0&&(F.dfgLUT.value=R_()),gn){if(et.setValue(z,"toneMappingExposure",R.toneMappingExposure),Pe.needsLights&&Ni(F,On),Se&&X.fog===!0&&_e.refreshFogUniforms(F,Se),_e.refreshMaterialUniforms(F,X,Te,Fe,T.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const $=S;let H=0;for(const Me of T.state.lightProbeGridArray)Me.texture!==null&&($.textures[H]=Me.texture,$.min[H]=Me.boundingBox.min,$.max[H]=Me.boundingBox.max,$.resolution[H]=Me.resolution,H++);for(const Me in $)$[Me].length=H;F.probesSH.value=$.textures,F.probesMin.value=$.min,F.probesMax.value=$.max,F.probesResolution.value=$.resolution}Vs.upload(z,pr(Pe),F,He)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vs.upload(z,pr(Pe),F,He),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&et.setValue(z,"center",q.center),et.setValue(z,"modelViewMatrix",q.modelViewMatrix),et.setValue(z,"normalMatrix",q.normalMatrix),et.setValue(z,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const $=X.uniformsGroups;for(let H=0,Me=$.length;H<Me;H++){const we=$[H];De.update(we,At),De.bind(we,At)}}return At}function Ni(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function gr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,U,J){const X=oe.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),oe.get(b.texture).__webglTexture=U,oe.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const J=oe.get(b);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,J=0){j=b,I=U,G=J;let X=null,q=!1,Se=!1;if(b){const pe=oe.get(b);if(pe.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,pe.__webglFramebuffer),ee.copy(b.viewport),Q.copy(b.scissor),he=b.scissorTest,ye.viewport(ee),ye.scissor(Q),ye.setScissorTest(he),B=-1;return}else if(pe.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(pe.__hasExternalTextures)He.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&oe.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Se=!0);const Ie=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?X=Ie[U][J]:X=Ie[U],q=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?X=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?X=Ie[J]:X=Ie,ee.copy(b.viewport),Q.copy(b.scissor),he=b.scissorTest}else ee.copy(ie).multiplyScalar(Te).floor(),Q.copy(rt).multiplyScalar(Te).floor(),he=at;if(J!==0&&(X=k),ye.bindFramebuffer(z.FRAMEBUFFER,X)&&ye.drawBuffers(b,X),ye.viewport(ee),ye.scissor(Q),ye.setScissorTest(he),q){const pe=oe.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,J)}else if(Se){const pe=U;for(let be=0;be<b.textures.length;be++){const Ie=oe.get(b.textures[be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+be,Ie.__webglTexture,J,pe)}}else if(b!==null&&J!==0){const pe=oe.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pe.__webglTexture,J)}B=-1};function _r(b){const U=oe.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=mt.textureFormatReadable(b.format),U.__typeReadable=mt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,J,X,q,Se,Re,pe=0){if(!(b&&b.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be){ye.bindFramebuffer(z.FRAMEBUFFER,be);try{const Ie=b.textures[pe],ke=Ie.format,Je=Ie.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pe);const Le=_r(Ie);if(Le.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-X&&J>=0&&J<=b.height-q&&z.readPixels(U,J,X,q,de.convert(ke),de.convert(Je),Se)}finally{const Ie=j!==null?oe.get(j).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,U,J,X,q,Se,Re,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re],Array.isArray(be)&&(be=be[0])),be)if(U>=0&&U<=b.width-X&&J>=0&&J<=b.height-q){ye.bindFramebuffer(z.FRAMEBUFFER,be);const Ie=b.textures[pe],ke=Ie.format,Je=Ie.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+pe);const Le=_r(Ie);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(U,J,X,q,de.convert(ke),de.convert(Je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const yt=j!==null?oe.get(j).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,yt);const dt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await jh(z,dt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ke),z.deleteSync(dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,J=0){const X=Math.pow(2,-J),q=Math.floor(b.image.width*X),Se=Math.floor(b.image.height*X),Re=U!==null?U.x:0,pe=U!==null?U.y:0;He.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Re,pe,q,Se),ye.unbindTexture()},this.copyTextureToTexture=function(b,U,J=null,X=null,q=0,Se=0){let Re,pe,be,Ie,ke,Je,Le,Ke,yt;const dt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(J!==null)Re=J.max.x-J.min.x,pe=J.max.y-J.min.y,be=J.isBox3?J.max.z-J.min.z:1,Ie=J.min.x,ke=J.min.y,Je=J.isBox3?J.min.z:0;else{const et=Math.pow(2,-q);Re=Math.floor(dt.width*et),pe=Math.floor(dt.height*et),b.isDataArrayTexture?be=dt.depth:b.isData3DTexture?be=Math.floor(dt.depth*et):be=1,Ie=0,ke=0,Je=0}X!==null?(Le=X.x,Ke=X.y,yt=X.z):(Le=0,Ke=0,yt=0);const ct=de.convert(U.format),Ct=de.convert(U.type);let Pe;U.isData3DTexture?(He.setTexture3D(U,0),Pe=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Pe=z.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Pe=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=ye.getParameter(z.UNPACK_ROW_LENGTH),Ye=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),Kt=ye.getParameter(z.UNPACK_SKIP_PIXELS),At=ye.getParameter(z.UNPACK_SKIP_ROWS),gi=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,dt.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Ie),ye.pixelStorei(z.UNPACK_SKIP_ROWS,ke),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);const gn=b.isDataArrayTexture||b.isData3DTexture,On=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const et=oe.get(b),F=oe.get(U),K=oe.get(et.__renderTarget),$=oe.get(F.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,K.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let H=0;H<be;H++)gn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,q,Je+H),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,oe.get(U).__webglTexture,Se,yt+H)),z.blitFramebuffer(Ie,ke,Ie+Re,ke+pe,Le,Ke,Le+Re,Ke+pe,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||oe.has(b)){const et=oe.get(b),F=oe.get(U);ye.bindFramebuffer(z.READ_FRAMEBUFFER,C),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,V);for(let K=0;K<be;K++)gn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.__webglTexture,q,Je+K):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,et.__webglTexture,q),On?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,F.__webglTexture,Se,yt+K):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,F.__webglTexture,Se),q!==0?z.blitFramebuffer(Ie,ke,Ie+Re,ke+pe,Le,Ke,Le+Re,Ke+pe,z.COLOR_BUFFER_BIT,z.NEAREST):On?z.copyTexSubImage3D(Pe,Se,Le,Ke,yt+K,Ie,ke,Re,pe):z.copyTexSubImage2D(Pe,Se,Le,Ke,Ie,ke,Re,pe);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else On?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Pe,Se,Le,Ke,yt,Re,pe,be,ct,Ct,dt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,Se,Le,Ke,yt,Re,pe,be,ct,dt.data):z.texSubImage3D(Pe,Se,Le,Ke,yt,Re,pe,be,ct,Ct,dt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,Le,Ke,Re,pe,ct,Ct,dt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,Le,Ke,dt.width,dt.height,ct,dt.data):z.texSubImage2D(z.TEXTURE_2D,Se,Le,Ke,Re,pe,ct,Ct,dt);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Ut),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ye),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Kt),ye.pixelStorei(z.UNPACK_SKIP_ROWS,At),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,gi),Se===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Pe),ye.unbindTexture()},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){I=0,G=0,j=null,ye.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class P_ extends Cd{constructor(e){super(e),this.type=cn}parse(e){const a=function(v,P){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(P||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(P||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(P||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(P||""))}},p=function(v,P,R){P=P||1024;let O=v.pos,k=-1,C=0,V="",I=String.fromCharCode.apply(null,new Uint16Array(v.subarray(O,O+128)));for(;0>(k=I.indexOf(`
`))&&C<P&&O<v.byteLength;)V+=I,C+=I.length,O+=128,I=String.fromCharCode.apply(null,new Uint16Array(v.subarray(O,O+128)));return-1<k?(v.pos+=C+k+1,V+I.slice(0,k)):!1},d=function(v){const P=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,I;for((v.pos>=v.byteLength||!(V=p(v)))&&a(1,"no header found"),(I=V.match(P))||a(3,"bad initial token"),C.valid|=1,C.programtype=I[1],C.string+=V+`
`;V=p(v),V!==!1;){if(C.string+=V+`
`,V.charAt(0)==="#"){C.comments+=V+`
`;continue}if((I=V.match(R))&&(C.gamma=parseFloat(I[1])),(I=V.match(N))&&(C.exposure=parseFloat(I[1])),(I=V.match(O))&&(C.valid|=2,C.format=I[1]),(I=V.match(k))&&(C.valid|=4,C.height=parseInt(I[1],10),C.width=parseInt(I[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},h=function(v,P,R){const N=P;if(N<8||N>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);N!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*P*R);O.length||a(4,"unable to allocate buffer space");let k=0,C=0;const V=4*N,I=new Uint8Array(4),G=new Uint8Array(V);let j=R;for(;j>0&&C<v.byteLength;){C+4>v.byteLength&&a(1),I[0]=v[C++],I[1]=v[C++],I[2]=v[C++],I[3]=v[C++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=N)&&a(3,"bad rgbe scanline format");let B=0,Y;for(;B<V&&C<v.byteLength;){Y=v[C++];const Q=Y>128;if(Q&&(Y-=128),(Y===0||B+Y>V)&&a(3,"bad scanline data"),Q){const he=v[C++];for(let Z=0;Z<Y;Z++)G[B++]=he}else G.set(v.subarray(C,C+Y),B),B+=Y,C+=Y}const ee=N;for(let Q=0;Q<ee;Q++){let he=0;O[k]=G[Q+he],he+=N,O[k+1]=G[Q+he],he+=N,O[k+2]=G[Q+he],he+=N,O[k+3]=G[Q+he],k+=4}j--}return O},g=function(v,P,R,N){const O=v[P+3],k=Math.pow(2,O-128)/255;R[N+0]=v[P+0]*k,R[N+1]=v[P+1]*k,R[N+2]=v[P+2]*k,R[N+3]=1},M=function(v,P,R,N){const O=v[P+3],k=Math.pow(2,O-128)/255;R[N+0]=us.toHalfFloat(Math.min(v[P+0]*k,65504)),R[N+1]=us.toHalfFloat(Math.min(v[P+1]*k,65504)),R[N+2]=us.toHalfFloat(Math.min(v[P+2]*k,65504)),R[N+3]=us.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),x=f.width,y=f.height,S=h(m.subarray(m.pos),x,y);let A,T,_;switch(this.type){case ln:_=S.length/4;const v=new Float32Array(_*4);for(let R=0;R<_;R++)g(S,R*4,v,R*4);A=v,T=ln;break;case cn:_=S.length/4;const P=new Uint16Array(_*4);for(let R=0;R<_;R++)M(S,R*4,P,R*4);A=P,T=cn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:y,data:A,header:f.string,gamma:f.gamma,exposure:f.exposure,type:T,colorSpace:Xr,minFilter:Lt,magFilter:Lt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class L_ extends P_{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}function ju(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Rt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let d=0,h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in p.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),h++}if(h!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(t){let u=0;const p=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let g=0;g<h.count;++g)p.push(h.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(const u in s){const p=Uc(s[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in a){const p=a[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){const h=[];for(let M=0;M<a[u].length;++M)h.push(a[u][M][d]);const g=Uc(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Uc(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new $n(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){const M=u.getComponent(d,g);o.setComponent(d+p,g,M)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function D_(i){const e=new Zt,t=new Map,n=new Dt,r=(h,g,M,m,f,x=0,y=0,S=0)=>{n.position.set(M,m,f),n.rotation.set(x,y,S),n.updateMatrix(),h.applyMatrix4(n.matrix);const A=t.get(g)||[];A.push(h),t.set(g,A)},s=(h,g,M,m,f,x,y)=>{const S=new Ci(m,f,x);if(y===i.road||y===i.concrete||y===i.ground||y===i.green||y===i.metal){const A=S.attributes.uv,T=S.attributes.normal;for(let _=0;_<A.count;_++){const v=Math.abs(T.getX(_)),P=Math.abs(T.getY(_));A.setXY(_,A.getX(_)*(v>.5?x:m)/2,A.getY(_)*(P>.5?x:f)/2)}}r(S,y,h,g,M)},a=(h,g,M,m,f,x,y=0)=>r(new Et(m,m,f,24),x,h,g,M,0,0,y),o=(h,g,M,m)=>{const f=new D(...h),x=new D(...g),y=new Et(M,M,f.distanceTo(x),6),S=new hi().setFromUnitVectors(new D(0,1,0),x.clone().sub(f).normalize());y.applyQuaternion(S),y.translate(...f.add(x).multiplyScalar(.5).toArray());const A=t.get(m)||[];A.push(y),t.set(m,A)};s(0,-.31,0,600,.12,600,i.ground),s(0,-.2,0,20,.15,14.2,i.concrete),s(0,-.18,10.1,170,.08,3.8,i.road),s(-12,-.18,-20,3.8,.08,62,i.road),s(2.35,-.15,6.8,2.3,.1,3.2,i.road),s(21,-.18,-15,3.8,.08,54,i.road),s(4,-.18,-12,34,.08,3.4,i.road);for(let h=-80;h<80;h+=3.1)s(h,-.13,10.1,1.3,.008,.045,i.paint);for(const h of[8.35,11.85])s(0,-.13,h,170,.008,.035,i.paint);for(let h=-48;h<8;h+=3)s(-12,-.13,h,.04,.01,1.3,i.paint);for(const h of[-6.8,6.8]){h>0?s(-3.14,-.045,h,13.42,.16,.12,i.concrete):s(0,-.045,h,19.7,.16,.12,i.concrete),s(-3.6,.001,h+.15,9,.015,.18,i.dark);for(let g=-8;g<1;g+=.14)s(g,.012,h+.15,.025,.015,.18,i.metal)}for(let h=0;h<8;h++){const g=-7+h%4*5.3,M=-22-Math.floor(h/4)*6;a(g,.03,M,2.1,.35,i.concrete),a(g,1.9,M,1.92,3.55,i.paint),r(new rl(1.95,.3,40),i.metal,g,3.82,M);for(const m of[.55,1.6,2.65,3.65])r(new an(1.935,.018,4,40),i.metal,g,m,M,Math.PI/2);o([g-.15,.1,M+1.96],[g-.15,3.9,M+1.96],.025,i.metal),o([g+.15,.1,M+1.96],[g+.15,3.9,M+1.96],.025,i.metal);for(let m=.3;m<4;m+=.25)o([g-.15,m,M+1.97],[g+.15,m,M+1.97],.016,i.metal)}s(1,-.1,-25,23,.2,13,i.concrete);for(const h of[-9,-4,1,6,11])s(h,1.45,-16,.16,3.1,.18,i.metal),s(h,1.45,-18,.16,3.1,.18,i.metal),s(h,2.95,-17,.16,.16,2.3,i.metal);for(let h=0;h<5;h++)o([-10,3.04,-17.8+h*.34],[16,3.04,-17.8+h*.34],.09,i.metal);for(let h=0;h<5;h++){const g=28+h*12,M=-27-h%2*13;s(g,2,M,9,4.3,16,i.green),s(g,4.2,M,9.5,.2,16.5,i.metal);for(let m=-3.7;m<=3.7;m+=.5)s(g+m,2.1,M+8.02,.035,4.1,.03,i.metal);for(let m=-3;m<4;m+=3)s(g+m,1,M+8.05,1.9,2.1,.08,i.dark)}for(let h=0;h<10;h++){const g=4+h*3.7,M=-48-h%3*4,m=5+h%4*2;a(g,m/2,M,.55+h%2*.2,m,i.metal);for(let f=2;f<m;f+=1.5)r(new an(.92,.035,4,18),i.dark,g,f,M,Math.PI/2);o([g-.7,.2,M],[g-.7,m,M],.06,i.dark)}for(const h of[-17,-5,8,22,38,54])a(h,2.65,13.1,.045,5.6,i.metal),o([h,5.4,13.1],[h,5.65,12.2],.04,i.metal),s(h,5.62,12.1,.26,.08,.45,i.dark);for(let h=-26;h<=64;h+=2)a(h,.6,-34,.025,1.5,i.dark),o([h,.2,-34],[h+2,1.15,-34],.008,i.metal),o([h,1.15,-34],[h+2,.2,-34],.008,i.metal);const l=13.7,c=-7.1;s(l,.27,c,1.1,.2,4.9,i.dark),r(new Et(.55,.55,3.5,32),i.metal,l,.95,c-.4,Math.PI/2);for(const h of[c-2.15,c+1.35])r(new rn(.55,20,12),i.metal,l,.95,h);s(l,.77,c+2.45,1.15,1.05,1.2,i.paint),s(l,1.01,c+3.06,.97,.38,.025,i.dark);for(const h of[l-.59,l+.59])for(const g of[-1.7,-1.1,2.6])a(h,.3,c+g,.28,.16,i.dark,Math.PI/2),a(h+(h<l?-.09:.09),.3,c+g,.13,.02,i.metal,Math.PI/2);for(const h of[l-.3,l+.3])o([h,1.57,c-1.8],[h,1.57,c+1],.018,i.metal);const u=new Cr({color:3885614,roughness:1});let p=7241;const d=()=>(p=p*1664525+1013904223>>>0,p/4294967296);for(let h=0;h<145;h++){const g=-125+d()*250,M=h<95?-86-d()*24:75+d()*40,m=3.1+d()*4;a(g,m*.26,M,.08,m*.6,i.dark);for(let f=0;f<5;f++)r(new ul(m*(.19-f*.014),0),u,g+(d()-.5)*m*.32,m*(.48+f*.1),M+(d()-.5)*m*.32,0,d()*3)}for(const[h,g]of t){const M=g.every(y=>y.index),m=g.map(y=>!M&&y.index?y.toNonIndexed():y),f=ju(m,!1);if(new Set([...g,...m]).forEach(y=>y.dispose()),!f)continue;const x=new Gt(f,h);x.castShadow=!1,x.receiveShadow=h!==u,e.add(x)}return e}const eh=new ll(sn.map(i=>new D(...i.position)),!1,"catmullrom",.25),th=new ll(sn.map(i=>new D(...i.target)),!1,"catmullrom",.2),Fc=new ut,Oc=new D,ml=sn[4],nh=sn[5],Gr=.906,ea=new D(Ot.x,1.66,Ot.z+fn+1.72),Ga=new D(...ml.position),Ha=new D(...ml.target),Go=new D(...nh.position),ih=new D(...nh.target),Ho=new D(Ot.x,1.51,Ot.z-.42),rh=new D(0,0,-33),sh=(i,e)=>e.clone().sub(i.getPoint(.8-1e-4)).divideScalar(1e-4*5*(ml.at-sn[3].at)),ta=Gr-Wa,I_=new ia(Ga,Ga.clone().addScaledVector(sh(eh,Ga),ta/3),ea.clone().addScaledVector(rh,-ta/3),ea),N_=new ia(Ha,Ha.clone().addScaledVector(sh(th,Ha),ta/3),Ho,Ho),U_=new ia(ea,ea.clone().addScaledVector(rh,(1-Gr)/3),Go,Go);function ks(i){const e=Math.min(1,Math.max(0,i));return e*e*(3-2*e)}function F_(i,e,t,n=new hi){const r=Math.min(1,Hc(i)/.23),s=r*r*(3-2*r);return Oc.set(0,s,-(1-s)).normalize(),Fc.lookAt(e,t,Oc),n.setFromRotationMatrix(Fc)}function O_(i,e=new D,t=new D){const n=Hc(i);if(n>=Wa){if(n<Gr){const o=(n-Wa)/ta;I_.getPoint(o,e),N_.getPoint(o,t)}else{const o=(n-Gr)/(1-Gr);U_.getPoint(o,e),t.copy(Ho).lerp(ih,ks(o))}return{eye:e,focus:t}}let r=sn.findIndex((o,l)=>l<sn.length-1&&n<sn[l+1].at);r<0&&(r=sn.length-2);const s=Math.min(1,Math.max(0,(n-sn[r].at)/(sn[r+1].at-sn[r].at))),a=(r+s)/(sn.length-1);return eh.getPoint(a,e),th.getPoint(a,t),r===2&&(e.y+=Math.sin(Math.PI*s)**2*1.8),{eye:e,focus:t}}function B_(i,e,t=new D,n=new D){O_(i,t,n);const r=e<.85,s=r?1-ks((i-.035)/.195):0,a=Math.max(1,1.2/e),o=Math.min(1.65,a),l=1-ks((i-.72)/.09),c=Math.max(1,1.11/e),u=1+(o-1)*l+Math.max(0,c-o)*s;t.sub(n).multiplyScalar(u).add(n);const p=ks((i-.921)/.079),d=r?4.08:e>=1.2?5.42:4.6,h=Go.distanceTo(ih),M=48+(Math.min(116,Math.max(47,Math.atan(d/(2*h*e))*360/Math.PI))-48)*p;return{eye:t,focus:n,fov:M,viewX:e>=1.2?-.1:0,viewY:.08*s-.012*p}}function z_(i){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512);let r=16273;const s=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=205;for(let l=0;l<512;l++)for(let c=0;c<512;c++){const u=(l*512+c)*4,p=(s()-.5)*12,d=Math.sin(c*.19)*4+Math.sin(c*.037)*7;n.data[u]=a+p+d,n.data[u+1]=a+p+d+2,n.data[u+2]=a+p+d-2,n.data[u+3]=255}t.putImageData(n,0,0);{t.fillStyle="#deded2",t.fillRect(0,0,512,512);for(let c=0;c<95;c++){const u=s()*512,p=s()*512,d=18+s()*90,h=t.createRadialGradient(u,p,0,u,p,d);h.addColorStop(0,`rgba(89,84,68,${.025+s()*.07})`),h.addColorStop(1,"rgba(89,84,68,0)"),t.fillStyle=h,t.fillRect(u-d,p-d,d*2,d*2)}for(let c=0;c<4;c++){const u=c*128;t.fillStyle="#65665445",t.fillRect(0,u,512,1.2),t.fillStyle="#ffffff50",t.fillRect(0,u+2,512,1);for(let p=0;p<8;p++){const d=(p*64+c%2*32)%512;if(t.fillStyle="#69716929",t.fillRect(d,u,.8,128),s()>.45){const h=t.createLinearGradient(0,u,0,u+70);h.addColorStop(0,"#735e3f30"),h.addColorStop(1,"#735e3f00"),t.fillStyle=h,t.fillRect(d-2,u+2,4+s()*4,70)}}}for(let c=0;c<300;c++)t.fillStyle=`rgba(73,75,67,${s()*.055})`,t.fillRect(s()*512,0,.4+s(),40+s()*470);const l=t.createLinearGradient(0,435,0,512);l.addColorStop(0,"#555c4500"),l.addColorStop(1,"#555c4555"),t.fillStyle=l,t.fillRect(0,435,512,77)}const o=new jr(e);return o.colorSpace=Pt,o.wrapS=o.wrapT=kr,o}function G_(i){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.fillStyle="#27382f",t.textAlign="center",t.font="600 78px Arial",t.fillText(`РВС-0${i+1}`,256,105),t.fillStyle="#456553",t.font="26px Arial",t.fillText("РЕЗЕРВУАРНЫЙ ПАРК",256,157),t.fillRect(50,190,412,5);const n=new jr(e);return n.colorSpace=Pt,n}function Bc(i,e,t){const n=document.createElement("canvas");n.width=Math.round(128*t),n.height=128;const r=n.getContext("2d");r.fillStyle="#172526",r.fillRect(0,0,n.width,128),r.fillStyle="#b9dca7",r.fillRect(11,21,7,85),r.textAlign="center",r.fillStyle="#e5eee7",r.font="600 49px Arial",r.fillText(i,n.width/2,61),r.fillStyle="#a6c0b6",r.font="25px Arial",r.fillText(e,n.width/2,99);const s=new jr(n);return s.colorSpace=Pt,s}const zc=[{short:"Уровень",label:"Уровнемеры",count:xr.levels,color:"#76ccb9"},{short:"Газ",label:"Газоанализаторы",count:xr.gases,color:"#e9bd7a"},{short:"Камеры",label:"Видеонаблюдение",count:xr.cameras,color:"#91b5dc"},{short:"Пожар",label:"Пожарные извещатели",count:xr.fire,color:"#e2a689"},{short:"Доступ",label:"Контроль доступа",count:xr.access,color:"#b6ce91"}];function H_(i){const e=document.createElement("canvas");e.width=768,e.height=410;const t=e.getContext("2d"),n=new jr(e);n.colorSpace=Pt;const r=(c,u)=>c.toFixed(u).replace(".",","),s=(c,u,p,d,h,g=!1)=>{t.fillStyle=h,t.font=`${g?"600":"400"} ${d}px Arial`,t.fillText(c,u,p)},a=(c,u,p,d,h)=>{t.fillStyle=h,t.fillRect(c,u,p,d)};let o="";const l=(c,u=0)=>{const p=Vc(c),d=Math.floor(u*10),h=[p.levels.join(),p.gases.join(),String(d),"static"][i];if(o===h)return;o=h;const g=["Уровни резервуаров","Газовый контроль","Передача сигналов","Состояние систем"],M=["#76ccb9","#e9bd7a","#91b5dc","#b6ce91"][i];a(0,0,768,410,"#0c1c1c"),a(0,0,768,5,M),s("СБ+  /  ПОСТ КОНТРОЛЯ",28,42,17,"#9ab5b1",!0),s(g[i],28,84,34,"#edf4ec",!0),a(28,103,712,1,"#31514b"),i===0&&p.levels.forEach((m,f)=>{const x=122+f*60;a(28,x,712,50,"#142b2a"),s(`РВС-0${f+1}`,48,x+33,23,"#d3e5de",!0),a(184,x+19,365,12,"#2d4745"),a(184,x+19,365*m/100,12,M),s(`${r(m,1)} %`,594,x+34,26,"#f0f5ee",!0)}),i===1&&p.gases.forEach((m,f)=>{const x=122+f*78;a(28,x,712,65,"#192c2a"),a(28,x,4,65,M),s(`Г-0${f+1}`,48,x+41,23,M,!0),s(Ws[f].label,132,x+41,21,"#d4e1d7"),s(r(m,2),544,x+42,29,"#f2dec0",!0),s("% НКПР",628,x+41,19,"#b7bdb0")}),i===2&&(zc.forEach((m,f)=>{const x=28+f*145;a(x,129,132,77,"#172f2d"),a(x,129,132,3,m.color),s(m.short,x+12,158,18,"#d4e3da",!0);const y=18;for(let S=0;S<m.count;S++){const A=x+66+(S-(m.count-1)/2)*y;a(A,174,8,8,m.color),a(A+3,182,1,68,"#50746d");const T=(d+f*4+S*3)%20/20;a(A+1,190+T*54,5,5,m.color)}}),a(93,250,581,2,"#50746d"),a(383,250,2,40,"#91b5dc"),a(236,286,296,57,"#233d40"),s("Диспетчерский щит",263,323,23,"#dce9e7",!0)),i===3&&(a(28,122,148,230,"#21392f"),s(String(kc),49,226,73,M,!0),s("каналов",51,260,21,"#c5d4bd"),zc.forEach((m,f)=>{const x=122+f*46;a(193,x,547,40,"#162d29"),a(209,x+15,9,9,m.color),s(m.label,231,x+27,22,"#d4e4da"),s(String(m.count),696,x+27,22,m.color,!0)})),a(28,371,712,1,"#31514b"),s("Демонстрационные показания",28,395,16,"#a4beb2"),n.needsUpdate=!0};return l(1),{texture:n,update:l}}function V_(){const i=document.createElement("canvas");i.width=2048,i.height=1536;const e=i.getContext("2d"),t=76,n=1024,r=768,s=f=>n+f*t,a=f=>r+f*t;e.fillStyle="#102922",e.fillRect(0,0,2048,1536);const o=(f,x="#96b7a3",y=2,S=[])=>{e.strokeStyle=x,e.lineWidth=y,e.setLineDash(S),e.beginPath(),f.forEach((A,T)=>{T?e.lineTo(s(A[0]),a(A[1])):e.moveTo(s(A[0]),a(A[1]))}),e.stroke(),e.setLineDash([])},l=(f,x,y,S,A,T)=>{T&&(e.fillStyle=T,e.fillRect(s(f-y/2),a(x-S/2),y*t,S*t)),e.strokeStyle=A,e.lineWidth=2,e.strokeRect(s(f-y/2),a(x-S/2),y*t,S*t)},c=(f,x,y,S=22,A="#c9dccb",T="center")=>{e.fillStyle=A,e.font=`500 ${S}px Arial`,e.textAlign=T,e.fillText(f,s(x),a(y))};for(let f=-12;f<=12;f++)o([[f,-8.8],[f,8.8]],"#7d9d8d13",1);for(let f=-8;f<=8;f++)o([[-12.8,f],[12.8,f]],"#7d9d8d13",1);l(0,0,18,12,"#b6ceb3"),l(ai.x,ai.z,ai.width,ai.depth,"#b6ceb3","#19332b");const{west:u,east:p,north:d,south:h}=qc;l((u+p)/2,(d+h)/2,p-u,h-d,"#8fa59a","#1b342b"),l(yn.x,yn.z,yn.width,yn.depth,"#536d61","#263d33"),o([[yn.x,-10.8/2],[yn.x,yn.depth/2]],"#c2cdb494",2,[18,17]),Wc.forEach(([f,x,y],S)=>{e.fillStyle="#29473a",e.strokeStyle="#c3d5ba",e.lineWidth=2.8,e.beginPath(),e.arc(s(f),a(x),y*t,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="#799d88",e.lineWidth=1,e.beginPath(),e.arc(s(f),a(x),y*t*.88,0,Math.PI*2),e.stroke(),o([[f-y-.18,x],[f+y+.18,x]],"#78998a88",1,[12,6]),o([[f,x-y-.18],[f,x+y+.18]],"#78998a88",1,[12,6]),c(`РВС-0${S+1}`,f,x+.1,25);const A=qa(S);o([[f,x+A*y],[f,ji[S<2?0:1].z]],"#c3b38a",4);const T=Yc(S);l(f,x+T*(y+.1),.44,.28,"#a7c1ad","#315043")}),l(Qt.x,Qt.z,Qt.width,Qt.depth,"#a9c0b0","#304b3e");for(let f=4;f<7.4;f+=.28)o([[f,Qt.z-Qt.depth/2],[f,Qt.z+Qt.depth/2]],"#a3b8a340",1);c("ПРОИЗВОДСТВЕННЫЙ",Qt.x,Qt.z-.15,17),c("КОРПУС",Qt.x,Qt.z+.2,17);for(const f of ji)o([[-7,f.z],[Sl,f.z]],"#c3b38a",4),o([[Sl,f.z],[7.8,f.z]],"#c3b38a",3,[8,5]);l(Ot.x,Ot.z,Ot.width,Ot.depth,"#b3d1b6","#29493a"),c("ПОСТ КОНТРОЛЯ",Ot.x,Ot.z+.08,21);for(const f of Us)o([[f,ji[0].z],[f,Xa-Dr]],"#c3b38aa3",2),e.strokeStyle="#a1b9a9",e.beginPath(),e.arc(s(f),a(Xa),Dr*t,0,Math.PI*2),e.stroke();for(const f of Xc)l(f,er.z,er.width,er.depth,"#a1b9a9","#294436");Ws.forEach((f,x)=>{e.fillStyle="#e2bd84",e.beginPath(),e.arc(s(f.x),a(f.z),4.8,0,Math.PI*2),e.fill(),x===2&&c("Г-03",f.x+.08,f.z-.18,14,"#e2bd84")}),c("НАСОСНАЯ",7.84,2.73,14),o(Xs.slice(0,5),"#789888",2,[6,5]),o(Xs.slice(5),"#789888",2,[6,5]),o([[2.35,7],[2.35,5.9]],"#d2dfc1",4),o([[2.05,6.2],[2.35,5.9],[2.65,6.2]],"#d2dfc1",3),c("ВЪЕЗД",2.35,7.4,19),o([[-9,-6.6],[9,-6.6]],"#718e7e");for(const f of[-9,9])o([[f,-6.3],[f,-6.9]],"#aac3ac");c("РЕЗЕРВУАРНЫЙ ПАРК",-3.8,-5.4,21,"#d1ddba"),c("С",11.4,-6.7,24),o([[11.4,-5.4],[11.4,-6.4]],"#b8d1b7",3),o([[11.1,-6.05],[11.4,-6.4],[11.7,-6.05]],"#b8d1b7",3),o([[-9,7.5],[-7.9,7.5]],"#c3b38a",4),c("Трубопроводы",-7.7,7.57,17,"#aac3ac","left"),o([[-4.6,7.5],[-3.5,7.5]],"#789888",2,[6,5]),c("Ограждение",-3.3,7.57,17,"#aac3ac","left");const g=new jr(i);g.colorSpace=Pt;const M=new dn({map:g,transparent:!0,depthWrite:!1,toneMapped:!1}),m=new Gt(new li(2048/t,1536/t),M);return m.rotation.x=-Math.PI/2,m.position.y=.04,{mesh:m,material:M,texture:g}}const Vo=.255,Ns=.193,Lr=.238;function k_(i,e){const t=i*.88,n=Math.sqrt(t**2-Vo**2),r=n-.067,s=i+.145,a=s-.016,o=Ya(e,i,t),l=Ya(e,i,r)+.029;return{railRadius:t,openingDepth:n,landingInside:r,landingOutside:a,ladderDepth:s,roofAtRail:o,landingTop:l,railTop:o+.365,railMiddle:o+.192,lastRung:l-.158,highestHoop:l-.174,outermostDepth:s+Lr+.011}}function W_(i,e,t,n,r){const{box:s,rod:a,mesh:o,materials:{steel:l,galvanized:c,silver:u,roof:p}}=r,d=k_(e,t),{railRadius:h,openingDepth:g,roofAtRail:M,railTop:m,railMiddle:f,landingTop:x}=d,{ladderDepth:y,landingInside:S,landingOutside:A,lastRung:T,highestHoop:_}=d,v=(Q,he,Z)=>[Q,he,n*Z],P=Math.asin(Vo/h),R=n*Math.PI/2+P,N=2*Math.PI-2*P;for(const[Q,he]of[[f,.013],[m,.016]])o(new an(h,he,5,60,N),c,i,0,Q).rotation.set(Math.PI/2,0,R);for(let Q=0;Q<=14;Q++){const he=R+Q*N/14,Z=Math.cos(he)*h,le=Math.sin(he)*h;s(i,[.066,.02,.066],[Z,M+.004,le],l),a(i,[Z,M,le],[Z,m,le],.013,c)}const O=A-S,k=(S+A)/2,C=.498;for(const Q of[-.237,.237])s(i,[.039,.048,O],v(Q,x-.024,k),l);for(const Q of[S+.014,A-.014])s(i,[C,.045,.029],v(0,x-.0225,Q),c);const V=Math.ceil(O/.032);for(let Q=1;Q<V;Q++){const he=S+Q*O/V;s(i,[.456,.019,.012],v(0,x-.01,he),c)}for(const Q of[-.115,.115])s(i,[.012,.016,O-.022],v(Q,x-.019,k),l);for(const Q of[-.224,.224]){const he=Math.sqrt(e**2-Q**2);a(i,v(Q,t-.08,he-.018),v(Q,x-.042,A-.025),.016,l)}const I=-.06,G=.175,j=Math.ceil((T-G)/.223),B=.036;for(const Q of[-Ns,Ns]){s(i,[.094,.079,.114],v(Q,I+.0395,y+.033),l);const he=I+.069;s(i,[B,m-he,.033],v(Q,(m+he)/2,y),c);const Z=Math.sqrt(e**2-Q**2);for(const Ee of[.49,t*.54,t+.113])s(i,[.087,.095,.029],v(Q,Ee,Z-.002),p),a(i,v(Q,Ee,Z),v(Q,Ee,y),.015,l);const le=Math.sign(Q);for(const Ee of[f,m])a(i,v(Q,Ee,y),v(le*Vo,Ee,g),.015,c)}for(let Q=0;Q<=j;Q++){const he=G+Q*(T-G)/j;s(i,[Ns*2+.02,.021,.039],v(0,he,y),u)}const Y=1.37,ee=Math.ceil((_-Y)/.565);for(let Q=0;Q<=ee;Q++){const he=Y+Q*(_-Y)/ee,Z=o(new an(Lr,.011,4,18,Math.PI),p,i,0,he,n*y);Z.rotation.x=n*Math.PI/2;for(const le of[-1,1])a(i,v(le*Ns,he,y),v(le*Lr,he,y),.011,p)}for(const Q of[Math.PI/4,Math.PI/2,Math.PI*3/4]){const he=Math.cos(Q)*Lr,Z=y+Math.sin(Q)*Lr,le=s(i,[.021,_-Y,.013],v(he,(_+Y)/2,Z),p);le.rotation.y=n*(Q-Math.PI/2)}}const Mi=.22,Va=1.5,ka=.11;function X_(i,{box:e,pipe:t,materials:n}){const{width:r,depth:s}=Qt,{concrete:a,cladding:o,galvanized:l,steel:c,glass:u,silver:p}=n,d=(I,G,j,B,Y,ee)=>{const[Q,he,Z]=G;return I==="south"||I==="north"?e(i,[Q,he,Z],[j,B,(I==="south"?1:-1)*(s/2+Y)],ee):e(i,[Z,he,Q],[(I==="east"?1:-1)*(r/2+Y),B,j],ee)},h=(I,G)=>{const j=(I==="south"||I==="north"?r:s-ka*2)/2,B=(ee,Q,he,Z)=>{Q-ee<=.001||Z-he<=.001||d(I,[Q-ee,Z-he,ka],(ee+Q)/2,(he+Z)/2,-ka/2,o)};let Y=-j;for(const{center:ee,width:Q,bottom:he,top:Z}of G){const le=ee-Q/2,Ee=ee+Q/2;B(Y,le,Mi,Va),B(le,Ee,Mi,he),B(le,Ee,Z,Va),Y=Ee}B(Y,j,Mi,Va)},g=(I,G,j,B=.038)=>{const{center:Y,width:ee,bottom:Q,top:he}=G,Z=(Q+he)/2;for(const le of[-1,1])d(I,[B,he-Q+B*2,.056],Y+le*(ee-B)/2,Z,-.01,j);d(I,[ee-B*2,B,.056],Y,he-B/2,-.01,j),d(I,[ee-B*2,B,.056],Y,Q+B/2,-.01,j)},M=(I,G)=>{const{center:j,width:B,bottom:Y,top:ee}=G,Q=(Y+ee)/2;g(I,G,c,.033),d(I,[B-.064,ee-Y-.064,.019],j,Q,-.048,u),d(I,[.022,ee-Y-.064,.029],j,Q,-.026,l),d(I,[B+.044,.029,.069],j,Y-.01,.013,l)},m=(I,G)=>{const{center:j,width:B,bottom:Y,top:ee}=G;g(I,G,c,.027),d(I,[B-.052,ee-Y-.052,.022],j,(ee+Y)/2,-.062,c);for(let Q=Y+.051;Q<ee-.031;Q+=.052)d(I,[B-.06,.018,.026],j,Q,-.027,l)};e(i,[r+.17,.145,s+.17],[0,.0725,0],a,!0),e(i,[r+.055,Mi-.145,s+.055],[0,(Mi+.145)/2,0],a);for(const I of["south","north","east","west"]){const G=I==="south"||I==="north"?r:s;I!=="south"&&d(I,[G,.033,.045],0,.228,.015,c),d(I,[G+.064,.129,.072],0,1.55,.015,c);const j=G/2-.042;for(const B of[-1,1])d(I,[.053,1.28,.037],B*j,.865,.012,l)}const f={center:-1.165,width:.52,bottom:Mi,top:1.245},x={center:-.439,width:.48,bottom:.878,top:1.293},y={center:.624,width:1.21,bottom:Mi,top:1.311},S={center:1.537,width:.3,bottom:.778,top:1.192};h("south",[f,x,y,S]);const A=[[-r/2,f.center-f.width/2],[f.center+f.width/2,y.center-y.width/2],[y.center+y.width/2,r/2]];for(const[I,G]of A)d("south",[G-I,.033,.045],(I+G)/2,.228,.015,c);M("south",x),m("south",S),g("south",f,l);const T=(f.top+f.bottom)/2;d("south",[f.width-.074,f.top-f.bottom-.074,.036],f.center,T,-.056,c),d("south",[.313,.136,.014],f.center,.971,-.029,l),d("south",[.27,.099,.013],f.center,.971,-.019,u),d("south",[.121,.022,.028],f.center+.135,.669,-.021,p),d("south",[.703,.061,.164],f.center,.168,.041,a),g("south",y,l,.048),d("south",[y.width-.094,y.top-y.bottom-.094,.034],y.center,.7655,-.056,c);for(let I=.331;I<1.25;I+=.102)d("south",[y.width-.116,.013,.019],y.center,I,-.032,l);d("south",[.153,.025,.032],y.center,.507,-.017,p),d("south",[1.375,.048,.137],y.center,.185,.045,a),d("south",[1.291,.081,.087],y.center,1.374,.015,c);const _={center:-.991,width:.57,bottom:.633,top:1.274},v=[-.175,.563,1.301].map(I=>({center:I,width:.565,bottom:.9,top:1.323}));h("east",[_,...v]),m("east",_);for(const I of v)M("east",I);const P={center:-.69,width:.68,bottom:.702,top:1.301},R={center:.63,width:.92,bottom:.865,top:1.326};h("west",[P,R]),m("west",P),M("west",R);const N={center:.46,width:.84,bottom:.795,top:1.326};h("north",[N]),m("north",N);const O=.049,k=Fi.width/2-.022,C=Math.atan2(O,k),V=Fi.height-.018;for(const I of[-1,1]){const G=I*k/2,j=V-O/2-.016,B=e(i,[Math.hypot(k,O),.033,Fi.depth-.023],[G,j,0],l);B.rotation.z=-I*C;for(let Y=-1.79;Y<=1.8;Y+=.297){const ee=e(i,[k-.014,.012,.015],[G,j+.021,Y],l);ee.rotation.z=-I*C}e(i,[.068,.062,Fi.depth-.014],[I*(Fi.width/2-.041),V-O-.026,0],c)}e(i,[.071,.023,Fi.depth-.01],[0,V+.003,0],l);for(const[I,G]of[[-.705,-.424],[.647,-.438]]){e(i,[.447,.047,.481],[I,1.634,G],c),e(i,[.361,.161,.389],[I,1.711,G],l),e(i,[.413,.055,.451],[I,1.8,G],c),e(i,[.478,.034,.521],[I,1.837,G],l);for(const j of[-.126,.126])e(i,[.035,.026,.035],[I+j,1.818,G+.168],l)}for(const I of[-1,1]){const G=I*1.902,j=I*1.774,B=s/2;t(i,[[G,1.555,B-.045],[j,1.449,B+.045],[j,.191,B+.045],[j,.165,B+.079]],.017,l);for(const Y of[.485,1.175])d("south",[.064,.034,.046],j,Y,.023,l);d("south",[.152,.036,.111],j,.033,.059,a)}}function ah(i,e=.18){const t=i.map(s=>new D(s[0],s[1],s[2])),n=new Lu;let r=t[0];for(let s=1;s<t.length-1;s++){const a=t[s],o=t[s-1],l=t[s+1],c=Math.min(e,a.distanceTo(o)*.35,a.distanceTo(l)*.35),u=a.clone().add(o.clone().sub(a).normalize().multiplyScalar(c)),p=a.clone().add(l.clone().sub(a).normalize().multiplyScalar(c));r.distanceTo(u)>1e-5&&n.add(new Qs(r,u)),n.add(new cl(u,a,p)),r=p}return n.add(new Qs(r,t.at(-1))),n}function q_(i,e){const n=ah(i).curves.map(o=>({curve:o,segments:o instanceof Qs?1:8})),r=n.reduce((o,l)=>o+l.segments,0),s=o=>{let l=o*r;for(const c of n){if(l<=c.segments)return{curve:c.curve,t:l/c.segments};l-=c.segments}return{curve:n[n.length-1].curve,t:1}},a=new class extends Tn{constructor(){super()}getPoint(o,l){const c=s(o);return c.curve.getPoint(c.t,l)}getPointAt(o,l){return this.getPoint(o,l)}getTangentAt(o,l){const c=s(o);return c.curve.getTangent(c.t,l)}};return new fl(a,r,e,12,!1)}function oh(i,e){for(const n of[...i.children])n instanceof Zt&&oh(n,e);const t=new Map;for(const n of i.children){if(!(n instanceof Gt)||n.children.length||e.has(n)||Array.isArray(n.material))continue;const r=`${n.material.uuid}/${n.castShadow}/${n.receiveShadow}`,s=t.get(r)||[];s.push(n),t.set(r,s)}for(const n of t.values()){if(n.length<2)continue;const r=n.every(l=>l.geometry.index),s=n.map(l=>(l.updateMatrix(),(!r&&l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone()).applyMatrix4(l.matrix))),a=ju(s,!1);if(s.forEach(l=>l.dispose()),!a)continue;const o=new Gt(a,n[0].material);o.castShadow=n[0].castShadow,o.receiveShadow=n[0].receiveShadow;for(const l of n)i.remove(l),l.geometry.dispose();i.add(o)}}const Gc=new D(0,1,0),lh=No.clamp,Yt=(i,e,t)=>{const n=lh((i-e)/(t-e),0,1);return n*n*(3-2*n)};function Z_(i,e){let t=!1;const n=new C_({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth>700?1.75:1.35)),n.setClearColor(0,0),n.outputColorSpace=Pt,n.toneMapping=Wo,n.toneMappingExposure=.9,n.shadowMap.enabled=window.innerWidth>700,n.shadowMap.type=Ir,n.shadowMap.autoUpdate=!1;const r=new Pf;r.background=new Qe(1058079);const s=new dn({side:jt,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),a=new Gt(new rn(200,32,20),s);a.rotation.y=1.2,a.renderOrder=-10,r.add(a);const o=new pn(48,1,.06,450),l=new tl(12766160,.009);r.fog=l,r.environmentIntensity=.75;let c=null;const u="./images/industrial/r2/";let p=()=>{};const d=new Promise(F=>{p=F});let h=!1;const g=new Bu(p,(F,K,$)=>{t||e(K/$)},()=>{h=!0}),M=new Pd(g);new L_(g).load(u+"daylight-hdri.hdr",F=>{if(t){F.dispose();return}F.mapping=Fs,c=F,r.environment=F,s.map=F,s.needsUpdate=!0,r.backgroundBlurriness=0,r.backgroundIntensity=.8,r.environmentRotation.y=r.backgroundRotation.y=1.2});const m=[],f=new Zt;r.add(f),r.add(new Ld(13360618,6446147,.75));const x=new fc(16773338,2.5);x.position.set(-12,16,-8),x.castShadow=!0,x.shadow.mapSize.set(1536,1536),Object.assign(x.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:.5,far:65}),x.shadow.normalBias=.018,x.shadow.bias=-15e-5,r.add(x);const y=new fc(12770280,.25);y.position.set(7,6,-8),r.add(y);const S=[],A=(F,K=.15,$=.52)=>{const H=new Cr({color:F,metalness:K,roughness:$,transparent:!0});return S.push(H),H},T=A(12631472,.03,.93),_=A(15329762,.04,.74),v=A(12502467,.5,.4),P=A(3427395,.5,.4),R=A(4811867,.25,.5),N=A(10919299,.6,.36),O=A(14739931,.15,.4),k=A(2444613,.4,.24),C=z_();m.push(C),_.map=_.bumpMap=C,_.bumpScale=.012,v.map=C,v.roughness=.58,R.map=C,R.roughness=.75;const V=A(10594209,.05,.96),I=(F,K=!1)=>{const $=M.load(u+F+".webp",H=>{t&&H.dispose()});return $.colorSpace=K?Pt:qn,$.wrapS=$.wrapT=kr,$.anisotropy=Math.min(K?4:2,n.capabilities.getMaxAnisotropy()),m.push($),$};T.map=I("concrete-diffuse",!0),T.normalMap=I("concrete-nor_gl"),T.normalScale.set(.5,.5),T.roughnessMap=I("concrete-rough"),T.color.setHex(11908004),V.map=I("asphalt-diffuse",!0),V.color.setHex(10066842),V.normalMap=I("asphalt-nor_gl"),V.normalScale.set(.35,.35),V.roughnessMap=I("asphalt-rough");const G=new Cr({color:9079656,roughness:1,map:I("terrain-diffuse",!0),normalMap:I("terrain-nor_gl")});G.normalScale.set(.5,.5);const j=A(11778223,.12,.78);j.map=I("wall-diffuse",!0),j.normalMap=I("wall-nor_gl"),j.normalScale.set(.6,.6),j.roughnessMap=I("wall-rough");const B=A(12963274,.8,.65);B.map=I("zinc-diffuse",!0),B.normalMap=I("zinc-nor_gl"),B.normalScale.set(.15,.15),B.roughnessMap=I("zinc-rough");const Y=A(5278625,.5,.33),ee=A(10242357,.3,.58),Q=new Qi({color:10409920,transparent:!0,opacity:.7}),he=new Qi({color:8894368,transparent:!0,opacity:.55}),Z=new Zt,le=new Zt,Ee=[];f.add(Z,le);const Fe=D_({ground:G,road:V.clone(),concrete:T.clone(),metal:B.clone(),paint:_.clone(),dark:P.clone(),green:j.clone()});r.add(Fe);const Te=[...new Set(Fe.children.map(F=>F.material))];Te.forEach(F=>{F.transparent=!0});const Ge=V_();m.push(Ge.texture),f.add(Ge.mesh);const Ne=(F,K,$,H=0,Me=0,we=0,Ve=!1)=>{const je=new Gt(F,K);return je.position.set(H,Me,we),je.castShadow=!0,je.receiveShadow=!0,$.add(je),Ve&&je.add(new Da(new Wf(F,28),Q)),je},ie=(F,K,$,H=P,Me=!1)=>{const we=new Ci(...K);if(H===T||H===V||H===j||H===B){const Ve=we.attributes.uv,je=we.attributes.normal;for(let vt=0;vt<Ve.count;vt++)Ve.setXY(vt,Ve.getX(vt)*(Math.abs(je.getX(vt))>.5?K[2]:K[0])/2,Ve.getY(vt)*(Math.abs(je.getY(vt))>.5?K[2]:K[1])/2)}return Ne(we,H,F,...$,Me)},rt=(F,K,$=he)=>{const H=new Rt().setFromPoints(F.map(we=>new D(...we))),Me=new Eu(H,$);return K.add(Me),Me},at=(F,K,$,H=.025,Me=P)=>{const we=Ne(new an(K,H,5,48),Me,F,0,$,0);return we.rotation.x=Math.PI/2,we},Ue=(F,K,$,H=.035,Me=P)=>{const we=new D(...K),Ve=new D(...$),je=Ve.clone().sub(we),vt=Ne(new Et(H,H,je.length(),12),Me,F);return vt.position.copy(we.add(Ve).multiplyScalar(.5)),vt.quaternion.setFromUnitVectors(Gc,je.normalize()),vt},gt=(F,K,$=.075,H=N)=>Ne(q_(K,$),H,F),ft=(F,K,$,H=.13)=>{const Me=new D(...K),we=new D(...$).normalize(),Ve=Ne(new Et(H,H,.055,24),B,F,...K);Ve.quaternion.setFromUnitVectors(Gc,we);const je=new D(1,0,0);Math.abs(we.x)>.9&&je.set(0,0,1);const vt=new D().crossVectors(we,je).normalize();for(let _n=0;_n<6;_n++){const xn=_n*Math.PI/3,An=Me.clone().addScaledVector(je,Math.cos(xn)*H*.78).addScaledVector(vt,Math.sin(xn)*H*.78);Ne(new Et(.018,.018,.078,6),P,F,An.x,An.y,An.z).quaternion.copy(Ve.quaternion)}},Vt=(F,K,$,H)=>{Ue(F,[K,$,H-.19],[K,$,H+.19],.115,ee),ft(F,[K,$,H-.18],[0,0,1],.16),ft(F,[K,$,H+.18],[0,0,1],.16),Ne(new rn(.135,16,10),ee,F,K,$,H),Ue(F,[K,$,H],[K,$+.2,H],.075,ee),Ue(F,[K,$+.2,H],[K,$+.38,H],.025,B);const Me=Ne(new an(.14,.018,6,24),ee,F,K,$+.39,H);Me.rotation.x=Math.PI/2;for(let we=0;we<3;we++){const Ve=we*Math.PI*2/3;Ue(F,[K,$+.39,H],[K+Math.cos(Ve)*.14,$+.39,H+Math.sin(Ve)*.14],.012,ee)}},ot=(F,K,$,H)=>{const Me=new Zt;return Me.position.set(F,.04,K),Z.add(Me),Ee.push({group:Me,start:$,end:H}),Me},en=ie(f,[18,.16,12],[0,-.1,0],T);en.castShadow=!1;const bt=ie(f,[ai.width,.15,ai.depth],[ai.x,-.106,ai.z],T);bt.castShadow=!1,ie(Z,[yn.width,.035,yn.depth],[yn.x,.02,yn.z],V);for(let F=-4.8;F<=5;F+=1.1)ie(Z,[.045,.015,.48],[2.35,.05,F],v);const kt=Wc,Bt=[],Wt=[],z=[],Jt=[],_t=new Cr({color:4893870,emissive:1391934,roughness:.22,transparent:!0,opacity:.65,depthWrite:!1}),mt=new dn({color:8706772,transparent:!0,opacity:.75,depthWrite:!1});kt.forEach(([F,K,$,H],Me)=>{const we=ot(F,K,.1+Me*.035,.34+Me*.035);Ne(new Et($+.12,$+.16,.16,48),T,we,0,.08);const Ve=_.clone();S.push(Ve),Bt.push(Ve),Ne(new Et($,$,H,96),Ve,we,0,H/2+.16,0,!0);const je=Ne(new Et(.16,$+.025,.25,96),v,we,0,H+.28);je.userData.revealRoof=Me===3;const vt=G_(Me);m.push(vt);const _n=new Cr({map:vt,transparent:!0,depthWrite:!1,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-1}),xn=$+.006,An=.95/xn,Ui=new Et(xn,xn,.48,20,1,!0,ch(Me)-An/2,An);Ne(Ui,_n,we,0,H*.7).castShadow=!1,at(we,$+.012,.34,.016,R);for(let pt=.8;pt<H;pt+=.65)at(we,$+.005,pt,.006,v);for(let pt=0;pt<Math.PI*2;pt+=Math.PI/8)Ue(we,[Math.cos(pt)*.18,H+.405,Math.sin(pt)*.18],[Math.cos(pt)*$,H+.17,Math.sin(pt)*$],.009,v);W_(we,$,H,Yc(Me),{box:ie,rod:Ue,mesh:Ne,materials:{steel:P,galvanized:B,silver:_,roof:v}});const aa=Ya(H,$,Math.hypot(.45,.15));Ne(new Et(.18,.18,.18,24),B,we,.45,aa+.085,.15);const jn=qa(Me);gt(we,[[0,.5,jn*($-.08)],[0,.5,jn*($+.46)]],.09),ft(we,[0,.5,jn*($+.055)],[0,0,1],.16),Vt(we,0,.5,jn*($+.23)),Ne(new Et(.14,.14,.055,24),_,we,-.38,H+.36,.3),Ue(we,[-.38,H+.38,.3],[-.38,H+.64,.3],.052,_),Ne(new Et(.15,.15,.25,24),Y,we,-.38,H+.76,.3),ie(we,[.17,.11,.025],[-.38,H+.78,.453],k),Ue(we,[-.24,H+.76,.3],[.1,H+.76,.3],.024,P),Jt.push(new D(F-.38,H+.8,K+.3));const We=Ne(new Et($*.97,$*.97,1,64),_t,we);We.visible=!1,We.castShadow=!1,Wt.push(We);for(let pt=0;pt<3;pt++){const un=Ne(new an(.2,.012,5,40),mt,we,-.38,H,.3);un.rotation.x=Math.PI/2,un.visible=!1,un.castShadow=!1,un.userData={tank:Me,offset:pt/3},z.push(un)}});const ye=ot(Qt.x,Qt.z,.21,.46);X_(ye,{box:ie,pipe:gt,materials:{concrete:T,cladding:j,galvanized:B,steel:P,glass:k,silver:_}});for(const F of Us){const K=ot(F,Xa,.29,.48);Ne(new Et(Dr,Dr,2.3,32),_,K,0,1.6,0,!0),Ne(new rn(Dr,24,12,0,Math.PI*2,0,Math.PI/2),v,K,0,2.75);for(const $ of[-.25,.25])Ue(K,[$,.02,0],[$,.6,0],.055),ie(K,[.19,.06,.24],[$,.03,0],B);at(K,.45,1.3,.026,N)}const it=ot(0,0,.33,.52);uh.forEach(({points:F,radius:K},$)=>{gt(it,F,K);const{y:H,z:Me}=ji[$];ft(it,[-7,.5,Me],[1,0,0]),ft(it,[7.8,H,Me],[1,0,0])}),kt.forEach(([F,K,$],H)=>{const Me=qa(H);gt(it,[[F,.5,K+Me*($+.44)],[F,.5,ji[H<2?0:1].z]],.09)});for(const F of[-7,-4,-1])ie(it,[.18,.425,.8],[F,.2125,-.45],T);hh.forEach(({points:F,radius:K},$)=>{gt(it,F,K),ft(it,[Us[$],.75,.93],[0,0,1],.12)});const oe=ot(Ot.x,Ot.z,.31,.51),He=Ot.height,w=A(3424575,.24,.56),E=A(1779753,.18,.65),W=A(6648946,.12,.67),ue=A(9411223,.08,.76),ae=A(989209,.24,.54),_e=A(12236965,.07,.58),me=A(2700084,.04,.87),ne=A(12378031,0,.6);ne.emissive.setHex(6916950),ne.emissiveIntensity=.8;const re=A(12900814,0,.5);re.emissive.setHex(14675942),re.emissiveIntensity=1.3,fh.forEach(({name:F,size:K,at:$})=>{if(ie(oe,K,$,F==="пол"?T:F==="кровля"?B:j),F==="боковая стена"){const H=$[0]-Math.sign($[0])*.07;ie(oe,[.022,2.4,3.93],[H,1.43,0],ue),ie(oe,[.04,.19,3.93],[H,.25,0],E);for(const Me of[-1.26,-.5,.26,1.02,1.78])ie(oe,[.023,2.23,.012],[H*.995,1.42,Me],w)}}),ie(oe,[4.01,.03,3.84],[0,.162,0],E);for(const F of[-1.48,-.74,0,.74,1.48])ie(oe,[.009,.004,3.82],[F,.179,0],me);for(const F of[-1.44,-.72,0,.72,1.44])ie(oe,[3.99,.004,.008],[0,.179,F],me);ie(oe,[.58,.008,1.62],[0,.184,1.18],me),ie(oe,[1.48,.17,.48],[0,.085,fn+.238],T),ie(oe,[1.42,.028,.14],[0,.181,fn+.01],B);for(const F of[-.646,.646])ie(oe,[.041,2.1,.072],[F,1.222,fn+.015],w);ie(oe,[1.34,.073,.095],[0,2.301,fn+.02],w),ie(oe,[.12,.22,.062],[-.834,1.3,fn+.038],E),ie(oe,[.054,.023,.012],[-.834,1.361,fn+.074],ne);const fe=new Zt;oe.add(fe),fe.position.set(Bn.hingeX,0,Bn.hingeZ);const L=Bn.width-.023;ie(fe,[L,2.08,.048],[-L/2,1.227,0],W),ie(fe,[L-.05,.22,.014],[-L/2,.337,.028],B);for(const F of[-1,1])ie(fe,[.04,.168,.016],[-L+.13,1.154,F*.031],w),ie(fe,[.113,.032,.043],[-L+.174,1.154,F*.052],B);for(const F of[.34,1.24,2.105])ie(oe,[.08,.101,.087],[.645,F,Bn.hingeZ+.037],B),Ue(oe,[Bn.hingeX,F-.048,Bn.hingeZ],[Bn.hingeX,F+.048,Bn.hingeZ],.026,B);fe.traverse(F=>{F instanceof Gt&&(F.castShadow=!1)});const se=Bc("ПОСТ КОНТРОЛЯ","СБ+  /  ВХОД",1.02/.225);m.push(se);const te=Ne(new li(1.02,.225),new dn({map:se,toneMapped:!1}),oe,-1.337,1.87,fn+.015);te.castShadow=!1,gt(oe,[[0,2.47,-fn-.064],[0,.09,-fn-.064],[0,.09,zn+.09]],.038,B),ie(oe,[.23,.22,.17],[0,2.4,-fn-.09],E),ie(oe,[3.98,2.38,.19],[0,1.49,zn-.147],E),ie(oe,[3.91,.145,.153],[0,2.62,zn-.12],w);const xe=Bc("СБ+  /  ПОСТ КОНТРОЛЯ","РЕЗЕРВУАРНЫЙ ПАРК",2.34/.16);m.push(xe);const de=Ne(new li(2.34,.16),new dn({map:xe,toneMapped:!1}),oe,0,2.625,zn-.04);de.castShadow=!1;for(const F of[-1.65,1.65])ie(oe,[.52,.013,.016],[F,2.621,zn-.025],ne);const ge=[0,1,2,3].map(H_);ge.forEach(({texture:F},K)=>{m.push(F);const $=K%2===0?-.963:.963,H=K<2?2.011:1.024;ie(oe,[1.91,.97,.12],[$,H,zn-.062],ae);const Me=Ne(new li(1.867,.93),new dn({map:F,toneMapped:!1}),oe,$,H,zn+.002);Me.castShadow=!1,Me.receiveShadow=!1});const De=zn+.125;ie(oe,[3.91,.045,.47],[0,.519,De-.17],w);for(const F of[-1.56,-.78,0,.78,1.56]){ie(oe,[.76,.315,.376],[F,.342,De-.11],W),ie(oe,[.67,.114,.015],[F,.409,De+.083],ae);for(let K=0;K<4;K++)ie(oe,[.022,.014,.014],[F-.19+K*.093,.425,De+.094],ne);for(let K=0;K<5;K++)ie(oe,[.29,.009,.016],[F-.083,.366-K*.026,De+.085],w);ie(oe,[.032,.087,.026],[F+.28,.326,De+.098],B)}const qe=oa[4];ie(oe,qe.size,qe.at,E),ie(oe,[.354,1.362,.019],[-1.8,.88,.302],w);for(let F=0;F<8;F++)ie(oe,[.266,.043,.012],[-1.8,1.39-F*.092,.318],ae),ie(oe,[.024,.013,.011],[-1.713,1.393-F*.092,.326],ne);const ce=oa[2].at[2];ie(oe,[1.51,.056,.73],[1.23,.818,ce],_e),ie(oe,[1.47,.11,.058],[1.23,.749,ce+.335],E);for(const F of[.57,1.88])ie(oe,[.104,.58,.53],[F,.476,ce-.02],w),ie(oe,[.162,.039,.57],[F,.2,ce-.02],W);ie(oe,[.59,.021,.22],[1.076,.856,ce+.09],E);for(let F=0;F<4;F++)for(let K=0;K<12;K++)ie(oe,[.033,.012,.032],[.833+K*.044,.869,ce+.015+F*.043],W);ie(oe,[.188,.005,.224],[1.627,.849,ce+.106],me),Ne(new rn(.054,16,8),w,oe,1.627,.869,ce+.11).scale.set(1,.48,1.41);const[ze,,ve]=oa[3].at;Ue(oe,[ze,.206,ve],[ze,.523,ve],.041,B),ie(oe,[.48,.102,.461],[ze,.55,ve],E);const lt=ie(oe,[.446,.445,.085],[ze,.788,ve+.199],E);lt.rotation.x=.13;for(const F of[ze-.26,ze+.26])ie(oe,[.037,.16,.045],[F,.645,ve+.031],w),ie(oe,[.053,.044,.242],[F,.727,ve+.02],E);for(let F=0;F<5;F++){const K=F*Math.PI*2/5,$=ze+Math.cos(K)*.252,H=ve+Math.sin(K)*.252;Ue(oe,[ze,.252,ve],[$,.221,H],.018,w),Ne(new rn(.026,10,8),me,oe,$,.21,H)}ie(oe,[4.01,.032,3.91],[0,He-.018,0],ue);for(const F of[-.94,.8]){ie(oe,[3.97,.032,.058],[0,He-.033,F],w);for(const K of[-1.12,1.12])ie(oe,[1.47,.017,.108],[K,He-.055,F],re)}const Tt=new Id(15135981,4.1,4.1,2);Tt.position.set(0,2.63,.39),oe.add(Tt);const xt=ot(0,0,.25,.5),{west:Pi,east:fi,north:Li,south:di}=qc;for(const F of[Li,di])ie(xt,[fi-Pi,.38,.14],[(Pi+fi)/2,.19,F],T);for(const F of[Pi,fi])ie(xt,[.14,.38,di-Li],[F,.19,(Li+di)/2],T);for(const F of[Li,di]){const K=F+(F<0?.1:-.1);Ue(xt,[-7.8,.6,K],[.2,.6,K],.045,ee);for(const $ of[-7.65,-5.15,-2.65,-.15])ie(xt,[.14,.035,.14],[$,.392,F],B),Ue(xt,[$,.41,F],[$,.552,K],.023,B)}for(const F of dh){const[K,$]=ph;for(const H of[K,$])ie(it,[.22,.12,.22],[F,.06,H],T),ie(it,[.152,.028,.149],[F,.132,H],B),ie(it,[.085,1.895,.087],[F,1.066,H],P);ie(it,[.15,.13,$-K+.105],[F,2.01,(K+$)/2],P);for(const{y:H,z:Me}of ji){const we=H-.075-2.075;we>.01&&ie(it,[.12,we,.15],[F,2.075+we/2,Me],B);const Ve=Ne(new an(.078,.007,5,20),B,it,F,H,Me);Ve.rotation.y=Math.PI/2}}Xc.forEach((F,K)=>{ie(xt,[er.width,.12,er.depth],[F,.1,er.z],T);const $=Ne(new Et(.18,.18,.5,24),Y,xt,F,.35,2.55);$.rotation.x=Math.PI/2;for(const H of[-.104,.104])ie(xt,[.082,.073,.36],[F+H,.196,2.56],Y);for(let H=2.35;H<2.8;H+=.09){const Me=Ne(new an(.19,.014,4,24),_,xt,F,.35,H);Me.castShadow=!1}Ue(xt,[F,.35,2.12],[F,.35,2.36],.055,B),Ne(new rn(.17,20,12),Y,xt,F,.35,2.12),ie(xt,[.24,.2,.25],[F,.23,2.12],Y),gt(xt,Ml[K].points,Ml[K].radius),ft(xt,[Us[K],.65,1.86],[0,0,1]),gt(xt,yl[K].points,yl[K].radius),ft(xt,[F+.26,.35,2.12],[1,0,0],.11)});const Nn=new Zt;Nn.position.set(2.35,.1,-3.4),xt.add(Nn),ie(Nn,[.58,.25,1.35],[0,.23,0],O),ie(Nn,[.55,.26,.5],[0,.45,-.3],O),ie(Nn,[.48,.17,.025],[0,.49,-.56],k);for(const F of[-.3,.3])for(const K of[-.4,.43]){const $=Ne(new Et(.14,.14,.09,16),P,Nn,F,.14,K);$.rotation.z=Math.PI/2}const Un=ot(0,0,.39,.57),pi=Xs,Di=[],fr=new Qi({color:9154464,transparent:!0,opacity:.55});for(let F=0;F<pi.length-1;F++){const[K,$]=pi[F],[H,Me]=pi[F+1];if(K===3.7&&H===1)continue;const we=Math.ceil(Math.hypot(H-K,Me-$)/.6);for(let Ve=0;Ve<=we;Ve++){const je=No.lerp(K,H,Ve/we),vt=No.lerp($,Me,Ve/we);Di.push(je,0,vt,je,1,vt)}for(const Ve of[.25,.55,.95])Di.push(K,Ve,$,H,Ve,Me)}const mi=new Rt;mi.setAttribute("position",new nt(Di,3)),Un.add(new Da(mi,fr));const Qn=[],Ii=new dn({color:12839834,transparent:!0,opacity:.85});Qn.push(Ii);const Fn=new dn({color:10738056,transparent:!0,opacity:.12,side:Pn,depthWrite:!1});Qn.push(Fn);const dr=new Qi({color:13036957,transparent:!0,opacity:.8});Qn.push(dr);const pr=[[-7.8,4.8,-.5],[7.83,-4.8,Math.PI*.8],[-7.59,-4.54,-Math.PI*.8],[.96,5.05,.5]];pr.forEach(([F,K,$])=>{const H=new Zt;H.position.set(F,.05,K),H.rotation.y=$,le.add(H),ie(H,[.35,.08,.35],[0,.04,0],T),Ue(H,[0,0,0],[0,2.65,0],.055,_),Ue(H,[0,2.55,0],[.36,2.55,0],.045,_),ie(H,[.32,.2,.55],[.36,2.63,-.14],O),ie(H,[.23,.13,.025],[.36,2.63,-.425],k),Ne(new rn(.055,8,6),Ii,H,.36,2.65,-.45);const Me=new Du;Me.moveTo(.36,0),Me.lineTo(-1.8,-3.7),Me.quadraticCurveTo(.36,-4.8,2.5,-3.7),Me.closePath();const we=Ne(new hl(Me,20),Fn,H,0,.02,0);we.rotation.x=Math.PI/2,rt([[.36,.04,0],[-1.8,.04,-3.7],[.36,.04,-4.25],[2.5,.04,-3.7],[.36,.04,0]],H,dr)});const ns=rt(Xs.map(([F,K])=>[F,.1,K]),le,dr);ns.renderOrder=2,ie(le,[.2,.85,.2],[3.65,.43,5.4],O),ie(le,[2.6,.08,.08],[2.35,.85,5.4],R);for(let F=1.2;F<3.5;F+=.45)ie(le,[.2,.09,.09],[F,.85,5.4],v);const mr=new dn({color:14793072,transparent:!0,opacity:.9});Qn.push(mr);for(const[F,K]of[[4.8,-2.8],[6.4,-1.8]])Ne(new rn(.1,12,8),mr,le,F,1.85,K);const Ni=new Zt;f.add(Ni);const gr=[],_r=new dn({color:15844740,transparent:!0,opacity:.5,depthWrite:!1});Ws.forEach(({x:F,z:K},$)=>{const H=new Zt;H.position.set(F,.05,K),Ni.add(H),ie(H,[.32,.09,.32],[0,.045,0],T),Ue(H,[0,.08,0],[0,1.27,0],.035,_),ie(H,[.17,.24,.065],[0,1.2,.045],P);const Me=Ne(new Et(.17,.17,.18,32),Y,H,.05,1.28,.12);Me.rotation.x=Math.PI/2;const we=Ne(new il(.125,24),k,H,.05,1.28,.217);we.castShadow=!1,Ne(new Et(.07,.07,.24,16),_,H,.05,1.04,.12);for(let Ve=.94;Ve<1.13;Ve+=.04){const je=Ne(new an(.073,.009,4,16),P,H,.05,Ve,.12);je.rotation.x=Math.PI/2}Ue(H,[.19,1.28,.12],[.29,1.28,.12],.035,_),Ne(new rn(.028,8,6),Ii,H,.08,1.28,.228);for(let Ve=0;Ve<3;Ve++){const je=Ne(new an(.18,.008,4,32),_r,H,.05,1,.12);je.rotation.x=Math.PI/2,je.castShadow=!1,je.userData.offset=Ve/3+$*.11,gr.push(je)}});const b=new Zt;f.add(b);const U=new Qi({color:9364437,transparent:!0,opacity:.6,depthWrite:!1}),J=new dn({color:14417875,transparent:!0,opacity:1,depthWrite:!1}),X=[...Jt,...Ws.map(({x:F,z:K})=>new D(F+.05,1.33,K+.12)),...pr.map(([F,K])=>new D(F,2.7,K)),new D(4.8,1.85,-2.8),new D(6.4,1.85,-1.8),new D(3.65,.9,5.4)],q=[],Se=[];if(X.length!==kc)throw new Error("Control wall channel count must match the model");X.forEach((F,K)=>{const $=Math.max(3.8,F.y+.4)+K*.035,H=Ot.z-fn-.064,Me=ah([F.toArray(),[F.x,$,F.z],[1.4,$,F.z],[2.8,$,H],[Ot.x,$,H],[Ot.x,.13,H],[Ot.x,.13,Ot.z+zn+.09]],.2),we=Me.getPoints(12);for(let Ve=1;Ve<we.length;Ve++)Se.push(...we[Ve-1].toArray(),...we[Ve].toArray());q.push(Me)});const Re=new Rt;Re.setAttribute("position",new nt(Se,3)),b.add(new Da(Re,U));const pe=new Vf(new rn(.055,8,6),J,q.length*2);pe.instanceMatrix.setUsage(Kh),pe.frustumCulled=!1,b.add(pe);const be=new D,Ie=new ut,ke=new D,Je=new D,Le=new Set([...Wt,...z,...gr]),Ke=()=>{let F=0;return r.traverse(K=>{K instanceof Gt&&F++}),F};i.dataset.meshesBefore=String(Ke());for(const F of[Z,le,Ni])oh(F,Le);i.dataset.meshesAfter=String(Ke());const yt=new Qe(1058079),dt=new Qe(12766160);let ct=!1,Ct=!1,Pe=-1,Ut=-1,Ye=0,Kt=0,At=1,gi=!1;const gn=()=>{const F=Ye<600?58e4:165e4,K=Math.min(window.devicePixelRatio||1,Ye<600?1.3:1.4,Math.sqrt(F/(Ye*Kt)))*At;n.setDrawingBufferSize(Ye,Kt,K),n.domElement.dataset.renderScale=At.toFixed(2)};let On=0;const et=(F,K,$=0)=>{if(t)return;const H=K?1:lh(F,0,1),Me=Math.min(1,H*2.4),we=H>.982;if(we!==Ct){Ct=we;for(const We of Z.children)We.visible=We===oe||!we}const Ve=Yt(Me,.12,.48),je=Yt(H,.035,.18);s.opacity=je,a.visible=je>.001&&!we,Fe.visible=je>.001&&!we,Te.forEach(We=>{We.opacity=je,We.depthWrite=je>.98,We.transparent!==je<1&&(We.transparent=je<1,We.needsUpdate=!0)}),l.color.copy(yt).lerp(dt,je),l.density=.009*je,Ge.material.opacity=1-Yt(H,.07,.195),Ge.mesh.visible=Ge.material.opacity>.001,Z.visible=Ve>.001,S.forEach(We=>{We.opacity=Ve,We.depthWrite=Ve>.98;const pt=Ve<1||We===Bt[3];We.transparent!==pt&&(We.transparent=pt,We.needsUpdate=!0)}),Q.opacity=.72*(1-Yt(Me,.28,.6)),Q.visible=Q.opacity>.001,he.opacity=.34*(1-Yt(Me,.15,.6)),en.visible=Ve>.01&&!we,bt.visible=en.visible,Ee.forEach(({group:We,start:pt,end:un})=>{We.scale.y=Math.max(.001,Yt(Me,pt,un))});const vt=Yt(Me,.57,.79);le.visible=vt>.01&&!we,le.scale.y=Math.max(.001,vt),Qn.forEach(We=>{We.opacity=We===Fn?vt*.07:We===mr?vt*.9:vt*.6}),Ni.visible=vt>.9&&!we;const _n=K?0:Yt(H,.33,.39)*(1-Yt(H,.52,.56));Bt[3].opacity=Ve*(1-_n*.82),Bt[3].depthWrite=_n<.1;const xn=Wt[3];if(xn.visible=_n>.05,xn.visible){const We=Vc(H).levels[3]/100*kt[3][3];xn.scale.y=We,xn.position.y=.16+We/2}z.forEach(We=>{if(We.visible=We.userData.tank===3&&_n>.1,!We.visible)return;const pt=(H*24+$*.42+We.userData.offset)%1;We.position.y=2.65-pt*1.05,We.scale.setScalar(.4+pt*3.4)}),mt.opacity=_n*.8;const An=K?0:Yt(H,.53,.58)*(1-Yt(H,.7,.74));gr.forEach(We=>{if(We.visible=An>.05,!We.visible)return;const pt=(H*27+$*.36+We.userData.offset)%1;We.scale.setScalar(.5+pt*3.5),We.position.y=.95+pt*.15}),_r.opacity=An*.35;const Ui=Yt(H,.69,.77);b.visible=Ui>.01&&!we,U.opacity=Ui*.45*(1-Yt(H,.88,1)*.8),J.opacity=Ui*(1-Yt(H,.91,1)),pe.visible=b.visible&&J.opacity>.01,pe.visible&&(q.forEach((We,pt)=>{for(let un=0;un<2;un++)We.getPoint((H*9+$*.17+pt/q.length+un*.5)%1,be),pe.setMatrixAt(pt*2+un,Ie.makeTranslation(be.x,be.y,be.z))}),pe.instanceMatrix.needsUpdate=!0);const aa=gh(H);fr.opacity=.55*(1-.84*Math.max(An,Yt(H,.87,.91))),fe.rotation.y=Bn.angle*aa,x.shadow.intensity=Yt(H,.23,.28),!ct&&x.shadow.intensity>0&&!we&&n.shadowMap.enabled&&(n.shadowMap.needsUpdate=!0,ct=!0),H>.87&&H!==Ut&&($-Pe>.085||H===1||$===0)&&(ge.forEach(We=>We.update(H,K?0:$)),Ut=H,Pe=$);const jn=B_(H,o.aspect,ke,Je);o.position.copy(ke),o.fov=jn.fov,F_(H,o.position,Je,o.quaternion),o.setViewOffset(i.width,i.height,i.width*jn.viewX,i.height*jn.viewY,i.width,i.height),n.render(r,o),i.dataset.frames=String(++On),i.dataset.drawCalls=String(n.info.render.calls),i.dataset.triangles=String(n.info.render.triangles),i.dataset.phase=["plan","flyover","levels","gas","signals","control"][mh(H)]};return{render:et,async prepare(F){if(await d,t)return;if(h)throw new Error("Не удалось загрузить материалы сцены");await Promise.all(m.flatMap($=>$.image instanceof HTMLImageElement?[$.image.decode()]:[]));const K=[.1,.23,.3,.45,.64,.81,.92,1];try{for(const[$,H]of K.entries()){if(await new Promise(Me=>setTimeout(Me,0)),t)return;n.setViewport(0,0,80,80),et(H,!1),F(($+1)/K.length)}}finally{t||n.setViewport(0,0,Ye,Kt)}},resize(F,K){t||!F||!K||F===Ye&&K===Kt||(Ye=F,Kt=K,gi||(n.shadowMap.enabled=Ye>=600,gi=!0),gn(),o.aspect=Ye/Kt,o.updateProjectionMatrix())},adjustResolution(F){t||!Ye||!Kt||F===At||(At=F,gn())},dispose(){var $;t=!0;const F=new Set,K=new Set;r.traverse(H=>{const Me=H;Me.geometry&&F.add(Me.geometry),Me.material&&(Array.isArray(Me.material)?Me.material:[Me.material]).forEach(we=>K.add(we))}),F.forEach(H=>H.dispose()),K.forEach(H=>H.dispose()),m.forEach(H=>H.dispose()),c==null||c.dispose(),($=x.shadow.map)==null||$.dispose(),n.dispose(),n.forceContextLoss()}}}export{Z_ as createFacilityScene};
