'use client';
import Link from 'next/link';

const BLOGS = [
  { 
    id: 'burnout-recovery', 
    title: 'Managing Work Burnout in a High-Stakes Career', 
    img: '/office-vibe.jpeg',
    excerpt: 'Practical strategies for professionals to reclaim their energy and set boundaries.' 
  },
  { 
    id: 'building-self-esteem', 
    title: 'The Foundation of Self-Worth: A Holistic Approach', 
    img: '/specialty-1.jpeg',
    excerpt: 'How to transition from self-criticism to authentic self-acceptance.' 
  },
  { 
    id: 'healthy-relationships', 
    title: 'Navigating Connection and Communication', 
    img: '/office-vibe.jpeg', 
    excerpt: 'Understanding attachment styles to build deeper, more fulfilling partnerships.'
  },
  { 
    id: 'mindful-minneapolis', 
    title: 'Finding Stillness: Mindfulness for Busy Adults', 
    img: '/specialty-1.jpeg',
    excerpt: 'Simple daily practices to ground yourself amidst the chaos of modern life.'
  },
];

export default function BlogHome() {
  return (
    <main className="bg-maya-bg min-h-screen p-8 md:p-24 animate-fadeIn">
      {/* Navigation Corner */}
      <Link href="/" className="text-maya-primary hover:underline mb-12 inline-block uppercase tracking-widest text-[10px] font-bold">
        ← Back to Home
      </Link>
      
      {/* Header Section */}
      <header className="text-center mb-24 max-w-4xl mx-auto">
        <div className="relative w-full h-64 md:h-[450px] mb-12 overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
          <img src="/office-vibe.jpeg" className="w-full h-full object-cover" alt="Therapy office atmosphere" />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-maya-text">Thoughts on Healing</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A collection of reflections, clinical insights, and resources curated by Dr. Maya Reynolds to support your journey toward mental wellness and professional balance.
        </p>
      </header>

      {/* 4 Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {BLOGS.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 aspect-[16/10] border border-gray-100 shadow-sm transition-all group-hover:shadow-xl">
              <img 
                src={blog.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={blog.title} 
              />
            </div>
            <h2 className="text-3xl font-serif mb-3 group-hover:text-maya-primary transition-colors leading-tight">
              {blog.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
            <span className="text-maya-primary uppercase tracking-widest text-[10px] font-bold border-b border-maya-primary pb-1">
              Read Article
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-32 pt-12 border-t border-gray-100 text-center text-[10px] uppercase tracking-[0.3em] text-gray-400">
        © 2026 Dr. Maya Reynolds, LLC.
      </footer>
    </main>
  );
}