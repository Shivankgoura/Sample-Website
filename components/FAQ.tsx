import React from 'react';
import { FAQ as FAQComponent } from './ui/faq-tabs';

// Data tailored for the raylite agency
const categories = {
    "general": "General",
    "web-automation": "Web & Automation",
    "video-photo": "Video & Photo",
};

const faqData = {
    "general": [
        { question: "What industries do you specialize in?", answer: "From fashion to fintech, raylite adapts AI-driven creativity across a vast range of industries. Our agile approach allows us to tailor solutions for any market." },
        { question: "What makes raylite different from other agencies?", answer: "We are not just a creative agency; we are technology partners. By integrating cutting-edge AI, we deliver solutions that are not only beautiful but also intelligent, efficient, and scalable." },
        { question: "How do we start a project with raylite?", answer: "It's simple! Reach out to us through our contact form. We'll schedule an initial consultation to discuss your vision, goals, and how our AI-driven approach can bring your project to life." }
    ],
    "web-automation": [
        { question: "What is the typical timeline for a web development project?", answer: "Timelines vary based on complexity, but a standard project typically takes 4-8 weeks from kickoff to launch. We prioritize clear communication and milestones throughout the process." },
        { question: "How does the AI automation process work?", answer: "We start with a deep dive into your current workflows to identify bottlenecks. Then, we design and implement a custom AI-powered automation stack to streamline operations, saving you time and resources." },
        { question: "What technologies do you use for web development?", answer: "We use a modern stack including React, Next.js, and other powerful JavaScript frameworks. For the backend, we leverage Node.js and Python, often integrating with serverless architectures for scalability and performance." }
    ],
    "video-photo": [
        { question: "Do you have in-house drone pilots?", answer: "Yes, our team includes fully licensed and insured drone pilots and studio photographers, ensuring professional and high-quality results for all aerial and commercial projects." },
        { question: "What kind of video production do you offer?", answer: "We offer a full suite of video services, including cinematic advertisements, social media reels, corporate branding videos, and documentary-style content. Our process is enhanced by AI for editing and post-production." },
        { question: "How long does a typical video project take?", answer: "A standard video project, like a promotional short, can take 2-4 weeks from pre-production to final delivery. Larger projects may have longer timelines, which we'll outline in our project proposal." }
    ],
};

const FAQ: React.FC = () => {
    return (
        <FAQComponent
            id="faq" // for nav link
            title="Frequently Asked Questions"
            subtitle="Let's answer some questions"
            categories={categories}
            faqData={faqData}
        />
    );
};

export default FAQ;
