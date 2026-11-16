'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, MoveUpRight, Pause, Play, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motionTokens } from './ScrollExperience';
import { FacilityFallback } from './facility/FacilityFallback';
import type { FacilityScene } from './facility/facilityScene';
import { CONTROL_ENTRY_AT } from './facility/facilityLayout';
import { tourChapters as chapters, chapterAt, demoTelemetry, CHANNEL_COUNT } from './facility/facilityTour';
import './facility/facility.css';
import './facility/facilityFlight.css';
import './facility/facilityImmersive.css';

export function IndustrialStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<FacilityScene | null>(null);
  const target = useMotionValue(0);
  const progress = useSpring(target, motionTokens.spring);
  const readings = useTransform(progress, demoTelemetry);
  const levelValue = useTransform(readings, value => value.levels[3].toFixed(1));
  const levelRatio = useTransform(readings, value => value.levels[3] / 100);
  const gasValue = useTransform(readings, value => value.gases[2].toFixed(2));
  const drawRef = useRef<() => void>(() => {});
  const timelineRef = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(5);
  const [loaderMounted, setLoaderMounted] = useState(true);
  const [chapter, setChapter] = useState(0);
  const [shortScreen, setShortScreen] = useState(false);
  const [playing, setPlaying] = useState<false | 'tour' | 'entry'>(false);
  const still = Boolean(reduced || paused || unavailable || shortScreen);
  const stillRef = useRef(still);
  stillRef.current = still;
  const previousPaused = useRef(paused);

  useLayoutEffect(() => {
    if (previousPaused.current !== paused && sectionRef.current) {
      const top = 0;
      window.scrollTo({ top: window.scrollY + sectionRef.current.getBoundingClientRect().top - top, behavior: 'instant' });
    }
    previousPaused.current = paused;
  }, [paused]);

  useEffect(() => {
    const screen = window.matchMedia('(max-height: 560px)');
    const update = () => setShortScreen(screen.matches);
    update(); screen.addEventListener('change', update);
    return () => screen.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timeout = window.setTimeout(() => setLoaderMounted(false), reduced ? 0 : 800);
    return () => window.clearTimeout(timeout);
  }, [ready, reduced]);

  useEffect(() => {
    const canvas = canvasRef.current, viewer = viewerRef.current;
    if (!canvas || !viewer) return;
    let cancelled = false, failed = false, prepared = false, visible = true, dirty = true;
    let animationFrame = 0, lastDraw = 0, lastTick = 0, slowFrames = 0, resolution = 1;
    const stop = () => { cancelAnimationFrame(animationFrame); animationFrame = 0; lastTick = 0; lastDraw = 0; slowFrames = 0; };
    const tick = (now: number) => {
      animationFrame = 0;
      const scene = sceneRef.current;
      if (!prepared || !visible || document.hidden || !scene) { stop(); return; }
      const phase = chapterAt(progress.get());
      const animateInstruments = !stillRef.current && phase >= 2 && phase <= 4;
      const mobile = viewer.clientWidth < 600;
      if (lastTick && (dirty || animateInstruments)) {
        const interval = now - lastTick;
        slowFrames = Math.max(0, slowFrames + (interval > (mobile ? 35 : 24) && interval < 150 ? 1 : -1));
        if (slowFrames >= 8 && resolution > .65) {
          resolution = Math.max(.65, resolution * .86);
          scene.adjustResolution(resolution);
          slowFrames = 0;
        }
      }
      lastTick = now;
      const interval = mobile ? 32 : 15.5;
      if ((dirty || animateInstruments) && (!lastDraw || now - lastDraw >= interval)) {
        scene.render(progress.get(), stillRef.current, now / 1000);
        lastDraw = now; dirty = false;
      }
      if (dirty || animateInstruments) animationFrame = requestAnimationFrame(tick);
      else stop();
    };
    const draw = () => {
      dirty = true;
      if (prepared && visible && !document.hidden && !animationFrame) animationFrame = requestAnimationFrame(tick);
    };
    drawRef.current = draw;
    const resize = new ResizeObserver(() => {
      sceneRef.current?.resize(viewer.clientWidth, viewer.clientHeight); draw();
    });
    const visibility = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) draw(); else stop(); });
    const showFallback = () => {
      if (cancelled || failed) return;
      failed = true; prepared = false;
      stop(); sceneRef.current?.dispose(); sceneRef.current = null;
      setReady(false); setUnavailable(true);
    };
    const watchdog = window.setTimeout(showFallback, 30000);
    const contextLost = (event: Event) => { event.preventDefault(); showFallback(); };
    const documentVisibility = () => { if (document.hidden) stop(); else draw(); };
    canvas.addEventListener('webglcontextlost', contextLost);
    document.addEventListener('visibilitychange', documentVisibility);
    resize.observe(viewer); visibility.observe(viewer);
    const unsubscribe = progress.on('change', draw);
    // Loaded separately: the rest of the site never waits for the 3D engine.
    void import('./facility/facilityScene').then(async ({ createFacilityScene }) => {
      if (cancelled || failed) return;
      setLoading(12);
      const scene = createFacilityScene(canvas, fraction => setLoading(12 + Math.round(fraction * 68)));
      sceneRef.current = scene;
      scene.resize(viewer.clientWidth, viewer.clientHeight);
      await scene.prepare(fraction => setLoading(80 + Math.round(fraction * 19)));
      if (cancelled || failed) return;
      scene.render(progress.get(), stillRef.current);
      prepared = true;
      setLoading(100);
      setReady(true);
    }).catch(showFallback).finally(() => window.clearTimeout(watchdog));
    return () => {
      cancelled = true; stop(); unsubscribe(); resize.disconnect(); visibility.disconnect();
      drawRef.current = () => {};
      window.clearTimeout(watchdog);
      document.removeEventListener('visibilitychange', documentVisibility);
      canvas.removeEventListener('webglcontextlost', contextLost);
      sceneRef.current?.dispose(); sceneRef.current = null;
    };
  }, [progress]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (ready) drawRef.current();
    let frame = 0;
    const update = () => {
      frame = 0;
      if (document.hidden) return;
      const sticky = section.querySelector<HTMLElement>('.facility-stage');
      if (!sticky) return;
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const rect = section.getBoundingClientRect();
      const value = still ? 1 : Math.max(0, Math.min(1, (top - rect.top) / Math.max(1, section.offsetHeight - sticky.offsetHeight)));
      if (still) progress.jump(1);
      target.set(value);
      setChapter(chapterAt(value));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('visibilitychange', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule); document.removeEventListener('visibilitychange', schedule);
    };
  }, [ready, still, target, progress]);

  // Autoplay uses the same native scroll position as manual exploration.
  // Wheel, touch and navigation keys immediately return control to the visitor.
  useEffect(() => {
    if (still) { setPlaying(false); return; }
    if (!playing) return;
    let frame = 0, previous = 0;
    let position = playing === 'entry' ? CONTROL_ENTRY_AT : target.get() >= .995 ? 0 : target.get();
    const duration = playing === 'entry' ? 17500 : 48000;
    const stop = () => setPlaying(false);
    const key = (event: KeyboardEvent) => {
      if (['Escape', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) stop();
    };
    const advance = (time: number) => {
      const section = sectionRef.current, stage = section?.querySelector<HTMLElement>('.facility-stage');
      if (!section || !stage || document.hidden) { stop(); return; }
      if (previous) position = Math.min(1, position + Math.min(time - previous, 80) / duration);
      previous = time;
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top - top + (section.offsetHeight - stage.offsetHeight) * position, behavior: 'instant' });
      if (position < 1) frame = requestAnimationFrame(advance); else stop();
    };
    frame = requestAnimationFrame(advance);
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', key);
    document.addEventListener('visibilitychange', stop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('wheel', stop); window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', key); document.removeEventListener('visibilitychange', stop);
    };
  }, [playing, still, target]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const active = timeline?.querySelector<HTMLElement>('[aria-current]');
    if (timeline && active && timeline.scrollWidth > timeline.clientWidth) {
      timeline.scrollTo({ left: active.offsetLeft - timeline.offsetLeft - (timeline.clientWidth - active.clientWidth) / 2, behavior: 'instant' });
    }
  }, [chapter]);

  const goToChapter = (index: number) => {
    if (index === chapters.length - 1 && target.get() < .995) {
      setPlaying('entry');
      return;
    }
    setPlaying(false);
    const section = sectionRef.current;
    const stage = section?.querySelector<HTMLElement>('.facility-stage');
    if (!section || !stage) return;
    const offset = parseFloat(getComputedStyle(stage).top) || 0;
    window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top - offset + (section.offsetHeight - stage.offsetHeight) * chapters[index].progress, behavior: 'instant' });
  };
  const skip = () => { setPlaying(false); document.getElementById('solutions')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' }); };

  return <section className={`facility-story${still ? ' facility-still' : ''}`} ref={sectionRef} aria-label="От проекта к защите объекта" data-chapter={chapter}>
    <div className="facility-stage">
      <div className="container facility-inner">
        <div className="facility-kicker"><span><i/>Безопасность нефтебаз и химических производств</span><button onClick={skip}>К услугам <MoveUpRight size={14}/></button></div>
        <div className="facility-layout">
          <div className="facility-copy">
            <span className="facility-overline">СБ+ / Инженерный подход с 2003 года</span>
            <h1>От проекта —<br/>к <em>защите объекта.</em></h1>
            {!still && <button className="facility-play" type="button" onClick={() => setPlaying(playing ? false : 'tour')} aria-pressed={Boolean(playing)} disabled={!ready}>{playing ? <Pause size={15}/> : chapter === 5 ? <RotateCcw size={15}/> : <Play size={15}/>}<span>{playing ? 'Остановить пролёт' : chapter === 5 ? 'Посмотреть ещё раз' : 'Смотреть пролёт'}</span><small>48 сек</small></button>}
            <div className="facility-chapter-copy">
              {chapters.map((item, index) => <div key={item.label} className={`facility-chapter${chapter === index ? ' is-current' : ''}`} aria-hidden={chapter !== index}>
                <span className="facility-chapter-index">0{index + 1} <span>/ 06</span></span>
                <h2>{item.title}</h2><p>{item.text}</p>
              </div>)}
            </div>
            <Link to="/contacts" className="button facility-cta">Обсудить ваш объект <ArrowUpRight size={18}/></Link>
          </div>
          <figure className={`facility-figure${ready ? ' is-ready' : ''}`}>
            <div className="facility-model-toolbar"><span><i/> {chapters[chapter].stage}</span><button type="button" onClick={() => { setPlaying(false); setPaused(!paused); }} aria-label={still ? 'Включить анимацию' : 'Отключить анимацию'} aria-pressed={still} disabled={Boolean(reduced || unavailable || shortScreen)} title={reduced ? 'Движение отключено в настройках вашего устройства' : shortScreen ? 'Компактный вид для небольшого экрана' : undefined}>{still ? <Play size={13}/> : <Pause size={13}/>}<span>{still ? 'Статичный вид' : 'Без анимации'}</span></button></div>
            <div className="facility-viewer" ref={viewerRef} role="group" aria-busy={!ready && !unavailable} aria-label="Демонстрационная модель нефтебазы, уровнемеров, газоанализаторов и диспетчерского щита">
              <FacilityFallback/><canvas ref={canvasRef} aria-hidden="true"/>
              {loaderMounted && !unavailable && <div className="facility-loading" role="progressbar" aria-label="Подготовка пролёта" aria-valuenow={loading} aria-hidden={ready}>
                <span className="facility-loading-orbit" aria-hidden="true"><i/></span>
                <div className="facility-loading-head"><strong>Готовим пролёт</strong><span>{loading}%</span></div>
                <div className="facility-loading-track"><i style={{ width: `${loading}%` }}/></div>
                <small>{loading === 100 ? 'Площадка готова' : loading < 80 ? 'Загружаем модель, текстуры и освещение' : 'Готовим ракурсы пролёта и операторной'}</small>
              </div>}
              {(ready || unavailable) && <span className="facility-demo-badge">{unavailable ? 'Схема объекта · объёмная сцена недоступна' : 'Демонстрационная сцена'}</span>}
              {chapter >= 2 && chapter < 5 && <div className={`facility-readout facility-readout-${chapter}`}>
                <span className="facility-readout-label">{chapter === 2 ? 'Уровнемер / РВС-04' : chapter === 3 ? 'Газоанализатор / Насосная' : 'Единый пост контроля'}</span>
                {chapter === 2 ? <><div className="facility-readout-value"><motion.strong>{levelValue}</motion.strong><span>%</span></div><div className="facility-level-bar"><motion.span style={{ scaleX: levelRatio }}/></div><p>Уровень в резервуаре</p></> : chapter === 3 ? <><div className="facility-readout-value"><motion.strong>{gasValue}</motion.strong><span>% НКПР</span></div><p>Газовый контроль · пример показаний</p></> : <><div className="facility-readout-value"><strong>{CHANNEL_COUNT}</strong><span>каналов</span></div><p>4 уровнемера · 3 газоанализатора<br/>4 камеры · 2 пожарных датчика · СКУД</p></>}
                <small>Иллюстрация · не данные объекта</small>
              </div>}
              <span className="facility-compass" aria-hidden="true">С<span>↑</span></span>
              <div className="facility-model-tag" aria-hidden="true"><span>СБ<span>+</span></span>ИНЖЕНЕРИЯ БЕЗОПАСНОСТИ</div>
            </div>
            <figcaption><span>{chapters[chapter].tag}</span><small>Демонстрация · не данные реального объекта</small></figcaption>
          </figure>
        </div>
        {!still && <nav ref={timelineRef} className="facility-timeline" aria-label="Этапы создания системы безопасности">{chapters.map((item, index) => <button key={item.label} type="button" onClick={() => goToChapter(index)} disabled={!ready} aria-current={chapter === index ? 'step' : undefined}><span className="facility-timeline-number">0{index + 1}</span><span>{item.label}</span><ArrowUpRight size={15}/></button>)}</nav>}
        <div className="facility-bottom"><span>{still ? 'От обследования до обслуживания' : playing ? 'Пролёт запущен · прокрутите, чтобы управлять' : 'Прокрутите, чтобы исследовать объект'}{!still && <ArrowDown size={13}/>}</span><span>Серпухов · Московская область</span></div>
      </div>
      {!still && <motion.div className="facility-travel" style={{ scaleX: progress }} aria-hidden="true"/>}
    </div>
    {still && <div className="container facility-static-chapters">{chapters.map((item, index) => <article key={item.label}><span>0{index + 1} / {item.label}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div>}
  </section>;
}
