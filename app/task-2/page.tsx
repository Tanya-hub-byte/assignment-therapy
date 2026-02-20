'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Task2Page() {
  const [isMounted, setIsMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Click animation states
  const [consultClicked, setConsultClicked] = useState(false);
  const [helpClicked, setHelpClicked] = useState(false);

  const bgColorHero = "#F7F2EE";
  const bgColorStress = "#F3EDF2";
  const primaryText = "#3E3A5D";
  const stressText = "#4A445F";

useEffect(() => {
  setIsMounted(true);

  // Explicitly type the variable to avoid the 'implicit any' error
  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    setShowHeader(true);

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setShowHeader(false);
    }, 80); // instant-feel disappearance
  };

  // Ensure you add the event listener
  window.addEventListener('scroll', handleScroll);

  // Clean up to prevent memory leaks
  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(scrollTimeout);
  };
}, []);


  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>

      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: bgColorHero }}
      >
        <nav className="mx-auto flex w-full items-center justify-between px-8 py-10 max-w-7xl">
          <Link href="/" className="text-3xl font-serif font-bold" style={{ color: primaryText }}>
            Lilac Template
          </Link>
          <div className="flex gap-10 text-[12px] uppercase tracking-[0.2em] font-bold" style={{ color: primaryText }}>
            <Link href="/blog" className="hover:opacity-50">Blog</Link>
            <Link href="/contact" className="hover:opacity-50">Contact</Link>
          </div>
        </nav>
      </header>

      <main style={{ backgroundColor: bgColorHero }}>

        {/* HERO */}
        <section className="flex min-h-screen items-center justify-center pt-20">
          <div className="mx-auto flex w-full flex-col sm:flex-row px-8 lg:px-16 max-w-7xl gap-16">

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-full">
                <img src="/lilac-4.webp" alt="Lilac bouquet" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-10" style={{ color: primaryText }}>
                Feel steady in <br />
                <span className="italic font-light">your own mind</span>
              </h1>

              <p className="text-lg mb-12 max-w-sm" style={{ color: `${primaryText}CC` }}>
                Therapy for adults in Santa Monica, California navigating anxiety, trauma, and burnout.
              </p>

              {/* CLICK ANIMATED BUTTON */}
              <Link
                href="/contact"
                onClick={() => setConsultClicked(true)}
                className="relative inline-flex items-center border px-10 py-5 uppercase tracking-[0.3em] text-[11px] font-bold overflow-hidden"
                style={{ borderColor: primaryText, color: consultClicked ? 'white' : primaryText }}
              >
                <span className="relative z-10">
                  Schedule a Consultation →
                </span>

                <div
                  className={`absolute inset-0 transition-transform duration-500 ${
                    consultClicked ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ backgroundColor: primaryText }}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* STRESS SECTION */}
        <section className="flex flex-col md:flex-row h-screen max-h-[700px]">

          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col" style={{ backgroundColor: bgColorStress }}>
            <div className="flex-grow flex flex-col justify-center px-12 lg:px-24">
              <h2 className="text-5xl font-serif mb-8 whitespace-nowrap" style={{ color: stressText }}>
                When stress doesn't switch off.
              </h2>

              <div className="space-y-6 text-lg max-w-lg" style={{ color: `${stressText}E6` }}>
                <p>
                  Anxiety, burnout, or past experiences can show up as constant tension,
                  overthinking, or feeling on edge—even when you’re managing life well on the outside.
                </p>
                <p>
                  I work with adults in Santa Monica seeking more steadiness and clarity,
                  helping them better understand the patterns that keep stress in place.
                </p>
              </div>
            </div>

            {/* CLICK ANIMATED BOTTOM BAR */}
            <Link
              href="/contact"
              onClick={() => setHelpClicked(true)}
              className="relative w-full border-t py-10 text-center overflow-hidden"
              style={{
                borderColor: `${stressText}1A`,
                color: helpClicked ? 'white' : stressText,
              }}
            >
              <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold">
                See how I help →
              </span>

              <div
                className={`absolute inset-0 transition-transform duration-500 ${
                  helpClicked ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ backgroundColor: stressText }}
              />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img src="/man-cat.webp" alt="Man on bench with cat" className="w-full h-full object-cover grayscale" />
          </div>
        </section>
{/* 4. AREAS OF FOCUS SECTION */}
<section className="bg-[#F7F2EE] py-28">

  <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

    {/* Heading */}
    <h2
      className="text-5xl font-serif text-center mb-20"
      style={{ color: "#3E3A5D" }}
    >
      Areas of Focus
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* CARD */}
      <div className="border border-[#3E3A5D]/30 bg-[#F3EDF2] px-10 py-10">
        <h3 className="text-xl font-serif mb-4" style={{ color: "#3E3A5D" }}>
          Anxiety & Panic
        </h3>

        <p className="text-[15px] leading-relaxed mb-10" style={{ color: "#3E3A5DCC" }}>
          Persistent worry, overthinking, or physical tension can make it hard to
          fully relax. I work with adults experiencing anxiety and panic,
          supporting greater steadiness and regulation.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src="/rose.webp" alt="Rose" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="border border-[#3E3A5D]/30 bg-[#F3EDF2] px-10 py-10">
        <h3 className="text-xl font-serif mb-4" style={{ color: "#3E3A5D" }}>
          Trauma & Past Experiences
        </h3>

        <p className="text-[15px] leading-relaxed mb-10" style={{ color: "#3E3A5DCC" }}>
          Single events or long-standing patterns can continue to shape how you
          feel and relate to others. My trauma-informed work focuses on safety,
          pacing, and daily stability.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src="/time.webp" alt="Time" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className="border border-[#3E3A5D]/30 bg-[#F3EDF2] px-10 py-10">
        <h3 className="text-xl font-serif mb-4" style={{ color: "#3E3A5D" }}>
          Burnout & High Internal Pressure
        </h3>

        <p className="text-[15px] leading-relaxed mb-10" style={{ color: "#3E3A5DCC" }}>
          High-achieving adults often carry quiet exhaustion and perfectionism.
          Together, we explore more sustainable ways of living and working.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src="/burnout.webp" alt="Burnout" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* SUPPORT / MESSAGE SECTION */}
<section className="w-full">

  <div className="grid grid-cols-1 md:grid-cols-2">

    {/* LEFT IMAGE */}
    <div className="h-[420px] md:h-[520px]">
      <img
        src="/love.webp"
        alt="Support"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="bg-[#3E3A5D] text-white flex items-center">
      <div className="px-10 md:px-16 py-16">

        <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-6">
          You don’t have to keep <br />
          <span className="italic">carrying this alone.</span>
        </h2>

        <p className="text-sm md:text-base mb-6 opacity-90">
          If any of this feels familiar:
        </p>

        <ul className="space-y-3 text-sm md:text-base mb-8 opacity-95">
          <li>• Constant worry or racing thoughts.</li>
          <li>• Feeling on edge, even when nothing seems “wrong”.</li>
          <li>• Exhaustion from pushing through stress.</li>
          <li>• Lingering effects of past experiences.</li>
          <li>• High internal pressure or perfectionism.</li>
        </ul>

        <p className="text-sm md:text-base opacity-90 leading-relaxed">
          Many adults in Santa Monica appear capable while quietly carrying this
          stress. Support can begin with slowing down and understanding what’s
          beneath the surface.
        </p>

      </div>
    </div>

  </div>

  {/* CTA BAR */}
  <div className="bg-[#3E3A5D] border-t border-white/20 text-center py-5">
    <button className="text-xs tracking-widest uppercase text-white hover:opacity-80 transition">
      Take the First Step →
    </button>
  </div>

</section>

<section className="bg-bg-lavender-01 w-full">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-24">
    
    {/* LEFT CONTENT */}
    <div className="lg:w-1/2 w-full">
      <h2 className="text-4xl lg:text-5xl font-serif text-font-plum-01 mb-6">
        Hi, I’m Dr. Maya.
      </h2>

      <p className="text-font-plum-01/90 text-lg leading-relaxed mb-4">
        I’m a licensed clinical psychologist in Santa Monica working with adults
        navigating anxiety, trauma, and burnout. Many of my clients appear
        capable on the outside while quietly feeling overwhelmed.
      </p>

      <p className="text-font-plum-01/90 text-lg leading-relaxed mb-8">
        My work is collaborative, structured, and grounded in evidence-based
        approaches that support both emotional insight and nervous system
        regulation.
      </p>

      <button className="border border-font-plum-01 text-font-plum-01 px-6 py-3 text-sm tracking-wide hover:bg-font-plum-01 hover:text-white transition">
        LET'S CONNECT →
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0">
      <div className="relative">
        
        {/* Main portrait */}
        <div className="w-[320px] h-[380px] lg:w-[380px] lg:h-[440px] rounded-[180px] overflow-hidden">
          <img
            src="/maya-potrait.png"
            alt="Dr. Maya portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlapping flower */}
        <div className="absolute -bottom-6 -right-6 w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-bg-lavender-01 shadow-md">
          <img
            src="/flower2.webp"
            alt="Flower"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>

  </div>
</section>
{/* OFFICE SECTION */}
<section 
  className="pt-28 pb-32"
  style={{ backgroundColor: '#faf7fc', color: '#4a3f5f' }}
>
  <div className="max-w-7xl mx-auto px-8">

    {/* ===== TOP GRID ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

      {/* LEFT TEXT CONTENT */}
      <div className="pr-12 flex flex-col justify-center py-16">
        <p className="uppercase tracking-[0.35em] text-[11px] mb-6 opacity-70">
          Office
        </p>

        <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] mb-8">
          A calm, private space in Santa Monica.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed max-w-xl opacity-90">
          <p>
            The office is designed to feel quiet and grounding, with natural light 
            and comfortable seating that helps you <span className="italic">slow down</span> as soon as you arrive.
          </p>

          <p>
            In-person sessions are available in Santa Monica, with secure telehealth 
            options across California.
          </p>
        </div>

        {/* BUTTON */}
        <Link
          href="/contact"
          className="inline-block mt-12 border border-[#4a3f5f] px-10 py-4 uppercase tracking-[0.3em] text-[11px] font-bold
                     transition-all duration-500
                     hover:bg-[#4a3f5f] hover:text-white"
        >
          Schedule a Visit →
        </Link>
      </div>

      {/* RIGHT IMAGE (office-vibe) */}
      <div className="relative">
        <img
          src="/office-vibe.jpeg"
          alt="Office interior"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* ===== BOTTOM GRID ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

      {/* LEFT IMAGE (specialty-1) */}
      <div className="relative">
        <img
          src="/specialty-1.jpeg"
          alt="Therapy office seating"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* RIGHT ACCORDION */}
      <div className="pl-16 pt-20">

        <div className="border-t border-[#4a3f5f]/30">

          {/* ADDRESS */}
          <details className="group border-b border-[#4a3f5f]/30">
            <summary className="flex justify-between items-center cursor-pointer list-none py-8 text-3xl font-serif">
              <span>Address</span>
              <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-8 text-lg opacity-80 leading-relaxed">
              123th Street 45 W, Santa Monica, CA 90401
            </div>
          </details>

          {/* AVAILABILITY */}
          <details className="group border-b border-[#4a3f5f]/30" open>
            <summary className="flex justify-between items-center cursor-pointer list-none py-8 text-3xl font-serif">
              <span>Availability</span>
              <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-10 text-lg opacity-80 leading-relaxed max-w-md">
              In-person sessions in Santa Monica with secure hybrid options across California.
            </div>
          </details>

        </div>

      </div>

    </div>

  </div>
</section>
{/* FAQs SECTION */}
<section
  className="py-20"
  style={{ backgroundColor: '#faf7fc', color: '#4a3f5f' }}
>
  <div className="max-w-7xl mx-auto px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      
      {/* LEFT ARCH IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-t-[220px]">
          <img
            src="/directions.webp"
            alt="Directions sign"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT FAQ CONTENT */}
      <div>

        <h2 className="text-5xl font-serif mb-12">
          FAQs
        </h2>

        <div className="border-t border-[#4a3f5f]/30">

          {/* QUESTION 1 */}
          <details className="group border-b border-[#4a3f5f]/30">
            <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
              <span className="flex items-start gap-6">
                <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
                <span>In-Person Therapy in Santa Monica?</span>
              </span>
            </summary>
            <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-xl">
              Yes. I offer in-person therapy from my private office in Santa Monica, California. The space is designed to feel calm and grounding.
            </div>
          </details>

          {/* QUESTION 2 */}
          <details className="group border-b border-[#4a3f5f]/30">
            <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
              <span className="flex items-start gap-6">
                <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
                <span>Online Therapy in California?</span>
              </span>
            </summary>
            <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-xl">
              Yes. I provide secure telehealth sessions for adults located throughout California.
            </div>
          </details>

          {/* QUESTION 3 */}
          <details className="group border-b border-[#4a3f5f]/30">
            <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
              <span className="flex items-start gap-6">
                <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
                <span>What issues do you specialize in?</span>
              </span>
            </summary>
            <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-xl">
              I work with adults navigating anxiety, trauma, burnout, and high internal pressure, including high-achieving professionals.
            </div>
          </details>

        </div>

      </div>

    </div>
  </div>
</section>
{/* PROFESSIONAL BACKGROUND SECTION */}
<section
  className="py-20 flex items-center"
  style={{ backgroundColor: '#ede6f2', color: '#4a3f5f', minHeight: '66vh' }}
>
  <div className="max-w-5xl mx-auto px-8 w-full">

    <h2 className="text-5xl font-serif mb-16 text-center">
      My Professional Background
    </h2>

    <div className="border-t border-[#4a3f5f]/30">

      {/* EDUCATION */}
      <details className="group border-b border-[#4a3f5f]/30">
        <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
          <span className="flex items-start gap-6">
            <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
            <span>Education</span>
          </span>
        </summary>
        <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-2xl">
          Doctor of Psychology (PsyD) in Clinical Psychology.
        </div>
      </details>

      {/* LICENSURE */}
      <details className="group border-b border-[#4a3f5f]/30">
        <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
          <span className="flex items-start gap-6">
            <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
            <span>Licensure</span>
          </span>
        </summary>
        <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-2xl">
          Licensed Clinical Psychologist in California.
        </div>
      </details>

      {/* CERTIFICATIONS */}
      <details className="group border-b border-[#4a3f5f]/30">
        <summary className="flex items-center justify-between cursor-pointer list-none py-8 text-3xl font-serif">
          <span className="flex items-start gap-6">
            <span className="text-2xl mt-1 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
            <span>Certifications</span>
          </span>
        </summary>
        <div className="pb-8 pl-12 text-lg leading-relaxed opacity-90 max-w-2xl">
          Trained in Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based approaches, and body-oriented techniques.
        </div>
      </details>

    </div>

  </div>
</section>
{/* CTA SECTION */}
<section
  className="flex items-center justify-center text-center px-8"
  style={{
    backgroundColor: '#bfaedb',
    color: '#4a3f5f',
    minHeight: '65vh'
  }}
>
  <div className="max-w-3xl">

    <h2 className="text-5xl md:text-6xl font-serif mb-8">
      Begin when you’re ready.
    </h2>

    <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-4">
      Support for anxiety, stress, and high internal pressure in Santa Monica.
    </p>

    <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-12">
      A calm place to understand what’s beneath the surface. Available in-person and online throughout California.
    </p>

    <a
      href="#contact"
      className="inline-block border border-[#4a3f5f] px-10 py-4 tracking-wide transition-all duration-300 hover:bg-[#4a3f5f] hover:text-[#bfaedb]"
    >
      START THE CONVERSATION →
    </a>

  </div>
</section>
import Link from "next/link";

{/* MAIN FOOTER */}
<section
  style={{ backgroundColor: '#faf7fc', color: '#4a3f5f' }}
  className="px-12 py-24"
>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">

    {/* LEFT SIDE */}
    <div className="max-w-md">
      <h3 className="text-5xl font-serif mb-10">
        Dr. Maya Reynolds
      </h3>

      <p className="text-lg leading-relaxed mb-8">
        123th Street 45 W <br />
        Santa Monica, CA 90401
      </p>

      <p className="text-lg leading-relaxed underline">
        hello@drmayareynolds.com <br />
        (555) 555–5555
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex gap-28">

      {/* HOURS */}
      <div>
        <h4 className="text-4xl font-serif mb-8">Hours</h4>
        <p className="text-lg leading-relaxed">
          Monday – Friday <br />
          10am – 6pm
        </p>
      </div>

      {/* FIND */}
      <div>
        <h4 className="text-4xl font-serif mb-8">Find</h4>

        <div className="flex flex-col gap-4 text-lg underline">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>

          {/* Task-1 now loads Home */}
          <Link href="/">Task 1</Link>
        </div>
      </div>

    </div>

  </div>
</section>
{/* BOTTOM LEGAL */}
<section
  style={{ backgroundColor: '#ede6f2' }}
  className="py-10 text-center"
>
  <div className="max-w-5xl mx-auto">

    {/* POLICY LINKS */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-black underline text-sm">

      <a
        href="/task-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Privacy & Cookies Policy
      </a>

      <a
        href="/task-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Website Terms & Conditions
      </a>

      <a
        href="/task-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Disclaimer
      </a>

    </div>

    {/* IMAGINED BY */}
    <div className="mb-3" style={{ color: '#4a3f5f' }}>
      Imagined By:{' '}
      <a
        href="https://github.com/vedrathavi"
        className="text-black underline"
      >
        Ved Rathavi
      </a>
    </div>

    {/* COPYRIGHT */}
    <div style={{ color: '#4a3f5f' }} className="text-sm">
      © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
    </div>

  </div>
</section>
      </main>
    </div>
  );
}
