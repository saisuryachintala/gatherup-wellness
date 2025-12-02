import React from 'react';
import Image from 'next/image';

export const OurMission: React.FC = () => {
    const partners = [
        { name: "Amazon", logo: "/assets/images/amazon.png" },
        { name: "CBRE", logo: "/assets/images/cbre.png" },
        { name: "Cox", logo: "/assets/images/cox.png" },
        { name: "Life Time", logo: "/assets/images/lifetime.png" }
    ];

    // Duplicate the array multiple times for seamless scrolling
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="w-full">
            {/* Mission Section */}
            <div className="bg-[#053d3d] py-20 md:py-32">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text */}
                        <div className="space-y-6">
                            <h3 className="text-[#a6ff48] font-bold text-xl md:text-2xl font-display tracking-wide">
                                Our Mission
                            </h3>
                            <p className="text-white text-lg md:text-lg leading-relaxed font-medium">
                                GatherUp partners with property leaders to <span className="text-[#a6ff48]">turn wellness and community engagement into measurable business results.</span>
                            </p>
                            <p className="text-white/100 text-base md:text-lg leading-relaxed">
                                Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.
                            </p>
                        </div>

                        {/* Right Column: Logo */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-64 h-24 md:w-96 md:h-32">
                                <Image
                                    src="/assets/GatherUp-Lockups/SVG/Lockups_Full Logo_Brand Colours.svg"
                                    alt="GatherUp Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Logos Section */}
            <div className="bg-[#f8fcfc] py-12 md:py-16 overflow-x-hidden relative">
                <div className="flex w-max animate-scroll">
                    {duplicatedPartners.map((partner, index) => (
                        <div key={index} className="flex-shrink-0 mx-6 md:mx-12 lg:mx-16">
                            <div className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain opacity-100 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
