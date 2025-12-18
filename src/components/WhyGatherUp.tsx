import React from 'react';
import Image from 'next/image';

export const WhyGatherUp: React.FC = () => {
    const features = [
        {
            title: "Boost Engagement",
            description: "Drive participation with interactive programming designed to energize your community.",
            icon: "/assets/icons/Boost.png"
        },
        {
            title: "Increase Retention",
            description: "Reduce turnover by cultivating a strong sense of belonging through custom activations.",
            icon: "/assets/icons/Retention-2.png"
        },
        {
            title: "Strengthen Culture & Foster Belonging",
            description: "Strengthen tenant dynamics and reduce turnover with custom community-building initiatives.",
            icon: "/assets/icons/Belonging.png"
        }
    ];

    return (
        <section className="w-full">
            {/* Header Section */}
            <div className="bg-[#053d3d] py-12 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white font-display">
                    Happier Tenants, <br />
                    <span className="text-[#a6ff48]">Better Business Outcomes</span>
                </h1>
            </div>

            {/* Content Section */}
            <div className="bg-[#F5FAF5] py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] font-display">
                                Why do you need GatherUp?
                            </h3>
                            <div className="text-md md:text-lg space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Most property teams know that wellness matters but few have the time, data, or expertise to turn it into a measurable strategy.
                                </p>
                                <div className="h-0.5 w-64 bg-[#053d3d]/40 rounded-full mb-6 mx-auto"></div>
                                <p>
                                    <span className="italic">That's where we come in.</span>
                                </p>
                                <p>
                                    GatherUp helps design and deliver well-being and community programs that drive engagement, strengthen retention, and improve performance. We combine data-driven insights with hands-on activations to turn wellness from a nice-to-have into a business advantage.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-[#053d3d] rounded-xl p-6 flex items-center gap-4 shadow-lg text-white">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 rounded-lg flex items-center justify-center p-2 md:p-3 ">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={112}
                                            height={112}
                                            className="object-contain w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-[#a6ff48] font-bold text-lg mb-2 font-display">
                                            {feature.title}
                                        </h4>
                                        <p className="text-white/90 text-sm leading-relaxed -mt-2">
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
