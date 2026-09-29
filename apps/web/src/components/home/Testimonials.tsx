import React from 'react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="px-6 py-24 border-t border-[#3D1F0A]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-[#3D1F0A]/10" />
          <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            From the guests
          </span>
          <div className="h-px flex-1 bg-[#3D1F0A]/10" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-4">
              <p className="font-serif italic text-xl text-[#1A0C04] leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-sm text-[#3D1F0A]">{t.name}</p>
                <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                  {t.session}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
