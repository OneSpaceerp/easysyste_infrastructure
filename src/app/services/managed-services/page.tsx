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
                            Managed Services<br />
                            <span className="text-[#F5E6E9]">&amp; Support</span>
                        </h1>
                        <p className="text-xl text-[#E6E1E2] leading-relaxed">
                            24/7 monitoring, proactive maintenance, and expert support that keeps your infrastructure
                            running at peak performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Support Models */}
            <section className="section-container">
                <div className="section-title">
                    <h2>Choose Your SLA</h2>
                    <p>
                        Predictable response times, proactive monitoring, and dedicated engineering coverage
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportModels.map((model) => (
                        <div
                            key={model.name}
                            className="card text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 ease-apple-spring"
                        >
                            <h3 className="font-heading font-bold text-2xl text-primary mb-4">{model.name}</h3>
                            <div className="text-3xl font-heading font-bold text-foreground tabular-nums mb-1">{model.response}</div>
                            <div className="text-muted text-sm mb-4">Response Time</div>
                            <div className="bg-primary/10 rounded-lg py-2 px-3 mb-6">
                                <span className="text-primary font-semibold text-sm tabular-nums">{model.coverage}</span>
                            </div>
                            <ul className="space-y-2.5 text-sm text-foreground font-medium">
                                {model.features.map((feature) => (
                                    <li key={feature} className="flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
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
                    <h2 className="text-white mb-6">Need Reliable IT Support?</h2>
                    <p className="text-xl text-[#F5E6E9] mb-10 leading-relaxed">
                        Let us handle your infrastructure so you can focus on your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg active:scale-[0.98]"
                    >
                        Get Support Quote
                    </Link>
                </div>
            </section>
        </>
    )
}
