import React from 'react';

export interface SunburstProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rays?: number;
  color?: string;
  className?: string;
}

export function Sunburst({ 
  size = 'md', 
  rays = 12, 
  color = '#C4712A',
  className = '' 
}: SunburstProps) {
  const sizes = {
    sm: { container: 'w-16 h-8', sun: 'w-16 h-16', ray: 'w-0.5 h-20' },
    md: { container: 'w-32 h-16', sun: 'w-32 h-32', ray: 'w-1 h-40' },
    lg: { container: 'w-48 h-24', sun: 'w-48 h-48', ray: 'w-1 h-56' },
    xl: { container: 'w-64 h-32', sun: 'w-64 h-64', ray: 'w-1.5 h-72' },
  };
  
  const rayElements = Array.from({ length: rays }, (_, i) => {
    const angle = (180 / (rays + 1)) * (i + 1) - 90;
    return (
      <div
        key={i}
        className={`absolute bottom-0 left-1/2 origin-bottom ${sizes[size].ray} -ml-0.5 opacity-60`}
        style={{
          backgroundColor: color,
          transform: `rotate(${angle}deg)`,
        }}
      />
    );
  });
  
  return (
    <div className={`relative ${sizes[size].container} overflow-hidden ${className}`}>
      {/* Rays */}
      {rayElements}
      
      {/* Sun circle */}
      <div 
        className={`absolute bottom-0 ${sizes[size].sun} rounded-full border-4`}
        style={{ borderColor: color }}
      />
      
      {/* Horizon line */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1" 
        style={{ backgroundColor: '#1A0C04' }}
      />
    </div>
  );
}

export interface VinylLabelProps {
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export function VinylLabel({ size = 'md', children, className = '' }: VinylLabelProps) {
  const sizes = {
    sm: { container: 'w-24 h-24', center: 'w-3 h-3', ring: 'm-4' },
    md: { container: 'w-32 h-32', center: 'w-4 h-4', ring: 'm-6' },
    lg: { container: 'w-48 h-48', center: 'w-6 h-6', ring: 'm-8' },
  };
  
  return (
    <div className={`${sizes[size].container} rounded-full bg-[#1A0C04] flex items-center justify-center relative p-2 shadow-inner ${className}`}>
      <div className={`w-full h-full rounded-full border border-[#D4B88A]/30 flex items-center justify-center p-1`}>
        <div className="w-full h-full rounded-full bg-[#C4712A] flex items-center justify-center relative">
          {/* Center hole */}
          <div className={`${sizes[size].center} rounded-full bg-[#F2E0C0]`}></div>
          
          {/* Decorative ring */}
          <div className={`absolute inset-0 rounded-full border border-[#1A0C04]/20 ${sizes[size].ring}`}></div>
          
          {/* Optional content */}
          {children && (
            <div className="absolute inset-0 flex items-center justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export interface RisographOverlayProps {
  color1?: string;
  color2?: string;
  offset?: number;
  className?: string;
}

export function RisographOverlay({ 
  color1 = '#C4412A', 
  color2 = '#E09A50',
  offset = 6,
  className = '' 
}: RisographOverlayProps) {
  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <div 
        className="absolute w-24 h-24 rounded-full mix-blend-multiply opacity-90 blur-[1px]"
        style={{ 
          backgroundColor: color1,
          transform: `translate(-${offset}px, -${offset}px)`
        }}
      />
      <div 
        className="absolute w-24 h-24 rounded-full mix-blend-multiply opacity-90 blur-[0.5px]"
        style={{ 
          backgroundColor: color2,
          transform: `translate(${offset}px, ${offset}px)`
        }}
      />
    </div>
  );
}
