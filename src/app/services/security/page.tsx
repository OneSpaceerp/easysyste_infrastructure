import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Infrastructure Security',
    description: 'Enterprise firewalls, SIEM/SOC operations, Zero Trust architecture, and comprehensive cybersecurity solutions from Easy Systems.',
}

const capabilities = [
    {
        title: 'Next-Generation Firewalls & SIEM',
        description: 'Multi-layered perimeter defense with advanced threat detection, intrusion prevention, and real-time security information and event management.',
        features: [
            'Next-gen firewall deployment & management',
            'Intrusion Detection/Prevention (IDS/IPS)',
            'SIEM implementation and tuning',
            'Log aggregation and correlation',
            'Threat intelligence integration',
        ],
    },
    {
        title: 'Security Operations Center (SOC)',
        description: 'Continuous security monitoring and incident response capabilities, either through our managed SOC or by helping you build your own internal capabilities.',
        features: [
            '24/7 security monitoring',
            'Incident detection and response',
            'Threat hunting and analysis',
            'Security playbook development',
            'Escalation and remediation',
        ],
    },
    {
        title: 'Identity & Access Management',
        description: 'Robust IAM solutions including Single Sign-On, Multi-Factor Authentication, and privileged access management to control who has access to your systems.',
        features: [
            'Single Sign-On (SSO) implementation',
            'Multi-Factor Authentication (MFA)',
            'Privileged Access Management (PAM)',
            'Directory services (AD, LDAP, OUD)',
            'Role-based access control (RBAC)',
        ],
    },
    {
        title: 'Zero Trust Architecture',
        description: 'Modern security framework that verifies every user, device, and connection before granting access, eliminating implicit trust from your network.',
        features: [
            'Zero Trust strategy development',
            'Micro-segmentation implementation',
            'Continuous verification mechanisms',
            'Least privilege access enforcement',
            'Software-defined perimeter (SDP)',
        ],
    },
    {
        title: 'Endpoint Protection',
        description: 'Comprehensive endpoint security including antivirus, EDR, and mobile device management to protect every device in your organization.',
        features: [
            'Endpoint Detection & Response (EDR)',
            'Advanced malware protection',
            'Mobile Device Management (MDM)',
            'Patch management automation',
            'Endpoint hardening',
        ],
    },
    {
        title: 'Compliance & Risk Mitigation',
        description: 'Security assessments, compliance audits, and risk management services to meet regulatory requirements and protect against evolving threats.',
        features: [
            'Security posture assessments',
            'Compliance gap analysis',
            'ISO 27001, PCI-DSS, HIPAA readiness',
            'Vulnerability assessments',
            'Penetration testing',
        ],
    },
]

export default function SecurityPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-gray-900 to-foreground overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF3419' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Link href="/services" className="inline-flex items-center text-primary hover:text-accent mb-6 transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                        <h1 className="text-white mb-6">
                            Infrastructure<br />
                            <span className="gradient-text">Security</span>
                        </h1>
                        <p className="text-xl text-white/80">
                            Enterprise-grade cybersecurity solutions that protect your critical assets from evolving threats.
                            From perimeter defense to Zero Trust architecture, we secure every layer of your infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider">Overview</span>
                        <h2 className="mt-4 mb-6">Security Without Compromise</h2>
                        <p className="text-muted text-lg mb-6">
                            In an era of sophisticated cyber threats, traditional perimeter security is no longer enough.
                            Organizations need a comprehensive security strategy that protects data, applications, and
                            infrastructure at every layer.
                        </p>
                        <p className="text-muted text-lg mb-6">
                            Easy Systems delivers enterprise security solutions backed by certified security professionals
                            and strategic partnerships with leading security vendors. We help you build a security posture
                            that protects against today&apos;s threats while adapting to tomorrow&apos;s challenges.
                        </p>
                        <p className="text-muted text-lg">
                            Our approach combines technology, process, and people to create defense-in-depth security
                            that keeps your organization protected around the clock.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                            <div className="text-muted">SOC Monitoring</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">&lt;15min</div>
                            <div className="text-muted">Incident Response</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">Zero</div>
                            <div className="text-muted">Trust Framework</div>
                        </div>
                        <div className="card text-center">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">ISO</div>
                            <div className="text-muted">27001 Aligned</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Capabilities</span>
                        <h2 className="mt-4">Security Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((capability) => (
                            <div key={capability.title} className="card">
                                <h3 className="font-heading font-bold text-xl mb-4">{capability.title}</h3>
                                <p className="text-muted mb-6">{capability.description}</p>
                                <ul className="space-y-2">
                                    {capability.features.map((feature) => (
                                        <li key={feature} className="flex items-start text-sm">
                                            <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-muted">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Operations Model */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">Operations</span>
                    <h2 className="mt-4">Security Operations Model</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card-service">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h4 className="font-heading font-bold text-xl mb-4">Detect</h4>
                        <p className="text-muted">
                            Continuous monitoring across your infrastructure with advanced threat detection,
                            anomaly identification, and correlation of security events.
                        </p>
                    </div>
                    <div className="card-service">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="font-heading font-bold text-xl mb-4">Respond</h4>
                        <p className="text-muted">
                            Rapid incident response with predefined playbooks, automated containment,
                            and expert escalation paths to minimize impact.
                        </p>
                    </div>
                    <div className="card-service">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 className="font-heading font-bold text-xl mb-4">Protect</h4>
                        <p className="text-muted">
                            Proactive security measures including hardening, patching, and continuous
                            improvement based on lessons learned.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-6">Concerned About Your Security Posture?</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Get a comprehensive security assessment from our certified experts.
                        We&apos;ll identify vulnerabilities and provide actionable recommendations.
                    </p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">
                        Request Security Assessment
                    </Link>
                </div>
            </section>
        </>
    )
}
