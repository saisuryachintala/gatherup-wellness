import React from 'react';
import Image from 'next/image';

export const CommercialHero: React.FC = () => {
    return (
        <section className="relative bg-[#053d3d] text-white  overflow-hidden min-h-[500px] md:min-h-[500px] flex items-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-[500px]">
                <Image
                    src="/assets/images/IMG_1221.JPG"
                    alt="Commercial Property"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0"></div>
            </div>

            <div className="mt-60 container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="bg-[#053d3d] text-center w-[90%] mx-auto pt-10 pb-20">
                    <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#a6ff48] leading-tight">
                        Commercial Properties<br />
                        & Workplace Campuses
                    </p>
                    <div className="h-0.5 w-[60%] bg-[#a6ff48] mx-auto mt-10 -mb-20"></div>
                </div>
            </div>
        </section>
    );
};
