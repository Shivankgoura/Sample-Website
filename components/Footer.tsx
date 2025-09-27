
import React, { useEffect, useRef, useState } from "react";

interface FooterLink {
    href: string;
    label: string;
    page?: string;
}

const leftLinks: FooterLink[] = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
];

const rightLinks: FooterLink[] = [
    { href: '#', label: 'Our Work', page: 'work' },
    { href: '#', label: 'Services', page: 'services' },
    { href: '#', label: 'Campaigns', page: 'campaigns' },
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'YouTube' },
    { href: '#', label: 'X' },
];

const copyrightText = `© ${new Date().getFullYear()} raylite. All Rights Reserved.`;
const barCount = 23;

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let t = 0; 

    const animateWave = () => {
      const waveElements = waveRefs.current;
      let offset = 0;

      waveElements.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 10 * Math.sin((t + index) * 0.2)); 
          element.style.transform = `translateY(${offset}px)`;
        }
      });

      t += 0.05;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      if (!animationFrameRef.current) {
        animateWave();
      }
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavigateClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
      e.preventDefault();
      onNavigate(page);
  }

  return (
    <footer
      ref={footerRef}
      className="bg-black text-gray-300 relative flex flex-col w-full justify-between select-none overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-full gap-8 pb-24 pt-12 px-4">
        <div className="space-y-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {leftLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
           <a href="#" onClick={(e) => handleNavigateClick(e, 'home')} className="font-logo text-2xl font-bold text-white tracking-normal transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">raylite</a>
          <p className="text-sm text-gray-500 flex items-center gap-x-2">
            {copyrightText}
          </p>
        </div>
        <div className="space-y-4 text-left md:text-right">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-end">
            {rightLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={(e) => link.page && handleNavigateClick(e, link.page)} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-left md:text-right mt-4">
            <button onClick={handleBackToTop} className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center">
              Back to top &uarr;
            </button>
          </div>
        </div>
      </div>
      <div
        id="waveContainer"
        aria-hidden="true"
        className="w-full h-[150px] overflow-hidden absolute bottom-0 left-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
          {Array.from({ length: barCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => { waveRefs.current[index] = el; }}
              className="absolute bottom-0 w-full"
              style={{
                height: `${(barCount - index) * 2.5}px`,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                transition: "transform 0.1s ease-out",
                willChange: "transform",
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;