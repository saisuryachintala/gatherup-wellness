import React from 'react';

export const BusinessImpact: React.FC = () => {
    const impactMetrics = [
        {
            title: "Retention",
            stat: "Employees are 2.5x more likely to stay at companies that invest in their well-being."
        },
        {
            title: "Engagement",
            stat: "Engaged employees are 21% more productive and show higher innovation and creativity."
        },
        {
            title: "Culture",
            stat: "Well-being-focused cultures have stronger trust, better collaboration, and higher morale."
        },
        {
            title: "Profitability",
            stat: "Organizations with high employee well-being outperform their peers by 10–20% on key metrics like productivity and profit."
        },
        {
            title: "Mental Fitness",
            stat: "Supportive workplaces reduce absenteeism, burnout, and healthcare costs—while increasing energy and focus."
        },
        {
            title: "Performance",
            stat: "Teams that foster belonging see a 56% increase in job performance and a 50% drop in turnover risk."
        }
    ];

    return (
        <section className="py-20 bg-[#053d3d] text-white">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display">
                    The Impact on Business
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {impactMetrics.map((item, index) => (
                        <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <h4 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">{item.title}</h4>
                            <p className="text-gray-200 leading-relaxed text-sm">
                                {item.stat}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
