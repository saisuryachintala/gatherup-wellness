import React from 'react';
import Image from 'next/image';

export const BusinessImpact: React.FC = () => {
    const impactMetrics = [
        {
            title: "Retention",
            stat: "Employees are 2.5x more likely to stay at companies that invest in their well-being.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Retention-1.png"
                        alt="Retention"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Engagement",
            stat: "Engaged employees are 21% more productive and show higher innovation and creativity.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Engagement.png"
                        alt="Engagement"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Culture",
            stat: "Well-being-focused cultures have stronger trust, better collaboration, and higher morale.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Culture.png"
                        alt="Culture"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Profitability",
            stat: "Organizations with high employee well-being outperform their peers by 10–20% on key metrics like productivity and profit.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Profitability.png"
                        alt="Profitability"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Mental Fitness",
            stat: "Supportive workplaces reduce absenteeism, burnout, and healthcare costs—while increasing energy and focus.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Mental Wellbeing.png"
                        alt="Mental Wellbeing"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Performance",
            stat: "Teams that foster belonging see a 56% increase in job performance and a 50% drop in turnover risk.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Performance.png"
                        alt="Performance"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        }
    ];

    return (
        <section className="px-2 md:px-4 pt-2 md:pt-4 pb-8 md:pb-12 bg-[#053d3d] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display">
                    The Impact on Business
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {impactMetrics.map((item, index) => (
                        <div key={index} className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#3d6e6e]/50 transition-colors duration-300">
                            <div className="text-[#a6ff48]">
                                {item.icon}
                            </div>
                            <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">{item.title}</h3>
                            <p className="text-white leading-relaxed text-base">
                                {item.stat}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
