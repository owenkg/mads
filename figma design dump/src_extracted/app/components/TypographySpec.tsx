import React from 'react';

export function TypographySpec() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row border-b border-[#3D1F0A]/10 pb-8 gap-4">
        <div className="w-48 text-[#8A6040] text-sm font-sans uppercase tracking-widest">
          Display / Wordmark
        </div>
        <div className="flex-1">
          <div className="font-serif italic text-5xl md:text-7xl text-[#1A0C04] leading-tight mb-2">
            Meridian at Dusk
          </div>
          <p className="font-sans text-xs text-[#8A6040]">Playfair Display Italic (or similar slab serif)</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b border-[#3D1F0A]/10 pb-8 gap-4">
        <div className="w-48 text-[#8A6040] text-sm font-sans uppercase tracking-widest">
          Headings
        </div>
        <div className="flex-1">
          <div className="font-serif text-3xl md:text-5xl text-[#3D1F0A] leading-tight mb-4">
            The music finds you here
          </div>
          <div className="font-serif italic text-3xl md:text-5xl text-[#3D1F0A] leading-tight mb-2">
            The music finds you here
          </div>
          <p className="font-sans text-xs text-[#8A6040]">Playfair Display Regular / Italic</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b border-[#3D1F0A]/10 pb-8 gap-4">
        <div className="w-48 text-[#8A6040] text-sm font-sans uppercase tracking-widest">
          Stamp / Label
        </div>
        <div className="flex-1">
          <div className="font-mono text-lg md:text-xl text-[#C4412A] tracking-[0.2em] uppercase mb-2">
            SESSIONS · KAMPALA · UGANDA
          </div>
          <p className="font-sans text-xs text-[#8A6040]">Courier Prime / slab mono</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-48 text-[#8A6040] text-sm font-sans uppercase tracking-widest">
          Body Copy
        </div>
        <div className="flex-1">
          <p className="font-sans text-lg md:text-xl text-[#1A0C04] leading-relaxed max-w-2xl mb-2">
            An intimate gathering for those who feel music the same way. Daytime. Curated. Recorded.
          </p>
          <p className="font-sans text-xs text-[#8A6040]">DM Sans Regular 400</p>
        </div>
      </div>
    </div>
  );
}
