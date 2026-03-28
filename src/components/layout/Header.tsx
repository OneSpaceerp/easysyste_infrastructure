'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Services',
        href: '/services',
        children: [
            { name: 'All Services', href: '/services' },
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
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative w-24 h-16">
                            <Image src="/logo.png" alt="Easy System Infrastructure Logo" fill className="object-contain object-left" priority />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`nav-link ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary`}
                                >
                                    {item.name}
                                    {item.children && (
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {item.children && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-2 mt-2 animate-fade-in">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact" className="btn-primary">
                            Get Assessment
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 pb-4 bg-white rounded-xl shadow-xl animate-fade-in">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block px-4 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <div className="pl-4 border-l-2 border-primary/20 ml-4">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 text-muted hover:text-primary transition-colors text-sm"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="px-4 pt-4">
                            <Link href="/contact" className="btn-primary w-full text-center">
                                Get Assessment
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
