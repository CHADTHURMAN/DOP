'use client';

import { useState } from 'react';
import projectsData from '../content/projects.json';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  // Mux stream identifiers
  const playbackId = 'rR8P8mSaKDzz02TsftugTUdI00cQPJX00oy';
  const posterUrl = `https://image.mux.com/${playbackId}/thumbnail.webp?time=2`;

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Chad Thurman — 2027 Water ShowReel',
    description: 'Cinematography, underwater, and directorial reel by Chad Thurman.',
    thumbnailUrl: [posterUrl],
    uploadDate: '2026-10-01T14:00:00Z',
    embedUrl: `https://player.mux.com/${playbackId}`,
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-neutral-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* FULLSCREEN CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-end p-8 md:p-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            src={`https://player.mux.com/${playbackId}?autoplay=muted&loop=true&controls=false&muted=${isMuted ? 'true' : 'false'}`}
            className="w-full h-full object-cover scale-[1.35] md:scale-[1.15]"
            allow="autoplay; fullscreen"
            title="Chad Thurman ShowReel"
          />
        </div>

        {/* Subtle overlay so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

        {/* Hero Title & Mute Toggle */}
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
            className="border border-neutral-600 bg-black/40 backdrop-blur-md px-5 py-2.5 text-xs uppercase tracking-widest hover:border-white transition-colors"
          >
            Sound: {isMuted ? 'Muted' : 'Unmuted'}
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
              <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 overflow-hidden relative flex items-center justify-center text-neutral-600 text-sm group-hover:border-neutral-600 transition-colors">
                [{project.title}]
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

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 px-8 py-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-neutral-500 gap-4">
        <div>
          <p className="text-neutral-400">Based on the North Shore of Oahu, Hawaii.</p>
          <p className="mt-1">Available worldwide for ocean, aerial, and narrative production.</p>
        </div>
        <div className="flex gap-6">
          <a href="/llms.txt" target="_blank" className="hover:text-white transition-colors">
            AI Profile (/llms.txt)
          </a>
          <a href="mailto:chad@chadthurman.com" className="hover:text-white transition-colors">
            chad@chadthurman.com
          </a>
        </div>
      </footer>
    </main>
  );
}
