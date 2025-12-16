import React from 'react';

export const BusinessImpact: React.FC = () => {
    const impactMetrics = [
        {
            title: "Retention",
            stat: "Employees are 2.5x more likely to stay at companies that invest in their well-being.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M32 28c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="32" cy="20" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 48c0-8 8-12 12-14 0 0 4-2 12-2s12 2 12 2c4 2 12 6 12 14" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 52c-2-2-4-6-4-10 0-4 2-6 4-6h40c2 0 4 2 4 6 0 4-2 8-4 10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Engagement",
            stat: "Engaged employees are 21% more productive and show higher innovation and creativity.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="22" cy="28" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="42" cy="28" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 36c0 4 2 6 4 7 2 1 4 1 6 1s4 0 6-1c2-1 4-3 4-7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="28" y="18" width="8" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 22c-2-2-4-4-4-8 0-2 2-4 4-4h28c2 0 4 2 4 4 0 4-2 6-4 8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Culture",
            stat: "Well-being-focused cultures have stronger trust, better collaboration, and higher morale.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="32" cy="32" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="20" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="46" cy="20" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="44" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="46" cy="44" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="24" y1="25" x2="28" y2="28" strokeLinecap="round"/>
                    <line x1="40" y1="25" x2="36" y2="28" strokeLinecap="round"/>
                    <line x1="24" y1="39" x2="28" y2="36" strokeLinecap="round"/>
                    <line x1="40" y1="39" x2="36" y2="36" strokeLinecap="round"/>
                </svg>
            )
        },
        {
            title: "Profitability",
            stat: "Organizations with high employee well-being outperform their peers by 10–20% on key metrics like productivity and profit.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="26" cy="32" r="12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 26v12M23 29h6M23 35h6" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="40" y="20" width="4" height="24" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="46" y="24" width="4" height="20" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="52" y="28" width="4" height="16" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M38 12l4 4 4-4M42 16v-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Mental Fitness",
            stat: "Supportive workplaces reduce absenteeism, burnout, and healthcare costs—while increasing energy and focus.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M32 12c-8 0-14 6-14 14 0 4 2 8 4 10l-2 12h24l-2-12c2-2 4-6 4-10 0-8-6-14-14-14z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 30c2 0 3-1 4-2 1-1 2-2 4-2s3 1 4 2c1 1 2 2 4 2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="26" cy="22" r="1.5" fill="currentColor"/>
                    <circle cx="38" cy="22" r="1.5" fill="currentColor"/>
                    <path d="M28 48h8v4h-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Performance",
            stat: "Teams that foster belonging see a 56% increase in job performance and a 50% drop in turnover risk.",
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="32" cy="28" r="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="32" cy="28" r="12" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="32" cy="28" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="32" cy="28" r="3" fill="currentColor"/>
                    <line x1="32" y1="12" x2="32" y2="8" strokeLinecap="round"/>
                    <line x1="32" y1="44" x2="32" y2="48" strokeLinecap="round"/>
                    <line x1="16" y1="28" x2="12" y2="28" strokeLinecap="round"/>
                    <line x1="48" y1="28" x2="52" y2="28" strokeLinecap="round"/>
                    <circle cx="32" cy="52" r="2" fill="currentColor"/>
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-[#053d3d] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display">
                    The Impact on Business
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {impactMetrics.map((item, index) => (
                        <div key={index} className="bg-[#3a5f5f]/60 p-8 rounded-3xl backdrop-blur-sm hover:bg-[#3a5f5f]/80 transition-colors text-center">
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
