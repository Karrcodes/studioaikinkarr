'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { headerSlideDown } from '@/lib/animations'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects/projects' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
]

export default function Header() {
    return (
        <motion.header
            className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[1480px] bg-black"
            initial="hidden"
            animate="visible"
            variants={headerSlideDown}
        >
            <nav className="flex flex-col md:flex-row items-start md:items-center md:justify-between px-6 py-6 md:px-24 md:py-7 gap-8 md:gap-0">
                {/* Left: Logo */}
                <Link
                    href="/#top"
                    className="flex items-center gap-2.5 no-underline"
                >
                    <span className="text-[22px] font-medium leading-[30.6px] tracking-[-0.3px] text-white">
                        StudioAikinKarr®
                    </span>
                </Link>

                {/* Center: Navigation Links */}
                <div className="flex flex-col items-start gap-[3px]">
                    <p className="text-[13px] font-normal leading-[13px] uppercase text-white/70">
                        Quick Links
                    </p>
                    <div className="flex items-center gap-0 flex-wrap">
                        {navLinks.map((link) => (
                            <RollingLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </div>
                </div>

                {/* Right: Location Info */}
                <div className="hidden md:flex flex-col items-end gap-[3px]">
                    <p className="text-[13px] font-normal leading-[13px] uppercase text-white/70">
                        Based in the United Kingdom 🇬🇧
                    </p>
                    <p className="text-[14px] font-semibold leading-[17px] tracking-[0.1px] text-white">
                        Multidisciplinary Creative Studio
                    </p>
                </div>
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-white/20" />
        </motion.header>
    )
}

// Rolling text link component
function RollingLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="group relative flex items-center gap-2.5 px-2 py-1 no-underline overflow-hidden"
        >
            <div className="flex flex-col h-[17px] overflow-hidden">
                {/* Normal state */}
                <span className="block text-[14px] font-semibold leading-[17px] tracking-[0.1px] text-white/70 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {label},&nbsp;
                </span>
                {/* Hover state */}
                <span className="block text-[14px] font-semibold leading-[17px] tracking-[0.1px] text-white transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                    {label},&nbsp;
                </span>
            </div>
        </Link>
    )
}
