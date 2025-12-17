import React from 'react';

export const FounderBio: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-12 text-center font-display">
                        About Jamin Gluck, Our Founder
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Founder Image */}
                        <div className="relative aspect-square w-full max-w-md mx-auto">
                            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Founder Photo</span>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                Jamin Gluck is the founder of GatherUp and a Wellness Program Architect dedicated to helping organizations design healthier, more connected workplaces and communities. Before starting GatherUp, he spent a decade at Amazon and MongoDB, leading teams and large-scale initiatives in fast-paced, high-performance cultures. While he learned a lot about growth and execution, he also saw the hidden costs: burnout, disconnection, and a culture that prized output over well-being.
                            </p>
                            <p>
                                There had to be a better way, one where people could thrive and deliver great results. This realization inspired him to pivot.
                            </p>
                            <p>
                                He became a certified coach, facilitator, and wellness program designer, and founded GatherUp to help companies and property leaders create the kind of environments he once needed himself, where people feel valued, supported, and connected to something larger than their to-do list.
                            </p>
                            <p>
                                Today, GatherUp works with leaders who believe that well-being is not a perk, but a performance strategy. Evidence-based programs and community experiences are designed by GatherUp that improve engagement, retention, and business results.
                            </p>
                            <p className="font-medium text-[#053d3d]">
                                Because when people feel well and connected, everything else, from culture to performance to loyalty, rises with them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
