import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore how Easy Systems has helped enterprises transform their infrastructure with real-world success stories.',
}

const caseStudies = [
    {
        id: 1,
        client: 'Major Oil & Gas Company',
        industry: 'Oil & Gas',
        challenge: 'The client needed to modernize their aging data center infrastructure and establish reliable connectivity across 50+ remote drilling sites, while maintaining strict security requirements.',
        solution: 'Easy Systems designed and implemented a hybrid cloud architecture with Oracle Cloud Infrastructure, deployed SD-WAN connectivity to all remote sites, and established a 24/7 NOC for continuous monitoring.',
        technologies: ['Oracle Cloud', 'SD-WAN', 'Cisco Networking', 'VMware', 'Fortinet Security'],
        results: [
            '99.99% uptime achieved across all sites',
            '40% reduction in WAN costs',
            '60% faster application response times',
            'Zero security incidents post-implementation',
        ],
    },
    {
        id: 2,
        client: 'Leading Regional Bank',
        industry: 'Finance',
        challenge: 'The bank required a complete infrastructure refresh to meet new regulatory requirements, improve disaster recovery capabilities, and support digital banking initiatives.',
        solution: 'We implemented a fully redundant active-active data center design, deployed next-generation firewalls with integrated SIEM, and established a compliant backup and DR solution.',
        technologies: ['Dell EMC', 'Palo Alto Networks', 'Splunk SIEM', 'Veeam', 'Microsoft Azure'],
        results: [
            'Full PCI-DSS compliance achieved',
            'RTO reduced from 24 hours to 2 hours',
            '100% successful regulatory audit',
            '50% reduction in DR infrastructure costs',
        ],
    },
    {
        id: 3,
        client: 'Government Ministry',
        industry: 'Government',
        challenge: 'A government ministry needed to consolidate multiple legacy data centers into a modern, secure, and sovereign infrastructure platform while ensuring zero disruption to citizen services.',
        solution: 'Easy Systems executed a phased data center consolidation, deploying private cloud infrastructure with comprehensive security controls and establishing inter-agency connectivity.',
        technologies: ['Oracle Exadata', 'VMware vSphere', 'Cisco ACI', 'Oracle IAM', 'NetApp Storage'],
        results: [
            '5 data centers consolidated to 2',
            '60% reduction in operating costs',
            'Enhanced security posture',
            'Zero downtime during migration',
        ],
    },
]

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-gray-900 to-foreground overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                        Success Stories
                    </span>
                    <h1 className="text-white mb-6">
                        Case<br />
                        <span className="gradient-text">Studies</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Real-world examples of how Easy Systems helps enterprises transform their infrastructure.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-container">
                <div className="space-y-16">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="card p-8 md:p-12">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {study.industry}
                                </span>
                                <h3 className="font-heading font-bold text-2xl">{study.client}</h3>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8 mb-8">
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-3 text-primary">Challenge</h4>
                                    <p className="text-muted">{study.challenge}</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <h4 className="font-heading font-bold text-lg mb-3 text-primary">Solution</h4>
                                    <p className="text-muted">{study.solution}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {study.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-3">Results</h4>
                                    <ul className="space-y-2">
                                        {study.results.map((result) => (
                                            <li key={result} className="flex items-start text-muted">
                                                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Ready to Be Our Next Success Story?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Let&apos;s discuss how we can help transform your infrastructure.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    )
}
