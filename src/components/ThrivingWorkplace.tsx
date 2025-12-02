import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export const ThrivingWorkplace: React.FC = () => {
    return (
        <section className="w-full bg-[#f8fcfc]">
            {/* Header Section */}
            <div className="py-16 text-center px-4">
                <h1 className="text-[#053d3d] font-bold text-lg mb-2 font-display">
                    Let's Build a Thriving Workplace, Together
                </h1>
                <p className="text-[#053d3d] text-xl font-display">
                    Foster connection, belonging, well-being, and engagement through <br/> tailored wellness programs that drive measurable business impact.
                </p>
            </div>
        </section>
    );
};
