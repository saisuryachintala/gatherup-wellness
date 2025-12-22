'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { scrollReveal, imageLoad, staggerContainer } from '@/utils/animations';

export const BusinessImpact: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const impactMetrics = [
        {
            title: "Retention",
            stat: "Tenants who feel connected to their building and community are significantly more likely to renew rather than relocate.",
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
            stat: "Activated amenities and shared experiences turn unused spaces into daily touchpoints that increase satisfaction and loyalty.",
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
            title: "Community",
            stat: "Properties with strong community see better tenant relationships, smoother communication, and fewer friction points.",
            icon: (
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                        src="/assets/icons/Culture.png"
                        alt="Community"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            title: "Occupancy & Leasing Velocity",
            stat: "Engaged tenants become advocates — supporting faster lease-ups and easier renewals through social proof and referrals.",
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
            title: "Property Reputation",
            stat: "Consistent on-site programming improves reviews, tours, and perception — without major capital investments.",
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
            stat: "Reduced turnover, improved renewals, and stronger demand directly protect and grow net operating income.",
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
                <motion.div
                    ref={sectionRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        variants={scrollReveal}
                        className="text-3xl md:text-4xl font-bold text-center mb-16 font-display"
                    >
                        The Impact on Property Performance
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                    >
                        {impactMetrics.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scrollReveal}
                                className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center"
                            >
                                <motion.div
                                    className="text-[#a6ff48]"
                                    variants={imageLoad}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">{item.title}</h3>
                                <p className="text-white leading-relaxed text-base">
                                    {item.stat}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
