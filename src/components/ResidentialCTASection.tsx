import React from 'react';
import { BookDemoButton } from './BookDemoButton';

interface ResidentialCTASectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}

export const ResidentialCTASection: React.FC<ResidentialCTASectionProps> = ({
    title = "Ready to turn your property into a community tenants love?",
    subtitle = "Let's make your property a place where tenants want to live and stay.",
    buttonText = "Book a Demo",
    buttonLink = "https://tidycal.com/gluckjamin/free-gatherup-consultation"
}) => {
    return (
        <section className="px-2 md:px-4 py-8 md:py-12 bg-[#f5faf5] text-center">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-4 font-display">
                    {title}
                </h3>
                <p className="text-xl text-[#053d3d] mb-6">
                    {subtitle}
                </p>
                <BookDemoButton />
            </div>
        </section>
    );
};
