'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'

export default function HeroSection() {
    return (
        <motion.section
            className="relative w-full max-w-[1480px] mx-auto flex flex-col items-center justify-center gap-0 px-6 md:px-24 py-[90px] md:py-[150px] overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Hero Phrases */}
            <motion.div
                className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-20"
                variants={fadeIn}
            >
                <h1 className="text-[24px] md:text-[31px] lg:text-[49px] font-medium leading-[24.6px] md:leading-[33.6px] lg:leading-[50.6px] tracking-[-0.8px] text-center text-white">
                    ingenuity as heritage
                </h1>
                <h1 className="text-[24px] md:text-[31px] lg:text-[49px] font-medium leading-[24.6px] md:leading-[33.6px] lg:leading-[50.6px] tracking-[-0.8px] text-center text-white">
                    fusion as language
                </h1>
                <h1 className="text-[24px] md:text-[31px] lg:text-[49px] font-medium leading-[24.6px] md:leading-[33.6px] lg:leading-[50.6px] tracking-[-0.8px] text-center text-white">
                    technology as a tool
                </h1>
                <h1 className="text-[24px] md:text-[31px] lg:text-[49px] font-medium leading-[24.6px] md:leading-[33.6px] lg:leading-[50.6px] tracking-[-0.8px] text-center text-white">
                    worldbuilding as practice
                </h1>
            </motion.div>

            {/* Large AikinKarr Watermark */}
            <motion.div
                className="relative w-full flex items-center justify-center"
                variants={fadeIn}
            >
                <h2
                    className="text-[76px] md:text-[128px] lg:text-[208px] font-semibold leading-[68px] md:leading-[108px] lg:leading-[168px] tracking-[-4px] md:tracking-[-6px] lg:tracking-[-8px] text-center text-white opacity-10"
                    style={{
                        fontFamily: '"Inter Tight", sans-serif',
                        fontFeatureSettings: '"ss01" on, "ss02" on, "ss03" on, "ss04" on, "ss07" on, "salt" on',
                    }}
                >
                    AikinKarr®
                </h2>
            </motion.div>
        </motion.section>
    )
}
