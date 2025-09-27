
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: "Drone Cinematic Reel", tagline: "Where scale meets storytelling.", image: "https://picsum.photos/seed/project1/600/600" },
    { title: "E-commerce Platform UI", tagline: "Seamless user experiences.", image: "https://picsum.photos/seed/project2/600/600" },
    { title: "AI-Powered Automation", tagline: "Scaling business intelligently.", image: "https://picsum.photos/seed/project3/600/600" },
    { title: "Corporate Branding", tagline: "Crafting memorable identities.", image: "https://picsum.photos/seed/project4/600/600" },
    { title: "Mobile App Launch", tagline: "Engaging users on the go.", image: "https://picsum.photos/seed/project5/600/600" },
    { title: "Architectural Visualization", tagline: "Building dreams in 3D.", image: "https://picsum.photos/seed/project6/600/600" },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TiltCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-square bg-slate-800/50 rounded-2xl overflow-hidden group transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
            variants={cardVariants}
        >
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/70 text-sm mt-1">{project.tagline}</p>
            </div>
        </motion.div>
    );
};

const Showcase: React.FC = () => {
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
        <section id="work" className="py-16 sm:py-24 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">We fuse creativity with technology to deliver projects that are not just seen, but felt.</p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={gridVariants}
                >
                    {projects.map((project, index) => (
                        <TiltCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
