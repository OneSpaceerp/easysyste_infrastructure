import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Industries We Serve',
    description: 'Easy System delivers specialized infrastructure solutions for manufacturing, finance & banking, government, oil & gas, telecom, and retail sectors.',
}

const industries = [
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V8l-6 4V8l-6 4V8L3 12v9h16z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21v-4M11 21v-4M15 21v-4" />
            </svg>
        ),
        description: 'Modern manufacturing requires connected, secure, and reliable IT infrastructure to support Industry 4.0 initiatives, IoT deployments, and real-time production systems.',
        challenges: ['OT/IT convergence', 'Real-time data processing', 'Supply chain visibility', 'Equipment connectivity'],
        solutions: ['Industrial network design', 'Edge computing deployment', 'SCADA security', 'MES integration'],
    },
    {
        id: 'finance',
        name: 'Finance & Banking',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21v-8M19 21v-8M9 21v-8M15 21v-8M12 3L2 9h20L12 3z" />
            </svg>
        ),
        description: 'Financial institutions demand the highest levels of data sovereignty, security, availability, and compliance. We deliver in-country payment gateways and core infrastructure built to rigorous banking standards.',
        challenges: ['In-country data residency', 'Regulatory & PCI DSS compliance', 'High availability & failover', 'Fraud & 3DS2 authentication'],
        solutions: ['Hosted in-country payment gateway', 'Core banking infrastructure', 'Active-active disaster recovery', 'PCI DSS & EMV 3DS2 security'],
    },
    {
        id: 'government',
        name: 'Government',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4L3 8h18L12 4zM4 10v8M8 10v8M12 10v8M16 10v8M20 10v8M2 20h20" />
            </svg>
        ),
        description: 'Government agencies require secure, sovereign infrastructure that protects sensitive data while enabling efficient citizen services.',
        challenges: ['Data sovereignty', 'Legacy modernization', 'Citizen services', 'Inter-agency integration'],
        solutions: ['Sovereign cloud solutions', 'Secure communications', 'E-government platforms', 'Agency network integration'],
    },
    {
        id: 'oil-gas',
        name: 'Oil & Gas',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        description: 'The energy sector operates in challenging environments requiring ruggedized, highly available infrastructure from remote drilling sites to global headquarters.',
        challenges: ['Remote site connectivity', 'Harsh environments', 'Safety systems', 'Production optimization'],
        solutions: ['Field network deployment', 'SCADA infrastructure', 'Remote monitoring', 'Upstream/downstream integration'],
    },
    {
        id: 'telecom',
        name: 'Telecom',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
        ),
        description: 'Telecommunications providers need infrastructure that can handle massive scale while delivering the reliability their customers expect.',
        challenges: ['Network scalability', 'Service assurance', '5G readiness', 'Customer experience'],
        solutions: ['Core network infrastructure', 'OSS/BSS systems', 'Data center buildout', 'Network automation'],
    },
    {
        id: 'retail',
        name: 'Retail',
        icon: (
            <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        description: 'Retail enterprises require agile infrastructure that supports omnichannel commerce, inventory management, and customer engagement.',
        challenges: ['Omnichannel integration', 'Store connectivity', 'Inventory visibility', 'Customer data security'],
        solutions: ['Store network solutions', 'POS infrastructure', 'E-commerce platforms', 'Supply chain visibility'],
    },
]

export default function IndustriesPage() {
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
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-white mb-6">
                        Industries<br />
                        <span className="text-[#F5E6E9]">We Serve</span>
                    </h1>
                    <p className="text-xl text-[#E6E1E2] max-w-3xl mx-auto leading-relaxed">
                        Deep expertise across demanding sectors where infrastructure reliability is not optional—it&apos;s essential.
                    </p>
                </div>
            </section>

            {/* Industries */}
            <section className="section-container">
                <div className="space-y-16">
                    {industries.map((industry, index) => (
                        <div key={industry.id} id={industry.id} className="scroll-mt-32">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl p-3.5 mb-5 flex items-center justify-center">
                                        {industry.icon}
                                    </div>
                                    <h2 className="text-3xl font-heading font-bold mb-4">{industry.name}</h2>
                                    <p className="text-muted text-lg mb-8 leading-relaxed">{industry.description}</p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white rounded-2xl p-6 border border-gray-200/80">
                                            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Key Challenges</h3>
                                            <ul className="space-y-2.5">
                                                {industry.challenges.map((challenge) => (
                                                    <li key={challenge} className="flex items-center text-sm text-muted font-medium">
                                                        <svg className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white rounded-2xl p-6 border border-gray-200/80">
                                            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Our Solutions</h3>
                                            <ul className="space-y-2.5">
                                                {industry.solutions.map((solution) => (
                                                    <li key={solution} className="flex items-center text-sm text-foreground font-medium">
                                                        <svg className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="aspect-video bg-white border border-gray-200/80 shadow-sm rounded-3xl flex items-center justify-center p-12">
                                        <div className="w-28 h-28 md:w-36 md:h-36">
                                            {industry.icon}
                                        </div>
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
                    <p className="text-xl text-[#F5E6E9] mb-10 leading-relaxed">
                        We serve organizations across many sectors. Contact us to discuss your specific requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg active:scale-[0.98]"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    )
}
