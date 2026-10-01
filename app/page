'use client';

import { useState } from 'react';
import projectsData from '../content/projects.json';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  // Video SEO Schema for search engines and AI engines
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Chad Thurman — Cinematography & Directing Reel',
    description: 'Cinematography, underwater, and directorial reel by Chad Thurman.',
    thumbnailUrl: ['https://yourdomain.com/poster.jpg'],
    uploadDate: '2026-01-01T08:00:00+08:00',
    contentUrl: 'https://yourdomain.com/hero-reel.mp4',
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800">
      {/* Search Engine Video Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* FULLSCREEN CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-end p-8 md:p-16">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          {/* Put your test reel MP4 in the /public folder named hero-reel.mp4 */}
          <source src="/hero-reel.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Hero Text Info & Sound Toggle */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-7xl font-extralight tracking-tight uppercase">
              Chad Thurman
            </h1>
            <p className="text-neutral-400 mt-2 text-sm md:text-base tracking-widest uppercase">
              Director of Photography &middot; Underwater Cinematography
            </p>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="border border-neutral-600 px-4 py-2 text-xs uppercase tracking-widest hover:border-white transition-colors backdrop-blur-md"
          >
            Sound: {isMuted ? 'Muted' : 'Live'}
          </button>
        </div>
      </section>

      {/* SELECTED WORK GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-12">
          Selected Projects & Directorial Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 overflow-hidden relative">
                {/* Fallback image/poster */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-sm group-hover:scale-105 transition-transform duration-500">
                  [{project.title} Preview]
                </div>
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="text-lg font-light tracking-wide">{project.title}</h3>
                <span className="text-xs text-neutral-400 uppercase tracking-wider">{project.role}</span>
              </div>
              <p className="text-neutral-500 text-xs mt-1">{project.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED CREDITS & FOOTER */}
      <footer className="border-t border-neutral-900 px-8 py-16 text-center md:text-left max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-neutral-500 gap-4">
        <div>
          <p className="text-neutral-400">Based on the North Shore of Oahu, Hawaii.</p>
          <p className="mt-1">Available worldwide for ocean, aerial, and narrative production.</p>
        </div>
        <div className="flex gap-6 justify-center md:justify-end">
          <a href="/llms.txt" target="_blank" className="hover:text-white transition-colors">
            AI Profile (/llms.txt)
          </a>
          <a href="mailto:info@chadthurman.com" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
