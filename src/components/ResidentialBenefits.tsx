import React from 'react';

export const ResidentialBenefits: React.FC = () => {
    return (
        <section className="bg-[#053d3d] text-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl ">
                {/* Key Benefits Grid with Icons */}
                <p className="text-lg md:text-xl text-center leading-relaxed max-w-4xl mx-auto text-white pt-10 pb-10">
                Residents don’t just renew apartments, they renew how it feels to live in your building.
                GatherUp works with owners, REITs, and property managers to turn underused amenities into a steady source of connection, wellbeing, and renewal intent:
                </p>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* Higher renewal rates */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>01</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Higher renewal rates</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            When residents have real relationships and routines in the building, they stay longer and are more willing to accept rent increases.
                        </p>
                    </div>

                    {/* Better reviews & referrals */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>02</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Better reviews & referrals</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            Thoughtful wellness and community experiences show up in how residents talk about you online and to friends.
                        </p>
                    </div>

                    {/* Stronger sense of community */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>03</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Connected community</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            Regular, low-lift touchpoints make your property feel safe, connected, and cared for especially important for urban, young professional, and family communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
