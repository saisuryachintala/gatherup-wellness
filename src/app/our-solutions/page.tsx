import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommercialHero } from '@/components/CommercialHero';
import { CommercialServices } from '@/components/CommercialServices';
import { CaseStudy } from '@/components/CaseStudy';
import { Testimonial } from '@/components/Testimonial';
import { CTASection } from '@/components/CTASection';

export default function OurSolutions() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <CommercialHero />
            <CommercialServices />
            <CaseStudy />
            <Testimonial
                quote="GatherUp partners with property leaders to turn wellness and community engagement into measurable business results. Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance."
                author="Sarah M.,"
                authorTitle="Senior Property Manager, 1.1M SF Office Portfolio"
            />
            <CTASection />
            <Footer />
        </main>
    );
}
 