import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'default' | 'underline' | 'muted';
  external?: boolean;
}

export function Link({ 
  children, 
  variant = 'default', 
  external = false,
  className = '',
  ...props 
}: LinkProps) {
  const variants = {
    default: 'text-[#C4712A] hover:text-[#E09A50] transition-colors',
    underline: 'text-[#1A0C04] border-b-2 border-[#C4712A] hover:border-[#E09A50] hover:text-[#C4712A] transition-all',
    muted: 'text-[#8A6040] hover:text-[#C4412A] transition-colors',
  };
  
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};
  
  return (
    <a 
      className={`font-sans ${variants[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
      {external && <span className="ml-1 text-xs">↗</span>}
    </a>
  );
}
