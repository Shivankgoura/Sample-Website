import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Star = ({ x, y, size, opacity }: { x: number; y: number; size: number; opacity: number }) => (
    <div
        className="absolute rounded-full bg-white"
        style={{
            left: `${x}px`,
            top: `${y}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            transform: `translate(-50%, -50%)`,
        }}
    />
);

const Starfield = () => {
    const [stars, setStars] = useState<any[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const generateStars = () => {
            // Increase star count for a richer background
            const newStars = Array.from({ length: 200 }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                depth: Math.random() * 3 + 1,
            }));
            setStars(newStars);
        };

        generateStars();
        window.addEventListener('resize', generateStars);
        
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', generateStars);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallaxX = (mousePos.x - window.innerWidth / 2) / 50;
    const parallaxY = (mousePos.y - window.innerHeight / 2) / 50;

    return (
        <div className="absolute inset-0 overflow-hidden">
             {/* Distant Nebula Container for Parallax */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(${-parallaxX * 0.5}px, ${-parallaxY * 0.5}px)`,
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] bg-radial-gradient-purple opacity-50 animate-slow-spin-reverse"
                />
            </div>
            
            {/* Closer Nebula Container for Parallax */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(${-parallaxX * 1.5}px, ${-parallaxY * 1.5}px)`,
                }}
            >
                 <div
                    className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] bg-radial-gradient-cyan opacity-30 animate-slow-spin"
                />
            </div>

            {/* Stars */}
            {stars.map((star, i) => (
                <div key={i} style={{ transform: `translate(${-parallaxX * star.depth}px, ${-parallaxY * star.depth}px)` }}>
                    <Star {...star} />
                </div>
            ))}
        </div>
    );
};


const subtitles = [
    "Transcending at the speed of thought, we accelerate your vision into reality.",
    "Where ideas journey beyond the ordinary, we engineer limitless breakthroughs.",
    "In the constellation of creativity, your business becomes the brightest star."
];

const Typewriter = ({ text, speed }: { text: string; speed: number }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText(''); 
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return (
        <>
            {displayText}
            <span className="inline-block w-[2px] h-6 md:h-7 bg-white/70 animate-pulse ml-1 align-middle" aria-hidden="true"></span>
        </>
    );
};


const Hero: React.FC = () => {
    const [subtitleIndex, setSubtitleIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = 50; // Faster typing speed
        const pauseDuration = 2500;
        const currentText = subtitles[subtitleIndex];
        const totalDuration = (currentText.length * typingSpeed) + pauseDuration;

        const timer = setTimeout(() => {
            setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [subtitleIndex]);

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            <Starfield />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-20 p-6 animate-fade-in">
                <h1 className="font-logo text-6xl md:text-8xl lg:text-9xl font-bold tracking-normal text-shimmer [text-shadow:0_0_10px_rgba(255,255,255,0.3)]">
                    raylite
                </h1>
                <h2 className="mt-4 text-2xl md:text-3xl text-white/80 animate-fade-in-up animation-delay-500 font-heading tracking-wider">
                    Your Vision. Our Intelligence.
                </h2>
                <div className="mt-8 h-8 md:h-10 flex justify-center items-center">
                   <AnimatePresence mode="wait">
                        <motion.p
                            key={subtitleIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="w-full px-4 text-lg md:text-xl text-gray-300"
                        >
                           <Typewriter text={subtitles[subtitleIndex]} speed={50} />
                        </motion.p>
                   </AnimatePresence>
                </div>
            </div>
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default Hero;