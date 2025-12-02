import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export const PowerOfTenant: React.FC = () => {
    return (
        <section className="w-full bg-[#F5FAF5]">
            {/* Header Section */}
            <div className="py-6 md:py-8 lg:py-12 text-center px-4">
                <p className="text-[#053d3d] font-bold text-lg mb-2 font-display">
                    Unleash the
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-[#053d3d] mb-2 font-display">
                    Power of Tenant Well-Being
                </h2>
                <p className="text-[#053d3d] font-bold text-xl font-display">
                    for Business Growth
                </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-[500px] md:h-[700px]">
                {/* Mobile Image */}
                <Image
                    src="/assets/images/home-page-2.jpg"
                    alt="Outdoor Yoga Class"
                    fill
                    className="object-cover object-right object-bottom md:hidden"
                    priority
                />
                {/* Desktop Image */}
                <Image
                    src="/assets/images/home-page-2.jpg"
                    alt="Outdoor Yoga Class"
                    fill
                    className="object-cover object-bottom hidden md:block"
                    priority
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-32">
                    {/* <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl text-center max-w-xl mx-4"> */}
                    {/* <div className="bg-black/40 backdrop-blur-sm p-8 text-center"> */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-150 h-30 relative">
                                {/* <Image
                                    src="/assets/GatherUp-Lockups/SVG/Lockups_Symbol_Fresh Green Transparent Background.svg"
                                    alt="GatherUp Symbol"
                                    fill
                                    className="object-contain"
                                /> */}
                                {/* <Image
                                    src="/assets/GatherUp-Lockups/SVG/Lockups_Full_Logo_Slogan_FullBrandColor.svg"
                                    alt="GatherUp Symbol"
                                    fill
                                    className="object-contain"
                                /> */}
                            </div>
                            {/* <span className="text-white font-bold text-xl font-display">
                                Tenant Wellness that Works.
                            </span> */}
                        </div>

                        {/* <p className="text-[#a6ff48] font-bold text-lg mb-8 font-display">
                            Belonging. Well-Being. Business Impact.
                        </p> */}

                        {/* <Button variant="accent">
                            Book a Demo
                        </Button> */}
                    </div>
                {/* </div> */}
            </div>
        </section>
    );
};
