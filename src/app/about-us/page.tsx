import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FounderBio } from '@/components/FounderBio';
import { WhomWeServe } from '@/components/WhomWeServe';
import { OurMission } from '@/components/OurMission';

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <FounderBio />
            <WhomWeServe />
            <OurMission/>
            <Footer />
        </main>
    );
}
