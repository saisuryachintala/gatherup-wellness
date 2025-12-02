import React from 'react';

export const WhyGatherUp: React.FC = () => {
    const features = [
        {
            title: "Boost Engagement",
            description: "Drive participation with interactive programming designed to energize employees, tenants, or members."
        },
        {
            title: "Increase Retention",
            description: "Reduce turnover by cultivating a strong sense of community and belonging through custom initiatives."
        },
        {
            title: "Strengthen Culture & Foster belonging",
            description: "Strengthen team dynamics and reduce turnover with custom community-building initiatives."
        }
    ];

    return (
        <section className="w-full">
            {/* Header Section */}
            <div className="bg-[#053d3d] py-16 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                    Happier Tenants, <br />
                    <span className="text-[#a6ff48]">Better Business Outcomes</span>
                </h2>
            </div>

            {/* Content Section */}
            <div className="bg-[#f8fcfc] py-16 md:py-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] font-display">
                                Why do you need GatherUp?
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Most property teams know that well-being matters but few have the time, data, or expertise to turn it into a measurable strategy. <span className="italic">That's where we come in.</span>
                                </p>
                                <p>
                                    GatherUp helps you design and deliver well-being and community programs that drive engagement, strengthen retention, and improve performance. We combine strategic insight with hands-on activation to turn wellness from a nice-to-have into a business advantage.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-[#053d3d] rounded-xl p-6 flex items-start gap-4 shadow-lg text-white">
                                    {/* Placeholder for Icon/Image */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-lg"></div>

                                    <div>
                                        <h4 className="text-[#a6ff48] font-bold text-lg mb-2 font-display">
                                            {feature.title}
                                        </h4>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
