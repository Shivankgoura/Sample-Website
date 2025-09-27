
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Category = 'All' | 'Video Ads' | 'Photography' | 'Websites' | 'Automation';

const campaigns = [
    { type: 'Video Ads', title: 'Urban Velocity', image: 'https://picsum.photos/seed/campaign1/800/450' },
    { type: 'Photography', title: 'Desert Mirage', image: 'https://picsum.photos/seed/campaign2/800/450' },
    { type: 'Websites', title: 'Fintech Future', image: 'https://picsum.photos/seed/campaign3/800/450' },
    { type: 'Automation', title: 'Workflow Revolution', image: 'https://picsum.photos/seed/campaign4/800/450' },
    { type: 'Video Ads', title: 'Coastal Serenity', image: 'https://picsum.photos/seed/campaign5/800/450' },
    { type: 'Photography', title: 'Product Showcase', image: 'https://picsum.photos/seed/campaign6/800/450' },
];

const categories: Category[] = ['All', 'Video Ads', 'Photography', 'Websites', 'Automation'];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CampaignCard: React.FC<{ item: typeof campaigns[0] }> = ({ item }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <motion.div
            variants={cardVariants}
            className="relative rounded-lg overflow-hidden group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">{item.type}</span>
                <h3 className="text-white text-lg font-bold mt-2">{item.title}</h3>
            </div>
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const Campaigns: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('All');

    const filteredCampaigns = activeFilter === 'All'
        ? campaigns
        : campaigns.filter(c => c.type === activeFilter);
    
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="campaigns" className="py-16 sm:py-24 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="text-center"
                >
                    <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-4">Campaigns</h2>
                    <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">Explore a selection of our successful campaigns, from cinematic ads to robust web platforms.</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12"
                >
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2 text-sm rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-white text-black font-semibold' : 'bg-black/20 text-gray-300 hover:bg-black/40'}`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={gridVariants}
                >
                    {filteredCampaigns.map((item) => (
                        <CampaignCard key={item.title} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Campaigns;
