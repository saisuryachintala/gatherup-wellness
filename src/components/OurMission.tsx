import React from 'react';
import Image from 'next/image';

export const OurMission: React.FC = () => {
    const partners = [
        "LIFE TIME",
        "COX",
        "amazon",
        "CBRE",
        "LIFE TIME",
        "COX",
        "amazon",
        "CBRE",
        "LIFE TIME",
        "COX"
    ];

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
            <div className="bg-[#f8fcfc] py-12 overflow-x-hidden relative">
                <div className="flex w-[200%] animate-scroll">
                    {/* First set of logos */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {partners.map((partner, index) => (
                            <span key={`p1-${index}`} className="text-2xl md:text-4xl font-bold text-[#053d3d] opacity-80 whitespace-nowrap mx-8 font-display">
                                {partner}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {partners.map((partner, index) => (
                            <span key={`p2-${index}`} className="text-2xl md:text-4xl font-bold text-[#053d3d] opacity-80 whitespace-nowrap mx-8 font-display">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
