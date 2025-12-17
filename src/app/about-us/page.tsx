import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FounderBio } from '@/components/FounderBio';
import { WhomWeServe } from '@/components/WhomWeServe';
import { AboutUsMission } from '@/components/AboutUsMission';

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <FounderBio />
            <WhomWeServe />
            <AboutUsMission />
            <Footer />
        </main>
    );
}
