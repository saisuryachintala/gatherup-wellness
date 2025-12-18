import React from 'react';

export const WhatsAtStake: React.FC = () => {
    const negativeStakes = [
        "Decreased morale",
        "Low retention",
        "Quiet quitting",
        "Leadership burnout",
        "Team fragmentation"
    ];

    const positiveStakes = [
        "Thriving teams",
        "Energized leaders",
        "Deep loyalty",
        "Culture as a competitive edge"
    ];

    return (
        <section className="px-2 md:px-4 py-8 md:py-12 bg-[#053d3d]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#a6ff48] font-display mb-4">What's at Stake?</h2>
                    <p className="text-md md:text-lg text-white leading-relaxed mb-8">
                        Workplace well-being is the antidote to disengagement, turnover, and culture.
                    </p>
                    {/* White separator line */}
                    <div className="w-full max-w-xl mx-auto h-px bg-white/100"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Negative Stakes */}
                    <div>
                        <p className="text-base text-[#a6ff48] mb-4 font-medium">
                            Businesses that ignore employee well-being, witness:
                        </p>
                        <ul className="space-y-0">
                            {negativeStakes.map((item, i) => (
                                <li key={i}>
                                    <div className="py-3 text-white text-base">
                                        {item}
                                    </div>
                                    {i < negativeStakes.length - 1 && (
                                        <div className="h-px bg-white/30"></div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Positive Stakes */}
                    <div>
                        <p className="text-base text-[#a6ff48] mb-4 font-medium">
                            Businesses that prioritize employee well-being, witness:
                        </p>
                        <ul className="space-y-0">
                            {positiveStakes.map((item, i) => (
                                <li key={i}>
                                    <div className="py-3 text-white text-base">
                                        {item}
                                    </div>
                                    {i < positiveStakes.length - 1 && (
                                        <div className="h-px bg-white/30"></div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
