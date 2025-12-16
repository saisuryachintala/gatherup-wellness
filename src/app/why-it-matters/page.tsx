import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhyItMattersHero } from '@/components/WhyItMattersHero';
import { WellBeingImperative } from '@/components/WellBeingImperative';
import { WhatsAtStake } from '@/components/WhatsAtStake';
import { BusinessImpact } from '@/components/BusinessImpact';
import { BeyondPerks } from '@/components/BeyondPerks';
import { AtGatherUp } from '@/components/AtGatherUp';
import { BlogPreview } from '@/components/BlogPreview';
import { CTASection } from '@/components/CTASection';

export default function WhyItMatters() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <WhyItMattersHero />
            <WellBeingImperative />
            <WhatsAtStake />
            <BusinessImpact />
            <BeyondPerks />
            <AtGatherUp />
            {/* <BlogPreview /> */}
            <CTASection />
            <Footer />
        </main>
    );
}
