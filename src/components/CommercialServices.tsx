import React from 'react';
import Image from 'next/image';

export const CommercialServices: React.FC = () => {

    const servicesIcons = [
        {
            title: "Amenity activation & calendars",
            stat: "Weekly or monthly wellness, social, and community touchpoints in spaces you already have.",
            iconSrc: "/assets/icons/Heart.png",
            iconAlt: "Heart",
            iconSize: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        },
        {
            title: "Workplace wellbeing sessions",
            stat: "Short, practical sessions that support focus, mental health, and energy for tenant teams.",
            iconSrc: "/assets/icons/Lotus.png",
            iconAlt: "Lotus",
            iconSize: "w-11 h-11 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px]"
        },
        {
            title: "Experience strategy & measurement",
            stat: "Simple frameworks for communications, feedback, and a small set of KPIs tied back to retention and NOI.",
            iconSrc: "/assets/icons/Flowers.png",
            iconAlt: "Flowers",
            iconSize: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#053d3d]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <p className="text-lg md:text-xl text-white mb-12 leading-relaxed text-center max-w-5xl mx-auto">
                    You bring the building and the tenants. We bring a plug-in wellness and community engine that makes the most of what you've already built. Our commercial solutions typically blend
                </p>

                {/* Feature Cards */}
                <div className="px-2 md:px-4 grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 gap-8 max-w-6xl mx-auto">
                    {servicesIcons.map((item, index) => (
                        <div key={index} className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center">
                            {/* Fixed-height responsive container for icon alignment */}
                            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center mb-4 w-full">
                                <div className={`relative ${item.iconSize}`}>
                                    <Image
                                        src={item.iconSrc}
                                        alt={item.iconAlt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
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

