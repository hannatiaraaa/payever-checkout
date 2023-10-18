import gsap from 'gsap';

export const closeDockSidebarAnimation = (query: string, onComplete?: gsap.Callback) => {
  const animation = gsap.to(query, {
    duration: 0.5,
    x: '-25vw',
    ease: 'point3.out',
    onComplete,
  });
  return animation;
};

export const openDockSidebarAnimation = (query: string, onStart?: gsap.Callback) => {
  const timeline = gsap.timeline();
  const element = document.querySelector(query) as HTMLElement;
  timeline.from(query, {
    x: () => -element.offsetWidth,
    duration: 0.5,
    xPercent: -100,
    ease: 'point3.out',
  });

  timeline.to(element, { x: 0, duration: 0.5, onStart });

  return timeline;
};
