import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, className = '', id, ...props }: TextareaProps) {
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={inputId} className="font-mono text-xs uppercase tracking-widest text-[#8A6040]">
        {label}
      </label>
      <textarea
        id={inputId}
        className="w-full bg-transparent border-b border-[#3D1F0A]/30 py-3 font-sans text-lg text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors resize-y min-h-[120px]"
        {...props}
      />
      {error && <span className="font-mono text-[10px] text-[#C4412A] tracking-wider uppercase mt-1">{error}</span>}
    </div>
  );
}
