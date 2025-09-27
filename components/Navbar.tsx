
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Wrench, Megaphone, Mail } from 'lucide-react';

interface NavItem {
    name: string;
    url: string;
    page?: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    { name: 'Home', url: '#', page: 'home', icon: <Home /> },
    { name: 'Our Work', url: '#', page: 'work', icon: <Briefcase /> },
    { name: 'Services', url: '#', page: 'services', icon: <Wrench /> },
    { name: 'Campaigns', url: '#', page: 'campaigns', icon: <Megaphone /> },
    { name: 'Contact us', url: '#contact', icon: <Mail /> }
];

interface NavbarProps {
    onContactClick: () => void;
    onNavigate: (page: string) => void;
    currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigate, currentPage }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (currentPage === 'home') setActiveTab('Home');
        else if (currentPage === 'services') setActiveTab('Services');
        else if (currentPage === 'work') setActiveTab('Our Work');
        else if (currentPage === 'campaigns') setActiveTab('Campaigns');
    }, [currentPage]);

    const handleLinkClick = (item: NavItem) => {
        if (item.page) {
            onNavigate(item.page);
            setActiveTab(item.name);
        } else if (item.name === 'Contact us') {
            onContactClick();
        } else {
            if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                    const element = document.querySelector(item.url);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            setActiveTab(item.name);
        }
        setIsMenuOpen(false); // Close menu on navigation
    };

    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, y: "-100%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 + 0.3, ease: "easeInOut" }
        })
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
            {/* Mobile Nav */}
            <div className="sm:hidden flex items-center justify-between px-4">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="font-logo text-2xl font-bold text-white">raylite</a>
                <button onClick={() => setIsMenuOpen(true)} className="p-2">
                    <Menu className="text-white w-6 h-6" />
                </button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="sm:hidden fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center"
                    >
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-4 p-2">
                            <X className="text-white w-8 h-8" />
                        </button>
                        <ul className="flex flex-col items-center gap-6">
                            {navItems.map((item, i) => (
                                <motion.li key={item.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                                    <a
                                        href={item.url}
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(item); }}
                                        className="flex items-center gap-4 text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center justify-center">
                <div className="flex items-center gap-1 bg-black/40 border border-white/10 backdrop-blur-lg py-1.5 px-2 rounded-full shadow-lg">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name;
                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                // FIX: Pass the full 'item' object instead of 'restOfItem' to satisfy the NavItem type expected by handleLinkClick. The destructuring that caused this was removed.
                                onClick={(e) => { e.preventDefault(); handleLinkClick(item); }}
                                className={`relative cursor-pointer font-semibold whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 rounded-full transition-colors text-xs sm:text-sm ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-zinc-900/60 rounded-full -z-10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
