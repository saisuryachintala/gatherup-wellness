import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function WhyItMatters() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="bg-[#f8fcfc] py-20">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#053d3d] mb-6 font-display">
                            Why does Employee Well-Being Matter
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-[#053d3d] mb-6">
                            Employee well-being isn’t just a feel-good initiative, it’s a business imperative.
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Organizations that invest in the health, connection, and fulfillment of their people experience stronger culture, higher retention, and real business growth.
                        </p>
                    </div>
                </section>

                {/* What's at Stake Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-[#053d3d] font-display mb-4">What’s at Stake?</h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Workplace well-being is the antidote to disengagement, turnover, and culture.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {/* Negative Stakes */}
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h4 className="text-xl font-bold text-red-800 mb-6">Businesses that ignore employee well-being, witness:</h4>
                                <ul className="space-y-3">
                                    {["Decreased morale", "Low retention", "Quiet quitting", "Leadership burnout", "Team fragmentation"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-red-700">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Positive Stakes */}
                            <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-[#a6ff48]/50">
                                <h4 className="text-xl font-bold text-[#053d3d] mb-6">Businesses that prioritize employee well-being, witness:</h4>
                                <ul className="space-y-3">
                                    {["Thriving teams", "Energized leaders", "Deep loyalty", "Culture as a competitive edge"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#053d3d]">
                                            <span className="w-2 h-2 bg-[#a6ff48] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Impact on Business Section */}
                <section className="py-20 bg-[#053d3d] text-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display">
                            The Impact on Business
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Retention",
                                    stat: "Employees are 2.5x more likely to stay at companies that invest in their well-being."
                                },
                                {
                                    title: "Engagement",
                                    stat: "Engaged employees are 21% more productive and show higher innovation and creativity."
                                },
                                {
                                    title: "Culture",
                                    stat: "Well-being-focused cultures have stronger trust, better collaboration, and higher morale."
                                },
                                {
                                    title: "Profitability",
                                    stat: "Organizations with high employee well-being outperform their peers by 10–20% on key metrics like productivity and profit."
                                },
                                {
                                    title: "Mental Fitness",
                                    stat: "Supportive workplaces reduce absenteeism, burnout, and healthcare costs—while increasing energy and focus."
                                },
                                {
                                    title: "Performance",
                                    stat: "Teams that foster belonging see a 56% increase in job performance and a 50% drop in turnover risk."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                                    <h4 className="text-[#a6ff48] font-bold text-xl mb-4 font-display">{item.title}</h4>
                                    <p className="text-gray-200 leading-relaxed">
                                        {item.stat}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Beyond Perks Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h3 className="text-3xl font-bold text-[#053d3d] mb-6 font-display">Beyond Perks, This Is Strategy</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            The old approach to “wellness” was surface-level: fruit in the kitchen, the occasional yoga class, maybe a quarterly lunch-and-learn.
                        </p>
                        <p className="text-2xl font-bold text-[#053d3d]">
                            Today’s workplaces need more than perks... they need strategy.
                        </p>
                    </div>
                </section>

                {/* At GatherUp Section */}
                <section className="py-20 bg-[#f8fcfc]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h3 className="text-3xl font-bold text-[#053d3d] mb-8 font-display">At GatherUp</h3>
                        <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg font-medium text-[#053d3d]">
                            <span className="flex items-center gap-2">
                                <span className="text-[#a6ff48]">✔</span> Work should feel human
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#a6ff48]">✔</span> Culture is built through care
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#a6ff48]">✔</span> Connection is what makes companies thrive
                            </span>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            We exist to help organizations create workplaces where people feel well, valued, and part of something bigger.
                        </p>
                        <p className="text-xl font-bold text-[#053d3d]">
                            That’s not just fluff. That’s the foundation of high-performing, healthy, loyal teams.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#053d3d] text-center">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
                            Ready to Turn Your Culture into a Business Advantage?
                        </h3>
                        <p className="text-xl text-[#a6ff48] mb-10">
                            Let’s make employee well-being your strategy for sustainable success.
                        </p>
                        <a
                            href="https://tidycal.com/gluckjamin/free-gatherup-consultation"
                            target="_blank"
                            className="inline-block bg-[#a6ff48] text-[#053d3d] font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300"
                        >
                            Book a Demo
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
