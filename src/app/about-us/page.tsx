import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#053d3d] mb-8">About Us</h1>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        GatherUp Wellness is dedicated to building a culture of connection within organizations.
                        We believe that a connected team is a healthy, productive, and happy team.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
