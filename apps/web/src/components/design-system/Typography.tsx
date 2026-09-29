import React from 'react';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  italic?: boolean;
  className?: string;
}

export function Heading({ level = 1, children, italic = true, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizes = {
    1: 'text-4xl md:text-6xl',
    2: 'text-3xl md:text-5xl',
    3: 'text-2xl md:text-4xl',
    4: 'text-xl md:text-3xl',
    5: 'text-lg md:text-2xl',
    6: 'text-base md:text-xl',
  };
  
  const italicClass = italic ? 'italic' : '';
  
  return (
    <Tag className={`font-serif ${sizes[level]} ${italicClass} text-[#1A0C04] leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'body' | 'muted' | 'accent';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ 
  children, 
  size = 'base', 
  variant = 'body', 
  className = '', 
  as: Component = 'p' 
}: TextProps) {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  
  const variants = {
    body: 'text-[#1A0C04]',
    muted: 'text-[#8A6040]',
    accent: 'text-[#C4412A]',
  };
  
  return (
    <Component className={`font-sans ${sizes[size]} ${variants[variant]} leading-relaxed ${className}`}>
      {children}
    </Component>
  );
}

export interface LabelProps {
  children: React.ReactNode;
  uppercase?: boolean;
  className?: string;
}

export function Label({ children, uppercase = true, className = '' }: LabelProps) {
  const uppercaseClass = uppercase ? 'uppercase tracking-widest' : '';
  
  return (
    <span className={`font-mono text-xs ${uppercaseClass} text-[#8A6040] ${className}`}>
      {children}
    </span>
  );
}

export interface StampTextProps {
  children: React.ReactNode;
  className?: string;
}

export function StampText({ children, className = '' }: StampTextProps) {
  return (
    <span className={`font-mono tracking-[0.2em] uppercase text-[#1A0C04] ${className}`}>
      {children}
    </span>
  );
}
