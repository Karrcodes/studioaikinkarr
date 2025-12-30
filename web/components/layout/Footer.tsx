'use client'

import Link from 'next/link'

const footerLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/studioaikinkarr' },
    { label: 'YouTube', href: 'https://www.youtube.com/@aikinkarr' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@aikinkarr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulalim-uk' },
    { label: 'Substack', href: 'https://substack.com/@aikinkarr' },
]

export default function Footer() {
    return (
        <footer className="w-full max-w-[1480px] mx-auto">
            {/* Divider */}
            <div className="w-full h-px bg-[#bbb3]" />

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-6">
                {/* Copyright */}
                <div className="flex flex-col items-center md:items-start gap-[3px] mb-10 md:mb-0">
                    <p className="text-[13px] font-normal leading-[13px] uppercase text-white">
                        Quick Links
                    </p>
                    <div className="flex items-center gap-0">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-2 py-1 no-underline"
                            >
                                <span className="text-[14px] font-semibold leading-[17px] tracking-[0.1px] text-white mix-blend-difference">
                                    {link.label},&nbsp;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Links - Right side */}
                <div className="flex flex-col items-center md:items-end gap-[3px]">
                    <div className="flex items-center gap-0">
                        <span className="text-[14px] font-semibold leading-[17px] tracking-[0.1px] text-white mix-blend-difference">
                            © 2025 Studio Aikin Karr
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-[#bbb3]" />

            {/* Copyright Text */}
            <div className="flex items-center justify-center px-6 md:px-24 py-4">
                <p className="text-[14px] font-medium leading-[25.2px] text-white mix-blend-difference">
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}
