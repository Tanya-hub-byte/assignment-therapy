'use client'; 
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const BLOGS = [
  { id: 'burnout-recovery', title: 'Managing Work Burnout', img: '/lilac-flower.webp' },
  { id: 'building-self-esteem', title: 'The Foundation of Self-Worth', img: '/lilac-flower2.webp' },
  { id: 'healthy-boundaries', title: 'Healthy Boundaries', img: '/lilac-flower.webp' },
  { id: 'morning-mindfulness', title: 'Morning Mindfulness', img: '/lilac-flower2.webp' },
];

export default function BlogHome() {
  const [isMounted, setIsMounted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef(null);

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

      {/* 2. BLOG HEADER - Added Aligned "Go Back" Button */}
      <header className="pt-48 pb-20 text-center max-w-4xl mx-auto px-8 relative">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity"
            style={{ color: primaryIndigo }}
          >
            <span>←</span> Go Back to Homepage
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight" style={{ color: primaryIndigo }}>
          Thoughts on Healing
        </h1>
        <p className="text-base opacity-70 max-w-lg mx-auto leading-relaxed">
          Reflections on anxiety, trauma, and finding steady ground in Santa Monica.
        </p>
      </header>

      {/* 3. BLOG GRID - 2 per row with Circular Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-5xl mx-auto px-8 pb-32">
        {BLOGS.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="group flex flex-col items-center text-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 border border-black/5 shadow-sm">
              <img 
                src={blog.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={blog.title} 
              />
            </div>
            <h2 className="text-xl font-serif tracking-tight group-hover:opacity-60 transition-opacity" style={{ color: primaryIndigo }}>
              {blog.title}
            </h2>
            <span className="text-[10px] uppercase tracking-widest mt-3 opacity-50 font-bold">Read Entry —</span>
          </Link>
        ))}
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
      {/* Copyright Line */}
      <div className="pt-10 border-t border-black/5">
        <p 
          className="text-[11px] uppercase tracking-[0.4em] font-bold"
          style={{ color: '#3E3A5D' }} 
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