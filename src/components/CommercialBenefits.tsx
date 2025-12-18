import React from 'react';

export const CommercialBenefits: React.FC = () => {
    return (
        <section className="bg-[#053d3d] text-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl ">
                {/* Key Benefits Grid with Icons */}
                <p className="text-lg md:text-xl text-center leading-relaxed max-w-4xl mx-auto text-white pt-10 pb-10">
                        Turn your asset into a place teams actually want to come to,<br />
                        not just have to. GatherUp partners with owners, asset managers, and<br />
                        property teams to design wellness-driven tenant experiences that support:
                </p>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* Leasing & renewals */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>01</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Leasing & renewals</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            A more engaging workplace helps your tenants attract and retain talent, which makes it easier for you to retain tenants.
                        </p>
                    </div>

                    {/* Tenant satisfaction */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>02</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Tenant satisfaction</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            A consistent, well-branded activation plan gives your building a clear identity and keeps you top of mind when leases are up.
                        </p>
                    </div>

                    {/* Amenity ROI */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="text-[#a6ff48] -mb-6" style={{ fontFamily: 'Lato', fontWeight: 300, fontSize: '60px' }}>03</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#a6ff48]">Amenity ROI</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            We help you move from "nice gym and empty lounge" to activated spaces with regular programming, community moments, and measurable engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

