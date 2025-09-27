
import React from 'react';
import DisplayCards from './ui/DisplayCards';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const cardData = [
  {
    icon: <Sparkles className="size-4 text-gray-400" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    titleClassName: "text-gray-300",
    className:
      "sm:[grid-area:stack] z-10 sm:-translate-x-32 sm:-translate-y-8 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-white/10 before:h-full before:content-[''] before:bg-blend-overlay before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-gray-400" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    titleClassName: "text-gray-300",
    className:
      "sm:[grid-area:stack] z-20 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-white/10 before:h-full before:content-[''] before:bg-blend-overlay before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-white" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    titleClassName: "text-white",
    className: "sm:[grid-area:stack] z-30 sm:translate-x-32 sm:translate-y-8",
  },
];


const Updates: React.FC = () => {
    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <section id="updates" className="py-16 sm:py-24 px-4 overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contentVariants}
                    className="text-center"
                >
                    <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-4">Stay on the Bleeding Edge</h2>
                    <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-16">Follow our latest feature releases, campaign launches, and industry insights.</p>
                </motion.div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contentVariants}
                    className="flex justify-center items-center h-auto sm:h-48"
                >
                    <DisplayCards cards={cardData} />
                </motion.div>
            </div>
        </section>
    );
};

export default Updates;