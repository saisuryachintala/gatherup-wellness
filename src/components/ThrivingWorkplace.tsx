import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export const ThrivingWorkplace: React.FC = () => {
    return (
        <section className="w-full bg-[#f8fcfc]">
            {/* Header Section */}
            <div className="bg-[#F5FAF5] py-16 text-center px-4">
                <h2 className="text-[#053d3d] font-bold text-lg mb-2 font-display">
                    Let’s bring your tenant experience to life, together.
                </h2>
                <p className="text-[#053d3d] text-xl font-display">
                    Foster connection, belonging, and engagement through <br /> tailored wellness programs that drive measurable property impact.
                </p>
            </div>
        </section>
    );
};
