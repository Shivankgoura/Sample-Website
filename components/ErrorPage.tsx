
import React from 'react';
import { Glitchy404 } from './ui/glitchy-404';

const ErrorPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
            <div className="text-center">
                <Glitchy404 color="#fff" />
                <h1 className="text-2xl md:text-4xl font-heading font-bold mt-8">Page Lost in Cyberspace</h1>
                <p className="text-lg text-gray-400 mt-4">Looks like this link is broken or the page has been moved.</p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                    Return to Home Base
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
