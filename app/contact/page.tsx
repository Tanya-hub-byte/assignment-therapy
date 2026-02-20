'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LegalPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className={`transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} bg-maya-bg min-h-screen text-maya-text`}>
      
      {/* NAVIGATION (Same as Home) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-maya-bg/90 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-maya-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
            </svg>
          </div>
          <span className="font-serif text-xl">Lilac Template</span>
        </Link>
        <div className="flex gap-8 items-center text-[11px] uppercase tracking-widest font-semibold">
          <Link href="/blog" className="hover:text-maya-primary transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-maya-primary transition-colors">Contact</Link>
        </div>
      </nav>

      {/* MAIN CONTENT (Mimicking the Error/Legal Info State) */}
      <section className="pt-40 pb-20 px-8 max-w-4xl mx-auto">
        <div className="border-b border-gray-200 pb-12 mb-12">
          <h1 className="text-3xl font-serif mb-8 text-maya-text">We couldn't find the page you were looking for. This is either because:</h1>
          <ul className="list-disc ml-6 space-y-4 text-gray-700 leading-relaxed">
            <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>
          <p className="mt-8 text-gray-700">
            You can return to our homepage by <Link href="/" className="underline hover:text-maya-primary transition-colors">clicking here</Link>, or you can try searching for the content you are seeking by clicking here.
          </p>
        </div>

        {/* IMAGE DISPLAY: 2nd and 3rd Specialty Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img src="/lilac-flower.webp" alt="Relationship Therapy" className="w-full aspect-square object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img src="/lilac-flower2.webp" alt="Burnout Recovery" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* FOOTER (Same as Home) */}
      <footer className="bg-maya-bg pt-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif uppercase tracking-widest text-maya-primary">Lilac Template</h3>
            <p className="text-gray-600">123 Example Road<br />Minneapolis, MN</p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="mailto:email@example.com" className="underline hover:text-maya-primary">email@example.com</a>
              <a href="tel:5555555555" className="hover:text-maya-primary">(555) 555-5555</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-gray-400">Hours</h4>
            <p className="text-gray-600">Monday – Friday<br />10am – 6pm</p>
          </div>
          <div className="md:text-right">
            <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-gray-400">Find</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}