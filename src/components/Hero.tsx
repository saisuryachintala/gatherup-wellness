import React from 'react';
import { Button } from './Button';
import Image from 'next/image';
import { BookDemoButton } from './BookDemoButton';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[600px] md:min-h-[650px] flex items-start overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Image */}
                <Image
                    src="/assets/images/ps-outdoor-yoga-class-atlanta-laure-photography-45_edited.jpg"
                    alt="Outdoor Yoga Class"
                    fill
                    className="object-cover object-left object-bottom md:hidden"
                    priority
                />
                {/* Desktop Image */}
                <Image
                    src="/assets/images/ps-outdoor-yoga-class-atlanta-laure-photography-45_edited.jpg"
                    alt="Outdoor Yoga Class"
                    fill
                    className="object-cover object-bottom hidden md:block"
                    priority
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="container mx-auto md:mx-24 max-w-7xl px-4 md:px-8 relative z-10 pt-24 md:pt-36 pb-12 md:pb-20 font-light">
                <div className="max-w-full sm:ml-50 md:max-w-2xl lg:max-w-[55%] space-y-4 md:space-y-6 animate-fade-in-up">
                    <h1 className="w-full text-3xl sm:text-4xl sm:mt-4 mt-12 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg" style={{ fontFamily: 'Montserrat', fontSize: '50px', fontWeight: '700', lineHeight: '1.1em', letterSpacing: '0em' }}>
                        Well-being that transforms Properties.
                    </h1>

                <div>
                    <div className="inline-block px-1 shadow-xl bg-white">
                        <p className="text-base md:text-lg lg:text-xl font-bold text-[#053d3d] leading-snug">
                            Turning wellness into a driver of 
                        </p>
                    </div>   
                    <div className="inline-block px-1 shadow-xl bg-white mt-1 md:mt-1">
                        <p className="text-base md:text-lg lg:text-xl font-bold text-[#053d3d] leading-snug">
                            engagement, culture, and outcomes
                        </p>
                    </div>
                </div> 

                    <BookDemoButton />
                </div>
            </div>
        </section>
    );
};
