import React from 'react';

export const GatherUp5DApproach: React.FC = () => {
    const steps = [
        {
            number: "01",
            keyword: "Discover",
            description: "Not guessing. Not copying the property down the street. We collect real input from occupants and onsite teams, along with existing usage patterns, to understand what's working, what feels missing, and how the property is actually experienced day to day."
        },
        {
            number: "02",
            keyword: "Define",
            description: "If it doesn't support outcomes, it doesn't make the cut. We align on clear priorities, such as satisfaction, renewals, occupancy, referrals, reviews, or leasing story, so every wellness and community initiative has a specific job to do."
        },
        {
            number: "03",
            keyword: "Design",
            description: "Strategy first. Activities second. We create a focused activation roadmap that connects early momentum (quick wins) with a longer-term plan that can run with current staffing and scale across the property or portfolio."
        }
    ];

    return (
        <section className="px-2 md:px-4 py-8 md:py-12 bg-[#053d3d]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#a6ff48] mb-6 font-display">
                        The GatherUp 5D Approach
                    </h2>
                    <p className="text-md md:text-lg text-white leading-relaxed">
                        We don't throw events at the wall and hope they work. Every engagement runs through the GatherUp 5D Approach so wellness and community initiatives support retention, reputation, and performance.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#3d6e6e]/30 border border-[#a6ff48]/20 rounded-2xl p-6 md:p-8"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Left Side - Number and Keyword */}
                                <div className="flex-shrink-0">
                                    <div className="text-center text-4xl md:text-5xl font-bold text-[#a6ff48] mb-2 font-display">
                                        {step.number}
                                    </div>
                                    <div className="text-center text-2xl md:text-xl font-bold text-[#a6ff48] font-display">
                                        {step.keyword}
                                    </div>
                                </div>

                                {/* Right Side - Description */}
                                <div className="flex-1 flex items-center">
                                    <p className="text-base md:text-lg text-white leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
