/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import { Anchor, Wifi, Train, Car, ShieldCheck, Ticket, Plane, MapPin } from 'lucide-react';

const PARTNER_LINKS = {
  searadar: "https://searadar.com",
  yesim: "https://yesim.app",
  omio: "https://www.omio.com",
  kiwitaxi: "https://kiwitaxi.com",
  discovercars: "https://www.discovercars.com",
  ekta: "https://www.ektatraveling.com",
  airhelp: "https://www.airhelp.com",
  ticketmaster: "https://www.ticketmaster.com"
};

const essentialsData = [
  { title: "Sea Expeditions", provider: "Searadar", description: "Curated yacht and boat charters.", icon: Anchor, link: "https://searadar.tpx.li/vlEqBTId", active: true, buttonText: "BOOK NOW" },
  { title: "Stay Connected", provider: "Yesim", description: "Digital eSIMs for instant data abroad.", icon: Wifi, link: "https://yesim.tpx.li/pWm8sLqX", active: true, buttonText: "GET CONNECTED" },
  { title: "Ground Transport", provider: "Kiwi.com", description: "Seamless train and bus bookings.", icon: Train, link: "https://kiwi.tpx.li/c2ODlr6g", active: true, buttonText: "SEARCH TICKETS" },
  { title: "Private Transfers", provider: "Partner Coming Soon", description: "Professional airport pickups.", icon: MapPin, link: "", active: false, comingSoonText: "BOOKING COMING SOON" },
  { title: "Car Rentals", provider: "Partner Coming Soon", description: "The best rates on local rentals.", icon: Car, link: "", active: false, comingSoonText: "RENTAL COMING SOON" },
];

const perksData = [
  { title: "Travel Insurance", provider: "Partner Coming Soon", caption: "Global coverage for total peace of mind.", icon: ShieldCheck, link: "", active: false, comingSoonText: "INSURANCE COMING SOON" },
  { title: "Flight Compensation", provider: "AirHelp", caption: "Claim up to $600 for delayed flights.", icon: Plane, link: "https://airhelp.tpx.li/d7DoajF8", active: true, buttonText: "CLAIM NOW" },
  { title: "Live Events", provider: "Tiqets", caption: "Tickets to local concerts and shows.", icon: Ticket, link: "https://tiqets.tpx.li/flxfBiAl", active: true, buttonText: "BOOK TICKETS" },
];


export default function App() {
  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <main>
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Moody Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070&auto=format&fit=crop" 
              alt="Beautiful coastal destination" 
              className="w-full h-full object-cover"
            />
            {/* Dusty rose to deep teal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8c5a61]/85 via-[#2a4d5c]/80 to-[#0a2e3f]/95" />
            {/* Seamless blend to background color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1a]/40 to-[#0a0f1a]" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#F8FAFC] mb-8 tracking-tight">
              Discover Your Next Adventure.
            </h1>
            <p className="text-lg md:text-xl text-slate-300/50 mb-12 font-light max-w-2xl mx-auto tracking-wide">
              Experience the world's most breathtaking destinations with TravelVisionare.
            </p>
            <button 
              onClick={scrollToDestinations}
              className="px-8 py-3 rounded-full border border-white/70 text-white hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-black hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 text-sm font-medium tracking-wide"
            >
              Discover Now
            </button>
          </div>

          {/* Subtle SaaS-like divider at the bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        </div>

        {/* World Tour Jumbotron */}
        <div id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 scroll-mt-20">
          <div className="relative flex flex-col items-center">
            {/* Visual Banner */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 mb-12 bg-[#0a0f1a]">
              {/* Image 1: Beach */}
              <div className="absolute top-0 left-0 w-[40%] h-full">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
                  alt="Coastal Escapes" 
                  className="w-full h-full object-cover" 
                  style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' }} 
                />
              </div>
              {/* Image 2: Nordic */}
              <div className="absolute top-0 left-[30%] w-[40%] h-full">
                <img 
                  src="https://images.unsplash.com/photo-1568607689150-17e625c1586e?auto=format&fit=crop&q=80" 
                  alt="Arctic Adventures" 
                  className="w-full h-full object-cover" 
                  style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }} 
                />
              </div>
              {/* Image 3: Thai */}
              <div className="absolute top-0 right-0 w-[40%] h-full">
                <img 
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80" 
                  alt="Cultural Immersion" 
                  className="w-full h-full object-cover" 
                  style={{ WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' }} 
                />
              </div>
              {/* Bottom Gradient for smooth blending into the page */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0f1a] to-transparent pointer-events-none" />
            </div>

            {/* Typography & CTA */}
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
                Find Your Next Destination
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-light mb-10 leading-relaxed">
                Discover exclusive flight deals and begin your journey with TravelVisionare's trusted partners.
              </p>
              <a 
                href="https://kiwi.tpx.li/c2ODlr6g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-[#00E5FF] hover:text-black hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 text-lg font-bold tracking-wide"
              >
                Search All Flights
              </a>
            </div>
          </div>
        </div>

        {/* Traveler Essentials Section */}
        <div id="essentials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/10 bg-[#0a0f1a]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight font-serif font-medium text-white mb-4">
              Essentials <span className="italic text-3xl text-slate-400 font-light">and</span> Adventure
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">Logistics and specialized travel curated for the modern explorer.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {essentialsData.map((item) => {
              if (item.active) {
                return (
                  <div key={item.title} className="group flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-6 bg-transparent rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-colors duration-300 shrink-0">
                        <item.icon className="w-8 h-8 text-amber-400 transition-colors duration-300 stroke-[1]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400 font-light mb-1">{item.provider}</p>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-center">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white hover:bg-[#00E5FF] hover:text-black hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 text-xs font-bold tracking-wide"
                      >
                        {item.buttonText}
                      </a>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={item.title} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex flex-col p-6 bg-transparent rounded-2xl border border-white/10 opacity-50">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mr-6 shrink-0">
                        <item.icon className="w-8 h-8 text-amber-400 stroke-[1]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400 font-light mb-1">{item.provider}</p>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-center">
                      <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/10 text-slate-500 text-xs font-bold tracking-wide cursor-not-allowed">
                        {item.comingSoonText}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* Protection & Perks Section */}
        <div id="perks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/10 bg-[#0a0f1a]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tight font-serif font-medium text-white mb-4">
              Protection <span className="italic text-3xl text-slate-400 font-light">and</span> Perks
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">High-margin services to secure your journey and elevate your experience.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {perksData.map((item) => {
              if (item.active) {
                return (
                  <div key={item.title} className="group flex flex-col w-full md:w-[calc(33.333%-1rem)] p-6 bg-transparent rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-colors duration-300 shrink-0">
                        <item.icon className="w-8 h-8 text-amber-400 transition-colors duration-300 stroke-[1]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400 font-light mb-1">{item.provider}</p>
                        <p className="text-sm text-slate-500">{item.caption}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-center">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white hover:bg-[#00E5FF] hover:text-black hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 text-xs font-bold tracking-wide"
                      >
                        {item.buttonText}
                      </a>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={item.title} className="w-full md:w-[calc(33.333%-1rem)] flex flex-col p-6 bg-transparent rounded-2xl border border-white/10 opacity-50">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mr-6 shrink-0">
                        <item.icon className="w-8 h-8 text-amber-400 stroke-[1]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400 font-light mb-1">{item.provider}</p>
                        <p className="text-sm text-slate-500">{item.caption}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-center">
                      <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/10 text-slate-500 text-xs font-bold tracking-wide cursor-not-allowed">
                        {item.comingSoonText}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* The Manifesto / About Section */}
        <div id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center border-t border-white/10 bg-[#0a0f1a]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-8 tracking-tight">
            The Vision Behind the Lens.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            TravelVisionare was born from a simple obsession: finding the world's most breathtaking escapes and bringing them to your screen. We believe travel isn't just about the destination; it's about the vibe, the aesthetic, and the moments that feel like a movie.
          </p>
          <p className="text-xl md:text-2xl font-serif font-medium text-white italic tracking-wide">
            We curate the scenery. You live the story.
          </p>
        </div>
        
        {/* Work With Us / Partnerships Section */}
        <div id="partnerships" className="w-full bg-[#0a0f1a] py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 tracking-tight">
              Business and <span className="text-[#00E5FF]">Partnerships</span>
            </h2>
            <p className="text-slate-400 font-light mb-10 leading-relaxed text-lg">
              Have a property, tour, or travel service you’d like to feature? We’re always looking for visionary partners to showcase to our growing audience.
            </p>
            <a 
              href="mailto:travelvisio1@gmail.com?subject=Business%20Inquiry%3A%20TravelVisionare"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-[#00E5FF]/50 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 font-medium tracking-wide"
            >
              Send Inquiry
            </a>
            
            <p className="mt-20 text-xs text-slate-500/60 font-light max-w-2xl mx-auto text-center">
              Disclosure: As an affiliate partner, we may earn a commission from qualifying bookings made through our links at no extra cost to you.
            </p>
          </div>
        </div>
        
        {/* Minimal Footer Area */}
        <footer className="py-8 text-center border-t border-white/10 bg-[#0a0f1a]">
          <p className="text-slate-400 text-sm font-light tracking-wide">© 2026 TravelVisionare. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
