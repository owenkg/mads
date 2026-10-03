import React from 'react';

export function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-24">
      <div className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4412A] mb-4">
          About
        </p>
        <h1 className="font-serif italic text-4xl md:text-5xl text-[#1A0C04] leading-tight">
          Meridian at Dusk Sessions
        </h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-8 font-sans text-[#3D1F0A] leading-relaxed">
        <p className="text-xl">
          Meridian at Dusk Sessions is not a party. It is an experience — an intimate afternoon of
          deep house, afro house, and soulful amapiano, held as the sun sets over Kampala.
        </p>
        <p>
          Twenty people, maximum. No lights. No stage. The music is the event, and the people who
          come are the atmosphere. We do this not for scale, but for feeling.
        </p>
        <p>
          Inspired by the quiet curation of Su Casa, the depth of Ashmed Hour Sessions, and the
          warmth of Vinny's Vinyl Thursdays — MADS is Uganda's answer to the question: what does it
          feel like when the music is right?
        </p>

        <div className="border-l-4 border-[#C4712A] pl-6 my-12">
          <p className="font-serif italic text-2xl text-[#1A0C04]">
            "Where the sun meets the sound."
          </p>
        </div>

        <p>
          Meridian at Dusk Sessions is an initiative under{' '}
          <strong>Pitch Blends</strong> — an entertainment, music, and live productions
          conglomerate based in Kampala, Uganda.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
          Questions & collaborations
        </p>
        {/* hello@meridianatdusk.com — domain acquisition in progress */}
        <p className="font-serif italic text-xl text-[#8A6040] mt-2">
          DM us on Instagram
        </p>
      </div>
    </div>
  );
}
