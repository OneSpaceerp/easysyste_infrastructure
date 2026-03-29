import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Managed Services & Support',
    description: '24/7 monitoring, proactive maintenance, on-site engineering support, and guaranteed SLA performance from Easy System.',
}

const supportModels = [
    { name: 'Bronze', response: '8 hours', coverage: 'Business Hours', features: ['Email support', 'Quarterly reviews', 'Ticket portal'] },
    { name: 'Silver', response: '4 hours', coverage: '12x5', features: ['Phone support', 'Monthly reviews', 'Proactive monitoring'] },
    { name: 'Gold', response: '2 hours', coverage: '24x7', features: ['Priority escalation', 'Weekly reviews', 'On-site visits'] },
    { name: 'Platinum', response: '30 minutes', coverage: '24x7', features: ['Dedicated engineer', 'Daily standups', 'Full management'] },
]

export default function ManagedServicesPage() {
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
                            Managed Services<br />
                            <span className="gradient-text">& Support</span>
                        </h1>
                        <p className="text-xl text-white/80">
                            24/7 monitoring, proactive maintenance, and expert support that keeps your infrastructure
                            running at peak performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Support Models */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">Support Models</span>
                    <h2 className="mt-4">Choose Your SLA</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportModels.map((model) => (
                        <div key={model.name} className="card text-center hover:border-2 hover:border-primary transition-all">
                            <h3 className="font-heading font-bold text-2xl text-primary mb-4">{model.name}</h3>
                            <div className="text-3xl font-bold mb-2">{model.response}</div>
                            <div className="text-muted text-sm mb-4">Response Time</div>
                            <div className="bg-primary/10 rounded-lg p-2 mb-6">
                                <span className="text-primary font-medium">{model.coverage}</span>
                            </div>
                            <ul className="space-y-2 text-sm text-muted">
                                {model.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
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
                    <h2 className="text-white mb-6">Need Reliable IT Support?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Let us handle your infrastructure so you can focus on your business.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Get Support Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
