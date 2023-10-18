import gsap from 'gsap';

export const closeModalAnimation = (query: string, onComplete?: gsap.Callback) => {
  const animation = gsap.to(query, {
    duration: 0.5,
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    ease: 'power2.out',
    onComplete,
  });
  return animation;
};
