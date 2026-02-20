'use client'; 
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Intersection Observer for Footer Reveal
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
      style={{ backgroundColor: 'hsla(30, 55.56%, 96.47%, 1)' }}
      className={`transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} min-h-screen text-[#2D3436] selection:bg-maya-primary selection:text-white`}
    >
      
      {/* NAVIGATION - Now scrolls with the page */}
<nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent">
  <div onClick={() => window.location.reload()} className="flex items-center gap-3 cursor-pointer group">
    <div className="flex flex-col">
      <span className="font-serif text-2xl leading-none tracking-tight text-[#2D3436]">Dr. Maya Reynolds</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#2D3436]/60 mt-1">Therapy & Wellness</span>
    </div>
  </div>
  
  <div className="flex gap-10 items-center text-[11px] uppercase tracking-[0.2em] font-bold text-[#2D3436]">
    <Link href="/blog" className="hover:opacity-40 transition-opacity duration-300">Blog</Link>
    <Link href="/contact" className="hover:opacity-40 transition-opacity duration-300">Contact</Link>
  </div>
</nav>

      {/* HERO SECTION - Restore Dr. Maya Portrait */}
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
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-[#2D3436]">
            Live your life <br /> <span className="italic font-light">in full bloom</span>
          </h1>
          <p className="text-xl text-[#2D3436]/80 mb-10 max-w-md tracking-wide">
            Therapy for Adults in Minneapolis, MN.
          </p>
          
          <button 
            onClick={handleConnect}
            className="border border-[#2D3436] px-12 py-4 uppercase tracking-[0.3em] text-[11px]
                       text-[#2D3436] bg-transparent
                       hover:bg-[#2D3436] hover:text-white
                       transition-all duration-500 font-bold"
          >
            Connect With Me →
          </button>
        </div>
      </section>

      {/* INTRO SECTION - Proportional single-view layout */}
<section className="bg-[#E5E0DA] flex flex-col md:flex-row h-screen max-h-[650px]">
  {/* Left Content Side */}
  <div className="w-full md:w-1/2 flex flex-col border-r border-[#2D3436]/5">
    {/* Text content centered */}
    <div className="flex-grow flex flex-col justify-center items-start text-left px-16 md:px-24">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2D3436] leading-tight">
        Live a fulfilling life.
      </h2>
      <div className="max-w-md space-y-6">
        <p className="text-base md:text-lg leading-relaxed text-[#2D3436]/80">
          Life can be challenging—especially when you're trying to balance your personal and professional life.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#2D3436]/80">
          It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
        </p>
      </div>
    </div>

    {/* Bottom Link Section with Full Rectangle Hover */}
    <Link 
      href="/contact" 
      className="w-full border-t border-[#2D3436]/10 py-8 text-center group transition-colors duration-500 hover:bg-[#2D3436]"
    >
      <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2D3436] group-hover:text-[#E5E0DA] transition-colors duration-500">
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

  

      {/* MY SPECIALTIES SECTION - Matches image_d797d8.jpg */}
<section className="py-24 px-8 text-center" style={{ backgroundColor: 'hsla(30, 55.56%, 96.47%, 1)' }}>
  <h2 className="text-5xl font-serif mb-20 text-[#2B391D]">My Specialties</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      { 
        title: 'Self-Esteem', 
        img: '/special-1.webp', 
        desc: 'Building a strong sense of self-worth is key to living a fulfilled life. Let’s work together to bolster your self-esteem.' 
      },
      { 
        title: 'Relationships', 
        img: '/special-2.webp', 
        desc: 'Navigating relationships can be complex. I’m here to guide you through these complexities to help you form healthier connections.' 
      },
      { 
        title: 'Burnout', 
        img: '/special-3.webp', 
        desc: 'Feeling overwhelmed by your career is more common than you think. Together, we’ll identify strategies to manage and prevent burnout.' 
      }
    ].map((specialty, i) => (
      <div 
        key={i} 
        className="p-10 flex flex-col items-start text-left border border-[#2B391D]/10 shadow-sm"
        style={{ backgroundColor: '#E5E0DA' }}
      >
        {/* Title and Description at the top */}
        <h3 className="text-2xl font-serif mb-6 text-[#2B391D]">{specialty.title}</h3>
        <p className="text-base leading-relaxed text-[#2B391D]/90 mb-12 h-24">
          {specialty.desc}
        </p>
        
        {/* Perfect Circle Image at the bottom */}
        <div className="w-full flex justify-center mt-auto">
          <div className="w-64 h-64 rounded-full overflow-hidden border-[1px] border-[#2B391D]/20 shadow-md">
            <img 
              src={specialty.img} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              alt={specialty.title} 
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
{/* ALONE SECTION - Proportional single-view layout */}
<section className="bg-white flex flex-col md:flex-row h-screen max-h-[650px] overflow-hidden">
  
  {/* Left Image Side */}
  <div className="w-full md:w-1/2 relative h-full">
    <img 
      src="/alone.webp" 
      alt="Woman looking upward peacefully" 
      className="w-full h-full object-cover" 
    />
  </div>

  {/* Right Content Side */}
  <div className="w-full md:w-1/2 flex flex-col bg-[#B6B6C1]">
    {/* Text content area */}
    <div className="flex-grow flex flex-col justify-center px-16 md:px-20 text-left">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2B391D] leading-tight">
        You don’t have to do this <br />
        <span className="italic font-light">all alone.</span>
      </h2>
      
      <p className="text-lg text-[#2B391D] mb-6 font-medium">
        If you are facing any of these, there’s hope:
      </p>

      {/* Specialty Bullet Points */}
      <ul className="space-y-3 mb-8">
        {[
          'Persistent feelings of sadness or hopelessness',
          'Trouble focusing or making decisions',
          'Difficulty maintaining relationships',
          'Feeling constantly exhausted or unmotivated',
          'A pervasive sense of being overwhelmed'
        ].map((item, index) => (
          <li key={index} className="flex items-start text-[#2B391D]/90 text-base">
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2B391D]"></span>
            {item}
          </li>
        ))}
      </ul>

      <p className="text-base leading-relaxed text-[#2B391D]/90 italic">
        With empathy and guidance, we'll work together to navigate the challenges life throws your way.
      </p>
    </div>

    {/* Bottom Centered Link Section */}
    <Link 
      href="/contact" 
      className="w-full border-t border-[#2B391D]/10 py-10 text-center group transition-colors duration-500 hover:bg-[#2B391D]"
    >
      <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2B391D] group-hover:text-[#B6B6C1] transition-colors duration-500">
        Work With Me →
      </span>
    </Link>
  </div>
</section>
{/* DR. MAYA BIO SECTION - Proportional layout */}
<section className="bg-[#F5F1EB] flex flex-col md:flex-row h-screen max-h-[650px] overflow-hidden font-gopher">

  {/* Left Content Side: Vertically Centered */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-16 md:px-24">
    <div className="max-w-md">
      {/* Heading - Gopher font applied via parent */}
      <h2 className="text-5xl md:text-6xl font-serif mb-8 text-[#223614] whitespace-nowrap">
        Hi, I'm Dr. Maya.
      </h2>
      
      {/* Paragraphs - Updated text color */}
      <div className="space-y-6 text-lg text-[#223614]/90 leading-relaxed">
        <p>
          I'm committed to providing a safe and supportive 
          environment where we can explore your thoughts, 
          feelings, and behaviors.
        </p>
        <p>
          With empathy and guidance, we'll work together 
          to navigate the challenges life throws your way.
        </p>
      </div>

      {/* Button - Centered below text block */}
      <div className="mt-12">
        <Link 
          href="/contact" 
          className="inline-block border border-[#223614] px-10 py-4 uppercase tracking-[0.3em] text-[11px] 
                     text-[#223614] hover:bg-[#223614] hover:text-white transition-all duration-500 font-bold"
        >
          Let’s Chat →
        </Link>
      </div>
    </div>
  </div>

  {/* Right Image Side: Flush Overlapping Elements */}
  <div className="w-full md:w-1/2 relative flex items-center justify-center bg-[#F5F1EB]">
    <div className="relative w-full max-w-[380px] aspect-[4/5]">
      
      {/* Main Arch Image: lilac-flower.webp */}
      <div className="absolute inset-0 overflow-hidden rounded-t-[200px]">
        <img 
          src="/lilac-flower.webp" 
          alt="Dr. Maya portrait" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Overlapping Circle - Flush with the bottom and right edges */}
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[10px] border-[#F5F1EB] shadow-sm z-10 translate-x-1/4 translate-y-1/4">
        <img 
          src="/lilac-flower2.webp" 
          alt="Lilac details" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  </div>

</section>

{/* FAQ SECTION - Matches image_2ada8a.jpg */}
<section className="py-24 px-8" style={{ backgroundColor: 'hsla(30, 55.56%, 96.47%, 1)' }}>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
    
    {/* Left Side: Arched Image (lilac-flower3.webp) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-t-[200px]">
        <img 
          src="/lilac-flower3.webp" 
          alt="Decorative therapeutic floral" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>

    {/* Right Side: Interactive FAQ Accordion */}
    <div className="w-full md:w-1/2 font-gopher">
      <h2 className="text-4xl font-serif mb-12 text-[#223614]">FAQs</h2>
      
      <div className="space-y-0 border-t border-[#223614]/20">
        {[
          { 
            q: "Do you take insurance?", 
            a: "Dr. Maya is an out-of-network provider. We provide superbills for you to submit to your insurance for potential reimbursement." 
          },
          { 
            q: "What are your rates?", 
            a: "Standard 50-minute individual sessions are $175. Initial intake consultations are $200." 
          },
          { 
            q: "Do you have any openings?", 
            a: "We currently have limited availability for new clients on Tuesday and Thursday afternoons. Please reach out to join our waitlist." 
          }
        ].map((item, index) => (
          <details key={index} className="group border-b border-[#223614]/20">
            <summary className="flex justify-between items-center cursor-pointer list-none py-6 text-xl md:text-2xl text-[#223614] hover:opacity-70 transition-opacity">
              <div className="flex items-center gap-4">
                <span className="text-[#223614] group-open:rotate-45 transition-transform duration-300">+</span>
                <span>{item.q}</span>
              </div>
            </summary>
            <div className="pb-8 pr-4 text-lg text-[#223614]/80 leading-relaxed animate-fadeIn">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>
{/* PROFESSIONAL BACKGROUND SECTION - Matches image_2b3f2e.png */}
<section className="py-24 px-8 bg-[#E5E0DA] font-gopher">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-serif mb-16 text-[#223614]">
      My Professional Background
    </h2>

    <div className="text-left border-t border-[#223614]/20">
      {[
        { 
          title: "Education", 
          content: "Ph.D. in Clinical Psychology from the University of Minnesota; M.A. in Counseling Psychology." 
        },
        { 
          title: "Licensure", 
          content: "Licensed Psychologist in the State of Minnesota (LP #12345)." 
        },
        { 
          title: "Certifications", 
          content: "Certified Clinical Trauma Professional (CCTP); Board Certified Telehealth Provider." 
        }
      ].map((item, index) => (
        <details key={index} className="group border-b border-[#223614]/20">
          <summary className="flex justify-between items-center cursor-pointer list-none py-8 text-2xl text-[#223614] hover:opacity-70 transition-opacity">
            <span>{item.title}</span>
            <span className="text-3xl font-light group-open:rotate-45 transition-transform duration-300">+</span>
          </summary>
          <div className="pb-10 text-lg text-[#223614]/80 leading-relaxed animate-fadeIn">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>
{/* GET STARTED SECTION - Matches image_2b436d.png and image_2b43a8.png */}
<section className="py-24 px-8 bg-[#82844B] font-gopher">
  <div className="max-w-4xl mx-auto text-center text-[#ffffff]">
    <h2 className="text-5xl md:text-6xl font-serif mb-8">
      Get started today.
    </h2>
    
    <div className="max-w-2xl mx-auto space-y-2 text-xl md:text-2xl leading-relaxed mb-12">
      <p>Ready to take the first step towards a happier, healthier you?</p>
      <p>
        Contact me to book your first session. I look forward to starting this 
        therapeutic journey with you.
      </p>
    </div>

    {/* Centered Button */}
    <div className="flex justify-center">
      <Link 
        href="/contact" 
        className="inline-block border border-[#ffffff] px-12 py-4 uppercase tracking-[0.3em] text-[11px] 
                   text-[#ffffff] hover:bg-[#ffffff] hover:text-[#82844B] transition-all duration-500 font-bold"
      >
        Get in touch →
      </Link>
    </div>
  </div>
</section>

      {/* ANIMATED FOOTER - Proportional Layout per image_af9aba.png */}
<footer 
  ref={footerRef}
  className={`pt-20 transition-all duration-1000 transform ${
    showFooter ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}
  style={{ backgroundColor: 'hsla(30, 55.56%, 96.47%, 1)' }}
>
  {/* Upper Footer: 3-Column Grid */}
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20 font-gopher">
    
    {/* Left Column: Branding & Contact */}
    <div className="space-y-6">
      <h3 className="text-4xl font-serif text-[#223614]">Dr. Maya Reynolds</h3>
      <div className="text-lg text-[#223614]/80 leading-relaxed">
        <p>123 Example Road</p>
        <p>Minneapolis, MN</p>
      </div>
      <div className="flex flex-col gap-2 text-lg font-medium text-[#223614]">
        <a href="mailto:hello@drmaya.com" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
          hello@drmaya.com
        </a>
        <a href="tel:5555555555" className="hover:opacity-60 transition-opacity">
          (555) 555-5555
        </a>
      </div>
    </div>

    {/* Middle Column: Hours */}
    <div>
      <h4 className="text-3xl font-serif mb-8 text-[#223614]">Hours</h4>
      <div className="text-lg text-[#223614]/80 space-y-2">
        <p>Monday – Friday</p>
        <p>10am – 6pm</p>
      </div>
    </div>

    {/* Right Column: Find */}
    <div className="md:text-left lg:text-right">
      <h4 className="text-3xl font-serif mb-8 text-[#223614]">Find</h4>
      <nav className="flex flex-col gap-4 text-lg font-medium text-[#223614]">
        <Link href="/" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Home</Link>
        <Link href="/contact" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Contact</Link>
        <Link href="/blog" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Blog</Link>
        {/* Task 2 Dummy Link */}
        <Link href="/task-2" className="underline underline-offset-8 hover:opacity-60 transition-opacity">Task 2</Link>
      </nav>
    </div>
  </div>

  {/* BOTTOM LEGAL BAR - Grey-Taupe Background */}
  <div className="bg-[#EAE7E1] py-16 px-8 border-t border-gray-200 font-gopher">
    <div className="max-w-7xl mx-auto text-center">
      
      {/* Legal Links */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8 text-[12px] uppercase tracking-widest font-bold text-black">
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Privacy & Cookies Policy</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Good Faith Estimate</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Website Terms & Conditions</Link>
        <Link href="/legal" className="underline decoration-gray-400 underline-offset-4 hover:opacity-60">Disclaimer</Link>
      </div>

      {/* Credits */}
      <p className="text-[12px] text-gray-600 mb-10">
        Website Template Credits: 
        <a href="https://www.gobloomcreative.com/" target="_blank" className="ml-1 underline decoration-gray-400 underline-offset-4 hover:text-black transition-colors font-bold">
          Go Bloom Creative
        </a>
      </p>

      {/* Copyright Line in Gopher Font */}
      <div className="pt-10 border-t border-black/5">
        <p 
          className="text-[11px] uppercase tracking-[0.4em] font-bold"
          style={{ color: 'hsla(95.29, 45.95%, 14.51%, 1)' }}
        >
          All Rights Reserved © 2026 Dr. Maya Reynolds, LLC.
        </p>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}