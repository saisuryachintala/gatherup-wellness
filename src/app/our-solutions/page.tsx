import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CommercialHero } from '@/components/CommercialHero';
import { CommercialBenefits } from '@/components/CommercialBenefits';
import { CommercialServices } from '@/components/CommercialServices';
import { CaseStudy } from '@/components/CaseStudy';
import { Testimonial } from '@/components/Testimonial';
import { CTASection } from '@/components/CTASection';

export default function OurSolutions() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <CommercialHero />
            <CommercialBenefits />
            <CommercialServices />
            <CaseStudy />
            <Testimonial
                testimonials={[
                    {
                        quote: "We used to treat our amenity floor like a line item. GatherUp turned it into something our tenants actually talk about in their recruiting and retention meetings. When renewals came up this year, we heard far fewer questions about 'what else are we getting for this rent.'",
                        author: "Sarah M.,",
                        authorTitle: "Senior Property Manager, 1.1M SF Office Portfolio",
                        image: "/assets/images/testimonial-1.jpg"
                    },
                    {
                        quote: "GatherUp partners with property leaders to turn wellness and community engagement into measurable business results. Through evidence-based strategy and holistic programming, we help elevate tenant experience, strengthen loyalty, and drive long-term property performance.",
                        author: "Michael R.,",
                        authorTitle: "Director of Asset Management",
                        image: "/assets/images/testimonial-2.jpg"
                    },
                    {
                        quote: "The impact was immediate. Our tenants started using the amenity spaces we invested in, and the feedback during lease renewals completely changed. GatherUp made wellness a competitive advantage for our property.",
                        author: "Jennifer L.,",
                        authorTitle: "VP Operations, Commercial Real Estate",
                        image: "/assets/images/testimonial-3.jpg"
                    }
                ]}
            />
            <CTASection />
            <Footer />
        </main>
    );
}
 