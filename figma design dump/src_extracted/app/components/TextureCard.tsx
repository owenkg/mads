import React from 'react';

export function TextureCard({
  title,
  description,
  visual,
}: {
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="flex flex-col group h-full">
      <div className="w-full aspect-[4/3] rounded-sm mb-6 shadow-sm border border-black/5 relative overflow-hidden bg-[#E09A50]/20 flex items-center justify-center">
        {visual}
      </div>
      <div>
        <h4 className="font-serif italic text-2xl text-[#1A0C04] mb-3 group-hover:text-[#C4412A] transition-colors">{title}</h4>
        <p className="font-sans text-sm text-[#3D1F0A] leading-relaxed opacity-90">{description}</p>
      </div>
    </div>
  );
}
