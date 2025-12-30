'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialIconFadeIn } from '@/lib/animations'
import { Instagram, Youtube, Linkedin } from 'lucide-react'

const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/studioaikinkarr', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@aikinkarr', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulalim-uk', label: 'LinkedIn' },
]

export default function SocialIcons() {
    return (
        <div className="fixed top-[120px] right-5 z-[1] flex flex-col items-center gap-2.5 hidden md:flex">
            {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                    <motion.div
                        key={social.href}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={socialIconFadeIn}
                        className="w-7 h-7 relative"
                    >
                        <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-7 h-7 rounded-full bg-white hover:bg-white/80 transition-colors duration-300 no-underline"
                            aria-label={social.label}
                        >
                            <Icon className="w-4 h-4 text-black" strokeWidth={2} />
                        </Link>
                    </motion.div>
                )
            })}
        </div>
    )
}
