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
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-gray-900 to-foreground overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Link href="/services" className="inline-flex items-center text-primary hover:text-accent mb-6 transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                        <h1 className="text-white mb-6">
                            Data Center<br />
                            <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-white/80">
                            Complete data center design, build, and modernization services that create the physical
                            foundation for your enterprise IT operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">Capabilities</span>
                    <h2 className="mt-4">Data Center Services</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability) => (
                        <div key={capability.title} className="card-service">
                            <h3 className="font-heading font-bold text-xl mb-4">{capability.title}</h3>
                            <p className="text-muted mb-6">{capability.description}</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {capability.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-muted">
                                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                    <p className="text-xl text-white/80 mb-10">
                        Our experts can help you design, build, or modernize your data center infrastructure.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Discuss Your Project
                    </Link>
                </div>
            </section>
        </>
    )
}
