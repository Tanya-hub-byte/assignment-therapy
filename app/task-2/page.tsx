'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Task2Page() {
  const [isMounted, setIsMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // Click animation states
  const [consultClicked, setConsultClicked] = useState(false);
  const [helpClicked, setHelpClicked] = useState(false);

  // UPDATED THEME COLORS
  const bgColorHero = "#F7F2EE";    // Soft Ivory
  const bgColorStress = "#F3EDF2";  // Lavender Off-White
  const primaryText = "#3E3A5D";    // Deep Indigo
  const stressText = "#4A445F";     // Dusty Purple

  useEffect(() => {
    setIsMounted(true);

    let hideTimeout: NodeJS.Timeout;
    let reappearTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // 1. Show header immediately on scroll
      setShowHeader(true);

      // 2. Clear existing timeouts to reset the logic
      clearTimeout(hideTimeout);
      clearTimeout(reappearTimeout);

      // 3. Set header to disappear 80ms after scrolling stops
      hideTimeout = setTimeout(() => {
        setShowHeader(false);

        // 4. Set header to reappear after 1 second (your requested effect)
        reappearTimeout = setTimeout(() => {
          setShowHeader(true);
        }, 1000); 

      }, 80); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimeout);
      clearTimeout(reappearTimeout);
    };
  }, []);

  return (
    <div 
      className={`min-h-screen transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} font-gopher`}
      style={{ backgroundColor: bgColorHero }}
    >

      {/* HEADER - With Dynamic Scroll Effect */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundColor: bgColorHero }}
      >
        <nav className="mx-auto flex w-full items-center justify-between px-8 py-10 max-w-7xl">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight" style={{ color: primaryText }}>
            Dr. Maya Reynolds
          </Link>
          <div className="flex gap-10 text-[12px] uppercase tracking-[0.3em] font-bold" style={{ color: primaryText }}>
            <Link href="/blog" className="hover:opacity-50 transition-opacity">Blog</Link>
            <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
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

              {/* CLICK ANIMATED BUTTON - Instant Theme Highlight */}
{/* CLICK ANIMATED BUTTON - Fixed Visibility on Hover */}
<Link
  href="/contact"
  onClick={() => setConsultClicked(true)}
  className={`
    relative inline-flex items-center border px-10 py-5 
    uppercase tracking-[0.3em] text-[11px] font-bold 
    transition-colors duration-300 
    hover:bg-[#3E3A5D] hover:text-white
    ${consultClicked ? 'bg-[#3E3A5D] text-white' : 'text-[#3E3A5D]'}
  `}
  style={{ 
    borderColor: "#3E3A5D",
    // We remove the inline color style to let the Tailwind hover classes work correctly
  }}
>
  <span className="relative z-10 transition-colors duration-300">
    Schedule a Consultation →
  </span>
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

            {/* CLICK ANIMATED BOTTOM BAR - Fixed Visibility and Theme Alignment */}
<Link
  href="/contact"
  onClick={() => setHelpClicked(true)}
  className={`
    relative w-full border-t py-10 text-center overflow-hidden 
    transition-colors duration-300 
    hover:text-white
  `}
  style={{
    borderColor: `${stressText}33`, // Increased opacity for better grid definition
    backgroundColor: helpClicked ? stressText : 'transparent',
    color: helpClicked ? 'white' : stressText,
  }}
  // Using onMouseEnter/Leave to handle the "all at once" hover effect for dynamic colors
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = stressText;
    e.currentTarget.style.color = 'white';
  }}
  onMouseLeave={(e) => {
    if (!helpClicked) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = stressText;
    }
  }}
>
  <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold">
    See how I help →
  </span>
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
{/* SUPPORT / MESSAGE SECTION - Realigned for CTA under right content */}
<section className="w-full font-gopher">
  <div className="grid grid-cols-1 md:grid-cols-2">

    {/* LEFT IMAGE - Height remains consistent with right content */}
    <div className="h-[500px] md:h-auto">
      <img
        src="/love.webp"
        alt="Support and grounding"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT COLUMN: Contains Content + CTA Bar */}
    <div className="flex flex-col">
      {/* Top Part: Text Content */}
      <div className="bg-[#3E3A5D] text-white flex-grow flex items-center">
        <div className="px-10 md:px-16 py-16">
          <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-6">
            You don’t have to keep <br />
            <span className="italic font-light">carrying this alone.</span>
          </h2>

          <p className="text-sm md:text-base mb-6 opacity-80 uppercase tracking-widest">
            If any of this feels familiar:
          </p>

          <ul className="space-y-3 text-sm md:text-base mb-8 opacity-90">
            <li>• Constant worry or racing thoughts.</li>
            <li>• Feeling on edge, even when nothing seems “wrong”.</li>
            <li>• Exhaustion from pushing through stress.</li>
            <li>• Lingering effects of past experiences.</li>
            <li>• High internal pressure or perfectionism.</li>
          </ul>

          <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-md">
            Many adults in Santa Monica appear capable while quietly carrying this
            stress. Support can begin with slowing down.
          </p>
        </div>
      </div>

      {/* BOTTOM CTA BAR: Now aligned specifically under the right side */}
      <Link 
        href="/contact"
        className="block bg-[#3E3A5D] border-t border-white/20 text-center py-8 transition-colors duration-300 hover:bg-white group"
      >
        <button className="text-[11px] tracking-[0.4em] uppercase text-white transition-colors duration-300 group-hover:text-[#4A3F5F] font-bold">
          Take the First Step →
        </button>
      </Link>
    </div>

  </div>
</section>

{/*================================================================================================ */}
{/* 1. MAIN LAVENDER SECTION BOX - Targeted 1094px x 704px */}
<section className="bg-[#EAE1F1] w-full flex items-center justify-center py-20 font-gopher">
  
  {/* 2. ENCAPSULATING BOX - This controls the total footprint of your content */}
  <div 
    className="flex flex-col lg:flex-row items-center justify-between bg-transparent"
    style={{ width: '1094px', height: '704px' }} // Manual dimensions for the lavender content box
  >
    
    {/* 3. LEFT TEXT COMPONENT BOX */}
    <div 
      className="flex flex-col justify-center pr-10" 
      style={{ width: '419px', height: '417px' }} // Adjust width to control text flow
    >
      {/* Title Size Control */}
      <h2 className="font-serif text-[#3E3A5D] leading-tight mb-8" style={{ fontSize: '3.75rem' }}>
        Hi, I’m Dr. Maya.
      </h2>

      {/* Body Text Box Control */}
      <div className="space-y-6 text-[#3E3A5D] opacity-90" style={{ fontSize: '1.35rem', lineHeight: '1.6' }}>
        <p>
          I’m a licensed clinical psychologist in Santa Monica working with adults
          navigating anxiety, trauma, and burnout.
        </p>
        <p>
          My work is collaborative, structured, and grounded in evidence-based
          approaches.
        </p>
      </div>

      <button 
  className="mt-10 border border-[#3E3A5D] text-[#3E3A5D] font-medium tracking-[0.15em] uppercase hover:bg-[#3E3A5D] hover:text-white transition-all duration-300 flex items-center justify-center bg-transparent group"
  style={{ 
    width: '180px',      // Increased width to match visual spread in the image
    height: '48px',      // Increased height for editorial breathing room
    fontSize: '11px',    // Larger font for readability as seen in reference
    borderWidth: '0.5px' // Fine, thin border as seen in image_e33b61
  }}
>
  <span className="flex items-center gap-3">
    LET'S CONNECT 
    <span className="text-[14px] leading-none mb-0.5 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>
</button>
    </div>

    {/* 4. RIGHT IMAGE COMPONENT BOX */}
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: '494px', height: '100%' }} // Remaining width from 1094px total
    >
      <div className="relative">
        
        {/* 5. DR. MAYA PORTRAIT (Arch Size) */}
        <div 
          className="rounded-t-full overflow-hidden flex items-end shadow-sm"
          style={{ width: '320px', height: '428px' }} // Edit these px to change the Arch
        >
          <img
            src="/maya-potrait.png"
            alt="Dr. Maya portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 6. OVERLAPPING FLOWER (Circular Accent Size) */}
        <div 
          className="absolute rounded-full overflow-hidden"
          style={{ 
            width: '144px', 
            height: '144px', 
            bottom: '-40px', 
            right: '-20px' 
          }} // Edit width/height for size, bottom/right for placement
        >
          <img
            src="/flower2.webp"
            alt="Flower accent"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>

  </div>
</section>

{/*================================================================================================ */}


{/* QUAD-GRID OFFICE SECTION - Half-Height Edge-to-Edge */}
<section className="w-full bg-white font-gopher overflow-hidden border-t border-[#3E3A5D1A]">
  {/* Defining fixed heights for rows to cut vertical space in half */}
  <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] w-full items-stretch">
    
    {/* ROW 1, COL 1: Text & CTA */}
    <div className="flex flex-col justify-center p-12 lg:px-24 border-b border-r border-[#3E3A5D1A]" style={{ height: '400px' }}>
      <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-4" style={{ color: '#3E3A5D' }}>Office</span>
      <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight" style={{ color: '#3E3A5D' }}>
        A calm, private space in Santa Monica.
      </h2>
      <Link href="/contact" className="inline-flex items-center justify-center border border-[#3E3A5D] px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#3E3A5D] hover:text-white transition-all w-fit">
        Schedule a Visit →
      </Link>
    </div>

    {/* ROW 1, COL 2: Office Image 1 */}
    <div className="relative border-b border-[#3E3A5D1A]" style={{ height: '400px' }}>
      <img 
        src="/office-vibe.jpeg" 
        alt="Santa Monica Therapy Office" 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* ROW 2, COL 1: Office Image 2 */}
    <div className="relative border-r border-[#3E3A5D1A]" style={{ height: '400px' }}>
      <img 
        src="/specialty-1.jpeg" 
        alt="Comfortable seating area" 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* ROW 2, COL 2: Info Accordion */}
    <div className="flex flex-col justify-center p-12 lg:px-24" style={{ height: '400px' }}>
      <div className="space-y-0 border-t border-[#3E3A5D1A]">
        <details className="group border-b border-[#3E3A5D1A]">
          <summary className="flex justify-between items-center cursor-pointer py-6 text-xl font-serif" style={{ color: '#3E3A5D' }}>
            Address <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div className="pb-6 opacity-70">Santa Monica, California</div>
        </details>
        <details className="group border-b border-[#3E3A5D1A]">
          <summary className="flex justify-between items-center cursor-pointer py-6 text-xl font-serif" style={{ color: '#3E3A5D' }}>
            Availability <span className="text-2xl font-light group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div className="pb-6 opacity-70">By Appointment Only</div>
        </details>
      </div>
    </div>
  </div>
</section>

{/*================================================================================================ */}

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

{/*================================================================================================ */}


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

{/*================================================================================================ */}
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

{/*================================================================================================ */}


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

{/*================================================================================================ */}


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
