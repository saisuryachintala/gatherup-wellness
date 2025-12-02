import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function OurSolutions() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#053d3d] mb-8">Our Solutions</h1>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        We offer a range of solutions tailored to your organization's needs, from team challenges to mindfulness workshops
                        and comprehensive wellness programs.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
