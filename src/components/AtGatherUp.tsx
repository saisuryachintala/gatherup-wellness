import React from 'react';

export const AtGatherUp: React.FC = () => {
    const beliefs = [
        "Work should feel human",
        "Culture is built through care",
        "Connection is what makes companies thrive"
    ];

    return (
        <section className="py-20 bg-[#f8fcfc]">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h3 className="text-3xl font-bold text-[#053d3d] mb-8 font-display">At GatherUp</h3>
                <p className="text-base text-[#053d3d] mb-6">
                    We believe that:
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg font-medium text-[#053d3d]">
                    {beliefs.map((belief, index) => (
                        <span key={index} className="flex items-center gap-2">
                            <span className="text-[#a6ff48]">✔</span> {belief}
                        </span>
                    ))}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    We exist to help organizations create workplaces where people feel well, valued, and part of something bigger.
                </p>
                <p className="text-xl font-bold text-[#053d3d]">
                    That's not just fluff. That's the foundation of high-performing, healthy, loyal teams.
                </p>
            </div>
        </section>
    );
};
