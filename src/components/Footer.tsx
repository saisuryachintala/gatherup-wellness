import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-32 h-10 mb-4">
                            <Image
                                src="/assets/GatherUp-Lockups/SVG/Lockups_Full Logo_White Transparent Background.svg"
                                alt="GatherUp Wellness"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Let's Build a Thriving Workplace, Together</h3>
                        <p className="text-gray-300 max-w-sm">
                            Foster connection, belonging, well-being, and engagement through tailored wellness programs that drive measurable business impact.
                        </p>
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

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-accent">Follow Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; 2025 Jamin Gluck Wellness, LLC. All rights reserved.</p>
                    <p>Atlanta, GA</p>
                </div>
            </div>
        </footer>
    );
};
