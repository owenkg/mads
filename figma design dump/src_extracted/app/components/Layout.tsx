import React from 'react';
import { Outlet, NavLink } from 'react-router';

export function Layout() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A0C04] text-[#D4B88A] border-b-2 border-[#C4712A]">
        <div className="container mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#C4712A] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#1A0C04]"></div>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#F2E0C0]">Meridian Builder</span>
          </div>
          
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                isActive ? "text-[#E09A50]" : "text-[#D4B88A] hover:text-[#F2E0C0] transition-colors"
              }
            >
              Brand Guidelines
            </NavLink>
            <NavLink 
              to="/design-system" 
              className={({ isActive }) => 
                isActive ? "text-[#E09A50]" : "text-[#D4B88A] hover:text-[#F2E0C0] transition-colors"
              }
            >
              Design System
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Spacer for fixed top nav */}
      <div className="h-12 bg-[#F2E0C0]"></div>

      <Outlet />

      <footer className="bg-[#1A0C04] text-[#D4B88A] py-16 text-center border-t-4 border-[#C4712A]">
        <div className="container mx-auto px-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#C4712A] flex items-center justify-center mb-8">
            <div className="w-4 h-4 rounded-full bg-[#1A0C04]"></div>
          </div>
          <p className="font-mono tracking-widest uppercase text-xs mb-4 text-[#E09A50]">Meridian at Dusk</p>
          <p className="font-serif italic text-2xl text-[#F2E0C0] mb-8">The hour between light and music.</p>
          
          <div className="flex justify-center gap-6 font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            <a href="#" className="hover:text-[#F2E0C0] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#F2E0C0] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#F2E0C0] transition-colors">YouTube</a>
          </div>
          <p className="font-sans text-sm mt-6 text-[#E09A50] opacity-80">@meridianatdusk</p>
        </div>
      </footer>
    </>
  );
}
