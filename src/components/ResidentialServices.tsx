import React from 'react';

export const ResidentialServices: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-[#053d3d]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <p className="text-lg md:text-xl text-white mb-12 leading-relaxed text-center max-w-5xl mx-auto">
                To achieveHappier residents → Stronger community → More renewals → Healthier NOI; without burning out your onsite staff, our residential solutions usually combine:
                                </p>

                {/* Feature Cards */}
                <div className="px-2 md:px-4 grid md:grid-cols-3 gap-3">
                    {/* On-site wellness activations */}
                    <div className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#a6ff48" strokeWidth="2">
                                <circle cx="32" cy="28" r="12" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 20 L20 10 M44 20 L44 10" strokeLinecap="round"/>
                                <path d="M18 40 L22 44 L30 36" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="20" y1="24" x2="44" y2="24" strokeLinecap="round"/>
                                <line x1="16" y1="52" x2="48" y2="52" strokeLinecap="round"/>
                                <path d="M20 40 C20 38 22 36 24 36 L40 36 C42 36 44 38 44 40" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">On-site wellness<br />activations</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Light-touch movement, mindfulness, and social wellness events suited to your resident profile.
                        </p>
                    </div>

                    {/* Community and connection series */}
                    <div className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#a6ff48" strokeWidth="2">
                                <path d="M32 20 C32 16 28 12 24 12 C20 12 16 16 16 20 C16 24 20 28 24 28" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M32 20 C32 16 36 12 40 12 C44 12 48 16 48 20 C48 24 44 28 40 28" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M24 28 C24 28 20 32 20 36 C20 40 24 44 32 48 C40 44 44 40 44 36 C44 32 40 28 40 28" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M32 36 L32 48" strokeLinecap="round"/>
                                <circle cx="28" cy="38" r="1" fill="#a6ff48"/>
                                <circle cx="36" cy="38" r="1" fill="#a6ff48"/>
                            </svg>
                        </div>
                        <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">Community and<br />connection series</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Monthly themes that make it easier for residents to meet each other and build friendships in the building.
                        </p>
                    </div>

                    {/* Program design & comms support */}
                    <div className="bg-[#3d6e6e]/30 border border-[#a6ff48]/30 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#a6ff48" strokeWidth="2">
                                <path d="M24 48 L24 36 C24 34 26 32 28 32 L36 32 C38 32 40 34 40 36 L40 48" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 48 L16 42 C16 40 18 38 20 38 C22 38 24 40 24 42 L24 48" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M40 48 L40 42 C40 40 42 38 44 38 C46 38 48 40 48 42 L48 48" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="20" cy="24" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="32" cy="18" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="44" cy="24" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 27 L20 38" strokeLinecap="round"/>
                                <path d="M32 21 L32 32" strokeLinecap="round"/>
                                <path d="M44 27 L44 38" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <h3 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">Program design<br />& comms support</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Templates, calendars, and messaging so your team isn't planning events on the side of their day job.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
