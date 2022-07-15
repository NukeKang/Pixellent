import gsap from 'gsap';

export const textIntro = (element) => {
  gsap.from(element, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: 'back',
  });
};
