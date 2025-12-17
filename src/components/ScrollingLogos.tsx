import React from 'react';
import Image from 'next/image';

export const ScrollingLogos: React.FC = () => {
    const partners = [
        { name: "Amazon", logo: "/assets/images/amazon.png" },
        { name: "CBRE", logo: "/assets/images/cbre.png" },
        { name: "Cox", logo: "/assets/images/cox.png" },
        { name: "Life Time", logo: "/assets/images/lifetime.png" }
    ];

    // Duplicate the array multiple times for seamless scrolling
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <div className="bg-[#f8fcfc] py-12 md:py-16 overflow-x-hidden relative">
            <div className="flex w-max animate-scroll">
                {duplicatedPartners.map((partner, index) => (
                    <div key={index} className="flex-shrink-0 mx-6 md:mx-12 lg:mx-16">
                        <div className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain opacity-100 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
