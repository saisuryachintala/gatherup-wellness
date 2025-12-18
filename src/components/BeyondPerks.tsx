import React from 'react';

export const BeyondPerks: React.FC = () => {
    return (
        <section className="px-2 md:px-4 py-4 md:py-8 bg-[#f5faf5]">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-4 font-display">
                    Beyond Perks, This Is <span className="bg-[#a6ff48] text-[#053d3d] px-3 py-1 inline-block">Strategy</span>
                </h3>
                <p className="text-md md:text-lg text-[#053d3d] leading-relaxed mb-6">
                    The old approach to "wellness" was surface-level: fruit in the kitchen, the occasional yoga class, maybe a quarterly lunch-and-learn.
                </p>
                <p className="text-md md:text-lg font-semibold text-[#053d3d] leading-relaxed">
                    Today's workplaces need more than perks... they need strategy.
                </p>
            </div>
        </section>
    );
};
