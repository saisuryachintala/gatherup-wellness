import React from 'react';
import Image from 'next/image';

export const CaseStudy: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-[#F5FAF5]">
            {/* Hero Images */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/gatherup-illustration.png"
                            alt="American Volunteer"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/gatherup-illustration.png"
                            alt="Flowers"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/gatherup-illustration.png"
                            alt="Yellow Door"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left Column */}
                    <div>
                        <div className="border-b border-gray-300 mb-6">
                            <span className="inline-block bg-[#a6ff48] text-[#053d3d] font-bold text-xl ml-2 text-sm">
                                Case Study
                            </span>
                            <span className="text-[#053d3d] font-bold text-xl ml-2">Class A Office Tower</span>
                            <p className="text-[#053d3d] text-md mb-8">
                                "From Quiet Amenities to a Tenant Magnet"
                            </p>
                        </div>

                        <div className="border-gray-300 pb-2 mb-2">
                            <h3 className="text-[#053d3d] font-bold mb-2">Property</h3>
                            <p className="text-[#053d3d]">500,000 SF Class A office, multi-tenant</p>
                        </div>

                        <div className="pb-2 mb-2">
                            <h3 className="text-[#053d3d] font-bold mb-2">Location</h3>
                            <p className="text-[#053d3d]">Major Sunbelt city</p>
                        </div>

                        <div>
                            <h3 className="text-[#053d3d] font-bold mb-2">Challenge</h3>
                            <p className="text-[#053d3d]">
                                Beautiful amenity floor, low usage, and a renewal cycle coming up for three key tenants.
                            </p>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="relative">
                        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 -ml-6"></div>
                        
                        {/* Right Column */}
                        <div className="border-b border-gray-300 mb-6">
                            <span className="text-[#053d3d] font-bold text-xl ml-2">4 major implementations</span>
                            <p className="text-[#053d3d] text-md mb-8">
                                in a 6-month pilot
                            </p>
                        </div>

                        <div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-4xl text-[#053d3d]">01</span>
                                    <p className="text-[#053d3d] pt-2">
                                        Weekly micro-activations (15–30 minutes) on the amenity floor
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-4xl text-[#053d3d]">02</span>
                                    <p className="text-[#053d3d] pt-2">
                                        One marquee wellness or community event per month
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-4xl text-[#053d3d]">03</span>
                                    <p className="text-[#053d3d] pt-2">
                                        Light tenant comms toolkit for property management and tenant admins
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-4xl text-[#053d3d]">04</span>
                                    <p className="text-[#053d3d] pt-2">
                                        Simple engagement and satisfaction tracking (QR pulse checks + short surveys)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div>
                    <h3 className="text-[#053d3d] font-bold text-2xl md:text-3xl mb-12 text-center">
                        Modeled results after 6 months pilot
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center">
                            <p className="text-[#053d3d] text-sm mb-2">Increase in<br />Amenity usage by</p>
                            <div className="text-5xl md:text-6xl font-bold text-[#053d3d] mb-2">60%</div>
                            <p className="text-sm">(badge data +<br />event check-ins)</p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#053d3d] text-sm mb-2">Increase in Tenant<br />contact satisfaction to</p>
                            <div className="text-5xl md:text-6xl font-bold text-[#053d3d] mb-2">4.5 / 5</div>
                            <p className="text-sm">from from 3.7 on "overall<br />building experience"</p>
                        </div>

                        <div className="text-center">
                            <p className="text-[#053d3d] text-sm mb-2">Renewal intent<br />increased by</p>
                            <div className="text-5xl md:text-6xl font-bold text-[#053d3d] mb-2">14%</div>
                            <p className="text-sm">by key decision<br />makers</p>
                        </div>
                    </div>

                    <p className="text-[#053d3d] text-center leading-relaxed max-w-4xl mx-auto">
                        Also amenity activation became a core part of tours and pitch materials for new prospects. 
                        This is the type of shift we aim for: take what you already have, activate it consistently, and 
                        use it to support renewals and new leasing conversations.
                    </p>
                </div>
            </div>
        </section>
    );
};

