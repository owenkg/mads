import React from 'react';

export interface StampProps {
  children: React.ReactNode;
  rotate?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Stamp({ children, rotate = -2, size = 'md', className = '' }: StampProps) {
  const sizes = {
    sm: 'px-3 py-2 text-xs border-2',
    md: 'px-6 py-3 text-sm border-4',
    lg: 'px-8 py-4 text-base border-[6px]',
  };
  
  return (
    <div 
      className={`inline-block border-[#1A0C04] mix-blend-multiply ${sizes[size]} ${className}`}
      style={{ 
        transform: `rotate(${rotate}deg)`,
        filter: "url(#stamp-roughness)"
      }}
    >
      <span className="font-mono tracking-[0.2em] uppercase text-[#1A0C04] font-bold">
        {children}
      </span>
      
      <svg className="hidden">
        <filter id="stamp-roughness">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
}

export interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark';
  dot?: boolean;
  className?: string;
}

export function Tag({ children, variant = 'default', dot = false, className = '' }: TagProps) {
  const variants = {
    default: 'bg-[#D4B88A]/20 text-[#1A0C04] border-[#8A6040]/20',
    accent: 'bg-[#C4412A]/10 text-[#C4412A] border-[#C4412A]/20',
    dark: 'bg-[#1A0C04] text-[#F2E0C0] border-[#1A0C04]',
  };
  
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-[10px] tracking-widest uppercase ${variants[variant]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
