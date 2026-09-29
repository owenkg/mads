import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export function Card({ children, variant = 'light', className = '' }: CardProps) {
  const isDark = variant === 'dark';
  const bgClass = isDark ? "bg-[#1A0C04] text-[#F2E0C0] border-[#D4B88A]/20" : "bg-[#F2E0C0] text-[#1A0C04] border-[#3D1F0A]/20";
  const noiseOpacity = isDark ? "0.1" : "0.08";
  const blendMode = isDark ? "mix-blend-overlay" : "mix-blend-multiply";

  return (
    <div className={`relative rounded-sm p-6 sm:p-8 border shadow-sm overflow-hidden ${bgClass} ${className}`}>
      {/* Texture overlay */}
      <div 
        className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22${noiseOpacity}%22/%3E%3C/svg%3E')] ${blendMode} pointer-events-none`} 
      />
      
      {/* Content wrapper to stay above grain */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
