import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GrainOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-20 z-50"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const SVGFilters = () => (
  <svg className="hidden absolute w-0 h-0">
    <defs>
      <filter id="roughness">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Sessions' },
    { to: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen bg-[#F2E0C0] font-sans relative">
      <GrainOverlay />
      <SVGFilters />

      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-[#F2E0C0]/90 backdrop-blur-md border-b border-[#3D1F0A]/10">
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            {/* Half-sun mark */}
            <div className="w-8 h-4 overflow-hidden relative">
              <div className="absolute bottom-0 w-8 h-8 rounded-full border-2 border-[#C4712A]" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#1A0C04]">
              MADS
            </span>
          </Link>

          <nav>
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={[
                      'font-mono text-xs tracking-widest uppercase transition-colors',
                      location.pathname === link.to
                        ? 'text-[#C4412A]'
                        : 'text-[#8A6040] hover:text-[#C4412A]',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="bg-[#1A0C04] text-[#D4B88A] py-16 text-center mt-24 border-t-4 border-[#C4712A]">
        <div className="container mx-auto px-6">
          {/* Vinyl dot */}
          <div className="w-12 h-12 mx-auto rounded-full bg-[#C4712A] flex items-center justify-center mb-8">
            <div className="w-3 h-3 rounded-full bg-[#1A0C04]" />
          </div>
          <p className="font-mono tracking-widest uppercase text-xs mb-3 text-[#E09A50]">
            Meridian at Dusk Sessions
          </p>
          <p className="font-serif italic text-xl text-[#F2E0C0] mb-8">
            The hour between light and music.
          </p>
          <div className="flex justify-center gap-6 font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            <a
              href="https://instagram.com/meridianatdusk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2E0C0] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/meridianatdusk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2E0C0] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://youtube.com/@meridianatdusk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2E0C0] transition-colors"
            >
              YouTube
            </a>
          </div>
          <p className="font-sans text-xs mt-6 text-[#8A6040]">
            © {new Date().getFullYear()} Pitch Blends · Meridian at Dusk Sessions
          </p>
        </div>
      </footer>
    </div>
  );
}
