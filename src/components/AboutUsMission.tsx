import React from 'react';

export const AboutUsMission: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8 font-display">
                        Our Mission
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        GatherUp partners with property leaders to
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8">
                        turn wellness and community engagement into measurable business results.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.
                    </p>
                </div>
            </div>
        </section>
    );
};
