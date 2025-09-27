
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "Alex Johnson", brand: "Innovate Inc.", quote: "raylite didn't just build a website; they crafted a digital experience that has become the cornerstone of our brand.", avatar: "https://picsum.photos/seed/avatar1/100/100" },
    { name: "Samantha Bee", brand: "Aperture Studios", quote: "The aerial footage was breathtaking. Their drone team captured our vision with unparalleled skill and artistry.", avatar: "https://picsum.photos/seed/avatar2/100/100" },
    { name: "Michael Chen", brand: "QuantumLeap", quote: "The AI automation stack they implemented has saved us hundreds of hours. It's a game-changer.", avatar: "https://picsum.photos/seed/avatar3/100/100" },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <motion.section
            className="py-16 sm:py-24 px-4 bg-black/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10">What Our Clients Say</h2>
                <div className="relative max-w-2xl mx-auto h-80 sm:h-64">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-white/50" />
                                <p className="text-lg italic text-gray-300">"{testimonial.quote}"</p>
                                <div className="mt-4 font-bold text-gray-100">
                                    {testimonial.name} <span className="font-normal text-white/80">/ {testimonial.brand}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
