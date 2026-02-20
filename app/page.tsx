'use client'; 
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// Reusable Reveal Component

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowFooter(true);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleConnect = () => {
    window.location.reload();
  };

  return (
    
    <main 
      style={{ backgroundColor: '#F7F2EE' }}
      className={`transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} min-h-screen text-[#3E3A5D] selection:bg-maya-primary selection:text-white`}
    >
      
      {/* NAVIGATION */}
<nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent">
  <div onClick={() => window.location.reload()} className="flex items-center gap-3 cursor-pointer group">
    <div className="flex flex-col">
      <span className="font-serif text-2xl leading-none tracking-tight text-[##3E3A5D]">Dr. Maya Reynolds</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#3E3A5D]/60 mt-1">Therapy & Wellness</span>
    </div>
  </div>
  
  <div className="flex gap-10 items-center text-[11px] uppercase tracking-[0.2em] font-bold text-[#3E3A5D]">
    <Link href="/blog" className="hover:opacity-40 transition-opacity duration-300">Blog</Link>
    <Link href="/contact" className="hover:opacity-40 transition-opacity duration-300">Contact</Link>
  </div>
</nav>

      {/* HERO SECTION -  Dr. Maya Portrait */}
      
      <section className="min-h-screen flex flex-col md:flex-row items-center px-10 pt-32 pb-20 gap-16 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-t-full shadow-sm">
            <img 
              src="/maya-portrait.png" 
              alt="Dr. Maya Reynolds" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-[#3E3A5D]">
           Feel steady <br /> <span className="italic font-light">in your own mind</span>
          </h1>
          <p className="text-xl text-[#3E3A5D]/80 mb-10 max-w-md tracking-wide">
            Therapy for adults in Santa Monica, CA navigating anxiety, trauma, and burnout
          </p>
          
          <button 
            onClick={handleConnect}
            className="border border-[#3E3A5D] px-12 py-4 uppercase tracking-[0.3em] text-[11px]
                       text-[#3E3A5D] bg-transparent
                       hover:bg-[#3E3A5D] hover:text-white
                       transition-all duration-500 font-bold"
          >
            Connect With Me →
          </button>
        </div>
      </section>

      {/* INTRO SECTION - Proportional single-view layout */}
      
<section className="bg-[#E5E0DA] flex flex-col md:flex-row h-screen max-h-[650px]">
  {/* Left Content Side */}
  <div className="w-full md:w-1/2 flex flex-col border-r border-[#3E3A5D]/5">
    {/* Text content centered */}
    <div className="flex-grow flex flex-col justify-center items-start text-left px-16 md:px-24">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#3E3A5D] leading-tight">
        Live a fulfilling life.
      </h2>
      <div className="max-w-md space-y-6">
        <p className="text-base md:text-lg leading-relaxed text-[#3E3A5D]/80">
          Life can be challenging—especially when you're trying to balance your personal and professional life.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#3E3A5D]/80">
          It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
        </p>
      </div>
    </div>

    {/* Bottom Link Section with Full Rectangle Hover */}
    <Link 
      href="/contact" 
      className="w-full border-t border-[#3E3A5D]/10 py-8 text-center group transition-colors duration-500 hover:bg-[#3E3A5D]"
    >
      <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#3E3A5D] group-hover:text-[#E5E0DA] transition-colors duration-500">
        Get In Touch →
      </span>
    </Link>
  </div>

  {/* Right Image Side */}
  <div className="w-full md:w-1/2 relative">
    <img 
      src="/tea-cup.webp" 
      alt="A calming cup of tea and journal" 
      className="w-full h-full object-cover" 
    />
  </div>
</section>


      {/* 2. MY SPECIALTIES SECTION */}
   
<section className="py-24 px-8 text-center" style={{ backgroundColor: '#F7F2EE' }}>
  <h2 className="text-5xl font-serif mb-20 text-[#3E3A5D]">My Specialties</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      { 
        title: 'Anxiety & Panic', 
        img: '/special-1.webp', 
        desc: 'Addressing constant worry, physical tension, and difficulty sleeping through practical tools and CBT.' 
      },
      { 
        title: 'Trauma & EMDR', 
        img: '/special-2.webp', 
        desc: 'Carefully paced work focusing on safety, stabilization, and regulating the impact of past experiences.' 
      },
      { 
        title: 'Professional Burnout', 
        img: '/special-3.webp', 
        desc: 'Supporting high-achievers and creatives to reconnect and move beyond chronic professional stress.' 
      }
    ].map((specialty, i) => (
      <div 
        key={i} 
        className="p-10 flex flex-col items-start text-left border border-[#3E3A5D]/10 shadow-sm bg-white"
      >
        <h3 className="text-2xl font-serif mb-6 text-[#3E3A5D]">{specialty.title}</h3>
        <p className="text-base leading-relaxed text-[#3E3A5D]/80 mb-12 h-24">
          {specialty.desc}
        </p>
        <div className="w-full flex justify-center mt-auto">
          <div className="w-64 h-64 rounded-full overflow-hidden border-[1px] border-[#3E3A5D]/20 shadow-md">
            <img 
              src={specialty.img} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0" 
              alt={specialty.title} 
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* 3. ALONE SECTION - SEO & Tone Alignment */}

<section className="bg-white flex flex-col md:flex-row h-screen max-h-[650px] overflow-hidden">
  <div className="w-full md:w-1/2 relative h-full">
    <img src="/alone.webp" alt="Therapeutic presence" className="w-full h-full object-cover" />
  </div>

  <div className="w-full md:w-1/2 flex flex-col bg-[#B6B6C1]">
    <div className="flex-grow flex flex-col justify-center px-16 md:px-20 text-left">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#3E3A5D] leading-tight">
        You don’t have to do this <br />
        <span className="italic font-light">all alone.</span>
      </h2>
      
      <p className="text-lg text-[#3E3A5D] mb-6 font-medium">
        If you are feeling "functional" but quietly struggling:
      </p>

      <ul className="space-y-3 mb-8">
        {[
          'Constant worry and bracing for something to go wrong',
          'Internal exhaustion and emotional on-edge feelings',
          'Difficulty sleeping or pervasive physical tension',
          'Feeling disconnected after years of pushing through stress',
          'Lingering effects of past experiences on safety'
        ].map((item, index) => (
          <li key={index} className="flex items-start text-[#3E3A5D]/90 text-base">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3E3A5D]"></span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-base leading-relaxed text-[#3E3A5D]/90 italic">
        I offer a quiet, private space in Santa Monica and telehealth across California.
      </p>
    </div>

    <Link 
      href="/contact" 
      className="w-full border-t border-[#3E3A5D]/10 py-10 text-center group transition-colors duration-500 hover:bg-[#3E3A5D]"
    >
      <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#3E3A5D] group-hover:text-white transition-colors duration-500">
        Work With Me →
      </span>
    </Link>
  </div>
</section>

{/* 1. DR. MAYA BIO SECTION  */}
<section className="bg-[#F5F1EB] flex flex-col md:flex-row h-screen max-h-[650px] overflow-hidden font-gopher">
  <div className="w-full md:w-1/2 flex flex-col justify-center px-16 md:px-24">
    <div className="max-w-md">
      <h2 className="text-5xl md:text-6xl font-serif mb-8 text-[#3E3A5D] whitespace-nowrap">
        Hi, I'm Dr. Maya.
      </h2>
      
      <div className="space-y-6 text-lg text-[#3E3A5D]/90 leading-relaxed">
        <p>
          I’m a licensed clinical psychologist based in Santa Monica, California, 
          offering a warm, collaborative, and grounded approach to therapy.
        </p>
        <p>
          I help high-achieving adults navigate the physiological and emotional 
          impact of anxiety, stress, and burnout to find lasting resilience.
        </p>
      </div>

      <div className="mt-12">
        <Link 
          href="/contact" 
          className="inline-block border border-[#3E3A5D] px-10 py-4 uppercase tracking-[0.3em] text-[11px] 
                     text-[#3E3A5D] hover:bg-[#3E3A5D] hover:text-white transition-all duration-500 font-bold"
        >
          Let’s Chat →
        </Link>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 relative flex items-center justify-center bg-[#F5F1EB]">
    <div className="relative w-full max-w-[380px] aspect-[4/5]">
      <div className="absolute inset-0 overflow-hidden rounded-t-[200px]">
        <img src="/lilac-flower.webp" alt="Dr. Maya portrait" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[10px] border-[#F5F1EB] shadow-sm z-10 translate-x-1/4 translate-y-1/4">
        <img src="/lilac-flower2.webp" alt="Grounded therapeutic space" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>

{/* FAQ SECTION */}
<section className="py-24 px-8" style={{ backgroundColor: '#F7F2EE' }}>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
    
    {/* Left Side: Arched Image Layout */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-t-[200px] shadow-sm">
        <img 
          src="/lilac-flower3.webp" 
          alt="Santa Monica therapeutic environment" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>

    {/* Right Side: Interactive FAQ Accordion */}
    <div className="w-full md:w-1/2 font-gopher">
      <h2 className="text-4xl md:text-5xl font-serif mb-12" style={{ color: '#3E3A5D' }}>FAQs</h2>
      
      <div className="space-y-0 border-t" style={{ borderColor: '#3E3A5D26' }}>
        {[
          { 
            q: "Do you take insurance?", 
            a: "I am an out-of-network provider. I provide secure documentation (superbills) for clients to submit to their insurance for potential out-of-network reimbursement." 
          },
          { 
            q: "Where is your office located?", 
            a: "My practice is located in Santa Monica, California. I offer in-person sessions at my private office and telehealth sessions for clients throughout the state." 
          },
          { 
            q: "What is your therapeutic approach?", 
            a: "I integrate evidence-based methods such as CBT and EMDR with mindfulness and body-oriented techniques to address both emotional and physiological symptoms." 
          }
        ].map((item, index) => (
          <details key={index} className="group border-b" style={{ borderColor: '#3E3A5D26' }}>
            <summary className="flex justify-between items-center cursor-pointer list-none py-8 text-xl md:text-2xl hover:opacity-70 transition-opacity" style={{ color: '#3E3A5D' }}>
              <div className="flex items-center gap-6">
                <span className="group-open:rotate-45 transition-transform duration-300 font-light">+</span>
                <span>{item.q}</span>
              </div>
            </summary>
            <div className="pb-10 pr-4 text-lg leading-relaxed animate-fadeIn" style={{ color: '#3E3A5D', opacity: 0.8 }}>
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>
{/* PROFESSIONAL BACKGROUND SECTION  */}
<section className="py-24 px-8 font-gopher" style={{ backgroundColor: '#E5E0DA' }}>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-serif mb-16" style={{ color: '#3E3A5D' }}>
      My Professional Background
    </h2>

    <div className="text-left border-t border-[#3E3A5D]/20">
      {[
        { 
          title: "Education", 
          content: "Doctor of Psychology (PsyD) in Clinical Psychology; specialized training in depth-oriented and evidence-based modalities." 
        },
        { 
          title: "Licensure", 
          content: "Licensed Clinical Psychologist in the State of California, providing in-person care in Santa Monica and telehealth statewide." 
        },
        { 
          title: "Certifications & Training", 
          content: "Advanced training in EMDR (Eye Movement Desensitization and Reprocessing), Cognitive Behavioral Therapy (CBT), and mindfulness-based physiological regulation." 
        }
      ].map((item, index) => (
        <details key={index} className="group border-b border-[#3E3A5D]/20">
          <summary className="flex justify-between items-center cursor-pointer list-none py-8 text-2xl hover:opacity-70 transition-opacity" style={{ color: '#3E3A5D' }}>
            <span>{item.title}</span>
            <span className="text-3xl font-light group-open:rotate-45 transition-transform duration-300">+</span>
          </summary>
          <div className="pb-10 text-lg leading-relaxed animate-fadeIn" style={{ color: '#3E3A5D', opacity: 0.8 }}>
            {item.content}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
{/* GET STARTED SECTION  */}
<section className="py-32 px-8 font-gopher" style={{ backgroundColor: '#3E3A5D' }}> 
  <div className="max-w-4xl mx-auto text-center text-[#ffffff]">
    <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">
      Get started today.
    </h2>
    
    <div className="max-w-2xl mx-auto space-y-4 text-xl md:text-2xl leading-relaxed mb-12 opacity-90">
      <p>Ready to take the first step towards more steadiness and clarity?</p>
      <p>
        Reach out to book an initial consultation in Santa Monica or via secure telehealth. 
        I look forward to connecting with you.
      </p>
    </div>

    {/* Centered Button with Hover Inversion */}
    <div className="flex justify-center">
      <Link 
        href="/contact" 
        className="inline-block border border-[#ffffff] px-12 py-5 uppercase tracking-[0.4em] text-[11px] 
                   text-[#ffffff] hover:bg-[#ffffff] hover:text-[#3E3A5D] transition-all duration-500 font-bold"
      >
        Schedule a Consultation →
      </Link>
    </div>
  </div>
</section>
      {/* ANIMATED FOOTER  */}
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
    className="ml-1 underline decoration-gray-400 underline-offset-4 hover:text-black transition-colors font-bold"
  >
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