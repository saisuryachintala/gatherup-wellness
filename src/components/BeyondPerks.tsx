import React from 'react';

export const BeyondPerks: React.FC = () => {
    return (
        <section className="px-2 md:px-4 py-4 md:py-8 bg-[#f5faf5]">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-4 font-display">
                    Beyond Amenities, This Is <span className="bg-[#a6ff48] text-[#053d3d] py-1 inline-block">Strategy</span>
                </h3>
                <p className="text-lg md:text-lg text-[#053d3d] leading-relaxed mb-1">
                    Most properties already have gyms, lounges, rooftops, or shared spaces.
                </p>
                <p className="text-lg md:text-lg text-[#053d3d] leading-relaxed mb-1">
                    The problem isn’t <span className="font-bold">what you built</span> — it’s <span className="font-bold">what you activate</span>.
                </p>
                <p className="text-lg md:text-lg text-[#053d3d] leading-relaxed mb-1">
                    Static amenities don’t create loyalty.
                </p>
                <p className="text-lg md:text-lg text-[#053d3d] leading-relaxed mb-4">
                    Occasional events don’t create value.
                </p>
                <p className="text-lg md:text-lg text-[#053d3d] leading-relaxed mb-1">
                    Tenant wellbeing requires a <span className="font-bold">repeatable activation strategy</span> that turns spaces into experiences and buildings into places people want to stay.
                </p>
            </div>
        </section>
    );
};
