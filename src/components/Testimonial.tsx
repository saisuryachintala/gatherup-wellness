'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface TestimonialItem {
    quote: string;
    author: string;
    authorTitle: string;
    image?: string;
}

interface TestimonialProps {
    title?: string;
    testimonials?: TestimonialItem[];
    autoPlayInterval?: number;
    // Legacy props for backward compatibility
    quote?: string;
    author?: string;
    authorTitle?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
    title = "What Our Clients Say",
    testimonials,
    autoPlayInterval = 5000,
    // Legacy props
    quote,
    author,
    authorTitle
}) => {
    // Support both array of testimonials and single testimonial (legacy)
    const items: TestimonialItem[] = testimonials || (quote && author && authorTitle ? [{
        quote,
        author,
        authorTitle
    }] : []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    }, [items.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    }, [items.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying || items.length <= 1) return;

        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide, autoPlayInterval, items.length]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    if (items.length === 0) return null;

    const currentTestimonial = items[currentIndex];

    return (
        <section className="relative py-16 md:py-20 overflow-hidden">
            {/* Grass texture background on sides */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-y-0 left-0 w-1/4 bg-[url('/assets/images/grass-texture.jpg')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 bg-[url('/assets/images/grass-texture.jpg')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-[#F5FAF5]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-12 text-center">
                    {title}
                </h2>

                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Main Carousel Card */}
                    <div className="bg-[#053d3d] rounded-lg shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 lg:p-16">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white">
                                    {currentTestimonial.image ? (
                                        <Image
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                            <span className="text-4xl text-gray-500">
                                                {currentTestimonial.author.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#a6ff48] mb-2">
                                    {currentTestimonial.author}
                                </h3>
                                <p className="text-[#a6ff48] text-lg mb-6">
                                    {currentTestimonial.authorTitle}
                                </p>
                                <blockquote className="text-white text-lg md:text-xl leading-relaxed italic">
                                    "{currentTestimonial.quote}"
                                </blockquote>
                            </div>
                        </div>

                        {/* Dot Indicators */}
                        {items.length > 1 && (
                            <div className="flex justify-center gap-2 pb-6">
                                {items.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex 
                                                ? 'bg-[#a6ff48] w-8' 
                                                : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    {items.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                aria-label="Previous testimonial"
                            >
                                <svg 
                                    className="w-6 h-6 text-[#053d3d]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M15 19l-7-7 7-7" 
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
                                aria-label="Next testimonial"
                            >
                                <svg 
                                    className="w-6 h-6 text-[#053d3d]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 5l7 7-7 7" 
                                    />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

