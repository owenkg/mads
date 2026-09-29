import React from 'react';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  className?: string;
}

export function Loader({ size = 'md', variant = 'spinner', className = '' }: LoaderProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  
  if (variant === 'spinner') {
    return (
      <div className={`${sizes[size]} ${className}`}>
        <div className="w-full h-full border-4 border-[#D4B88A] border-t-[#C4712A] rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (variant === 'dots') {
    const dotSizes = {
      sm: 'w-1.5 h-1.5',
      md: 'w-2.5 h-2.5',
      lg: 'w-4 h-4',
    };
    
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`${dotSizes[size]} bg-[#C4712A] rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`${dotSizes[size]} bg-[#C4712A] rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`${dotSizes[size]} bg-[#C4712A] rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    );
  }
  
  if (variant === 'pulse') {
    return (
      <div className={`${sizes[size]} ${className}`}>
        <div className="w-full h-full bg-[#C4712A] rounded-full animate-pulse"></div>
      </div>
    );
  }
  
  return null;
}

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
  className?: string;
}

export function Skeleton({ 
  variant = 'rectangular', 
  width = '100%', 
  height = '1rem',
  className = '' 
}: SkeletonProps) {
  const variants = {
    text: 'rounded-sm',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
  };
  
  return (
    <div 
      className={`bg-[#D4B88A]/20 animate-pulse ${variants[variant]} ${className}`}
      style={{ width, height }}
    ></div>
  );
}
