import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-52 h-16 md:w-72 md:h-24 lg:w-80 lg:h-28 mb-4">
                            <Image
                                src="/assets/GatherUp-Lockups/SVG/Lockups_Full_Logo_Slogan_FullBrandColor.svg"
                                alt="GatherUp Wellness"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-300 max-w-sm mb-6">
                            GatherUp partners with property leaders to turn wellness and community engagement into measurable business results. Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.
                        </p>

                        {/* Follow Us */}
                        <div>
                            <h4 className="font-bold text-lg mb-3 text-accent">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Facebook">
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Twitter">
                                    <FaXTwitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="Instagram">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-[#a6ff48] transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-accent">Company</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/our-solutions" className="hover:text-white transition-colors">Our Solutions</Link></li>
                            <li><Link href="/why-it-matters" className="hover:text-white transition-colors">Why it matters</Link></li>
                            <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center font-bold text-sm text-[#a6ff48]">
                    <p>&copy; 2025 Jamin Gluck Wellness, LLC. All rights reserved.</p>
                    <p>Atlanta, GA</p>
                </div>
            </div>
        </footer>
    );
};
