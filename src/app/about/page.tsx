import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Easy System - a well-established infrastructure and IT services company founded in 2014, delivering enterprise solutions across Egypt, UAE, and UK.',
}

const values = [
    {
        title: 'Particular',
        description: 'We specialize in providing Oracle Products services with a fully integrated package of services, focusing deeply on enterprise infrastructure excellence.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Proficient',
        description: 'We maintain a simple, predictable, flexible, proactive and comprehensive policy that adapts to each client\'s unique requirements.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Professional',
        description: 'We target efficiency and professionalism while executing our services, ensuring the highest standards of delivery and support.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Punctual',
        description: 'We aim to deliver high-quality services through smooth, on-time delivery, respecting deadlines and exceeding expectations.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
]

const timeline = [
    { year: '2014', title: 'Foundation', description: 'Easy System established in Egypt with a focus on Oracle Technologies' },
    { year: '2016', title: 'Enterprise Expansion', description: 'Major oil & gas and banking clients onboarded, team expanded to 50+' },
    { year: '2018', title: 'UAE Operations', description: 'Opened Dubai office to serve Gulf region enterprises' },
    { year: '2020', title: 'Cloud Excellence', description: 'Achieved Microsoft and AWS partner certifications' },
    { year: '2022', title: 'UK Presence', description: 'Launched UK operations, serving European clients' },
    { year: '2024', title: 'AI Integration', description: 'Expanded into AI and ML infrastructure solutions' },
]

export default function AboutPage() {
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
                    <div className="text-center">
                        <h1 className="text-white mb-6 tabular-nums">
                            Building Technology Foundations<br />
                            <span className="text-[#F5E6E9]">Since 2014</span>
                        </h1>
                        <p className="text-xl text-[#E6E1E2] max-w-3xl mx-auto leading-relaxed">
                            A well-established company dedicated to delivering world-class infrastructure solutions
                            that power enterprises across three continents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="mb-6">A Decade of Excellence</h2>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            Founded in 2014, Easy System began with a clear vision: to provide enterprises with infrastructure
                            solutions that are as reliable as they are innovative. What started as a specialized Oracle services
                            provider in Egypt has grown into a multinational technology company serving clients across the
                            Middle East, Europe, and beyond.
                        </p>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            Our journey has been defined by a commitment to operational excellence and an unwavering focus on
                            client success. We&apos;ve built long-term partnerships with organizations in the most demanding
                            sectors—oil &amp; gas, financial services, government, and telecommunications—where infrastructure
                            failure is simply not an option.
                        </p>
                        <p className="text-muted text-lg leading-relaxed">
                            Today, with offices in Cairo, Dubai, and Nottingham, we continue to expand our capabilities while
                            maintaining the personalized service and deep technical expertise that our clients depend on.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-white border border-gray-200/80 shadow-sm rounded-3xl flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl font-heading font-bold text-primary tabular-nums mb-4">10+</div>
                                <div className="text-xl text-muted font-medium">Years of Trusted Service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-white py-20 border-y border-gray-200/80">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-[#F4F4F4] rounded-2xl p-8 border border-gray-200/80">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
                            <p className="text-muted text-lg leading-relaxed">
                                To be the most trusted technology partner for enterprises seeking zero-downtime infrastructure,
                                setting the standard for reliability, security, and innovation in every market we serve.
                            </p>
                        </div>
                        <div className="bg-[#F4F4F4] rounded-2xl p-8 border border-gray-200/80">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
                            <p className="text-muted text-lg leading-relaxed">
                                To empower organizations with secure, scalable, and resilient technology foundations through
                                expert design, implementation, and management—enabling our clients to focus on what matters most:
                                their core business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-container">
                <div className="section-title">
                    <h2>Our Core Values</h2>
                    <p>
                        The principles that guide every decision and every project we undertake
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <div key={value.title} className="card text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                {value.icon}
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                            <p className="text-muted leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-[#0E0D0D] py-20 border-y border-white/10">
                <div className="section-container">
                    <div className="section-title">
                        <h2 className="text-white">Milestones</h2>
                        <p className="text-[#D5CED0] mt-4">
                            Key moments in our growth across Egypt, the UAE, and the UK
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/15" />

                        <div className="space-y-10">
                            {timeline.map((item, index) => (
                                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="bg-[#15191D] rounded-2xl p-6 border border-white/10 hover:border-primary-300/40 transition-all duration-300 ease-apple-spring">
                                            <span className="text-[#F5E6E9] font-heading font-bold text-2xl tabular-nums">{item.year}</span>
                                            <h3 className="text-white font-heading font-bold text-xl mt-2 mb-2">{item.title}</h3>
                                            <p className="text-[#D5CED0] leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-[#0E0D0D]" />
                                    <div className="flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitments */}
            <section className="section-container">
                <div className="section-title">
                    <h2>What You Can Expect</h2>
                    <p>
                        Enterprise governance, security, and operational discipline across every engagement
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card-service">
                        <h3 className="font-heading font-bold text-xl mb-4">Security First</h3>
                        <p className="text-muted mb-4 leading-relaxed">
                            We implement security at every layer—from physical data center access to application-level
                            protection. Our infrastructure designs meet international compliance standards including
                            ISO 27001, PCI-DSS, and HIPAA requirements.
                        </p>
                        <ul className="space-y-2.5">
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Zero Trust Architecture
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                24/7 Security Monitoring
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Regular Compliance Audits
                            </li>
                        </ul>
                    </div>
                    <div className="card-service">
                        <h3 className="font-heading font-bold text-xl mb-4">Operational Excellence</h3>
                        <p className="text-muted mb-4 leading-relaxed">
                            Our delivery methodology is refined through thousands of successful projects. We follow
                            industry best practices including ITIL, Agile, and DevOps principles to ensure consistent,
                            high-quality outcomes.
                        </p>
                        <ul className="space-y-2.5">
                            <li className="flex items-center text-foreground text-sm font-medium tabular-nums">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                99.9% Uptime SLAs
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Proactive Monitoring
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Continuous Improvement
                            </li>
                        </ul>
                    </div>
                    <div className="card-service">
                        <h3 className="font-heading font-bold text-xl mb-4">Client Partnership</h3>
                        <p className="text-muted mb-4 leading-relaxed">
                            We don&apos;t just deliver projects—we build lasting partnerships. Your success is our success,
                            and we measure our performance by the business outcomes we help you achieve.
                        </p>
                        <ul className="space-y-2.5">
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Dedicated Account Teams
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Regular Business Reviews
                            </li>
                            <li className="flex items-center text-foreground text-sm font-medium">
                                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Transparent Communication
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Ready to Partner With Us?</h2>
                    <p className="text-xl text-[#F5E6E9] mb-10 leading-relaxed">
                        Let&apos;s discuss how Easy System can help transform your infrastructure into a competitive advantage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg active:scale-[0.98]"
                        >
                            Contact Our Team
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center min-h-[44px] border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 ease-apple-spring active:scale-[0.98]"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
