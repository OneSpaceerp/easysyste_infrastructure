import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Industries We Serve',
    description: 'Easy Systems delivers specialized infrastructure solutions for manufacturing, finance, government, oil & gas, telecom, and retail sectors.',
}

const industries = [
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: '🏭',
        description: 'Modern manufacturing requires connected, secure, and reliable IT infrastructure to support Industry 4.0 initiatives, IoT deployments, and real-time production systems.',
        challenges: ['OT/IT convergence', 'Real-time data processing', 'Supply chain visibility', 'Equipment connectivity'],
        solutions: ['Industrial network design', 'Edge computing deployment', 'SCADA security', 'MES integration'],
    },
    {
        id: 'finance',
        name: 'Finance & Banking',
        icon: '🏦',
        description: 'Financial institutions demand the highest levels of security, availability, and compliance. We deliver infrastructure that meets the rigorous requirements of the banking sector.',
        challenges: ['Regulatory compliance', 'Data protection', 'High availability', 'Fraud prevention'],
        solutions: ['Secure trading platforms', 'Core banking infrastructure', 'Disaster recovery', 'PCI-DSS compliance'],
    },
    {
        id: 'government',
        name: 'Government',
        icon: '🏛️',
        description: 'Government agencies require secure, sovereign infrastructure that protects sensitive data while enabling efficient citizen services.',
        challenges: ['Data sovereignty', 'Legacy modernization', 'Citizen services', 'Inter-agency integration'],
        solutions: ['Sovereign cloud solutions', 'Secure communications', 'E-government platforms', 'Agency network integration'],
    },
    {
        id: 'oil-gas',
        name: 'Oil & Gas',
        icon: '⛽',
        description: 'The energy sector operates in challenging environments requiring ruggedized, highly available infrastructure from remote drilling sites to global headquarters.',
        challenges: ['Remote site connectivity', 'Harsh environments', 'Safety systems', 'Production optimization'],
        solutions: ['Field network deployment', 'SCADA infrastructure', 'Remote monitoring', 'Upstream/downstream integration'],
    },
    {
        id: 'telecom',
        name: 'Telecom',
        icon: '📡',
        description: 'Telecommunications providers need infrastructure that can handle massive scale while delivering the reliability their customers expect.',
        challenges: ['Network scalability', 'Service assurance', '5G readiness', 'Customer experience'],
        solutions: ['Core network infrastructure', 'OSS/BSS systems', 'Data center buildout', 'Network automation'],
    },
    {
        id: 'retail',
        name: 'Retail',
        icon: '🛒',
        description: 'Retail enterprises require agile infrastructure that supports omnichannel commerce, inventory management, and customer engagement.',
        challenges: ['Omnichannel integration', 'Store connectivity', 'Inventory visibility', 'Customer data security'],
        solutions: ['Store network solutions', 'POS infrastructure', 'E-commerce platforms', 'Supply chain visibility'],
    },
]

export default function IndustriesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-gray-900 to-foreground overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                        Industry Expertise
                    </span>
                    <h1 className="text-white mb-6">
                        Industries<br />
                        <span className="gradient-text">We Serve</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Deep expertise across demanding sectors where infrastructure reliability is not optional—it&apos;s essential.
                    </p>
                </div>
            </section>

            {/* Industries */}
            <section className="section-container">
                <div className="space-y-16">
                    {industries.map((industry, index) => (
                        <div key={industry.id} id={industry.id} className="scroll-mt-32">
                            <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? '' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="text-5xl mb-4">{industry.icon}</div>
                                    <h2 className="text-3xl font-heading font-bold mb-4">{industry.name}</h2>
                                    <p className="text-muted text-lg mb-8">{industry.description}</p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-heading font-bold text-lg mb-4 text-foreground">Key Challenges</h4>
                                            <ul className="space-y-2">
                                                {industry.challenges.map((challenge) => (
                                                    <li key={challenge} className="flex items-center text-muted">
                                                        <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-lg mb-4 text-foreground">Our Solutions</h4>
                                            <ul className="space-y-2">
                                                {industry.solutions.map((solution) => (
                                                    <li key={solution} className="flex items-center text-muted">
                                                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="aspect-video flex items-center justify-center">
                                        <span className="text-9xl">{industry.icon}</span>
                                    </div>
                                </div>
                            </div>
                            {index < industries.length - 1 && <hr className="mt-16 border-gray-200" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Don&apos;t See Your Industry?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        We serve organizations across many sectors. Contact us to discuss your specific requirements.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}
