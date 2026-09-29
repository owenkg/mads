import React from 'react';

export interface DividerProps {
  variant?: 'solid' | 'dotted' | 'thick';
  spacing?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ 
  variant = 'solid', 
  spacing = 'md', 
  orientation = 'horizontal',
  className = '' 
}: DividerProps) {
  const variants = {
    solid: 'border-solid',
    dotted: 'border-dotted',
    thick: 'border-solid border-t-2',
  };
  
  const spacings = {
    sm: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    md: orientation === 'horizontal' ? 'my-8' : 'mx-8',
    lg: orientation === 'horizontal' ? 'my-16' : 'mx-16',
  };
  
  const orientationClass = orientation === 'horizontal' 
    ? `border-t ${variant === 'thick' ? '' : 'border-t-[1px]'} w-full` 
    : `border-l ${variant === 'thick' ? 'border-l-2' : 'border-l-[1px]'} h-full`;
  
  return (
    <hr 
      className={`border-[#3D1F0A]/10 ${variants[variant]} ${spacings[spacing]} ${orientationClass} ${className}`} 
    />
  );
}
