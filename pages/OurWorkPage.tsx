
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

// More detailed project data
const projectsData = [
    { 
        id: '1',
        title: "Urban Velocity", 
        category: "Videography",
        image: "https://picsum.photos/seed/campaign1/800/600",
        description: "A high-octane cinematic reel showcasing the dynamic energy of city life through FPV drone footage, capturing stunning perspectives and breathtaking maneuvers.",
        tags: ["FPV Drone", "Cinematic Video", "Color Grading"]
    },
    { 
        id: '2',
        title: "Fintech Future", 
        category: "Web Development",
        image: "https://picsum.photos/seed/campaign3/800/600",
        description: "A sleek, secure, and scalable web platform for a leading fintech startup, featuring real-time data visualization and an AI-powered user onboarding process.",
        tags: ["React", "Data Visualization", "AI Integration"]
    },
    { 
        id: '3',
        title: "Desert Mirage", 
        category: "Photography",
        image: "https://picsum.photos/seed/campaign2/800/600",
        description: "A surreal fashion photography campaign shot in the desert, playing with light, shadow, and minimalist aesthetics to create a series of unforgettable images.",
        tags: ["Fashion", "Location Scouting", "Advanced Retouching"]
    },
    { 
        id: '4',
        title: "Workflow Revolution", 
        category: "AI Automation",
        image: "https://picsum.photos/seed/campaign4/800/600",
        description: "Developed a custom AI automation stack for a logistics company, streamlining their inventory management and reducing manual data entry by 95%.",
        tags: ["Process Optimization", "Machine Learning", "API Integration"]
    },
     { 
        id: '5',
        title: "E-commerce Platform", 
        category: "Web Development",
        image: "https://picsum.photos/seed/project2/800/600",
        description: "Designed and built a full-featured e-commerce platform with a focus on seamless user experience and conversion rate optimization.",
        tags: ["UI/UX", "E-commerce", "Scalability"]
    },
    { 
        id: '6',
        title: "Coastal Serenity", 
        category: "Videography",
        image: "https://picsum.photos/seed/campaign5/800/600",
        description: "A tranquil drone video campaign for a luxury coastal resort, highlighting its serene beauty and exclusive amenities to attract high-end clientele.",
        tags: ["4K Aerials", "Luxury Branding", "Storytelling"]
    },
    { 
        id: '7',
        title: "Corporate Rebranding", 
        category: "Photography",
        image: "https://picsum.photos/seed/project4/800/600",
        description: "Complete visual identity overhaul for a tech company, including new logos, brand guidelines, and corporate headshots for a unified, modern look.",
        tags: ["Branding", "Headshots", "Identity"]
    },
    { 
        id: '8',
        title: "Mobile App Launch", 
        category: "Web Development",
        image: "https://picsum.photos/seed/project5/800/600",
        description: "A dynamic landing page and marketing site for a new mobile application, driving downloads and user engagement through interactive elements.",
        tags: ["Next.js", "Mobile First", "Marketing"]
    },
];

type Category = 'All' | 'Web Development' | 'Videography' | 'Photography' | 'AI Automation';
const categories: Category[] = ['All', 'Web Development', 'Videography', 'Photography', 'AI Automation'];


const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as const } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};


interface OurWorkPageProps {
    onContactClick: () => void;
}

const OurWorkPage: React.FC<OurWorkPageProps> = ({ onContactClick }) => {
    const [activeFilter, setActiveFilter] = useState<Category>('All');

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

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
                       Our Work
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        A curated selection of projects where creativity meets cutting-edge technology. Explore how we've transformed visions into reality.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-12 sm:py-16 bg-black">
                <div className="container mx-auto px-4">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={itemVariants}
                        className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12"
                    >
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 text-sm rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-white text-black font-semibold' : 'bg-black/20 border border-white/10 text-gray-300 hover:bg-white/10'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                     <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {filteredProjects.map((project) => (
                            <motion.div 
                                key={project.id} 
                                className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 hover:border-cyan-400/50"
                                variants={itemVariants}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                     <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-3">
                                    <span className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full">{project.category}</span>
                                    <h3 className="text-lg font-bold text-white mt-2">{project.title}</h3>
                                    <p className="text-gray-300 text-xs mt-2 min-h-[4rem]">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                    <a href="#" className="inline-flex items-center text-cyan-400 font-semibold mt-3 group-hover:text-white transition-colors text-sm">
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 bg-black/20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         variants={itemVariants}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Inspired by our work?</h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                           Let's collaborate to create your next success story.
                        </p>
                        <button
                            onClick={onContactClick}
                            className="mt-10 group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out overflow-hidden"
                        >
                             <span className="absolute left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                             <span className="relative z-10 flex items-center gap-2 text-lg">
                                Start Your Project
                                <Send size={20} />
                             </span>
                        </button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default OurWorkPage;
