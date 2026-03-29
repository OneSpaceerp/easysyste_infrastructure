import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    services: [
        { name: 'Network Design & Management', href: '/services/network-design' },
        { name: 'Infrastructure Security', href: '/services/security' },
        { name: 'Cloud & Virtualization', href: '/services/cloud-virtualization' },
        { name: 'Data Center Services', href: '/services/data-center' },
        { name: 'Managed Services', href: '/services/managed-services' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Industries', href: '/industries' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ],
    industries: [
        { name: 'Manufacturing', href: '/industries#manufacturing' },
        { name: 'Finance & Banking', href: '/industries#finance' },
        { name: 'Government', href: '/industries#government' },
        { name: 'Oil & Gas', href: '/industries#oil-gas' },
        { name: 'Telecom', href: '/industries#telecom' },
    ],
}

const locations = [
    {
        country: 'Egypt',
        address: 'Mokattam - Villa 7528 Shireen Badwai ST',
        phone: '+201117600868',
    },
    {
        country: 'United Arab Emirates',
        address: 'Unit 23, First Floor, Opal Tower, Business Bay, Dubai',
        phone: '+971507095315',
    },
    {
        country: 'United Kingdom',
        address: 'The Ropewalk Nottingham, NG1 5DT',
        phone: '+447476972114',
    },
]

export default function Footer() {
    return (
        <footer className="bg-foreground text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center mb-6">
                            <div className="relative w-32 h-32">
                                <Image src="/logo.png" alt="Easy System Infrastructure Logo" fill className="object-contain object-left" />
                            </div>
                        </Link>
                        <p className="text-white/70 mb-6 max-w-md">
                            Enterprise infrastructure solutions built for zero downtime. We design, implement, and manage secure,
                            scalable, and resilient IT foundations for organizations worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Industries</h4>
                        <ul className="space-y-3">
                            {footerLinks.industries.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Locations */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <h4 className="font-heading font-bold text-lg mb-6">Our Locations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((location) => (
                            <div key={location.country}>
                                <h5 className="font-semibold text-primary mb-2">{location.country}</h5>
                                <p className="text-white/70 text-sm mb-1">{location.address}</p>
                                <a href={`tel:${location.phone}`} className="text-white/70 hover:text-primary text-sm transition-colors">
                                    {location.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} Easy System Inc. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                        <p className="text-white/60 text-sm">
                            info@easysystemegypt.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
