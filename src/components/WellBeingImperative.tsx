import React from 'react';

export const WellBeingImperative: React.FC = () => {
    return (
        <section className="px-2 md:px-4 py-8 md:py-12 bg-[#053d3d]">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <p className="text-xl md:text-2xl font-bold text-[#a6ff48] mb-6">
                    Employee well-being isn't just a feel-good initiative,<br />
                    <span className="inline-block bg-[#a6ff48] text-[#053d3d] px-4 py-2 mt-2 text-4xl md:text-5xl">
                        it's a business imperative.
                    </span>
                </p>
                <p className="text-md md:text-lg text-white leading-relaxed">
                    Organizations that invest in the health, connection, and fulfillment of their people experience stronger culture, higher retention, and real business growth.
                </p>
            </div>
        </section>
    );
};
