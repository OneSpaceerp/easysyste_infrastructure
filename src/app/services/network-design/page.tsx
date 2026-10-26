import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Network Design & Management',
    description: 'End-to-end network architecture, LAN/WAN/SD-WAN solutions, high availability design, and 24/7 monitoring from Easy System.',
}

const capabilities = [
    {
        title: 'Network Assessment & Design',
        description: 'Comprehensive evaluation of your existing network infrastructure, identifying bottlenecks, security gaps, and opportunities for optimization. Our certified architects design solutions that align with your business objectives.',
        features: [
            'Current state analysis and documentation',
            'Performance benchmarking',
            'Security posture assessment',
            'Future-ready architecture design',
            'Detailed implementation roadmaps',
        ],
    },
    {
        title: 'LAN, WAN & SD-WAN Solutions',
        description: 'Modern network solutions that connect your entire organization with speed, security, and reliability. From campus networks to global WAN deployments, we deliver connectivity that powers your business.',
        features: [
            'Campus and branch LAN design',
            'MPLS and SD-WAN architectures',
            'Cloud connectivity optimization',
            'Quality of Service (QoS) implementation',
            'Network segmentation strategies',
        ],
    },
    {
        title: 'High Availability Architecture',
        description: 'Zero-downtime network designs with built-in redundancy at every layer. We implement failover mechanisms and load balancing to ensure your network remains operational 24/7.',
        features: [
            'Redundant path design',
            'Automatic failover configuration',
            'Load balancing implementation',
            'Geographic redundancy',
            'Disaster recovery networking',
        ],
    },
    {
        title: 'Monitoring & Optimization',
        description: 'Continuous network monitoring and proactive optimization to maintain peak performance. Our NOC team identifies and resolves issues before they impact your business.',
        features: [
            'Real-time performance monitoring',
            'Automated alerting and remediation',
            'Capacity planning and forecasting',
            'Traffic analysis and optimization',
            'Regular health assessments',
        ],
    },
]

const deliverables = [
    'Current State Assessment Report',
    'Network Architecture Design Document',
    'Implementation Plan & Timeline',
    'Configuration Standards & Documentation',
    'Performance Baseline Reports',
    'Ongoing Monitoring Dashboard Access',
]

export default function NetworkDesignPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#0E0D0D] overflow-hidden border-b border-white/10">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 25%, rgba(124, 16, 41, 0.35) 0%, transparent 55%), radial-gradient(circle at 80% 75%, rgba(41, 50, 57, 0.45) 0%, transparent 55%)',
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Link
                            href="/services"
                            className="inline-flex items-center min-h-[44px] px-2 -ml-2 rounded-lg text-sm font-medium text-[#EBCED4] hover:text-white mb-6 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                        <h1 className="text-white mb-6">
                            Network Design<br />
                            <span className="text-[#F5E6E9]">&amp; Management</span>
                        </h1>
                        <p className="text-xl text-[#E6E1E2] leading-relaxed">
                            End-to-end network architecture solutions from initial assessment to ongoing optimization.
                            We design, implement, and manage networks that deliver the performance and reliability your business demands.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="mb-6">Connectivity That Powers Your Business</h2>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            In today&apos;s digital-first world, your network is the foundation of everything you do.
                            Applications, data, and communications all depend on a robust, secure, and high-performance
                            network infrastructure.
                        </p>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            Easy System brings deep expertise in enterprise networking, with certified professionals
                            across Cisco, Juniper, Fortinet, and other leading platforms. We design networks that not
                            only meet your current needs but scale seamlessly as your business grows.
                        </p>
                        <p className="text-muted text-lg leading-relaxed">
                            Whether you&apos;re building a new network from scratch, modernizing legacy infrastructure,
                            or extending connectivity to the cloud, our team delivers solutions that work.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary tabular-nums mb-2">99.99%</div>
                            <div className="text-muted font-medium">Uptime SLA</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">Sub-ms</div>
                            <div className="text-muted font-medium">Latency Target</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary tabular-nums mb-2">24/7</div>
                            <div className="text-muted font-medium">NOC Support</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary tabular-nums mb-2">100+</div>
                            <div className="text-muted font-medium">Networks Deployed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="bg-white py-20 border-y border-gray-200/80">
                <div className="section-container">
                    <div className="section-title">
                        <h2>What We Deliver</h2>
                        <p>
                            Engineered network capabilities built for resilience, throughput, and operational clarity
                        </p>
                    </div>

                    <div className="space-y-12">
                        {capabilities.map((capability, index) => (
                            <div key={capability.title} className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <h3 className="font-heading font-bold text-2xl mb-4">{capability.title}</h3>
                                    <p className="text-muted text-lg mb-6 leading-relaxed">{capability.description}</p>
                                    <ul className="space-y-3">
                                        {capability.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-foreground font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`bg-[#F4F4F4] border border-gray-200/80 rounded-3xl p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="text-primary">
                                        <svg className="w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="section-container">
                <div className="section-title">
                    <h2>Project Deliverables</h2>
                    <p>
                        Clear architectural documentation, baseline benchmarks, and live operational visibility
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverables.map((deliverable) => (
                        <div
                            key={deliverable}
                            className="flex items-center p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 ease-apple-spring"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="font-semibold text-foreground">{deliverable}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Ready to Upgrade Your Network?</h2>
                    <p className="text-xl text-[#F5E6E9] mb-10 leading-relaxed">
                        Get a comprehensive network assessment from our certified engineers.
                        We&apos;ll identify opportunities to improve performance, security, and reliability.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg active:scale-[0.98]"
                    >
                        Request Network Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
