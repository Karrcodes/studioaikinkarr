'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    variants?: Variants
    className?: string
    delay?: number
    once?: boolean
}

export default function ScrollReveal({
    children,
    variants,
    className,
    delay = 0,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: '-100px' })

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
