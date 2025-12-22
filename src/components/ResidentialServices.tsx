'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { scrollReveal, imageLoad, staggerContainer } from '@/utils/animations';

export const ResidentialServices: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const servicesIcons = [
        {
            title: "On-site Wellness Activations",
            stat: "Light-touch movement, mindfulness, and social wellness events suited to your resident profile.",
            iconSrc: "/assets/icons/Heart.png",
            iconAlt: "Heart",
            iconSize: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        },
        {
            title: "Community and Connection Series",
            stat: "Monthly themes that make it easier for residents to meet each other and build friendships in the building.",
            iconSrc: "/assets/icons/Bulb.png",
            iconAlt: "Bulb",
            iconSize: "w-11 h-11 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px]"
        },
        {
            title: "Program Design & Comms Support",
            stat: "Templates, calendars, and messaging so your team isn't planning events on the side of their day job.",
            iconSrc: "/assets/icons/Calendar.png",
            iconAlt: "Calendar",
            iconSize: "w-10 h-10 md:w-12 md:h-12 lg:w-18 lg:h-18"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#053d3d]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    ref={sectionRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.p
                        variants={scrollReveal}
                        className="text-lg md:text-xl text-white mb-12 leading-relaxed text-center max-w-5xl mx-auto"
                    >
                        To achieveHappier residents → Stronger community → More renewals → Healthier NOI; without burning out your onsite staff, our residential solutions usually combine:
                    </motion.p>

                    {/* Feature Cards */}
                    <motion.div
                        className="px-2 md:px-4 grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                    >
                        {servicesIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scrollReveal}
                                className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center"
                            >
                                {/* Fixed-height responsive container for icon alignment */}
                                <motion.div
                                    className="h-16 md:h-20 lg:h-24 flex items-center justify-center mb-4 w-full"
                                    variants={imageLoad}
                                >
                                    <div className={`relative ${item.iconSize}`}>
                                        <Image
                                            src={item.iconSrc}
                                            alt={item.iconAlt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
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
