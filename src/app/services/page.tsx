import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const partners = [
    { name: 'Oracle', logo: '/images/partners/oracle.svg' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.svg' },
    { name: 'Cisco', logo: '/images/partners/cisco.svg' },
    { name: 'VMware', logo: '/images/partners/vmware.svg' },
    { name: 'Dell EMC', logo: '/images/partners/dell.svg' },
    { name: 'AWS', logo: '/images/partners/aws.svg' },
]

export const metadata: Metadata = {
    title: 'Infrastructure Services',
    description: 'Comprehensive infrastructure services including network design, security, cloud solutions, data center services, and managed support from Easy System.',
}

const services = [
    {
        id: 'network-design',
        title: 'Network Design & Management',
        description: 'End-to-end network architecture solutions from assessment to optimization',
        href: '/services/network-design',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        features: [
            'Network Assessment & Design',
            'LAN, WAN, SD-WAN Solutions',
            'High Availability Architecture',
            'Performance Monitoring & Optimization',
        ],
    },
    {
        id: 'security',
        title: 'Infrastructure Security',
        description: 'Enterprise-grade security solutions to protect your critical assets',
        href: '/services/security',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        features: [
            'Next-Gen Firewalls & SIEM',
            'Security Operations Center (SOC)',
            'Zero Trust Architecture',
            'Compliance & Risk Mitigation',
        ],
    },
    {
        id: 'cloud-virtualization',
        title: 'Cloud & Virtualization',
        description: 'Seamless cloud migrations and hybrid infrastructure solutions',
        href: '/services/cloud-virtualization',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        features: [
            'Cloud Readiness Assessment',
            'Azure, AWS, Oracle Cloud',
            'Migration & Optimization',
            'Hybrid & Multi-Cloud',
        ],
    },
    {
        id: 'data-center',
        title: 'Data Center Services',
        description: 'Complete data center design, build, and modernization services',
        href: '/services/data-center',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        features: [
            'Physical & Logical Design',
            'Structured Cabling',
            'Power & Cooling Optimization',
            'Facility Modernization',
        ],
    },
    {
        id: 'backup-dr',
        title: 'Backup & Disaster Recovery',
        description: 'Business continuity solutions for zero data loss',
        href: '/services/managed-services',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        features: [
            'Business Continuity Planning',
            'Automated Backup Solutions',
            'Rapid Recovery Capabilities',
            'DR Testing & Validation',
        ],
    },
    {
        id: 'managed-services',
        title: 'Managed Services & Support',
        description: '24/7 monitoring, maintenance, and expert support',
        href: '/services/managed-services',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        features: [
            'Flexible Support Models',
            'Guaranteed SLAs',
            'On-Site Engineering',
            'Proactive Maintenance',
        ],
    },
]

const approach = [
    {
        step: '01',
        title: 'Assess',
        description: 'We conduct a thorough assessment of your current infrastructure, identifying gaps, risks, and opportunities for improvement.',
    },
    {
        step: '02',
        title: 'Design',
        description: 'Our architects create detailed designs aligned with your business goals, ensuring scalability, security, and performance.',
    },
    {
        step: '03',
        title: 'Implement',
        description: 'Expert engineers execute the implementation with minimal disruption, following best practices and quality standards.',
    },
    {
        step: '04',
        title: 'Optimize',
        description: 'Continuous monitoring and optimization ensure your infrastructure delivers maximum value over time.',
    },
]

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-gray-900 to-foreground overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237C1029' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                            Infrastructure Services
                        </span>
                        <h1 className="text-white mb-6">
                            Comprehensive Infrastructure<br />
                            <span className="gradient-text">Solutions</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            From network design to managed services, we deliver end-to-end infrastructure solutions
                            that keep your business running at peak performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6">A Holistic Approach to Infrastructure</h2>
                    <p className="text-muted text-lg mb-8">
                        Modern enterprises need more than point solutions—they need integrated infrastructure that works
                        seamlessly together. Easy System takes a holistic approach, designing and implementing infrastructure
                        that spans network, security, cloud, and data center operations.
                    </p>
                    <p className="text-muted text-lg">
                        Our team of certified engineers brings deep expertise across multiple technology domains, ensuring
                        that every component of your infrastructure is optimized for performance, security, and reliability.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Our Services</span>
                        <h2 className="mt-4">What We Offer</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link key={service.id} href={service.href} className="card group hover:border-l-4 hover:border-l-primary">
                                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                                <p className="text-muted mb-6">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-muted">
                                            <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">Our Process</span>
                    <h2 className="mt-4">Delivery Methodology</h2>
                    <p>
                        A proven approach that ensures successful outcomes for every project
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {approach.map((item, index) => (
                        <div key={item.step} className="relative">
                            <div className="text-6xl font-heading font-bold text-primary/10 mb-4">{item.step}</div>
                            <h4 className="font-heading font-bold text-xl mb-3">{item.title}</h4>
                            <p className="text-muted">{item.description}</p>
                            {index < approach.length - 1 && (
                                <div className="hidden lg:block absolute top-8 right-0 w-12 h-0.5 bg-primary/20 transform translate-x-6" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Technologies */}
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Technologies</span>
                        <h2 className="mt-4">Vendor Partnerships</h2>
                        <p className="text-muted">
                            We partner with industry leaders to deliver best-in-class solutions
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 pt-8">
                        {partners.map((partner) => (
                            <div key={partner.name} className="relative w-32 h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                <Image 
                                    src={partner.logo} 
                                    alt={`${partner.name} logo`} 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Need a Custom Infrastructure Solution?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Our experts can help you design and implement the perfect infrastructure for your unique requirements.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Request a Free Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
