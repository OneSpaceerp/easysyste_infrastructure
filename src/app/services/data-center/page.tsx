import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Data Center Services',
    description: 'Complete data center design, build, and modernization services including cabling, power, cooling, and capacity planning.',
}

const capabilities = [
    {
        title: 'Physical & Logical Design',
        description: 'Complete data center architecture from facility layout to logical infrastructure design, optimized for performance and efficiency.',
        features: ['Facility layout planning', 'Rack and floor design', 'Logical topology design', 'Capacity modeling'],
    },
    {
        title: 'Structured Cabling',
        description: 'Enterprise-grade cabling infrastructure including copper, fiber, and high-density solutions for maximum reliability.',
        features: ['Copper & fiber deployment', 'Cable management', 'Testing & certification', 'Documentation'],
    },
    {
        title: 'Power & Cooling',
        description: 'Efficient power distribution and cooling solutions that maximize uptime while minimizing operational costs.',
        features: ['UPS systems', 'Power distribution', 'Precision cooling', 'Hot/cold aisle containment'],
    },
    {
        title: 'Modernization & Consolidation',
        description: 'Transform legacy data centers into modern, efficient facilities through consolidation and technology refresh.',
        features: ['Infrastructure assessment', 'Consolidation planning', 'Technology refresh', 'Migration execution'],
    },
]

export default function DataCenterPage() {
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
                            Data Center<br />
                            <span className="text-[#F5E6E9]">Services</span>
                        </h1>
                        <p className="text-xl text-[#E6E1E2] leading-relaxed">
                            Complete data center design, build, and modernization services that create the physical
                            foundation for your enterprise IT operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="section-container">
                <div className="section-title">
                    <h2>Data Center Services</h2>
                    <p>
                        Resilient physical and logical facility engineering designed for continuous availability
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability) => (
                        <div key={capability.title} className="card-service">
                            <h3 className="font-heading font-bold text-xl mb-4">{capability.title}</h3>
                            <p className="text-muted mb-6 leading-relaxed">{capability.description}</p>
                            <ul className="grid sm:grid-cols-2 gap-2.5">
                                {capability.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-foreground font-medium">
                                        <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Planning a Data Center Project?</h2>
                    <p className="text-xl text-[#F5E6E9] mb-10 leading-relaxed">
                        Our experts can help you design, build, or modernize your data center infrastructure.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg active:scale-[0.98]"
                    >
                        Discuss Your Project
                    </Link>
                </div>
            </section>
        </>
    )
}
