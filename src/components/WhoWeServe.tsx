import React from 'react';
import Image from 'next/image';

export const WhoWeServe: React.FC = () => {
    const propertyTypes = [
        {
            name: "Corporate\nOffices",
            icon: "/assets/icons/CorporateOffices.png"
        },
        {
            name: "Nonprofit\nOrganizations",
            icon: "/assets/icons/NonprofitOrganizations.png"
        },
        {
            name: "Community\nHubs",
            icon: "/assets/icons/CommunityHubs.png"
        },
        {
            name: "Residential\nCommunities",
            icon: "/assets/icons/ResidentialCommunities.png"
        },
        {
            name: "Coworking\nSpaces",
            icon: "/assets/icons/CoworkingSpaces.png"
        },
        {
            name: "Educational\nInstitutions",
            icon: "/assets/icons/EducationalInstitutions.png"
        },
        {
            name: "Fitness Centers\n& Yoga Studios",
            icon: "/assets/icons/FitnessCentersYogaStudios.png"
        },
        {
            name: "Healthcare\nFacilities",
            icon: "/assets/icons/HealthcareFacilities.png"
        }
    ];

    return (
        <section className="px-2 md:px-2 py-12 md:pb-16 lg:pb-20 bg-[#F5FAF5] text-[#053D3D]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-display">
                        Who We Serve
                    </h2>
                    <p className="text-center text-lg mb-4">
                        GatherUp partners with <span className="font-bold">property leaders</span> committed to building healthier, more connected communities.
                    </p>
                    {/* Line separator - matches text width, responsive */}
                    <div className="flex justify-center mb-4">
                        <div className="h-px bg-[#053D3D]/30" style={{ width: 'min(80vw, 100ch)' }}></div>
                    </div>
                    <p className="text-center text-lg mb-4">
                        Our wellness-driven activation strategies are designed specifically for:
                    </p>

                    {/* Property Types Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mb-12">
                        {propertyTypes.map((property, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 md:p-1 text-center hover:bg-white/20 transition-colors flex flex-col items-center justify-center"
                            >
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-2 md:mb-3">
                                    <Image
                                        src={property.icon}
                                        alt={property.name.replace('\n', ' ')}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                                        style={{
                                            filter: 'brightness(0) saturate(100%) invert(15%) sepia(25%) saturate(1800%) hue-rotate(140deg) brightness(0.9) contrast(1.2)',
                                            WebkitFilter: 'brightness(0) saturate(100%) invert(15%) sepia(25%) saturate(1800%) hue-rotate(140deg) brightness(0.9) contrast(1.2)'
                                        }}
                                    />
                                </div>
                                <p className="font-bold whitespace-pre-line text-md md:text-xl leading-tight">
                                    {property.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg max-w-3xl mx-auto">
                        We partner with <span className="font-bold">properties that value community, connection, and well-being</span>,
                        <br />
                        helping them foster engagement and drive measurable results.
                    </p>
                </div>
            </div>
        </section>
    );
};
