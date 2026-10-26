'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function CheckIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    )
}

type PaymentRail = {
    id: string
    label: string
    category: string
    sampleMethod: string
    authProtocol: string
    destination: string
    settlementType: string
    latencyMs: number
}

const paymentRails: PaymentRail[] = [
    {
        id: 'cards',
        label: 'Visa, Mastercard & Meeza',
        category: 'Cards',
        sampleMethod: 'Meeza / Visa Debit •••• 4821',
        authProtocol: 'EMV 3-D Secure 2 (In-Country 3DS Server)',
        destination: 'National Switch & Card Schemes',
        settlementType: 'On-Us / Off-Us Domestic Clearing',
        latencyMs: 142,
    },
    {
        id: 'local-digital',
        label: 'InstaPay, Fawry & Wallets',
        category: 'Local and Digital',
        sampleMethod: 'InstaPay Instant Transfer / Mobile Wallet',
        authProtocol: 'Tokenized Alias & Two-Factor Challenge',
        destination: 'National Instant Payment Network',
        settlementType: 'Real-Time Core Banking Entry',
        latencyMs: 95,
    },
    {
        id: 'wallets-pay',
        label: 'Apple Pay & Google Pay',
        category: 'Device Wallets',
        sampleMethod: 'Device DPAN Cryptogram + Biometric',
        authProtocol: 'In-Country Token Vault & 3DS2 Cryptogram',
        destination: 'Primary Acquirer Switch',
        settlementType: 'Automated T+1 Merchant Payout',
        latencyMs: 118,
    },
    {
        id: 'remote-links',
        label: 'Payment Links, QR & BNPL',
        category: 'Remote & Invoice',
        sampleMethod: 'Dynamic Merchant QR / Invoice Pay Link',
        authProtocol: 'Fraud Rules + Allow/Block List Screening',
        destination: 'Bank Core & Approved Acquirer',
        settlementType: 'Split / Tiered MDR Reconciliation',
        latencyMs: 134,
    },
]

type RoutingMode = {
    id: string
    title: string
    summary: string
    activePath: string
    failoverState: string
}

const routingModes: RoutingMode[] = [
    {
        id: 'smart-card-amount',
        title: 'Route by Card, Amount & Country',
        summary: 'Dynamically selects the optimal acquirer or domestic rail based on BIN range, ticket size, and issuer country.',
        activePath: 'Primary Domestic Acquirer → National Switch',
        failoverState: 'Standby Ready (99.99% SLA)',
    },
    {
        id: 'auto-failover',
        title: 'Automatic Acquirer Failover',
        summary: 'Detects acquirer degradation or timeout in milliseconds and reroutes the transaction without dropping the checkout.',
        activePath: 'Secondary Acquirer Path (Zero-Drop Reroute)',
        failoverState: 'Failover Engaged (< 40ms switch)',
    },
    {
        id: 'on-us-core',
        title: 'Direct On-Us Core Banking',
        summary: 'Identifies the bank’s own cardholders and settles directly against core banking while bypassing external scheme fees.',
        activePath: 'Bank Internal Switch → Core Banking Ledger',
        failoverState: 'In-House Redundant Ring',
    },
]

const checkoutIntegrations = [
    {
        id: 'hosted-embedded',
        title: 'Hosted payment page and embedded checkout',
        detail: 'Bank-branded checkout hosted entirely in-country or embedded as an isolated iframe component to minimize merchant PCI scope.',
        badge: 'PCI DSS Minimized',
    },
    {
        id: 'mobile-sdks',
        title: 'iOS and Android SDKs for merchant apps',
        detail: 'Native mobile toolkits with built-in 3DS2 challenge rendering, device wallet support, and tokenized card vaulting.',
        badge: 'Native iOS & Android',
    },
    {
        id: 'rest-apis',
        title: 'REST APIs for custom integrations',
        detail: 'Idempotent JSON endpoints, signed webhooks, and sandbox simulators for enterprise merchants and bank channels.',
        badge: 'Open API Spec',
    },
    {
        id: 'plugins',
        title: 'Ready-made plugins: WooCommerce, Shopify, Magento, OpenCart, Odoo',
        detail: 'Drop-in certified connectors enabling rapid merchant activation with zero custom code.',
        badge: '5 Turnkey Platforms',
    },
    {
        id: 'links-qr',
        title: 'Payment links and QR for remote and invoice payments',
        detail: 'Generate single-use or recurring payment links and dynamic QR codes from the merchant portal or API.',
        badge: 'No Website Required',
    },
]

const lifecycleSteps = [
    {
        title: 'Digital merchant application via branch, portal, bulk upload or API',
        actor: 'Omnichannel Intake',
        sla: 'Instant Intake',
    },
    {
        title: 'KYC/KYB with existing-customer and duplicate checks',
        actor: 'Compliance & Core Sync',
        sla: 'Automated Screening',
    },
    {
        title: 'Risk underwriting by MCC and risk tier',
        actor: 'Credit & Risk Engine',
        sla: 'Tiered Scoring',
    },
    {
        title: 'Acquiring pricing: MDR packages or custom scheme rates',
        actor: 'Commercial Pricing',
        sla: 'Scheme & Margin Rules',
    },
    {
        title: 'Configurable four-eyes approval workflow with SLA clocks',
        actor: 'Maker-Checker Governance',
        sla: 'Tracked SLA Timer',
    },
    {
        title: 'MID/TID issuance and switch boarding, full audit trail',
        actor: 'Switch Provisioning',
        sla: 'Immutable Audit Log',
    },
]

const analyticsQueries = [
    {
        question: 'What was our domestic Meeza vs. international Visa approval rate across Cairo and Alexandria branches this week?',
        answer: 'Domestic Meeza approval reached 96.4% (+1.8% WoW) across 412k transactions; International Visa stood at 89.7% after 3DS2 challenge completion.',
        metrics: [
            { label: 'Total Volume', value: 'EGP 428.6M' },
            { label: 'Blended Approval Rate', value: '94.8%' },
            { label: 'Net Effective MDR', value: '1.42%' },
            { label: 'Active Merchants', value: '3,840' },
        ],
    },
    {
        question: 'Which merchant sectors generated the highest settlement reserves and off-us MDR revenue this month?',
        answer: 'Travel & Hospitality and Electronics Retail accounted for 64% of rolling reserves and 58% of off-us MDR margin across 14 bank branches.',
        metrics: [
            { label: 'Off-Us Volume Share', value: '61.2%' },
            { label: 'Rolling Reserves Held', value: 'EGP 18.4M' },
            { label: 'Dispute Ratio', value: '0.07%' },
            { label: 'Active Stores', value: '5,190' },
        ],
    },
    {
        question: 'How many merchants boarded via branch vs. digital portal are actively transacting within 7 days of MID issuance?',
        answer: '88.3% of digital portal applicants processed their first live payment within 72 hours of MID/TID switch boarding, compared to 74.1% from branch intake.',
        metrics: [
            { label: '7-Day Activation', value: '84.6%' },
            { label: 'Avg Boarding SLA', value: '4h 12m' },
            { label: 'Recurring Subscriptions', value: '92.1k' },
            { label: 'Platform Uptime', value: '99.99%' },
        ],
    },
]

const deploymentModels = [
    {
        id: 'on-prem',
        name: 'On-Premises Data Center',
        topology: 'Primary & DR inside Bank Vaults',
        description: 'Deployed entirely on the bank’s own hardware and HSM infrastructure with air-gapped key management and local active-active disaster recovery.',
        highlights: ['Bank-owned HSMs & hardware', 'Direct LAN link to Core Banking & Switch', 'Sovereign in-country DR site'],
    },
    {
        id: 'local-cloud',
        name: 'Approved In-Country Cloud',
        topology: 'Regulator-Approved National Cloud Zones',
        description: 'Hosted inside sovereign in-country cloud availability zones with dedicated tenant isolation, encrypted storage, and zero cross-border replication.',
        highlights: ['100% in-country data residency', 'Elastic auto-scaling for peak retail events', 'Multi-zone in-country DR failover'],
    },
    {
        id: 'hybrid',
        name: 'Hybrid Sovereign Architecture',
        topology: 'Edge Checkout + On-Prem Vault & Core',
        description: 'Combines high-availability local cloud checkout frontends with on-premises card data vaults, 3DS2 servers, and core banking settlement.',
        highlights: ['Keys & PAN tokens remain on-premises', 'Elastic DMZ checkout absorptive capacity', 'Open APIs plug into existing bank systems'],
    },
]

const deliverySteps = [
    {
        step: 1,
        title: 'Discovery and scope',
        subtitle: 'segments, channels, volumes',
        detail: 'Map target merchant segments, transaction channels, ticket sizes, peak throughput requirements, and existing switch/core interfaces.',
        deliverable: 'Scope Matrix & Volume Architecture Blueprint',
    },
    {
        step: 2,
        title: 'Solution design',
        subtitle: 'workflows, pricing, hosting',
        detail: 'Define four-eyes onboarding workflows, MDR pricing structures (percentage, fixed, tiered), fraud rules, and on-prem/cloud/hybrid hosting topology.',
        deliverable: 'Solution Design & Security Control Specification',
    },
    {
        step: 3,
        title: 'Configure and integrate',
        subtitle: 'branding, controls, interfaces',
        detail: 'Apply the bank’s brand across checkout and portals, configure risk & 3DS2 policies, and connect open APIs to card schemes, national switch, and core banking.',
        deliverable: 'Integrated White-Label Platform in UAT',
    },
    {
        step: 4,
        title: 'Validate and pilot',
        subtitle: 'settlement checks, pilot cohort',
        detail: 'Verify end-to-end switch and bank file reconciliation, payout entries into core banking, and live transactions with a controlled pilot merchant cohort.',
        deliverable: 'Certified Pilot Sign-Off & Reconciliation Audit',
    },
    {
        step: 5,
        title: 'Launch and grow',
        subtitle: 'rollout, support, next releases',
        detail: 'Scale across merchant tiers and branches with full operational support, and activate modular additions such as lifecycle, terminals, and advanced back office.',
        deliverable: 'Commercial Rollout & Modular Expansion Roadmap',
    },
]

export default function PaymentServiceClient() {
    const [selectedRailIndex, setSelectedRailIndex] = useState(0)
    const [selectedRoutingIndex, setSelectedRoutingIndex] = useState(0)
    const [activeFlowStage, setActiveFlowStage] = useState(0)
    const [isAutoFlow, setIsAutoFlow] = useState(true)
    const [selectedIntegration, setSelectedIntegration] = useState(0)
    const [selectedQueryIndex, setSelectedQueryIndex] = useState(0)
    const [selectedDeployment, setSelectedDeployment] = useState(0)
    const [activeModules, setActiveModules] = useState<string[]>(['gateway', 'lifecycle', 'backoffice'])
    const [selectedDeliveryStep, setSelectedDeliveryStep] = useState(0)

    const currentRail = paymentRails[selectedRailIndex]
    const currentRouting = routingModes[selectedRoutingIndex]
    const currentQuery = analyticsQueries[selectedQueryIndex]
    const currentDeployment = deploymentModels[selectedDeployment]

    useEffect(() => {
        if (!isAutoFlow) return
        const timer = setInterval(() => {
            setActiveFlowStage((prev) => (prev + 1) % 4)
        }, 2200)
        return () => clearInterval(timer)
    }, [isAutoFlow])

    const toggleModule = (modId: string) => {
        if (modId === 'gateway') return // Core gateway is always active first
        setActiveModules((prev) =>
            prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
        )
    }

    const flowStages = [
        {
            title: 'Checkout & Integration',
            node: currentRail.sampleMethod,
            detail: 'Hosted Page · Embedded · iOS/Android SDK · REST API · Plugins · QR/Links',
        },
        {
            title: 'In-Country Security & 3DS2',
            node: currentRail.authProtocol,
            detail: 'Tokenization · Saved Cards · Fraud Rules · Allow/Block Lists · PCI DSS',
        },
        {
            title: 'Smart Routing Switch',
            node: currentRouting.title,
            detail: currentRouting.activePath,
        },
        {
            title: 'Schemes, Switch & Core',
            node: currentRail.destination,
            detail: currentRail.settlementType,
        },
    ]

    return (
        <div className="bg-background text-foreground">
            {/* 1. HERO & LIVE IN-COUNTRY PAYMENT FLOW SIMULATOR */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#0E0D0D] text-white overflow-hidden border-b border-white/10">
                {/* Subtle Sovereign Grid Background */}
                <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(124, 16, 41, 0.45) 0%, transparent 55%), radial-gradient(circle at 80% 75%, rgba(41, 50, 57, 0.6) 0%, transparent 50%)',
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            href="/services"
                            className="inline-flex items-center min-h-[44px] px-2 -ml-2 rounded-lg text-sm font-medium text-[#EBCED4] hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Services
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
                        {/* Left Column: Core Proposition */}
                        <div className="lg:col-span-5 space-y-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white leading-[1.12] text-balance">
                                Hosted E-Commerce Payment Gateway — In-Country
                            </h1>

                            <p className="text-lg sm:text-xl text-[#E6E1E2] leading-relaxed">
                                Every online payment processed inside the country. Card data, tokens, keys and logs never leave.
                                Hosted on-premises, in an approved local cloud, or hybrid, under the bank&apos;s own brand.
                            </p>

                            {/* Sovereign Residency Guarantees */}
                            <div className="pt-2 grid grid-cols-2 gap-3">
                                <div className="bg-[#1A2126]/90 border border-white/10 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-[#EBCED4] text-sm font-semibold mb-1">
                                        <svg className="w-4 h-4 text-primary-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        100% In-Country
                                    </div>
                                    <p className="text-xs text-[#D5CED0]">Card data, tokens, keys &amp; logs stay inside national borders</p>
                                </div>

                                <div className="bg-[#1A2126]/90 border border-white/10 rounded-xl p-4">
                                    <div className="flex items-center gap-2 text-[#EBCED4] text-sm font-semibold mb-1">
                                        <svg className="w-4 h-4 text-primary-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Bank-Branded
                                    </div>
                                    <p className="text-xs text-[#D5CED0]">On-premises, approved local cloud, or hybrid deployment</p>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary">
                                    Book a Discovery Workshop
                                </Link>
                                <a
                                    href="#delivery-path"
                                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg border border-white/25 text-white font-semibold hover:bg-white/10 transition-all duration-300 ease-apple-spring active:scale-[0.98]"
                                >
                                    Explore Delivery Path
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Interactive In-Country Transaction & Smart Routing Visualizer */}
                        <div className="lg:col-span-7 bg-[#15191D] border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl">
                            {/* Top Sovereign Perimeter Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                                    </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">
                                        Sovereign In-Country Processing Perimeter
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-medium px-2.5 py-1.5 rounded bg-primary/30 text-[#F5E6E9] border border-primary/50 tabular-nums">
                                        Cross-Border Egress: 0 Bytes
                                    </span>
                                    <button
                                        type="button"
                                        aria-pressed={!isAutoFlow}
                                        onClick={() => setIsAutoFlow((prev) => !prev)}
                                        className="min-h-[44px] text-xs px-3 py-2 rounded-lg border border-white/15 text-[#D5CED0] hover:text-white hover:border-white/30 transition-all duration-200 ease-apple-spring active:scale-[0.98]"
                                    >
                                        {isAutoFlow ? 'Pause Live Trace' : 'Resume Live Trace'}
                                    </button>
                                </div>
                            </div>

                            {/* Rail Selector */}
                            <div className="mb-5">
                                <div className="text-xs font-medium text-[#D5CED0] mb-2">
                                    1. Select Payment Method Rail to Simulate:
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {paymentRails.map((rail, idx) => {
                                        const active = idx === selectedRailIndex
                                        return (
                                            <button
                                                key={rail.id}
                                                type="button"
                                                aria-pressed={active}
                                                onClick={() => {
                                                    setSelectedRailIndex(idx)
                                                    setActiveFlowStage(0)
                                                }}
                                                className={`min-h-[44px] text-left p-3 rounded-lg border transition-all duration-300 ease-apple-spring active:scale-[0.98] ${
                                                    active
                                                        ? 'bg-primary text-white border-primary-300 shadow-md'
                                                        : 'bg-[#1D2328] text-[#D5CED0] border-white/10 hover:border-white/25 hover:text-white'
                                                }`}
                                            >
                                                <div className="text-[11px] opacity-80">{rail.category}</div>
                                                <div className="text-xs font-semibold mt-0.5 leading-snug">{rail.label}</div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Smart Routing Mode Selector */}
                            <div className="mb-6">
                                <div className="text-xs font-medium text-[#D5CED0] mb-2">
                                    2. Select Smart Routing Policy:
                                </div>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    {routingModes.map((mode, idx) => {
                                        const active = idx === selectedRoutingIndex
                                        return (
                                            <button
                                                key={mode.id}
                                                type="button"
                                                aria-pressed={active}
                                                onClick={() => {
                                                    setSelectedRoutingIndex(idx)
                                                    setActiveFlowStage(2)
                                                }}
                                                className={`min-h-[44px] text-left p-3 rounded-lg border transition-all duration-300 ease-apple-spring active:scale-[0.98] ${
                                                    active
                                                        ? 'bg-[#293239] text-white border-primary-300 shadow-md'
                                                        : 'bg-[#1D2328] text-[#D5CED0] border-white/10 hover:border-white/25 hover:text-white'
                                                }`}
                                            >
                                                <div className="text-xs font-semibold">{mode.title}</div>
                                                <div className="text-[11px] text-[#D5CED0] mt-1 line-clamp-2">{mode.summary}</div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Animated 4-Stage Pipeline */}
                            <div className="relative bg-[#0E0D0D] border border-white/10 rounded-xl p-4 sm:p-5">
                                <div className="grid sm:grid-cols-4 gap-3 relative">
                                    {flowStages.map((stage, idx) => {
                                        const isCurrent = idx === activeFlowStage
                                        const isPassed = idx < activeFlowStage
                                        return (
                                            <button
                                                key={stage.title}
                                                type="button"
                                                aria-pressed={isCurrent}
                                                onClick={() => {
                                                    setIsAutoFlow(false)
                                                    setActiveFlowStage(idx)
                                                }}
                                                className={`min-h-[44px] text-left rounded-lg p-3 border transition-all duration-500 ease-apple-spring active:scale-[0.98] ${
                                                    isCurrent
                                                        ? 'bg-primary/25 border-primary-300 shadow-lg -translate-y-0.5'
                                                        : isPassed
                                                        ? 'bg-[#1A2126]/90 border-emerald-500/40'
                                                        : 'bg-[#15191D] border-white/10 opacity-80 hover:opacity-100'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span className="text-[11px] font-semibold text-[#EBCED4] tabular-nums">
                                                        Stage {idx + 1}
                                                    </span>
                                                    <span
                                                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                                                            isCurrent
                                                                ? 'bg-primary-300 ring-4 ring-primary/30'
                                                                : isPassed
                                                                ? 'bg-emerald-400'
                                                                : 'bg-white/20'
                                                        }`}
                                                    />
                                                </div>
                                                <div className="text-xs font-bold text-white mb-1">{stage.title}</div>
                                                <div className="text-[11px] font-medium text-[#F5E6E9] mb-1.5 leading-snug">
                                                    {stage.node}
                                                </div>
                                                <div className="text-[10px] text-[#D5CED0] leading-relaxed">{stage.detail}</div>
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Progress Bar & Live Telemetry Readout */}
                                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#D5CED0]">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-primary-300" />
                                        <span>
                                            Active Route: <strong className="text-white">{currentRouting.activePath}</strong>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 tabular-nums">
                                        <span>
                                            Failover: <strong className="text-emerald-300">{currentRouting.failoverState}</strong>
                                        </span>
                                        <span>
                                            In-Country Hop: <strong className="text-white">{currentRail.latencyMs} ms</strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CHECKOUT & INTEGRATION + PAYMENT METHODS */}
            <section className="section-container">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Checkout and Integration */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/80">
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                            Checkout and Integration
                        </h2>
                        <p className="text-muted mb-6 max-w-2xl">
                            Deploy merchant checkouts rapidly across web, mobile apps, custom enterprise systems, and remote invoicing with full in-country card data isolation.
                        </p>

                        <div className="space-y-3">
                            {checkoutIntegrations.map((item, idx) => {
                                const isSelected = selectedIntegration === idx
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() => setSelectedIntegration(idx)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ease-apple-spring active:scale-[0.99] ${
                                            isSelected
                                                ? 'bg-primary-50/60 border-primary shadow-sm'
                                                : 'bg-gray-50/70 border-gray-200 hover:bg-white hover:border-gray-300'
                                        }`}
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                                                        isSelected ? 'bg-primary text-white' : 'bg-gray-200 text-foreground'
                                                    }`}
                                                >
                                                    <CheckIcon />
                                                </span>
                                                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-primary border border-primary/20">
                                                {item.badge}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted mt-2 pl-9">{item.detail}</p>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="lg:col-span-5 bg-[#1A2126] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                            Payment Methods
                        </h2>
                        <p className="text-[#D5CED0] mb-6">
                            Comprehensive acceptance across domestic schemes, international cards, instant payment networks, and digital wallets.
                        </p>

                        <div className="space-y-4">
                            <div className="p-5 rounded-xl bg-[#0E0D0D]/80 border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-heading font-bold text-white">
                                        Cards: Visa, Mastercard, Meeza
                                    </h3>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary text-white">
                                        Domestic &amp; Global
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {['Visa', 'Mastercard', 'Meeza National Scheme'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-[#F5E6E9]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-[#0E0D0D]/80 border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-heading font-bold text-white">
                                        Local and digital: InstaPay, Fawry, mobile wallets, BNPL
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {['InstaPay', 'Fawry', 'Mobile Wallets', 'BNPL'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-[#F5E6E9]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-[#0E0D0D]/80 border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-heading font-bold text-white">
                                        Apple Pay and Google Pay
                                    </h3>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-[#EBCED4]">
                                        Tokenized Biometric
                                    </span>
                                </div>
                                <p className="text-xs text-[#D5CED0] mt-1">
                                    Seamless one-tap mobile and web checkout backed by in-country token cryptography.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-primary/20 border border-primary-300/40 flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-[#F5E6E9] font-medium">
                                    Enabled per launch, subject to provider agreements and certification
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECURITY AND RISK + SMART ROUTING + MERCHANT TOOLS */}
            <section className="bg-white py-20 border-y border-gray-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Security and Risk */}
                        <div className="rounded-2xl p-7 bg-[#F4F4F4] border border-gray-200 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-5 shadow-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                                    Security and Risk
                                </h2>
                                <ul className="space-y-3.5">
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>EMV 3-D Secure 2 with in-country 3DS Server</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Tokenization and saved cards</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Fraud rules, allow and block lists</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Built to PCI DSS, scheme rules and the bank&apos;s own security policies</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-300/70 flex items-center justify-between text-xs text-muted">
                                <span>In-Country HSM &amp; 3DS2</span>
                                <span className="font-semibold text-primary">PCI DSS Compliant</span>
                            </div>
                        </div>

                        {/* Smart Routing */}
                        <div className="rounded-2xl p-7 bg-[#0E0D0D] text-white border border-gray-800 flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-5 shadow-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                                    Smart Routing
                                </h2>
                                <ul className="space-y-3.5">
                                    <li className="flex items-start gap-3 text-[#F5E6E9]">
                                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Routing by card, amount and country across acquirers</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#F5E6E9]">
                                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Automatic failover</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#F5E6E9]">
                                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Connects to card schemes, the national switch and the bank&apos;s core banking</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D5CED0]">
                                <span>Multi-Acquirer &amp; National Switch</span>
                                <span className="font-semibold text-emerald-400">Zero-Drop Failover</span>
                            </div>
                        </div>

                        {/* Merchant Tools */}
                        <div className="rounded-2xl p-7 bg-[#F4F4F4] border border-gray-200 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#293239] text-white flex items-center justify-center mb-5 shadow-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                                    Merchant Tools
                                </h2>
                                <ul className="space-y-3.5">
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Subscriptions and recurring payments</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Refunds, partial refunds and voids</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-foreground">
                                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                            <CheckIcon />
                                        </span>
                                        <span>Merchant portal: stores, transactions, settlement, disputes</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-300/70 flex items-center justify-between text-xs text-muted">
                                <span>Self-Service Merchant Control</span>
                                <span className="font-semibold text-foreground">Multi-Store Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MERCHANT LIFECYCLE & BACK OFFICE OPERATIONS */}
            <section className="section-container">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Merchant Lifecycle */}
                    <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                                Merchant Lifecycle
                            </h2>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                                End-to-End Boarding
                            </span>
                        </div>

                        <div className="space-y-3">
                            {lifecycleSteps.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="group p-4 rounded-xl bg-gray-50 hover:bg-primary-50/40 border border-gray-200/90 hover:border-primary/40 transition-all duration-300 ease-apple-spring"
                                >
                                    <div className="flex items-start gap-3.5">
                                        <span className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 tabular-nums">
                                            {idx + 1}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-base font-semibold text-foreground leading-snug">
                                                {item.title}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted">
                                                <span className="font-medium text-accent">{item.actor}</span>
                                                <span>•</span>
                                                <span className="text-primary font-medium">{item.sla}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back Office */}
                    <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                                Back Office
                            </h2>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#293239]/10 text-[#293239]">
                                Clearing &amp; Settlement
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-heading font-bold text-foreground">
                                            Reconciliation of switch and bank files
                                        </h3>
                                        <p className="text-sm text-muted mt-1">
                                            Automated three-way matching across gateway logs, national switch clearing files, and core banking postings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-heading font-bold text-foreground">
                                            MDR by scheme: percentage, fixed or tiered; on-us, off-us, domestic, international
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {['Percentage', 'Fixed Fee', 'Tiered Volume', 'On-Us', 'Off-Us', 'Domestic', 'International'].map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2.5 py-0.5 rounded bg-white border border-gray-200 text-foreground font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-heading font-bold text-foreground">
                                            Settlement cycles, reserves and commissions
                                        </h3>
                                        <p className="text-sm text-muted mt-1 tabular-nums">
                                            Configurable T+0, T+1, or custom merchant settlement schedules with automated rolling reserves and split commissions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-heading font-bold text-foreground">
                                            Payout files and entries into core banking
                                        </h3>
                                        <p className="text-sm text-muted mt-1">
                                            Direct accounting entries and structured payout batches posted straight into the bank&apos;s core ledger.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-heading font-bold text-foreground">
                                            Chargeback and dispute tracking with evidence and status
                                        </h3>
                                        <p className="text-sm text-muted mt-1">
                                            Full dispute lifecycle management with document uploads, scheme reason codes, and SLA deadline tracking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ANALYTICS — INTERACTIVE PLAIN-WORDS INTELLIGENCE & MULTI-PORTAL VIEW */}
            <section className="bg-[#0E0D0D] text-white py-20 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                                Analytics
                            </h2>
                            <p className="text-[#D5CED0] text-lg">
                                Real-time acquiring visibility across every region, branch, merchant sector, and role-based portal.
                            </p>

                            <ul className="space-y-4 pt-2">
                                <li className="flex items-start gap-3.5">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-[#F5E6E9] text-base">
                                        Transaction volume, approval rate, MDR and active merchants in one view
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-[#F5E6E9] text-base">
                                        Portfolio by region, branch and sector
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-[#F5E6E9] text-base">
                                        Business questions answered in plain words with figures
                                    </span>
                                </li>
                                <li className="flex items-start gap-3.5">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-[#F5E6E9] text-base">
                                        Portals for the platform operator, the bank and each merchant
                                    </span>
                                </li>
                            </ul>

                            {/* 3 Role Portals */}
                            <div className="pt-4 grid grid-cols-3 gap-2.5">
                                {[
                                    { role: 'Platform Operator', scope: 'System Health, Switch & Multi-Tenant Ops' },
                                    { role: 'The Bank', scope: 'Portfolio, Risk, MDR, Branches & Reconciliation' },
                                    { role: 'Each Merchant', scope: 'Stores, Transactions, Settlement & Disputes' },
                                ].map((portal) => (
                                    <div key={portal.role} className="p-3 rounded-xl bg-[#1A2126] border border-white/10">
                                        <div className="text-xs font-bold text-white">{portal.role}</div>
                                        <div className="text-[11px] text-[#D5CED0] mt-1 leading-snug">{portal.scope}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Executive Analytics Preview */}
                        <div className="lg:col-span-7 bg-[#15191D] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/10">
                                <span className="text-sm font-semibold text-white">
                                    Executive Acquiring View — Plain-Words Query Explorer
                                </span>
                                <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-[#EBCED4]">
                                    Region · Branch · Sector
                                </span>
                            </div>

                            {/* KPI Strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                {currentQuery.metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="p-3.5 rounded-xl bg-[#0E0D0D] border border-white/10"
                                    >
                                        <div className="text-xs text-[#D5CED0]">{metric.label}</div>
                                        <div className="text-lg sm:text-xl font-heading font-bold text-white mt-1 tabular-nums">
                                            {metric.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Interactive Plain-Words Question Selector */}
                            <div className="space-y-2.5 mb-5">
                                <div className="text-xs font-medium text-[#D5CED0]">
                                    Ask a portfolio question in plain words:
                                </div>
                                {analyticsQueries.map((q, idx) => {
                                    const active = idx === selectedQueryIndex
                                    return (
                                        <button
                                            key={q.question}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => setSelectedQueryIndex(idx)}
                                            className={`w-full min-h-[44px] text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-300 ease-apple-spring active:scale-[0.99] ${
                                                active
                                                    ? 'bg-primary/25 border-primary-300 text-white font-medium'
                                                    : 'bg-[#1D2328] border-white/10 text-[#D5CED0] hover:text-white hover:border-white/25'
                                            }`}
                                        >
                                            “{q.question}”
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Plain-Words Figure Response */}
                            <div className="p-4 rounded-xl bg-[#0E0D0D] border border-primary-300/40">
                                <div className="text-xs font-semibold text-[#EBCED4] mb-1">
                                    Plain-Words Answer with Figures:
                                </div>
                                <p className="text-sm text-white leading-relaxed tabular-nums">
                                    {currentQuery.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DEPLOYMENT & MODULAR ARCHITECTURE */}
            <section className="section-container">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                        Deployment
                    </h2>
                    <p className="text-lg text-muted">
                        Sovereign hosting tailored to the bank&apos;s infrastructure strategy, with modular activation and open APIs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left: 3 Deployment Topologies */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                            On-premises, in-country cloud or hybrid, with in-country DR
                        </h3>
                        <p className="text-sm text-muted mb-6">
                            Select a hosting model to inspect its in-country disaster recovery and data boundary layout:
                        </p>

                        <div className="grid sm:grid-cols-3 gap-2.5 mb-6">
                            {deploymentModels.map((model, idx) => {
                                const active = idx === selectedDeployment
                                return (
                                    <button
                                        key={model.id}
                                        type="button"
                                        aria-pressed={active}
                                        onClick={() => setSelectedDeployment(idx)}
                                        className={`min-h-[44px] p-3.5 rounded-xl border text-left transition-all duration-300 ease-apple-spring active:scale-[0.98] ${
                                            active
                                                ? 'bg-primary text-white border-primary shadow-md'
                                                : 'bg-gray-50 text-foreground border-gray-200 hover:bg-white'
                                        }`}
                                    >
                                        <div className="text-xs font-bold">{model.name}</div>
                                        <div className={`text-[11px] mt-1 ${active ? 'text-[#F5E6E9]' : 'text-muted'}`}>
                                            {model.topology}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="text-base font-heading font-bold text-foreground mb-2">
                                {currentDeployment.name}
                            </div>
                            <p className="text-sm text-muted mb-4">{currentDeployment.description}</p>
                            <div className="grid sm:grid-cols-3 gap-2.5">
                                {currentDeployment.highlights.map((h) => (
                                    <div key={h} className="p-3 rounded-lg bg-white border border-gray-200 text-xs font-medium text-foreground flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Modular Rollout & Open APIs */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                                Modular: start with the gateway, add lifecycle, terminals and back office later
                            </h3>
                            <p className="text-sm text-muted mb-4">
                                Toggle optional modules on top of the core E-Commerce Gateway to preview phased adoption:
                            </p>

                            <div className="space-y-2.5">
                                {[
                                    { id: 'gateway', label: '1. Hosted E-Commerce Gateway (Core Foundation)', locked: true },
                                    { id: 'lifecycle', label: '2. Merchant Lifecycle & Onboarding Workflows', locked: false },
                                    { id: 'terminals', label: '3. Terminals & Omnichannel Acceptance', locked: false },
                                    { id: 'backoffice', label: '4. Back Office Reconciliation, MDR & Disputes', locked: false },
                                ].map((mod) => {
                                    const active = activeModules.includes(mod.id)
                                    return (
                                        <button
                                            key={mod.id}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => toggleModule(mod.id)}
                                            className={`w-full min-h-[44px] flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 ease-apple-spring active:scale-[0.99] ${
                                                active
                                                    ? 'bg-primary-50/70 border-primary text-foreground'
                                                    : 'bg-gray-50 border-gray-200 text-muted hover:text-foreground'
                                            }`}
                                        >
                                            <span>{mod.label}</span>
                                            <span
                                                className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                                                    mod.locked
                                                        ? 'bg-primary text-white'
                                                        : active
                                                        ? 'bg-primary/15 text-primary'
                                                        : 'bg-gray-200 text-muted'
                                                }`}
                                            >
                                                {mod.locked ? 'Core Release' : active ? 'Active' : 'Add Later'}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="bg-[#293239] text-white rounded-2xl p-6 sm:p-7 shadow-lg">
                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                                Open APIs so existing bank systems plug in
                            </h3>
                            <p className="text-sm text-[#D5CED0]">
                                Connect existing KYC/AML engines, core banking ledgers, CRM, branch portals, and enterprise data warehouses through documented REST APIs and event webhooks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. DELIVERY PATH (5-STEP INTERACTIVE TIMELINE) */}
            <section id="delivery-path" className="bg-white py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                            Delivery Path
                        </h2>
                        <p className="text-lg text-muted">
                            A structured five-stage rollout from initial segment mapping and solution design through pilot settlement validation and full commercial launch.
                        </p>
                    </div>

                    {/* Interactive Step Cards */}
                    <div className="grid md:grid-cols-5 gap-4 mb-8">
                        {deliverySteps.map((item, idx) => {
                            const isSelected = idx === selectedDeliveryStep
                            return (
                                <button
                                    key={item.step}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setSelectedDeliveryStep(idx)}
                                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ease-apple-spring active:scale-[0.98] flex flex-col justify-between ${
                                        isSelected
                                            ? 'bg-[#0E0D0D] text-white border-primary shadow-xl -translate-y-1'
                                            : 'bg-[#F4F4F4] text-foreground border-gray-200 hover:bg-white hover:shadow-md'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-heading font-bold tabular-nums ${
                                                    isSelected ? 'bg-primary text-white' : 'bg-white text-primary border border-gray-200'
                                                }`}
                                            >
                                                {item.step}
                                            </span>
                                            <span className={`text-xs font-medium tabular-nums ${isSelected ? 'text-[#EBCED4]' : 'text-muted'}`}>
                                                Step {item.step} of 5
                                            </span>
                                        </div>
                                        <h3 className={`text-lg font-heading font-bold mb-1 ${isSelected ? 'text-white' : 'text-foreground'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm font-medium ${isSelected ? 'text-[#F5E6E9]' : 'text-primary'}`}>
                                            — {item.subtitle}
                                        </p>
                                    </div>

                                    <div className={`mt-4 pt-3 border-t text-xs ${isSelected ? 'border-white/15 text-[#D5CED0]' : 'border-gray-200 text-muted'}`}>
                                        {item.detail}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Selected Delivery Step Detail Bar */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F4F4] border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                            <div className="text-sm font-bold text-primary mb-1 tabular-nums">
                                Stage {deliverySteps[selectedDeliveryStep].step}: {deliverySteps[selectedDeliveryStep].title} — {deliverySteps[selectedDeliveryStep].subtitle}
                            </div>
                            <p className="text-base text-foreground max-w-3xl">
                                {deliverySteps[selectedDeliveryStep].detail}
                            </p>
                        </div>
                        <div className="sm:text-right flex-shrink-0">
                            <div className="text-xs text-muted">Key Stage Outcome</div>
                            <div className="text-sm font-heading font-bold text-foreground mt-0.5">
                                {deliverySteps[selectedDeliveryStep].deliverable}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. NEXT STEP CTA */}
            <section className="relative py-24 bg-[#7C1029] text-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 85% 20%, rgba(14, 13, 13, 0.8) 0%, transparent 55%)',
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        Next Step
                    </h2>
                    <p className="text-xl sm:text-2xl text-[#F5E6E9] mb-10 leading-relaxed max-w-3xl mx-auto">
                        A discovery workshop to map merchant segments, channels and systems to a first release and a proposal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[44px] bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-[#F5E6E9] transition-all duration-300 ease-apple-spring shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            Schedule a Discovery Workshop
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded-lg border border-white/35 text-white font-semibold hover:bg-white/10 transition-all duration-300 ease-apple-spring active:scale-[0.98]"
                        >
                            View All Infrastructure Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
