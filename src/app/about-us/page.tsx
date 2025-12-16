import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function AboutUs() {
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
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24">
                {/* Founder Bio Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-12 text-center font-display">
                                About Jamin Gluck, Our Founder
                            </h2>
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                {/* Founder Image */}
                                <div className="relative aspect-square w-full max-w-md mx-auto">
                                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                        <span className="text-gray-400 text-sm">Founder Photo</span>
                                    </div>
                                </div>

                                {/* Bio Text */}
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Jamin Gluck is the founder of GatherUp and a Wellness Program Architect dedicated to helping organizations design healthier, more connected workplaces and communities. Before starting GatherUp, he spent a decade at Amazon and MongoDB, leading teams and large-scale initiatives in fast-paced, high-performance cultures. While he learned a lot about growth and execution, he also saw the hidden costs: burnout, disconnection, and a culture that prized output over well-being.
                                    </p>
                                    <p>
                                        There had to be a better way, one where people could thrive and deliver great results. This realization inspired him to pivot.
                                    </p>
                                    <p>
                                        He became a certified coach, facilitator, and wellness program designer, and founded GatherUp to help companies and property leaders create the kind of environments he once needed himself, where people feel valued, supported, and connected to something larger than their to-do list.
                                    </p>
                                    <p>
                                        Today, GatherUp works with leaders who believe that well-being is not a perk, but a performance strategy. Evidence-based programs and community experiences are designed by GatherUp that improve engagement, retention, and business results.
                                    </p>
                                    <p className="font-medium text-[#053d3d]">
                                        Because when people feel well and connected, everything else, from culture to performance to loyalty, rises with them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Whom do we Serve Section */}
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

                {/* Mission Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8 font-display">
                                Our Mission
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                GatherUp partners with property leaders to
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-[#053d3d] mb-8">
                                turn wellness and community engagement into measurable business results.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
