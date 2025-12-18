import React from 'react';

export const WellBeingImperative: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-[#053d3d]">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-xl md:text-3xl font-bold text-[#a6ff48] mb-6">
                    Employee well-being isn't just a feel-good initiative,<br />
                    <span className="inline-block bg-[#a6ff48] text-[#053d3d] px-4 py-2 mt-2 text-3xl md:text-4xl">
                        it's a business imperative.
                    </span>
                </h2>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                    Organizations that invest in the health, connection, and fulfillment of their people experience stronger culture, higher retention, and real business growth.
                </p>
            </div>
        </section>
    );
};
