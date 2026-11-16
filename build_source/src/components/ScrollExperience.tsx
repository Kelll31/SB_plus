'use client';

import { useEffect, useRef, type ImgHTMLAttributes, type ReactNode } from 'react';
import { motion, useAnimate, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const motionTokens = {
  duration: { reveal: .85, image: 1.1, stagger: .085 },
  easing: [ .22, 1, .36, 1 ] as const,
  distance: { reveal: 34, mobile: 18, parallax: 5 },
  spring: { stiffness: 100, damping: 28, restDelta: .001 },
};

const revealSelector = [
  '.hero-copy > *', '.hero-visual', '.page-heading .container > :not(.breadcrumbs)',
  '.section-heading > *', '.service-card', '.service-row', '.about-copy > *',
  '.process-step', '.license-card', '.post-card', '.value-card', '.contact-block',
  '.faq-grid > div:first-child', '.faq-list > details', '.cta-inner > *',
  '.director-panel > *', '.detail-grid > div > *', '.expertise-inner > *',
].join(',');

/** Progressive enhancement: content is visible until an observer is attached. */
export function ScrollExperience({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, motionTokens.spring);

  useEffect(() => {
    const root = scope.current as HTMLElement | null;
    if (!root || reduced || !('IntersectionObserver' in window)) return;
    const seen = new Set<HTMLElement>();
    const running = new Map<HTMLElement, ReturnType<typeof animate>>();
    const small = window.matchMedia('(max-width: 600px)').matches;
    const distance = small ? motionTokens.distance.mobile : motionTokens.distance.reveal;
    const reveal = (element: HTMLElement, delay = 0) => {
      running.get(element)?.stop();
      element.dataset.revealed = 'true';
      const control = animate(element, { opacity: 1, y: 0 }, {
        duration: motionTokens.duration.reveal, ease: motionTokens.easing, delay,
      });
      running.set(element, control);
      void control.then(() => {
        if (running.get(element) !== control) return;
        element.style.removeProperty('transform');
        element.style.removeProperty('opacity');
        running.delete(element);
      });
    };
    const observer = new IntersectionObserver(entries => {
      const entering = entries.filter(entry => entry.isIntersecting);
      entering.forEach((entry, index) => {
        observer.unobserve(entry.target);
        reveal(entry.target as HTMLElement, Math.min(index, 4) * motionTokens.duration.stagger);
      });
    }, { threshold: .08, rootMargin: '0px 0px -20px 0px' });
    const register = () => {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        // Nested candidates would compound transforms and delay readable text.
        if (element.parentElement?.closest(revealSelector)) return;
        if (element.getBoundingClientRect().bottom < 0) return;
        element.dataset.revealed = 'false';
        element.style.opacity = '0';
        element.style.transform = `translateY(${distance}px)`;
        observer.observe(element);
      });
    };
    const focus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const hidden = target.closest<HTMLElement>('[data-revealed="false"]');
      if (hidden) { observer.unobserve(hidden); reveal(hidden); }
    };
    register();
    // Public posts/licenses can arrive after the first render.
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    root.addEventListener('focusin', focus);
    return () => {
      observer.disconnect(); mutations.disconnect(); root.removeEventListener('focusin', focus);
      running.forEach(control => control.stop()); running.clear();
      seen.forEach(element => {
        element.style.removeProperty('opacity'); element.style.removeProperty('transform');
        delete element.dataset.revealed;
      });
    };
  }, [pathname, reduced, animate, scope]);

  return <><motion.div className="reading-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : progress }} /><main ref={scope} id="main-content" tabIndex={-1}>{children}</main></>;
}

export function ParallaxPhoto(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const smooth = useSpring(scrollYProgress, motionTokens.spring);
  const y = useTransform(smooth, [0, 1], [`-${motionTokens.distance.parallax}%`, `${motionTokens.distance.parallax}%`]);
  const scale = useTransform(smooth, [0, 1], [1.18, 1.12]);
  // Native image attributes only; animation handlers belong to Motion.
  const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...imageProps } = props;
  return <motion.img {...imageProps} ref={ref} style={{ y: reduced ? 0 : y, scale: reduced ? 1 : scale }} />;
}
