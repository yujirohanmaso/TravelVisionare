import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Palmtree, Plane, Hotel, Car } from 'lucide-react';

// Affiliate links for the Mastermind Modal
const MODAL_LINKS = {
  stays: "https://www.hotels.com",
  flights: "https://www.trip.com",
  transport: "https://www.discovercars.com"
};

// Custom TikTok Icon since it's not in standard lucide-react
const TikTokIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// 3. Data Structure: Separate JavaScript array for social links
const socialLinks = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@travelvisionare', icon: TikTokIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/travelvisionare', icon: Instagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@TravelVisionare', icon: Youtube },
];

const navLinks = [
  { name: 'Destinations', href: '#destinations' },
  { name: 'Essentials', href: '#essentials' },
  { name: 'Perks', href: '#perks' },
  { name: 'About', href: '#about' },
];

// Custom Logo Component matching the provided image
const Logo = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#top"
      onClick={scrollToTop}
      className="group flex items-center gap-4 cursor-pointer"
    >
      {/* TV Monogram SVG */}
      <svg 
        viewBox="0 0 120 120" 
        className="w-10 h-10 md:w-11 md:h-11 transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] shrink-0"
      >
        <defs>
          <linearGradient id="tv-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0FFFF" />
            <stop offset="50%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>
        </defs>
        <path 
          d="M 15 20 H 105 V 26 H 15 Z M 57 26 H 63 V 80 H 57 Z M 20 40 H 26 L 60 99.5 L 94 40 H 100 L 63 105 H 57 Z" 
          fill="url(#tv-grad)" 
          className="transition-all duration-500 group-hover:brightness-110"
        />
      </svg>
      
      {/* Typography */}
      <span className="text-lg md:text-xl font-sans font-light tracking-[0.2em] uppercase text-slate-100 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] mt-[2px]">
        TravelVisionare
      </span>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/30 backdrop-blur-md border-b border-white/10 py-3' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center justify-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right side: Social Hub (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-5 border-r border-white/20 pr-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
              <a 
                href="https://kiwi.tpx.li/c2ODlr6g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/30 hover:bg-white hover:text-black text-white px-5 py-2 rounded-full font-light text-sm transition-all duration-300"
              >
                <Palmtree size={16} strokeWidth={1.5} />
                <span>Find Flights</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white focus:outline-none p-2 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-black/90 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-light text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 pb-2 border-t border-white/10">
              <p className="px-3 text-xs font-light text-white/40 uppercase tracking-widest mb-4">
                Social Hub
              </p>
              <div className="flex items-center space-x-6 px-3 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
              <a 
                href="https://kiwi.tpx.li/c2ODlr6g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-white/30 hover:bg-white hover:text-black text-white px-5 py-3 rounded-full font-light transition-colors"
              >
                <Palmtree size={18} strokeWidth={1.5} />
                <span>Find Flights</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
