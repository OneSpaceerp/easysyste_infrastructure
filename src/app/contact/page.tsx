'use client'

import { useState } from 'react'

const locations = [
    {
        country: 'Egypt',
        address: 'Mokattam - Villa 7528 Shireen Badwai ST',
        phone: '+201117600868',
        email: 'egypt@easysystemegypt.com',
    },
    {
        country: 'United Arab Emirates',
        address: 'Unit 23, First Floor, Opal Tower, Business Bay, Dubai',
        phone: '+971507095315',
        email: 'uae@easysystemegypt.com',
    },
    {
        country: 'United Kingdom',
        address: 'The Ropewalk Nottingham, NG1 5DT',
        phone: '+447476972114',
        email: 'uk@easysystemegypt.com',
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

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
                        Contact<br />
                        <span className="text-[#F5E6E9]">Us</span>
                    </h1>
                    <p className="text-xl text-[#E6E1E2] max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your infrastructure? Request a free assessment or book a discovery workshop with our engineering team.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold mb-4">Request an Infrastructure Assessment</h2>
                        <p className="text-muted mb-8 leading-relaxed tabular-nums">
                            Fill out the form below and one of our infrastructure experts will contact you within 24 hours.
                        </p>

                        {isSubmitted ? (
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-2xl mb-2">Thank You!</h3>
                                <p className="text-muted mb-6">We&apos;ve received your request and will contact you shortly.</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        setFormData({
                                            name: '',
                                            email: '',
                                            company: '',
                                            phone: '',
                                            service: '',
                                            message: '',
                                        })
                                    }}
                                    className="btn-secondary"
                                >
                                    Send Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full min-h-[44px] px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Business Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full min-h-[44px] px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">Company *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full min-h-[44px] px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                            placeholder="Company Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full min-h-[44px] px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 tabular-nums"
                                            placeholder="+20 111 760 0868"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">Service Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full min-h-[44px] px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="payment-service">Payment Service (In-Country Gateway)</option>
                                        <option value="network">Network Design &amp; Management</option>
                                        <option value="security">Infrastructure Security</option>
                                        <option value="cloud">Cloud &amp; Virtualization</option>
                                        <option value="datacenter">Data Center Services</option>
                                        <option value="managed">Managed Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">How Can We Help? *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us about your infrastructure goals, merchant segments, or assessment requirements..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Request Free Assessment'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold mb-4">Our Offices</h2>
                        <p className="text-muted mb-8 leading-relaxed">
                            With offices in Egypt, UAE, and UK, we&apos;re positioned to serve clients across the Middle East, Europe, and beyond.
                        </p>

                        <div className="space-y-6">
                            {locations.map((location) => (
                                <div key={location.country} className="card">
                                    <h3 className="font-heading font-bold text-xl text-primary mb-3">{location.country}</h3>
                                    <div className="space-y-2.5 text-muted">
                                        <p className="flex items-start">
                                            <svg className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{location.address}</span>
                                        </p>
                                        <p className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors tabular-nums font-medium">
                                                {location.phone}
                                            </a>
                                        </p>
                                        <p className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors font-medium">
                                                {location.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-white border border-gray-200/80 rounded-2xl shadow-sm">
                            <h3 className="font-heading font-bold text-lg mb-2">General Inquiries</h3>
                            <p className="text-muted">
                                Email:{' '}
                                <a href="mailto:info@easysystemegypt.com" className="text-primary font-semibold hover:underline">
                                    info@easysystemegypt.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
