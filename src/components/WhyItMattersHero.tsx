import React from 'react';
import Image from 'next/image';

export const WhyItMattersHero: React.FC = () => {
    return (
        <section className="relative min-h-[600px] md:min-h-[650px] flex items-center overflow-hidden bg-[#A6FF48]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Portrait image for mobile devices */}
                <Image
                    src="/assets/images/High Five after Workout_edited.png"
                    alt="Employee Well-Being"
                    fill
                    className="object-cover object-center opacity-72 md:hidden"
                    priority
                />
                {/* Landscape image for tablet and desktop */}
                <Image
                    src="/assets/images/High Five after Workout_edited.png"
                    alt="Employee Well-Being"
                    fill
                    className="hidden md:block object-cover object-center opacity-72"
                    priority
                />
                {/* Overlay to ensure text readability */}
                {<div className="absolute inset-0 bg-white/20"></div>}
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10 py-12 md:py-20">
                <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                    <h1 className="mt-20 text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#053d3d] leading-tight drop-shadow-sm font-display">
                        Why does Employee<br />
                        Well-Being Matter
                    </h1>
                </div>
            </div>
        </section>
    );
};
