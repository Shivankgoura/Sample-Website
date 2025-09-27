
import React from 'react';
import { motion } from 'framer-motion';
import { ThreeDPhotoCarousel } from './ui/3d-carousel';

const ImageCarousel: React.FC = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <section id="gallery" className="py-8 sm:py-16 px-4 bg-black/20">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visual Odyssey</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                        Explore our work in an immersive 3D space. Drag to spin or use the arrows for a new perspective on creativity.
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={textVariants}
                >
                    <ThreeDPhotoCarousel />
                </motion.div>
            </div>
        </section>
    );
};

export default ImageCarousel;
