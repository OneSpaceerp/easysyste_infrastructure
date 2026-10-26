'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Services',
        href: '/services',
        children: [
            { name: 'All Services', href: '/services' },
            { name: 'Payment Service', href: '/services/payment-service' },
            { name: 'Network Design & Management', href: '/services/network-design' },
            { name: 'Infrastructure Security', href: '/services/security' },
            { name: 'Cloud & Virtualization', href: '/services/cloud-virtualization' },
            { name: 'Data Center Services', href: '/services/data-center' },
            { name: 'Managed Services', href: '/services/managed-services' },
        ],
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple-spring ${
                isScrolled ? 'liquid-glass-bar py-2 shadow-sm' : 'liquid-glass-bar-dark py-3'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center min-h-[44px]" aria-label="Easy System Infrastructure Home">
                        <div className="relative w-24 h-14">
                            <Image
                                src="/logo.png"
                                alt="Easy System Infrastructure Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation — Monochromatic labels on Liquid Glass, single prominent CTA */}
                    <nav className="hidden lg:flex items-center space-x-6" aria-label="Primary Navigation">
                        {navigation.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname === item.href || pathname?.startsWith(`${item.href}/`)

                            return (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`nav-link rounded-lg text-sm transition-colors duration-200 ${
                                            isScrolled
                                                ? isActive
                                                    ? 'text-primary font-semibold'
                                                    : 'text-foreground hover:text-primary'
                                                : isActive
                                                ? 'text-white font-semibold'
                                                : 'text-[#F5E6E9] hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                        {item.children && (
                                            <svg
                                                className={`inline-block w-4 h-4 ml-1 transition-transform duration-200 ease-apple-spring ${
                                                    activeDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {item.children && activeDropdown === item.name && (
                                        <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in">
                                            <div className="liquid-glass-popover rounded-2xl py-2 overflow-hidden">
                                                {item.children.map((child) => {
                                                    const childActive = pathname === child.href
                                                    return (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className={`flex items-center min-h-[40px] px-4 py-2 text-sm transition-colors duration-150 ${
                                                                childActive
                                                                    ? 'bg-primary/10 text-primary font-semibold'
                                                                    : 'text-foreground hover:bg-black/[0.04] hover:text-primary'
                                                            }`}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                        <Link href="/contact" className="btn-primary text-sm">
                            Get Assessment
                        </Link>
                    </nav>

                    {/* Mobile menu button — 44x44pt minimum hit region */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl flex items-center justify-center hover:bg-white/10 active:scale-[0.96] transition-all duration-200"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isOpen}
                    >
                        <svg
                            className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Sheet — Functional layer Liquid Glass */}
                {isOpen && (
                    <nav
                        className="lg:hidden mt-3 pb-4 liquid-glass-popover rounded-2xl animate-fade-in overflow-hidden"
                        aria-label="Mobile Navigation"
                    >
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center min-h-[44px] px-4 py-2.5 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <div className="pl-4 border-l border-black/10 ml-4 space-y-0.5">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="flex items-center min-h-[40px] px-4 py-2 text-muted hover:text-primary transition-colors text-sm"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="px-4 pt-3">
                            <Link
                                href="/contact"
                                className="btn-primary w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Assessment
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
