import React from 'react';

export function ColorSwatch({
  name,
  hex,
  isAccent = false,
}: {
  name: string;
  hex: string;
  isAccent?: boolean;
}) {
  // Determine if the text needs to be light based on how dark the color is
  // A simple heuristic for these specific colors:
  const isDark = ['#1A0C04', '#3D1F0A', '#7A3B10', '#C4412A', '#8A6040'].includes(hex);

  return (
    <div className="flex flex-col group">
      <div
        className={`w-full aspect-[4/3] rounded-sm mb-3 shadow-sm border border-black/5 relative overflow-hidden`}
        style={{ backgroundColor: hex }}
      >
        {isAccent && (
          <div className="absolute top-2 right-2 text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 border rounded-full" style={{ borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}>
            Accent
          </div>
        )}
      </div>
      <div className="flex justify-between items-baseline">
        <span className="font-sans text-sm font-medium text-[#1A0C04]">{name}</span>
        <span className="font-mono text-xs text-[#8A6040] uppercase tracking-wider">{hex}</span>
      </div>
    </div>
  );
}
