export const EASING = [0.22, 1, 0.36, 1] as const;
export type EasingArray = typeof EASING;

// Spring configs for natural, physics-based motion
export const SPRING = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
};

export const SPRING_SOFT = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 24,
};

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: EASING },
  },
});

export const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.55, ease: EASING } },
});

export const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.55, ease: EASING } },
});

// Stagger container — wrap a grid/list and children get stagger-delayed entrance
export const staggerContainer = (staggerChildren = 0.07, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Drop-in item used inside staggerContainer grids
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASING },
  },
};
