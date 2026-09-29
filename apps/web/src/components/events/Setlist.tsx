import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Setlist({ tracks }: { tracks: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#3D1F0A]/15 mt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#1A0C04] transition-colors"
      >
        <span>Setlist — {tracks.length} tracks</span>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <ol className="border-t border-[#3D1F0A]/10 max-h-64 overflow-y-auto">
          {tracks.map((track, i) => (
            <li
              key={i}
              className="flex items-baseline gap-3 px-4 py-2.5 border-b border-[#3D1F0A]/05 last:border-0 hover:bg-[#3D1F0A]/5 transition-colors"
            >
              <span className="font-mono text-xs text-[#C4712A] w-5 shrink-0 text-right">
                {i + 1}
              </span>
              <span className="font-sans text-sm text-[#3D1F0A]">{track}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
