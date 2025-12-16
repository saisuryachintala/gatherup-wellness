import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function OurSolutions() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="bg-[#053d3d] text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Commercial Properties & Workplace Campuses
                        </h1>
                        <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl">
                            Turn your asset into a place teams actually want to come to, not just have to. GatherUp partners with owners, asset managers, and property teams to design wellness-driven tenant experiences that support:
                        </p>

                        {/* Key Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">Leasing & renewals</h3>
                                <p className="text-base md:text-lg leading-relaxed opacity-90">
                                    A more engaging workplace helps your tenants attract and retain talent, which makes it easier for you to retain tenants.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">Tenant satisfaction</h3>
                                <p className="text-base md:text-lg leading-relaxed opacity-90">
                                    A consistent, well-branded activation plan gives your building a clear identity and keeps you top of mind when leases are up.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3">Amenity ROI</h3>
                                <p className="text-base md:text-lg leading-relaxed opacity-90">
                                    We help you move from "nice gym and empty lounge" to activated spaces with regular programming, community moments, and measurable engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <p className="text-lg md:text-xl text-[#053d3d] mb-12 leading-relaxed">
                            You bring the building and the tenants. We bring a plug-in wellness and community engine that makes the most of what you've already built. Our commercial solutions typically blend
                        </p>

                        {/* Feature Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#a6ff48] rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-3xl">📅</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#053d3d] mb-4">Amenity activation & calendars</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Weekly or monthly wellness, social, and community touchpoints in spaces you already have.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#a6ff48] rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-3xl">🧘</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#053d3d] mb-4">Workplace wellbeing sessions</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Short, practical sessions that support focus, mental health, and energy for tenant teams.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="w-16 h-16 bg-[#a6ff48] rounded-full mb-6 flex items-center justify-center">
                                    <span className="text-3xl">📊</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#053d3d] mb-4">Experience strategy & measurement</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Simple frameworks for communications, feedback, and a small set of KPIs tied back to retention and NOI.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Section */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="mb-12">
                            <p className="text-sm font-semibold text-[#053d3d] uppercase tracking-wider mb-2">Case Study</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-4">Class A Office Tower</h2>
                            <p className="text-xl md:text-2xl text-gray-700 italic mb-8">"From Quiet Amenities to a Tenant Magnet"</p>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div>
                                    <p className="text-sm font-semibold text-[#053d3d] uppercase tracking-wider mb-2">Property</p>
                                    <p className="text-lg text-gray-700">500,000 SF Class A office, multi-tenant</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#053d3d] uppercase tracking-wider mb-2">Location</p>
                                    <p className="text-lg text-gray-700">Major Sunbelt city</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#053d3d] uppercase tracking-wider mb-2">Challenge</p>
                                    <p className="text-lg text-gray-700">Beautiful amenity floor, low usage, and a renewal cycle coming up for three key tenants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Implementation Steps */}
                        <div className="mb-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8">4 major implementations</h3>
                            <p className="text-lg text-gray-600 mb-8">in a 6-month pilot</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg border-l-4 border-[#a6ff48]">
                                    <div className="text-5xl font-bold text-[#053d3d] mb-4">01</div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Weekly micro-activations (15–30 minutes) on the amenity floor
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg border-l-4 border-[#a6ff48]">
                                    <div className="text-5xl font-bold text-[#053d3d] mb-4">02</div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        One marquee wellness or community event per month
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg border-l-4 border-[#a6ff48]">
                                    <div className="text-5xl font-bold text-[#053d3d] mb-4">03</div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Light tenant comms toolkit for property management and tenant admins
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg border-l-4 border-[#a6ff48]">
                                    <div className="text-5xl font-bold text-[#053d3d] mb-4">04</div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Simple engagement and satisfaction tracking (QR pulse checks + short surveys)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8">Modeled results after 6 months pilot</h3>

                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="bg-[#053d3d] text-white p-8 rounded-lg text-center">
                                    <div className="text-5xl md:text-6xl font-bold mb-4">60%</div>
                                    <p className="text-lg leading-relaxed">Increase in Amenity usage by</p>
                                    <p className="text-sm opacity-75 mt-2">(badge data + event check-ins)</p>
                                </div>

                                <div className="bg-[#053d3d] text-white p-8 rounded-lg text-center">
                                    <div className="text-5xl md:text-6xl font-bold mb-4">4.5 / 5</div>
                                    <p className="text-lg leading-relaxed">Increase in Tenant contact satisfaction to</p>
                                    <p className="text-sm opacity-75 mt-2">from 3.7 on "overall building experience"</p>
                                </div>

                                <div className="bg-[#053d3d] text-white p-8 rounded-lg text-center">
                                    <div className="text-5xl md:text-6xl font-bold mb-4">14%</div>
                                    <p className="text-lg leading-relaxed">Renewal intent increased by</p>
                                    <p className="text-sm opacity-75 mt-2">by key decision makers</p>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Also amenity activation became a core part of tours and pitch materials for new prospects.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                This is the type of shift we aim for: take what you already have, activate it consistently, and use it to support renewals and new leasing conversations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-12 text-center">What Our Clients Say</h2>

                        <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                            <div className="mb-6">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                                    "GatherUp partners with property leaders to turn wellness and community engagement into measurable business results. Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance."
                                </p>
                            </div>
                            <div className="border-t border-gray-300 pt-6">
                                <p className="font-bold text-[#053d3d] text-lg">Sarah M.,</p>
                                <p className="text-gray-600">Senior Property Manager, 1.1M SF Office Portfolio</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
 