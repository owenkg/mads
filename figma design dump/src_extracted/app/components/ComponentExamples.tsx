import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ComponentExamples() {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
      {/* Badges / Labels */}
      <div className="space-y-12">
        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040] mb-6">Location Label</h3>
          <div className="inline-flex items-center px-4 py-2 border border-[#3D1F0A] bg-transparent text-[#1A0C04] font-mono text-xs tracking-[0.2em] uppercase rounded-sm mix-blend-multiply">
            Kampala · Uganda
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040] mb-6">Event Card Badge</h3>
          <div className="bg-[#1A0C04] rounded-sm p-6 w-full max-w-sm border border-[#D4B88A]/20 shadow-md relative overflow-hidden">
             {/* Grain overlay inside dark component */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />
             
            <h4 className="font-serif italic text-3xl text-[#F2E0C0] mb-2">Meridian at Dusk Sessions</h4>
            <p className="font-sans text-sm text-[#D4B88A] leading-relaxed mb-6 opacity-90">
              An intimate daytime experience for those who feel the music. By invitation only.
            </p>
            <div className="flex justify-between items-center border-t border-[#D4B88A]/20 pt-4">
              <span className="font-mono text-xs text-[#E09A50] tracking-widest uppercase">Session 001</span>
              <span className="font-mono text-xs bg-[#C4412A] text-[#F2E0C0] px-2 py-1 uppercase tracking-widest">Invite Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons and Form Elements */}
      <div className="space-y-12">
        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040] mb-6">Form Intro Card</h3>
          <div className="bg-[#F2E0C0] p-8 border border-[#3D1F0A]/20 shadow-sm rounded-sm max-w-sm">
            <h4 className="font-serif text-2xl text-[#1A0C04] mb-3">Request an invite</h4>
            <p className="font-sans text-sm text-[#3D1F0A] leading-relaxed mb-8">
              Space is limited. Request an invitation or enter your code to join us.
            </p>
            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] text-[#C4412A] tracking-widest uppercase border border-[#C4412A] px-2 py-0.5 rounded-sm">21+ Only</div>
              <button className="flex items-center gap-2 bg-[#1A0C04] text-[#F2E0C0] px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#3D1F0A] transition-colors rounded-sm">
                Request <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040] mb-6">Ghost Buttons</h3>
          <div className="flex flex-col gap-4 max-w-xs">
            <button className="flex justify-center items-center gap-2 border border-[#1A0C04] text-[#1A0C04] px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#1A0C04] hover:text-[#F2E0C0] transition-colors rounded-sm">
              Learn More
            </button>
            <button className="flex justify-center items-center gap-2 border-b-2 border-transparent hover:border-[#C4412A] text-[#C4412A] px-2 py-2 font-mono text-xs tracking-widest uppercase transition-colors rounded-none">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
