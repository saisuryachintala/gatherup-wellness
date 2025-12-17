import React from 'react';

export const WhomWeServe: React.FC = () => {
    const propertyTypes = [
        "Corporate\nOffices",
        "Coworking\nSpaces",
        "Nonprofit\nOrganizations",
        "Educational\nInstitutions",
        "Community\nHubs",
        "Fitness Centers\n& Yoga Studios",
        "Residential\nCommunities",
        "Healthcare\nFacilities"
    ];

    return (
        <section className="py-20 bg-[#053d3d] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-display">
                        Whom do we Serve?
                    </h2>
                    <p className="text-center text-lg mb-4 text-gray-200">
                        GatherUp partners with property leaders committed to building healthier, more connected communities.
                    </p>
                    <p className="text-center text-base mb-12 text-gray-200">
                        Our strategic wellness programs are designed for a wide range of environments, including:
                    </p>

                    {/* Property Types Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {propertyTypes.map((type, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
                            >
                                <p className="text-white font-medium whitespace-pre-line text-sm md:text-base">
                                    {type}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg text-gray-200 max-w-3xl mx-auto">
                        We partner with properties that value community, connection, and well-being,
                        <br />
                        helping them foster engagement and drive measurable business results.
                    </p>
                </div>
            </div>
        </section>
    );
};
