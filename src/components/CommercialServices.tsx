import React from 'react';
import Image from 'next/image';

export const CommercialServices: React.FC = () => {

    const servicesIcons = [
        {
            title: "Amenity activation & calendars",
            stat: "Weekly or monthly wellness, social, and community touchpoints in spaces you already have.",
            icon: (
                <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Heart.png"
                        alt="Heart"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Workplace wellbeing sessions",
            stat: "Short, practical sessions that support focus, mental health, and energy for tenant teams.",
            icon: (
                <div className="w-18 h-18 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Lotus.png"
                        alt="Lotus"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Experience strategy & measurement",
            stat: "Simple frameworks for communications, feedback, and a small set of KPIs tied back to retention and NOI.",
            icon: (
                <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Flowers.png"
                        alt="Flowers"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#053d3d]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <p className="text-lg md:text-xl text-white mb-12 leading-relaxed text-center max-w-5xl mx-auto">
                    You bring the building and the tenants. We bring a plug-in wellness and community engine that makes the most of what you've already built. Our commercial solutions typically blend
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 gap-8 max-w-6xl mx-auto">
                    {servicesIcons.map((item, index) => (
                        <div key={index} className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center">
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

