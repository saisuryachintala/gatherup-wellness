import React from 'react';
import Image from 'next/image';

export const CommercialHero: React.FC = () => {
    return (
        <section className="relative bg-[#053d3d] text-white py-16 md:py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/IMG_1221.jpg"
                    alt="Commercial Property"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-[#053d3d]/70"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#a6ff48]">
                    Commercial Properties<br />
                    & Workplace Campuses
                </h1>
                <div className="h-1 w-32 bg-[#a6ff48] mb-8"></div>
                <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl">
                    Turn your asset into a place teams actually want to come to,<br />
                    not just have to. GatherUp partners with owners, asset managers, and<br />
                    property teams to design wellness-driven tenant experiences that support:
                </p>

                {/* Key Benefits Grid with Icons */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Leasing & renewals */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                                <path d="M20 20 Q30 50 20 80 L40 80 Q50 50 40 20 Z" fill="#a6ff48"/>
                                <path d="M60 20 Q50 50 60 80 L80 80 Q70 50 80 20 Z" fill="#a6ff48"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Leasing & renewals</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            A more engaging workplace helps your tenants attract and retain talent, which makes it easier for you to retain tenants.
                        </p>
                    </div>

                    {/* Tenant satisfaction */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                                <path d="M50 50 L50 10 A40 40 0 0 1 85 35 L50 50 Z" fill="#a6ff48"/>
                                <path d="M50 50 L85 35 A40 40 0 0 1 85 65 L50 50 Z" fill="#a6ff48"/>
                                <path d="M50 50 L85 65 A40 40 0 0 1 50 90 L50 50 Z" fill="#a6ff48"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Tenant satisfaction</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            A consistent, well-branded activation plan gives your building a clear identity and keeps you top of mind when leases are up.
                        </p>
                    </div>

                    {/* Amenity ROI */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                                <path d="M50 50 m-40 0 a40 40 0 0 1 80 0 z" fill="#a6ff48"/>
                                <circle cx="50" cy="50" r="20" fill="#053d3d"/>
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Amenity ROI</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            We help you move from "nice gym and empty lounge" to activated spaces with regular programming, community moments, and measurable engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
