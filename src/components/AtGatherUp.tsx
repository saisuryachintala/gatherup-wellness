import React from 'react';
import Image from 'next/image';

export const AtGatherUp: React.FC = () => {
    const beliefs = [
        "Work should feel human",
        "Culture is built through care",
        "Connection is what makes companies thrive"
    ];

    return (
        <section className="px-2 md:px-4 py-3 md:py-4 bg-[#053d3d]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#a6ff48] mb-4 font-display">At GatherUp</h2>
                        <p className="text-lg text-white mb-4">
                            We believe that:
                        </p>
                        <div className="space-y-3 mb-6">
                            {beliefs.map((belief, index) => (
                                <div key={index} className="flex items-start gap-3 text-lg text-white">
                                    <span className="text-[#a6ff48] flex-shrink-0">✓</span>
                                    <span>{belief}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-white leading-relaxed mb-4">
                            We exist to help organizations create workplaces where people feel well, valued, and part of something bigger.
                        </p>
                        <p className="text-lg font-semibold text-white leading-relaxed">
                            That's not just fluff. That's the foundation of high-performing, healthy, loyal teams.
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative w-full min-h-[300px] h-[400px] md:h-[550px] rounded-2xl overflow-hidden bg-[#053d3d]">
                            <Image
                                src="/assets/images/at-gatherup-illustration-v3-no-bg.png"
                                alt="GatherUp Team"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
