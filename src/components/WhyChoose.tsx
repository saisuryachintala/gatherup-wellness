import React from 'react';
import Image from 'next/image';

export const WhyChoose: React.FC = () => {
    const features = [
        {
            icon: "/assets/icons/Vector-2.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Tailored Solutions",
            description: "GatherUp builds connection-centered wellness programs designed for your property’s tenants, culture, and goals. Every activation is shaped around the people who live or work in your building."
        },
        {
            icon: "/assets/icons/Vector-1.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Efficiency",
            description: "We streamline everything so your onsite and leasing teams save time while your property sees meaningful results. From concept to execution, we run the full program — scheduling, communication, staffing, and measurement — so you can stay focused on operating the building while still delivering a standout tenant experience."
        },
        {
            icon: "/assets/icons/Vector.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "True Partnership",
            description: "Think of us as an extension of your property team. We support your leasing, marketing, and management teams with consistent programming that builds a vibrant tenant community and supports retention. Our goal is long-term success: stronger relationships, higher satisfaction, and better property performance."
        },
        {
            icon: "/assets/icons/Frame 17.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Clear Communication",
            description: "You’ll always know how programs are performing and the positive impact they’re having on your tenants and your property’s goals. We keep you updated every step of the way with simple reporting that shows engagement, outcomes, and how the experience is influencing satisfaction and renewals."
        }
    ];

    return (
        <section className="bg-[#053d3d] pt-12 pb-20 md:pt-16 md:pb-32">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#a6ff48] mb-6 font-display">
                        Why Choose GatherUp?
                    </h2>
                    <p className="text-white text-lg md:text-lg leading-relaxed -mb-12 -mt-4">
                        At GatherUp, we are more than just a service. We are your partner in building a connected, thriving property that promotes long-term business success.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300">
                            <div className={`relative mb-6 ${feature.iconSize}`}>
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">
                                {feature.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
