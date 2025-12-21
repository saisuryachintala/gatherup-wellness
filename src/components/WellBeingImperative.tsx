import React from 'react';

export const WellBeingImperative: React.FC = () => {
    return (
        <section className="px-2 md:px-4 py-8 md:py-12 bg-[#053d3d]">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <p className="text-xl md:text-2xl font-bold text-[#a6ff48] mb-6">
                    It's more than a perk.<br />
                    <span className="inline-block bg-[#a6ff48] text-[#053d3d] px-4 py-2 mt-2 text-2xl md:text-4xl">
                        It's a property performance strategy.
                    </span>
                </p>
                <p className="text-md md:text-lg text-white leading-relaxed">
                    Properties that invest in <span className="font-bold">connection, activation, and community</span> see stronger satisfaction, higher retention, better renewals, and healthier NOI.
                </p>
            </div>
        </section>
    );
};
