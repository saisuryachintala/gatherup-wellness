import React from 'react';

export const CaseStudy: React.FC = () => {
    return (
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
    );
};
