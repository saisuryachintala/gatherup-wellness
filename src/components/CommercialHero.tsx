import React from 'react';
import Image from 'next/image';

export const CommercialHero: React.FC = () => {
    return (
        <section className="relative bg-[#053d3d] text-white py-20 md:py-32 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-end">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/IMG_1221.jpg"
                    alt="Commercial Property"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-[#053d3d]/10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#a6ff48]">
                    Commercial Properties<br />
                    & Workplace Campuses
                </h1>
                <div className="h-0.5 w-128 bg-[#a6ff48] mb-8 mx-auto"></div>
                <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                    Turn your asset into a place teams actually want to come to,<br />
                    not just have to. GatherUp partners with owners, asset managers, and<br />
                    property teams to design wellness-driven tenant experiences that support:
                </p>
            </div>
        </section>
    );
};
