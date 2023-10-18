import gsap from 'gsap';

export const enterDockSidebarTransition = (query: string, onStart?: gsap.Callback) => {
  const element = document.querySelector(query) as HTMLElement;
  const timeline = gsap.timeline();

  setTimeout(() => {
    timeline.from(query, {
      x: () => -element.offsetWidth,
      opacity: 0,
      duration: 2.5,
      xPercent: -100,
      ease: 'expo.out',
      onStart,
    });
  }, 500);

  return timeline;
};

export const enterContentPageTransition = (query: string) => {
  const element = document.querySelector(query) as HTMLElement;
  const timeline = gsap.timeline();

  setTimeout(() => {
    timeline.from(query, {
      x: () => element.offsetWidth,
      opacity: 0,
      duration: 2.5,
      xPercent: 100,
      ease: 'expo.out',
      onComplete: () => {
        element.style.display = 'block';
      },
    });
  }, 500);

  return timeline;
};
