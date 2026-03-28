import Link from 'next/link'
import Image from 'next/image'

// Service cards data
const services = [
    {
        title: 'Network Design & Management',
        description: 'End-to-end network architecture, LAN/WAN/SD-WAN solutions, and 24/7 monitoring for optimal performance and reliability.',
        href: '/services/network-design',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        title: 'Infrastructure Security',
        description: 'Enterprise firewalls, SIEM/SOC operations, Zero Trust architecture, and comprehensive threat protection.',
        href: '/services/security',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Cloud & Virtualization',
        description: 'Azure, AWS, Oracle Cloud migrations, hybrid cloud architectures, and cloud operations optimization.',
        href: '/services/cloud-virtualization',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
    },
    {
        title: 'Data Center Services',
        description: 'Physical and logical design, cabling infrastructure, power and cooling optimization, and facility modernization.',
        href: '/services/data-center',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
    },
    {
        title: 'Backup & Disaster Recovery',
        description: 'Business continuity planning, automated backup solutions, and rapid recovery capabilities for zero data loss.',
        href: '/services/managed-services',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
    },
    {
        title: 'Managed Services & Support',
        description: '24/7 monitoring, proactive maintenance, on-site engineering support, and guaranteed SLA performance.',
        href: '/services/managed-services',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
]

// Industries data
const industries = [
    { 
        name: 'Manufacturing', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V8l-6 4V8l-6 4V8L3 12v9h16z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21v-4M11 21v-4M15 21v-4" />
            </svg>
        ) 
    },
    { 
        name: 'Finance & Banking', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21v-8M19 21v-8M9 21v-8M15 21v-8M12 3L2 9h20L12 3z" />
            </svg>
        ) 
    },
    { 
        name: 'Government', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4L3 8h18L12 4zM4 10v8M8 10v8M12 10v8M16 10v8M20 10v8M2 20h20" />
            </svg>
        ) 
    },
    { 
        name: 'Oil & Gas', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4M10 3a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2h-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7h3a2 2 0 012 2v3a2 2 0 01-2 2h-3" />
            </svg>
        ) 
    },
    { 
        name: 'Telecom', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
        ) 
    },
    { 
        name: 'Retail', 
        icon: (
            <svg className="w-10 h-10 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ) 
    },
]

// Partners data
const partners = [
    { name: 'Oracle', logo: '/images/partners/oracle.svg' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.svg' },
    { name: 'Cisco', logo: '/images/partners/cisco.svg' },
    { name: 'VMware', logo: '/images/partners/vmware.svg' },
    { name: 'Dell EMC', logo: '/images/partners/dell.svg' },
    { name: 'AWS', logo: '/images/partners/aws.svg' },
]

// Stats data
const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '108+', label: 'Projects Delivered' },
    { value: '103+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime Guarantee' },
]

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-gray-900 to-foreground" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF3419' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <div className="animate-fade-in">
                        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                            Enterprise Infrastructure Excellence
                        </span>
                        <h1 className="text-white text-balance mb-6">
                            Enterprise Infrastructure<br />
                            <span className="gradient-text">Built for Zero Downtime</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
                            Secure, scalable, and resilient infrastructure solutions designed, implemented, and managed by Easy Systems.
                            Your business deserves technology foundations that never fail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                Request a Free Infrastructure Assessment
                            </Link>
                            <Link href="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider">About Easy Systems</span>
                        <h2 className="mt-4 mb-6">Who We Are</h2>
                        <p className="text-muted text-lg mb-6">
                            Founded in 2014, Easy Systems has grown into a premier technology services company with a proven track record
                            of delivering enterprise-grade infrastructure solutions across Egypt, UAE, and UK.
                        </p>
                        <p className="text-muted text-lg mb-8">
                            We are a well-established company specialized in providing Oracle Products services with a fully integrated
                            package of services. Our team combines deep technical expertise with a commitment to operational excellence,
                            ensuring your infrastructure runs smoothly 24/7.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Particular</h4>
                                    <p className="text-muted text-sm">Specialized in enterprise solutions</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Proficient</h4>
                                    <p className="text-muted text-sm">Flexible, proactive approach</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Professional</h4>
                                    <p className="text-muted text-sm">Efficiency in execution</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Punctual</h4>
                                    <p className="text-muted text-sm">On-time delivery guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                                    <div className="text-muted text-sm">Global Offices</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                    <div className="text-muted text-sm">Support Available</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                    <div className="text-muted text-sm">Certified Engineers</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                                    <div className="text-muted text-sm">Certified Standards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Easy Systems Section */}
            <section className="bg-foreground py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-white mt-4">Why Easy Systems</h2>
                        <p className="text-white/70 mt-4">
                            We combine deep technical expertise with a relentless commitment to your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-heading font-bold text-xl mb-4">Trust & Reliability</h4>
                            <p className="text-white/60">
                                Over a decade of delivering mission-critical infrastructure projects with a 99.9% uptime track record across all client deployments.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-heading font-bold text-xl mb-4">Expert Team</h4>
                            <p className="text-white/60">
                                Certified professionals across Oracle, Microsoft, Cisco, VMware, and cloud platforms with deep specialization in enterprise environments.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h4 className="text-white font-heading font-bold text-xl mb-4">Global Partnerships</h4>
                            <p className="text-white/60">
                                Strategic alliances with leading technology vendors ensure access to cutting-edge solutions, priority support, and best-in-class implementations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">What We Offer</span>
                    <h2 className="mt-4">Core Infrastructure Services</h2>
                    <p>
                        Comprehensive infrastructure solutions designed to keep your business running at peak performance
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link key={service.title} href={service.href} className="card-service group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h4 className="font-heading font-bold text-xl mb-3">{service.title}</h4>
                            <p className="text-muted mb-4">{service.description}</p>
                            <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                                Learn More
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Industries Section */}
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Industry Expertise</span>
                        <h2 className="mt-4">Industries We Serve</h2>
                        <p>
                            From oil & gas to government, we deliver specialized infrastructure solutions for demanding sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry) => (
                            <div key={industry.name} className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full overflow-hidden">
                                <div className="mb-4">{industry.icon}</div>
                                <h4 className="font-semibold text-foreground text-sm lg:text-base leading-tight w-full break-words">{industry.name}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/industries" className="btn-secondary">
                            Explore All Industries
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technology Partners */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">Our Ecosystem</span>
                    <h2 className="mt-4">Technology Partners</h2>
                    <p>
                        We partner with industry leaders to deliver best-in-class infrastructure solutions
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
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Ready to Transform Your Infrastructure?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Get a comprehensive infrastructure assessment from our certified engineers.
                        We&apos;ll identify opportunities to improve performance, security, and reliability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Request Free Assessment
                        </Link>
                        <Link href="/case-studies" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
