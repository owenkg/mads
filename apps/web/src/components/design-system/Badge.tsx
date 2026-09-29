import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 font-mono text-xs tracking-[0.2em] uppercase rounded-sm mix-blend-multiply";
  
  const variants = {
    outline: "border border-[#3D1F0A] bg-transparent text-[#1A0C04]",
    solid: "bg-[#1A0C04] text-[#F2E0C0] mix-blend-normal border-none px-3 py-1",
    accent: "bg-[#C4412A] text-[#F2E0C0] mix-blend-normal border-none px-3 py-1"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
