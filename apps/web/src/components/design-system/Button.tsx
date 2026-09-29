import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex justify-center items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors rounded-sm";
  
  const variants = {
    primary: "bg-[#1A0C04] text-[#F2E0C0] px-6 py-3 hover:bg-[#3D1F0A]",
    secondary: "border border-[#1A0C04] text-[#1A0C04] px-6 py-3 hover:bg-[#1A0C04] hover:text-[#F2E0C0]",
    accent: "bg-[#C4712A] text-[#1A0C04] px-8 py-3 hover:bg-[#E09A50]",
    ghost: "border-b-2 border-transparent hover:border-[#C4412A] text-[#C4412A] px-2 py-2 rounded-none"
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
