'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { BookDemoButton } from './BookDemoButton';

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#053d3d] shadow-md transition-all duration-300" style={{ height: '92px' }}>
            <div className="container mx-auto max-w-14xl px-4 h-full flex items-center justify-center">
                <div className="w-full md:w-[65%] flex items-center justify-between gap-4 lg:gap-6">
                    {/* Logo */}
                    <Link href="/" className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 flex-shrink-0">
                        <Image
                            src="/assets/GatherUp-Lockups/PNG/Lockups_Symbol_Fresh_Green_Transparent_Background_v2.png"
                            alt="GatherUp Wellness"
                            fill
                            sizes="80px"
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6 flex-1 justify-left">
                        <Link 
                            href="/our-solutions" 
                            className={`transition-all duration-500 ease-in-out ${
                                isActive('/our-solutions')
                                ? 'text-[#a6ff48] font-bold'
                                : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: '1.05rem',
                                transition: 'color 0.5s ease-in-out, font-size 0.5s ease-in-out, font-weight 0.5s ease-in-out, filter 0.5s ease-in-out'
                            }}
                        >
                            Our Solutions
                        </Link>
                        <Link 
                            href="/why-it-matters" 
                            className={`transition-all duration-500 ease-in-out ${
                                isActive('/why-it-matters')
                                    ? 'text-[#a6ff48] font-bold'
                                    : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: '1.05rem',
                                transition: 'color 1s ease-in-out, font-size 1s ease-in-out, font-weight 1s ease-in-out, filter 1s ease-in-out'
                            }}
                        >
                            Why it matters
                        </Link>
                        <Link 
                            href="/about-us" 
                            className={`transition-all duration-500 ease-in-out ${
                                isActive('/about-us')
                                ? 'text-[#a6ff48] font-bold'
                                : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: '1.05rem',
                                transition: 'color 0.5s ease-in-out, font-size 0.5s ease-in-out, font-weight 0.5s ease-in-out, filter 0.5s ease-in-out'
                            }}
                        >
                            About us
                        </Link>
                    </nav>

                    {/* Book a Demo Button */}
                    <div className="hidden md:flex">
                        <BookDemoButton />
                    </div>

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
            </div>
            <div className="border-t border-[#a6ff48] w-full" />

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-[#053d3d] border-t border-[#a6ff48]/30">
                    <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
                        <Link
                            href="/our-solutions"
                            className={`py-2 ${
                                isActive('/our-solutions')
                                    ? 'text-[#a6ff48] drop-shadow-[0_2px_4px_rgba(166,255,72,0.3)]'
                                    : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: isActive('/our-solutions') ? '1.125rem' : '1.125rem',
                                fontWeight: isActive('/our-solutions') ? '600' : '400',
                                transition: 'color 0.5s ease-in-out, font-weight 0.5s ease-in-out, filter 0.5s ease-in-out'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Solutions
                        </Link>
                        <Link
                            href="/why-it-matters"
                            className={`py-2 ${
                                isActive('/why-it-matters')
                                    ? 'text-[#a6ff48] drop-shadow-[0_2px_4px_rgba(166,255,72,0.3)]'
                                    : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: isActive('/why-it-matters') ? '1.125rem' : '1.125rem',
                                fontWeight: isActive('/why-it-matters') ? '600' : '400',
                                transition: 'color 0.5s ease-in-out, font-weight 0.5s ease-in-out, filter 0.5s ease-in-out'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why it matters
                        </Link>
                        <Link
                            href="/about-us"
                            className={`py-2 ${
                                isActive('/about-us')
                                    ? 'text-[#a6ff48] drop-shadow-[0_2px_4px_rgba(166,255,72,0.3)]'
                                    : 'text-white hover:text-[#a6ff48] font-normal'
                            }`}
                            style={{
                                fontSize: isActive('/about-us') ? '1.125rem' : '1.125rem',
                                fontWeight: isActive('/about-us') ? '600' : '400',
                                transition: 'color 0.5s ease-in-out, font-weight 0.5s ease-in-out, filter 0.5s ease-in-out'
                            }}
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
