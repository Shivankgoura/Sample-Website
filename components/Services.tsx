
import React, { useState } from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';

const icons = {
    web: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    photo: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    video: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    automation: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const services = [
    { title: "Web Development", description: "Adaptive, scalable websites engineered by us.", icon: icons.web },
    { title: "Commercial Photography", description: "Studio-grade visuals that sell stories.", icon: icons.photo },
    { title: "Video Production & Editing", description: "Ads, reels, and branded content crafted with impact.", icon: icons.video },
    { title: "Automation Stacks", description: "Business scaling through AI-driven workflows.", icon: icons.automation },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            variants={cardVariants}
            className="relative h-full rounded-2xl border border-white/10 p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <GlowingEffect
                 disabled={!isHovered}
                 proximity={80}
                 spread={40}
                 inactiveZone={0.01}
                 borderWidth={1}
                 variant="white"
                 glow={isHovered}
            />
            <div className="relative z-10 p-6 rounded-xl bg-black/40 h-full flex flex-col">
                <div className="text-gray-300 mb-4">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-100">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
            </div>
        </motion.div>
    );
};

const CustomProjectCard: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div 
            variants={cardVariants}
            className="md:col-span-2 relative rounded-2xl border border-white/10 p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <GlowingEffect
                 disabled={!isHovered}
                 proximity={80}
                 spread={60}
                 inactiveZone={0.01}
                 borderWidth={1}
                 variant="white"
                 glow={isHovered}
            />
            <div className="relative z-10 h-full flex items-center justify-center p-8 rounded-xl bg-black/40">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Have a custom project?</h3>
                    <p className="text-white/80 mb-6">We love a challenge. Let's talk about your unique idea.</p>
                    <button
                        onClick={onContactClick}
                        className="group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out overflow-hidden"
                    >
                         <span className="absolute left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                         <span className="relative z-10">
                            First project completely free
                         </span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

interface ServicesProps {
    onContactClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
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
        <section id="services" className="py-16 sm:py-24 px-4 bg-black/20">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">We provide a spectrum of AI-enhanced creative services to bring your vision to life.</p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={gridVariants}
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                    <CustomProjectCard onContactClick={onContactClick} />
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
