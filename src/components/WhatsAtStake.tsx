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
        <section className="py-20 bg-[#053d3d]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#a6ff48] font-display mb-4">What's at Stake?</h3>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Workplace well-being is the antidote to disengagement, turnover, and culture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Negative Stakes */}
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <p className="text-base text-[#053d3d] mb-4 font-medium">
                            Businesses that ignore employee well-being, witness:
                        </p>
                        <ul className="space-y-3">
                            {negativeStakes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-red-700 text-base">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Positive Stakes */}
                    <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-[#a6ff48]/50">
                        <p className="text-base text-[#053d3d] mb-4 font-medium">
                            Businesses that prioritize employee well-being, witness:
                        </p>
                        <ul className="space-y-3">
                            {positiveStakes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#053d3d] text-base">
                                    <span className="w-2 h-2 bg-[#a6ff48] rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
