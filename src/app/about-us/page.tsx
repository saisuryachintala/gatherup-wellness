import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FounderBio } from '@/components/FounderBio';
import { WhoWeServe } from '@/components/WhoWeServe';
import { GatherUp5DApproach } from '@/components/GatherUp5DApproach';
import { OurMission } from '@/components/OurMission';

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <FounderBio />
            <WhoWeServe />
            <GatherUp5DApproach />
            {/* <OurMission /> */}
            <Footer />
        </main>
    );
}
