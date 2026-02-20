'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef(null);

  // Theme Colors aligned with Home Hero
  const primaryIndigo = "#3E3A5D";
  const bgIvory = "#F7F2EE";

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
      {/* 1. NAVIGATION - Now correctly redirects to "/" */}
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

      {/* 2. CONTACT HERO - Same layout as Home Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center px-10 pt-32 pb-20 gap-16 max-w-7xl mx-auto">
        {/* Left Side: Arched Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-t-full shadow-sm">
            <img 
              src="/maya-portrait.png" 
              alt="Contact Dr. Maya Reynolds" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>

        {/* Right Side: Contact Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-10" style={{ color: primaryIndigo }}>
            Reach out <br /> <span className="italic font-light">to connect</span>
          </h1>
          <p className="text-xl mb-12 max-w-md leading-relaxed opacity-80" style={{ color: primaryIndigo }}>
            Located in Santa Monica, California. I offer in-person sessions and secure telehealth across the state.
          </p>

          {/* Simple Contact Info instead of button for direct reach */}
          <div className="space-y-6">
            <div className="border-t pt-8" style={{ borderColor: `${primaryIndigo}26` }}>
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Email</h4>
              <a href="mailto:hello@drmaya.com" className="text-2xl hover:opacity-50 transition-opacity underline decoration-1 underline-offset-8">hello@drmaya.com</a>
            </div>
            <div className="border-t pt-8" style={{ borderColor: `${primaryIndigo}26` }}>
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Phone</h4>
              <p className="text-2xl">(555) 555-5555</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER - Updated for Santa Monica */}
      <footer ref={footerRef} className={`pt-20 transition-all duration-1000 transform ${showFooter ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ backgroundColor: bgIvory }}>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20 font-gopher">
          <div className="space-y-6">
            <h3 className="text-4xl font-serif font-bold" style={{ color: primaryIndigo }}>Dr. Maya Reynolds</h3>
            <p className="opacity-80" style={{ color: primaryIndigo }}>Private Office in <br /> Santa Monica, California</p>
          </div>
          <div>
            <h4 className="text-3xl font-serif mb-8" style={{ color: primaryIndigo }}>Hours</h4>
            <p className="opacity-80" style={{ color: primaryIndigo }}>Monday – Friday <br /> By Appointment Only</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-3xl font-serif mb-8" style={{ color: primaryIndigo }}>Find</h4>
            <nav className="flex flex-col gap-4 text-lg font-medium underline underline-offset-8" style={{ color: primaryIndigo }}>
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/task-2">Task 2</Link>
            </nav>
          </div>
        </div>
        <div className="bg-[#EAE7E1] py-16 px-8 text-center border-t border-black/5">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold" style={{ color: primaryIndigo }}>
            All Rights Reserved © 2026 Dr. Maya Reynolds, LLC. | Santa Monica, CA
          </p>
        </div>
      </footer>
    </main>
  );
}