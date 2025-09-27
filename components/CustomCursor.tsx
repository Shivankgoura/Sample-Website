import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"]')) {
                setIsPointer(true);
            }
        };
        
        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
             if (target.closest('a, button, [role="button"]')) {
                setIsPointer(false);
            }
        };

        const handlePageMouseLeave = () => {
             setIsVisible(false);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseover', handleMouseEnter);
        document.body.addEventListener('mouseout', handleMouseLeave);
        document.documentElement.addEventListener('mouseleave', handlePageMouseLeave);


        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseover', handleMouseEnter);
            document.body.removeEventListener('mouseout', handleMouseLeave);
            document.documentElement.removeEventListener('mouseleave', handlePageMouseLeave);
        };
    }, [isVisible]);
    
    const cursorVariants = {
        default: {
            x: position.x - 8,
            y: position.y - 8,
            width: 16,
            height: 16,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: '2px solid #fff',
            mixBlendMode: 'difference',
            // FIX: Added 'as const' to the 'type' property to ensure TypeScript infers a literal type ('spring'), resolving the framer-motion Variants type error.
            transition: {
                type: 'spring' as const,
                mass: 0.1,
                stiffness: 800,
                damping: 25
            }
        },
        pointer: {
            x: position.x - 20,
            y: position.y - 20,
            width: 40,
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid #fff',
            mixBlendMode: 'difference',
        }
    };
    
    const trailVariants = {
        default: {
            x: position.x - 3,
            y: position.y - 3,
            scale: 1,
            opacity: 1,
        },
        pointer: {
             x: position.x - 3,
            y: position.y - 3,
            scale: 0,
            opacity: 0,
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            {/* Trail */}
            <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-white"
                style={{
                     boxShadow: '0 0 6px #fff, 0 0 12px #fff'
                }}
                variants={trailVariants}
                animate={isPointer ? 'pointer' : 'default'}
                transition={{
                    type: 'spring',
                    mass: 0.3,
                    stiffness: 600,
                    damping: 50
                }}
            />
            {/* Main Cursor */}
            <motion.div
                className="absolute rounded-full"
                variants={cursorVariants}
                animate={isPointer ? 'pointer' : 'default'}
            />
        </div>
    );
};

export default CustomCursor;