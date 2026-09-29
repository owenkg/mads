import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Alert({ 
  variant = 'info', 
  title, 
  children, 
  onClose, 
  className = '' 
}: AlertProps) {
  const variants = {
    info: 'bg-[#D4B88A]/10 border-[#8A6040]/20 text-[#3D1F0A]',
    success: 'bg-[#E09A50]/10 border-[#C4712A]/20 text-[#7A3B10]',
    warning: 'bg-[#D4845C]/10 border-[#C4412A]/20 text-[#7A3B10]',
    error: 'bg-[#C4412A]/10 border-[#C4412A]/30 text-[#1A0C04]',
  };
  
  return (
    <div className={`relative border rounded-sm p-6 ${variants[variant]} ${className}`}>
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-current opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Close alert"
        >
          <X size={16} />
        </button>
      )}
      
      {title && (
        <h4 className="font-mono text-xs tracking-widest uppercase mb-3 font-bold">
          {title}
        </h4>
      )}
      
      <div className="font-sans text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export interface NoticeProps {
  children: React.ReactNode;
  className?: string;
}

export function Notice({ children, className = '' }: NoticeProps) {
  return (
    <div className={`border-l-4 border-[#C4712A] bg-[#F2E0C0] p-6 rounded-sm ${className}`}>
      <div className="font-sans text-sm text-[#3D1F0A] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
