
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import ImageCarousel from './components/ImageCarousel';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Updates from './components/Updates';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import ServicesPage from './pages/ServicesPage';
import OurWorkPage from './pages/OurWorkPage';
import CampaignsPage from './pages/CampaignsPage';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState('home');

    const handleNavigate = (pageName: string) => {
        setPage(pageName);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (page) {
            case 'home':
                return (
                    <>
                        <Hero />
                        <Showcase />
                        <ImageCarousel />
                        <Services onContactClick={() => setIsModalOpen(true)} />
                        <Updates />
                        <Testimonials />
                        <FAQ />
                    </>
                );
            case 'services':
                return <ServicesPage onContactClick={() => setIsModalOpen(true)} />;
            case 'work':
                return <OurWorkPage onContactClick={() => setIsModalOpen(true)} />;
            case 'campaigns':
                return <CampaignsPage onContactClick={() => setIsModalOpen(true)} />;
            default:
                 return (
                    <>
                        <Hero />
                        <Showcase />
                        <ImageCarousel />
                        <Services onContactClick={() => setIsModalOpen(true)} />
                        <Updates />
                        <Testimonials />
                        <FAQ />
                    </>
                );
        }
    };

    return (
        <ErrorBoundary>
            <div className="antialiased transition-colors duration-500 bg-black text-gray-200">
                <CustomCursor />
                <Navbar 
                    onContactClick={() => setIsModalOpen(true)} 
                    onNavigate={handleNavigate}
                    currentPage={page}
                />
                <main>
                    {renderPage()}
                </main>
                <Footer onNavigate={handleNavigate} />
                <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </ErrorBoundary>
    );
};

export default App;