import Link from 'next/link';

const SOCIAL_LINKS = [
    { label: 'Instagram', href: 'https://www.instagram.com/studioaikinkarr' },
    { label: 'YouTube', href: 'https://www.youtube.com/@aikinkarr' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@aikinkarr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulalim-uk' },
    { label: 'Substack', href: 'https://substack.com/@aikinkarr' },
];

export function Footer() {
    return (
        <footer className="w-full bg-white py-20 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

                {/* Socials */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Connect</h3>
                    <div className="flex flex-col gap-2">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-start md:items-end">
                    <p className="text-[12vw] leading-none font-bold text-gray-100 select-none">
                        ©2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
