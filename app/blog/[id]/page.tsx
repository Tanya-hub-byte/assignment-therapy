'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const id = params.id;
  const [isMounted, setIsMounted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef(null);

  const primaryIndigo = "#3E3A5D";
  const bgIvory = "#F7F2EE";

  const displayTitle = id?.toString().replace(/-/g, ' ');

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShowFooter(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main 
      style={{ backgroundColor: bgIvory }}
      className={`transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} min-h-screen text-[${primaryIndigo}] font-gopher`}
    >
      {/* 1. NAVIGATION */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center bg-transparent">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl leading-none tracking-tight" style={{ color: primaryIndigo }}>Dr. Maya Reynolds</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-1" style={{ color: primaryIndigo }}>Therapy & Wellness</span>
          </div>
        </Link>
        <div className="flex gap-10 items-center text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: primaryIndigo }}>
          <Link href="/blog" className="hover:opacity-40 transition-opacity duration-300">Blog</Link>
          <Link href="/contact" className="hover:opacity-40 transition-opacity duration-300">Contact</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 pt-48">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-all mb-16"
          style={{ color: primaryIndigo }}
        >
          <span>←</span> Back to All Entries
        </Link>

        <article className="pb-32">
          <header className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 capitalize leading-[1.1] tracking-tight" style={{ color: primaryIndigo }}>
              {displayTitle}
            </h1>
            <div className="flex items-center gap-4 opacity-60 italic text-lg">
              <span>By Dr. Maya Reynolds, PsyD</span>
              <span className="w-1 h-1 rounded-full bg-current"></span>
              <span>Clinical Psychologist</span>
            </div>
          </header>

          <div className="flex justify-center mb-20">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-black/5 shadow-sm">
              <img 
                src="/office-vibe.jpeg" 
                className="w-full h-full object-cover" 
                alt="Therapeutic perspective" 
              />
            </div>
          </div>

          <section className="space-y-8 text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
            <p>
              In my Santa Monica practice, I often work with high-achieving professionals who internally feel 
              exhausted or stuck in overthinking, even while appearing functional on the outside.
            </p>
            
            {/* IMPORTANT QUOTE - Italicized as requested */}
            <p className="font-serif text-3xl italic py-6 leading-tight border-l-4 pl-6" style={{ color: primaryIndigo, borderColor: primaryIndigo }}>
              "True healing begins when we stop bracing for the next storm and start learning how to anchor ourselves in the present moment."
            </p>

            <p>
              This exploration into <strong>{displayTitle}</strong> looks at how we can integrate 
              evidence-based tools like CBT and mindfulness to regulate the physiological side of stress 
              and find steady ground in a fast-paced environment.
            </p>
          </section>

          <div className="mt-24 pt-16 border-t border-black/5 text-center">
            <h3 className="text-3xl font-serif mb-8" style={{ color: primaryIndigo }}>Discuss this further.</h3>
            
            {/* BUTTON CORRECTION: Added hover:text-white and instant fill */}
            <Link 
              href="/contact" 
              className="inline-block border px-12 py-5 uppercase tracking-[0.3em] text-[11px] font-bold transition-colors duration-300 hover:bg-[#3E3A5D] hover:text-white"
              style={{ borderColor: primaryIndigo, color: primaryIndigo }}
            >
              Book a Consultation →
            </Link>
          </div>
        </article>
      </div>

       {/* ANIMATED FOOTER - Santa Monica Theme Alignment */}
<footer 
  ref={footerRef}
  className={`pt-20 transition-all duration-1000 transform ${
    showFooter ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}
  style={{ backgroundColor: '#F7F2EE' }} // Updated to bgIvory
>
  {/* Upper Footer: 3-Column Grid */}
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20 font-gopher">
    
    {/* Left Column: Branding & Contact - Updated for Santa Monica */}
    <div className="space-y-6">
      <h3 className="text-4xl font-serif font-bold" style={{ color: '#3E3A5D' }}>Dr. Maya Reynolds</h3>
      <div className="text-lg leading-relaxed opacity-80" style={{ color: '#3E3A5D' }}>
        <p>Private Office in</p>
        <p>Santa Monica, California</p> {/* Updated Location */}
      </div>
      <div className="flex flex-col gap-2 text-lg font-medium" style={{ color: '#3E3A5D' }}>
        <a href="mailto:hello@drmaya.com" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
          hello@drmaya.com
        </a>
        <a href="tel:5555555555" className="hover:opacity-60 transition-opacity">
          (555) 555-5555
        </a>
      </div>
    </div>

    {/* Middle Column: Hours - Updated per Profile */}
    <div>
      <h4 className="text-3xl font-serif mb-8" style={{ color: '#3E3A5D' }}>Hours</h4>
      <div className="text-lg space-y-2 opacity-80" style={{ color: '#3E3A5D' }}>
        <p>Monday – Friday</p>
        <p>By Appointment Only</p> {/* Updated per Bio */}
      </div>
    </div>

    {/* Right Column: Find */}
    <div className="md:text-left lg:text-right">
      <h4 className="text-3xl font-serif mb-8" style={{ color: '#3E3A5D' }}>Find</h4>
      <nav className="flex flex-col gap-4 text-lg font-medium" style={{ color: '#3E3A5D' }}>
        <Link href="/" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Home</Link>
        <Link href="/contact" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Contact</Link>
        <Link href="/blog" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Blog</Link>
        <Link href="/task-2" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Task 2</Link>
      </nav>
    </div>
  </div>

  {/* BOTTOM LEGAL BAR - Grey-Taupe Background */}
  <div className="bg-[#EAE7E1] py-16 px-8 border-t border-black/5 font-gopher">
    <div className="max-w-7xl mx-auto text-center">
      
      {/* Legal Links */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8 text-[12px] uppercase tracking-widest font-bold text-black">
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Privacy & Cookies Policy</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Good Faith Estimate</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Website Terms & Conditions</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Disclaimer</Link>
      </div>

       <p className="text-[12px] text-gray-600 mb-10">
  Website Template Credits: 
  <a 
    href="https://www.gobloomcreative.com/" 
    target="_self" 
    className="ml-1 underline decoration-gray-400 underline-offset-4 hover:text-black transition-colors font-bold">
    Go Bloom Creative
  </a>
</p>
      {/* Copyright Line - Updated with Santa Monica Branding */}
      <div className="pt-10 border-t border-black/5">
        <p 
          className="text-[11px] uppercase tracking-[0.4em] font-bold"
          style={{ color: '#3E3A5D' }} // Switched to Primary Indigo
        >
          All Rights Reserved © 2026 Dr. Maya Reynolds, LLC. | Santa Monica, CA
        </p>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}