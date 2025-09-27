
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    // FIX: Added 'as const' to the 'type' property to ensure TypeScript infers a literal type ('spring'), resolving the framer-motion Variants type error.
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30, duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } },
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            // Reset state after the modal is closed
            setTimeout(() => setSubmitted(false), 500);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    ></motion.div>

                    <motion.div
                        className="relative w-full max-w-lg bg-black/30 border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/10 p-8 z-10"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300">
                            <X size={24} />
                        </button>

                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center py-12 flex flex-col items-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
                                    >
                                        <CheckCircle className="w-16 h-16 text-cyan-400 mb-4" />
                                    </motion.div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Transmission Received!</h2>
                                    <p className="text-gray-300">Thank you for connecting – your vision is on its way.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Let's Create Together</h2>
                                    <p className="text-gray-400 mb-6">Tell us about your project, and we'll get back to you shortly.</p>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 outline-none transition-all duration-300"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 outline-none transition-all duration-300"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Brand / Company"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 outline-none transition-all duration-300"
                                        />
                                        <textarea
                                            placeholder="Your Message"
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 outline-none transition-all duration-300"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="w-full group relative flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out overflow-hidden"
                                        >
                                             <span className="absolute left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                             <span className="relative z-10 flex items-center gap-2">
                                                Send Vision
                                                <Send size={18} />
                                             </span>
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;