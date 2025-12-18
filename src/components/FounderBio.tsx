import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

export const FounderBio: React.FC = () => {
    return (
        <section className="pt-40 px-2 md:px-2 pb-12 md:pb-16 lg:pb-20 bg-[#053d3d]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#053d3d] rounded-3xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0 md:items-stretch">
                            {/* Founder Image */}
                            <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full">
                                <div className="absolute inset-0 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-3xl overflow-hidden">
                                    <Image
                                        src="/assets/images/about-founder.png"
                                        alt="Jamin Gluck, Founder of GatherUp"
                                        fill
                                        className="object-cover"
                                        style={{ 
                                            objectPosition: 'center center'
                                        }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Bio Text */}
                            <div className="bg-[#255656] p-8 md:p-12 flex flex-col justify-center space-y-6 text-white">
                                <h3 className="text-3xl md:text-4xl font-bold font-display">
                                    About <span className="text-[#a6ff48]">Jamin Gluck</span>, Our Founder
                                </h3>
                                
                                <div className="space-y-4 text-white text-lg mb-4">
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
                                    <p className="font-medium text-[#a6ff48]">
                                        Because when people feel well and connected, everything else, from culture to performance to loyalty, rises with them.
                                    </p>
                                </div>

                                {/* Social Media Icons */}
                                <div className="flex gap-4">
                                    {/* <a href="https://www.facebook.com/benjamin.gluck" target="_blank" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Facebook">
                                        <FaFacebook className="w-6 h-6" />
                                    </a>
                                    <a href="https://x.com/thejamingluck" target="_blank" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Twitter">
                                        <FaXTwitter className="w-6 h-6" />
                                    </a>
                                    <a href="https://www.instagram.com/jamingluck" target="_blank" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Instagram">
                                        <FaInstagram className="w-6 h-6" />
                                    </a> */}
                                    <a href="https://www.linkedin.com/in/jamin-gluck" target="_blank" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="LinkedIn">
                                        <FaLinkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
