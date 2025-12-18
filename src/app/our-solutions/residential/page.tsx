import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResidentialHero } from '@/components/ResidentialHero';
import { ResidentialBenefits } from '@/components/ResidentialBenefits';
import { ResidentialServices } from '@/components/ResidentialServices';
import { ResidentialCaseStudy } from '@/components/ResidentialCaseStudy';
import { ResidentialCTASection } from '@/components/ResidentialCTASection';

export default function ResidentialSolutions() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <ResidentialHero />
            <ResidentialBenefits />
            <ResidentialServices />
            <ResidentialCaseStudy />
            <ResidentialCTASection />
            <Footer />
        </main>
    );
}