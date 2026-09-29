import React from 'react';

export function VoiceAndToneCard({
  title,
  heading,
  description,
  isNot = false,
}: {
  title: string;
  heading: string;
  description: string;
  isNot?: boolean;
}) {
  return (
    <div className={`p-8 md:p-10 rounded-sm border ${isNot ? 'border-[#C4412A]/30 bg-[#C4412A]/5' : 'border-[#3D1F0A]/10 bg-[#D4B88A]/10'}`}>
      <div className="font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-3">
        {title}
      </div>
      <h3 className={`font-serif text-3xl md:text-4xl italic mb-6 ${isNot ? 'text-[#C4412A]' : 'text-[#1A0C04]'}`}>
        {heading}
      </h3>
      <p className="font-sans text-[#3D1F0A] leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
