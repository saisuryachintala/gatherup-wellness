import React from 'react';
import Image from 'next/image';
import { ScrollingLogos } from './ScrollingLogos';

export const OurMission: React.FC = () => {
    return (
        <section className="bg-[#E7F9DB] w-full px-2 md:px-2">
            {/* Mission Section */}
            <div className=" bg-[#E7F9DB] py-20 md:py-24">
                <div className="md:w-[65%] container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-4 items-end -mt-12">
                        {/* Left Column: Text */}
                        <div className="space-y-6 flex flex-col justify-center ">
                            <h3 className="text-[#053D3D] font-bold text-xl md:text-2xl font-display tracking-wide">
                                Our Mission
                            </h3>
                            <p className="text-[#053D3D] text-base md:text-lg leading-relaxed">
                                GatherUp partners with property leaders to <span className="text-[#053D3D] font-bold">turn wellness and community engagement into measurable business results.</span>
                            </p>
                            <p className="text-[#053D3D] text-base md:text-lg leading-relaxed">
                                Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.
                            </p>
                        </div>

                        {/* Right Column: Illustration */}
                        <div className="flex justify-center md:justify-end items-end overflow-visible">
                            <div className="relative flex items-end overflow-visible">
                                <Image
                                    src="/assets/images/gatherup-illustration.png"
                                    alt="GatherUp Illustration"
                                    width={900}
                                    height={1000}
                                    className="-mb-24 w-[1200px] h-auto object-contain scale-115 origin-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
