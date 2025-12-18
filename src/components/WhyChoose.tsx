import React from 'react';
import Image from 'next/image';

export const WhyChoose: React.FC = () => {
    const features = [
        {
            icon: "/assets/icons/Vector-2.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Tailored Solutions",
            description: "We create connection-centered, strategic well-being programs tailored to your unique culture, values, and goals. Our approach enhances employee well-being while strengthening community and driving meaningful results."
        },
        {
            icon: "/assets/icons/Vector-1.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Efficiency",
            description: "Our streamlined approach saves you time and effort while maximizing impact. We handle everything from program design to execution, allowing you to focus on your core business responsibilities."
        },
        {
            icon: "/assets/icons/Vector.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "True Partnership",
            description: "We're committed to your long-term success. Think of us as an extension of your team, helping you build a vibrant, valuable culture and employee community."
        },
        {
            icon: "/assets/icons/Frame 17.png",
            iconSize: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
            title: "Clear Communication",
            description: "We keep you informed every step of the way, so you always know how programs are performing and the positive impacts they are making on your business goals."
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
