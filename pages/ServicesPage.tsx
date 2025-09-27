
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const icons = {
    web: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    drone: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-3.333 0-5 2.667-5 4s1.667 4 5 4 5-2.667 5-4-1.667-4-5-4zm0 0V4m0 16v-4m8-8h-4m-8 0H4m16 8h-4m-8 0H4" /></svg>,
    photo: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    video: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    automation: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const servicesData = [
    { 
        title: "Web Development", 
        icon: icons.web,
        image: "https://picsum.photos/seed/serviceWeb/800/600",
        description: "We engineer bespoke digital platforms that are as intelligent as they are beautiful. Our process integrates AI to create adaptive, high-performance websites that deliver seamless user experiences and drive measurable results. From sleek corporate sites to complex e-commerce platforms, we build the digital foundations for your success.",
        offerings: ["AI-Powered UX/UI Design", "Scalable Frontend Architecture", "Robust Backend & API Integration", "Headless CMS & E-commerce"]
    },
    { 
        title: "Drone Videography", 
        icon: icons.drone,
        image: "https://picsum.photos/seed/serviceDrone/800/600",
        description: "Capture your world from a breathtaking new perspective. Our licensed drone pilots utilize state-of-the-art aerial technology to produce stunning 4K cinematic footage. We transform landscapes, real estate, and events into epic visual narratives that elevate your brand and captivate your audience.",
        offerings: ["Cinematic 4K Aerial Filming", "FPV Drone Tours", "Real Estate & Architectural Flyovers", "Event Coverage"]
    },
    { 
        title: "Commercial Photography", 
        icon: icons.photo,
        image: "https://picsum.photos/seed/servicePhoto/800/600",
        description: "Visuals that speak volumes. Our commercial photography services deliver studio-grade images that tell your brand's story with clarity and impact. We specialize in creating compelling product, lifestyle, and corporate imagery that not only looks stunning but is optimized to convert.",
        offerings: ["High-End Product Photography", "Branded Lifestyle Shoots", "Corporate Headshots & Portraits", "Advertising Campaign Imagery"]
    },
    { 
        title: "Video Production & Editing", 
        icon: icons.video,
        image: "https://picsum.photos/seed/serviceVideo/800/600",
        description: "Content that commands attention. We produce dynamic video content, from high-energy social media reels to polished corporate documentaries. Our end-to-end service covers everything from concept to final cut, using AI-assisted editing to deliver compelling stories with maximum efficiency and impact.",
        offerings: ["Brand Storytelling & Documentaries", "Social Media Ads & Reels", "Corporate & Training Videos", "AI-Enhanced Post-Production"]
    },
    { 
        title: "Automation Stacks", 
        icon: icons.automation,
        image: "https://picsum.photos/seed/serviceAuto/800/600",
        description: "Unlock exponential growth by integrating intelligent automation into your workflow. We analyze your business processes and build custom AI-driven automation stacks that eliminate bottlenecks, reduce manual work, and scale your operations. Work smarter, not harder.",
        offerings: ["Business Process Analysis", "Custom AI Workflow Integration", "CRM & Marketing Automation", "Data Processing & Analytics"]
    },
];

const processSteps = [
    { number: "01", title: "Discover", description: "We dive deep into your vision, goals, and challenges." },
    { number: "02", title: "Design", description: "We architect a data-driven strategy and visual direction." },
    { number: "03", title: "Develop", description: "Our team brings the vision to life with cutting-edge tech." },
    { number: "04", title: "Deploy", description: "We launch, monitor, and optimize for peak performance." },
];

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as const } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    // FIX: Added 'as const' to the 'ease' property to ensure TypeScript infers a literal type, resolving the framer-motion Variants type error.
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

interface ServicesPageProps {
    onContactClick: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onContactClick }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden"
        >
            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 text-center bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-wide">
                       Our Services
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        Pioneering the Future of Digital Creativity with AI. We deliver intelligent, high-impact solutions designed to elevate your brand.
                    </p>
                </div>
            </section>

            {/* Services Details Section */}
            <section className="py-12 sm:py-16 bg-black">
                <div className="container mx-auto px-4 space-y-16">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-lg"></div>
                                <img src={service.image} alt={service.title} className="relative w-full h-auto object-cover rounded-2xl shadow-2xl" />
                            </div>
                            <div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-full text-cyan-400">{service.icon}</div>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-gray-300 text-lg">{service.description}</p>
                                <ul className="space-y-2 pt-2">
                                    {service.offerings.map(offering => (
                                        <li key={offering} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-gray-400">{offering}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-12 sm:py-16 bg-black/20">
                <div className="container mx-auto px-4 text-center">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariants}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">A streamlined journey from concept to reality, ensuring clarity, collaboration, and exceptional results at every stage.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                             <motion.div
                                key={step.number}
                                className="relative p-8 bg-black/40 border border-white/10 rounded-xl"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: index * 0.1, ...itemVariants.visible.transition }}
                                variants={itemVariants}
                            >
                                <div className="absolute top-4 left-4 font-heading text-4xl font-bold text-white/10">{step.number}</div>
                                <h3 className="text-2xl font-bold mb-3 mt-8 text-white">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-12 sm:py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         variants={itemVariants}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Let's build something extraordinary.</h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind? We're ready to transform your vision into a powerful reality.
                        </p>
                        <button
                            onClick={onContactClick}
                            className="mt-10 group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out overflow-hidden"
                        >
                             <span className="absolute left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                             <span className="relative z-10 flex items-center gap-2 text-lg">
                                Start a Project
                                <Send size={20} />
                             </span>
                        </button>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
};

export default ServicesPage;
