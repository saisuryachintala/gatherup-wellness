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

            <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10 pt-24 md:pt-36 pb-12 md:pb-20 ml-0 md:ml-40 lg:ml-60 font-light">
                <div className="max-w-full md:max-w-2xl lg:max-w-[55%] space-y-4 md:space-y-6 animate-fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg" style={{ fontFamily: 'Montserrat', fontSize: '50px', fontWeight: '700', lineHeight: '1.1em', letterSpacing: '0em', }}>
                        Well being that transforms Businesses.
                    </h1>

                    <div className="block md:inline-block bg-white/95 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-xl">
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-[#053d3d] leading-snug">
                            Turning wellness into a driver of engagement, culture, and outcomes
                        </p>
                    </div>

                    <div className="pt-4">
                        <a 
                            href="https://tidycal.com/gluckjamin/free-gatherup-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#a6ff48] text-[#053d3d] font-bold py-3 px-5 rounded-full hover:bg-white transition-colors duration-300 inline-flex items-center gap-2 text-sm whitespace-nowrap"
                        >
                            Book a Demo
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
