import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({ 
  icon: Icon, 
  label, 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}: IconButtonProps) {
  const variants = {
    default: 'bg-[#1A0C04] text-[#F2E0C0] hover:bg-[#3D1F0A]',
    accent: 'bg-[#C4712A] text-[#1A0C04] hover:bg-[#E09A50]',
    ghost: 'bg-transparent text-[#1A0C04] hover:bg-[#D4B88A]/20',
  };
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-sm transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={label}
      {...props}
    >
      <Icon size={iconSizes[size]} />
    </button>
  );
}
