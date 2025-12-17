'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { BookDemoButton } from './BookDemoButton';

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#053d3d] shadow-md transition-all duration-300">
            <div className="container mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 flex justify-start items-center gap-2 lg:gap-4">
                {/* Logo */}
                {/* <Link href="/" className="relative w-[72px] h-[72px]">
                    <Image
                        src="/assets/GatherUp-Lockups/PNG/Lockups_Symbol_Fresh_Green_Transparent_Background_v2.png"
                        alt="GatherUp Wellness"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link> */}
                <Link href="/" className="relative w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
                    <Image
                        src="/assets/GatherUp-Lockups/PNG/Lockups_Symbol_Fresh_Green_Transparent_Background_v2.png"
                        alt="GatherUp Wellness"
                        fill
                        // sizes="180vw"
                        sizes="(max-width: 640px) 60px, (max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/our-solutions" className="text-white hover:text-[#a6ff48] font-normal text-base transition-colors">
                        Our Solutions
                    </Link>
                    <Link href="/why-it-matters" className="text-white hover:text-[#a6ff48] font-normal text-base transition-colors">
                        Why it matters
                    </Link>
                    <Link href="/about-us" className="text-white hover:text-[#a6ff48] font-normal text-base transition-colors">
                        About us
                    </Link>
                </nav>

                {/* Book a Demo Button */}
                <BookDemoButton className="hidden md:flex ml-auto" />

                {/* Mobile Menu Button - Hidden on desktop, visible on mobile */}
                {/* Note: The previous button was outside the div, moving it inside or adjusting layout if needed. 
                    The previous layout had a second nav for the button. 
                    I will remove the second nav and keep everything in one flow or keep the button separate if it was intended to be distinct.
                    Target site has "Book a Demo" as a link in the nav, not necessarily a separate button element in the header, 
                    but often it's a button. The text dump showed it as a link. 
                    I'll keep it as a link in the nav for now as per the text dump order.
                */}

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white ml-auto"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="border-t border-[#a6ff48] w-full" />

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-[#053d3d] border-t border-[#a6ff48]/30">
                    <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
                        <Link
                            href="/our-solutions"
                            className="text-white hover:text-[#a6ff48] font-normal text-lg transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Solutions
                        </Link>
                        <Link
                            href="/why-it-matters"
                            className="text-white hover:text-[#a6ff48] font-normal text-lg transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why it matters
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-white hover:text-[#a6ff48] font-normal text-lg transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About us
                        </Link>
                        <BookDemoButton 
                            className="justify-center mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </div>
                </nav>
            )}
        </header>
    );
};
