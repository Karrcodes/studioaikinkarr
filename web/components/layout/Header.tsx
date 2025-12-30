import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
    { label: 'Projects', href: '/projects' },
    { label: 'Technology', href: '/technology' },
    { label: 'Products', href: '/products' },
    { label: 'Media', href: '/media' },
    { label: 'Articles', href: '/articles' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight uppercase">
                    Studio Aikin Karr
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={clsx(
                    "md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="flex flex-col p-6 gap-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-gray-600 hover:text-black"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
