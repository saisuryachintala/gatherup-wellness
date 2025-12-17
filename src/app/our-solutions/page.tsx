import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommercialHero } from '@/components/CommercialHero';
import { CommercialBenefits } from '@/components/CommercialBenefits';
import { CommercialServices } from '@/components/CommercialServices';
import { CaseStudy } from '@/components/CaseStudy';
import { CTASection } from '@/components/CTASection';

export default function OurSolutions() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <CommercialHero />
            <CommercialBenefits />
            <CommercialServices />
            <CaseStudy />
            <CTASection />
            <Footer />
        </main>
    );
}
 