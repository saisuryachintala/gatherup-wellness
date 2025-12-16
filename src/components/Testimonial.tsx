import React from 'react';

interface TestimonialProps {
    title?: string;
    quote: string;
    author: string;
    authorTitle: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
    title = "What Our Clients Say",
    quote,
    author,
    authorTitle
}) => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#053d3d] mb-12 text-center">{title}</h2>

                <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                    <div className="mb-6">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                            "{quote}"
                        </p>
                    </div>
                    <div className="border-t border-gray-300 pt-6">
                        <p className="font-bold text-[#053d3d] text-lg">{author}</p>
                        <p className="text-gray-600">{authorTitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
