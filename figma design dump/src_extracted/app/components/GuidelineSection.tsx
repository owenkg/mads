import React, { ReactNode } from 'react';

export function GuidelineSection({
  id,
  title,
  subtitle,
  children,
  className = '',
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-[#3D1F0A]/10 ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24 mb-12">
          <div className="md:w-1/3 shrink-0 mb-6 md:mb-0">
            <h2 className="font-serif italic text-3xl md:text-4xl text-[#1A0C04] tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-[#3D1F0A] opacity-80 leading-relaxed text-sm md:text-base max-w-xs">
                {subtitle}
              </p>
            )}
          </div>
          <div className="md:w-2/3">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
