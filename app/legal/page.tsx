'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LegalPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const bgColor = 'hsla(30,55.56%,96.47%,1)'
  const textColor = 'hsla(95.29, 45.95%, 14.51%, 1)'; 

  return (
    <main 
      className={`transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'} min-h-screen`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/30 backdrop-blur-md border-b border-black/5">
        <Link href="/" className="font-serif text-xl font-bold">Lilac Template</Link>
        <div className="flex gap-8 items-center text-[11px] uppercase tracking-widest font-bold">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="pt-48 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif mb-10">We couldn't find the page you were looking for. This is either because:</h1>
        <ul className="list-disc ml-6 space-y-6 text-lg font-medium opacity-90">
          <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        <p className="mt-12 text-lg">
          You can return to our homepage by <Link href="/" className="underline font-bold">clicking here</Link>.
        </p>
      </section>

      {/* Footer using the same HSLA text color */}
      <footer className="pt-10 pb-24 px-8 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-serif uppercase tracking-widest font-bold">Lilac Template</h3>
            <p className="opacity-80">123 Example Road<br />Minneapolis, MN</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest opacity-50">Hours</h4>
            <p className="opacity-80">Monday – Friday<br />10am – 6pm</p>
          </div>
          <div className="md:text-right">
             <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest opacity-50">Find</h4>
             <nav className="flex flex-col gap-2 text-sm font-bold">
               <Link href="/" className="underline underline-offset-4">Home</Link>
               <Link href="/contact" className="underline underline-offset-4">Contact</Link>
               <Link href="/blog" className="underline underline-offset-4">Blog</Link>
             </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}