import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing similar to Framer
        },
    },
}

// Fade in (no movement)
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
}

// Slide in from left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Scale on hover (for project cards)
export const scaleOnHover: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
}

// Rolling text animation (for nav links)
export const rollingText: Variants = {
    rest: { y: 0 },
    hover: {
        y: '-100%',
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Header slide down animation
export const headerSlideDown: Variants = {
    hidden: { opacity: 0, y: -90 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Social icons fade in (staggered)
export const socialIconFadeIn: Variants = {
    hidden: { opacity: 0.001, transform: 'none' },
    visible: (i: number) => ({
        opacity: 1,
        transform: 'none',
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
}

// Project card image overlay
export const imageOverlay: Variants = {
    rest: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
}
