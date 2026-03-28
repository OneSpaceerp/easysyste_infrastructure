import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'Easy Systems | Enterprise Infrastructure Solutions',
        template: '%s | Easy Systems Infrastructure'
    },
    description: 'Secure, scalable, and resilient infrastructure solutions designed, implemented, and managed by Easy Systems. Enterprise-grade IT services for zero downtime operations.',
    keywords: ['infrastructure', 'IT services', 'cloud', 'data center', 'network security', 'managed services', 'Egypt', 'UAE', 'UK'],
    authors: [{ name: 'Easy Systems' }],
    creator: 'Easy Systems',
    publisher: 'Easy Systems',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://infrastructure.easysystemegypt.com',
        siteName: 'Easy Systems Infrastructure',
        title: 'Easy Systems | Enterprise Infrastructure Solutions',
        description: 'Secure, scalable, and resilient infrastructure solutions designed, implemented, and managed by Easy Systems.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Easy Systems Infrastructure',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Easy Systems | Enterprise Infrastructure Solutions',
        description: 'Secure, scalable, and resilient infrastructure solutions designed, implemented, and managed by Easy Systems.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
            <body className="min-h-screen flex flex-col" suppressHydrationWarning>
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
