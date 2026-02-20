'use client';
import Link from 'next/link';
// We import useParams to read the ID from the URL
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const id = params.id; // This gets the 'id' from the folder name [id]

  // We format the ID to look like a title (e.g., "managing-burnout" -> "Managing Burnout")
  const displayTitle = id?.toString().replace(/-/g, ' ');

  return (
    <main className="bg-maya-bg min-h-screen p-8 md:p-24 animate-fadeIn">
      <div className="max-w-3xl mx-auto">
        
        {/* Back to Blog Button - Requested functionality */}
        <Link 
          href="/blog" 
          className="bg-maya-primary text-white px-8 py-3 rounded-sm shadow-md hover:bg-slate-800 transition-all inline-block mb-16 uppercase tracking-widest text-[10px] font-bold"
        >
          ← Back to Blog
        </Link>

        <article className="prose prose-slate lg:prose-xl mx-auto">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-6xl font-serif mb-4 capitalize leading-tight text-maya-text">
              {displayTitle}
            </h1>
            <p className="text-maya-primary font-medium italic">By Dr. Maya Reynolds</p>
          </header>

          <img 
            src="/office-vibe.jpeg" 
            className="w-full rounded-2xl mb-16 shadow-2xl border-4 border-white" 
            alt="Article feature" 
          />

          <section className="text-gray-700 space-y-6 text-lg leading-relaxed">
            <p>
              In our Minneapolis practice, we often see how high-achieving professionals struggle with the very topics explored in this article. 
              Therapy provides the safe container needed to unpack these feelings.
            </p>
            <p>
              This is a deep dive into <strong>{displayTitle}</strong>. 
              Dr. Maya Reynolds utilizes a holistic approach to ensure that your mental health 
              is supported through every stage of your career and personal life.
            </p>
          </section>
        </article>
      </div>

      <footer className="mt-24 text-center pb-12">
         <Link href="/contact" className="text-maya-primary font-bold hover:underline tracking-widest uppercase text-xs">
           Book a consultation to discuss this topic
         </Link>
      </footer>
    </main>
  );
}