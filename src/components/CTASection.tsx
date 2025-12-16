import React from 'react';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
    title = "Ready to Turn Your Culture into a Business Advantage?",
    subtitle = "Let's make employee well-being your strategy for sustainable success.",
    buttonText = "Book a Demo",
    buttonLink = "https://tidycal.com/gluckjamin/free-gatherup-consultation"
}) => {
    return (
        <section className="py-20 bg-[#f5faf5] text-center">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-8 font-display">
                    {title}
                </h3>
                <p className="text-xl text-[#053d3d] mb-10">
                    {subtitle}
                </p>
                <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#a6ff48] text-[#053d3d] font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
};
