import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router';
import { ColorSwatch } from './components/ColorSwatch';
import { GuidelineSection } from './components/GuidelineSection';
import { TypographySpec } from './components/TypographySpec';
import { SocialTemplate } from './components/SocialTemplate';
import { ComponentExamples } from './components/ComponentExamples';
import { VoiceAndToneCard } from './components/VoiceAndToneCard';
import { TextureCard } from './components/TextureCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { DesignSystemPage } from './pages/DesignSystemPage';
import { InvitationPage } from './pages/InvitationPage';
import { Link } from './components/design-system/Link';

// Images imported based on unsplash results and figma assets
import heroLogo from 'figma:asset/edd28435e173c5a7c42983ba404948180874a8cf.png';
const imgIntimateLighting = "https://images.unsplash.com/photo-1680446459280-9f77db805b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGRqJTIwc2V0JTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3NDUwNjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgDuskLandscape = "https://images.unsplash.com/photo-1772290617718-2a0908ff0f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXNrJTIwYWZyaWNhbiUyMHN1bnNldCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ1MDY3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgPaperTexture = "https://images.unsplash.com/photo-1648717008621-ee7e6acfe270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMHRleHR1cmUlMjBncmFpbiUyMHZpbnRhZ2V8ZW58MXx8fHwxNzc0NTA2NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

function AppContent() {
  return (
    <div className="min-h-screen bg-[#F2E0C0] font-sans selection:bg-[#E09A50] selection:text-[#1A0C04] relative">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-20 z-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Header / Hero */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl mx-auto mix-blend-multiply mb-16 px-4 md:px-0 opacity-90">
            <ImageWithFallback 
              src={heroLogo} 
              alt="Meridian at Dusk Sessions" 
              className="w-full h-auto drop-shadow-sm" 
            />
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-sm md:text-base text-[#C4412A] tracking-[0.2em] uppercase mb-6">Brand Guidelines & Assets</p>
            <h1 className="font-serif text-3xl md:text-5xl text-[#1A0C04] italic leading-tight">
              "Where the sun meets the sound."
            </h1>
          </div>
        </div>
      </header>

      {/* Navigation - sticky */}
      <nav className="sticky top-0 z-40 bg-[#F2E0C0]/90 backdrop-blur-md border-y border-[#3D1F0A]/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <ul className="flex items-center overflow-x-auto whitespace-nowrap hide-scrollbar gap-8 py-4 font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            <li><a href="#colors" className="hover:text-[#C4412A] transition-colors">Colors</a></li>
            <li><a href="#typography" className="hover:text-[#C4412A] transition-colors">Typography</a></li>
            <li><a href="#voice" className="hover:text-[#C4412A] transition-colors">Voice & Tone</a></li>
            <li><a href="#texture" className="hover:text-[#C4412A] transition-colors">Texture & Feel</a></li>
            <li><a href="#components" className="hover:text-[#C4412A] transition-colors">Components</a></li>
            <li><a href="#templates" className="hover:text-[#C4412A] transition-colors">Social Templates</a></li>
            <li><a href="/design-system" className="hover:text-[#C4412A] transition-colors">Design System</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Colors */}
        <GuidelineSection id="colors" title="Color Palette" subtitle="A warm, grounded palette inspired by the African sunset, soil, and vintage print.">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            <ColorSwatch name="Midnight Espresso" hex="#1A0C04" />
            <ColorSwatch name="Dark Mahogany" hex="#3D1F0A" />
            <ColorSwatch name="Burnt Sienna" hex="#7A3B10" />
            <ColorSwatch name="Amber Dusk" hex="#C4712A" />
            <ColorSwatch name="Golden Hour" hex="#E09A50" />
            <ColorSwatch name="Warm Sand" hex="#D4B88A" />
            <ColorSwatch name="Parchment" hex="#F2E0C0" />
            <div className="col-span-2 md:col-span-3 lg:col-span-4 border-t border-[#3D1F0A]/10 pt-8 mt-4 grid grid-cols-2 md:grid-cols-3 gap-x-8">
              <ColorSwatch name="Terracotta" hex="#C4412A" isAccent />
              <ColorSwatch name="Dusty Rose" hex="#D4845C" isAccent />
              <ColorSwatch name="Umber" hex="#8A6040" isAccent />
            </div>
          </div>
        </GuidelineSection>

        {/* Typography */}
        <GuidelineSection id="typography" title="Typography" subtitle="Elegant serifs mixed with utilitarian mono-spaced fonts. Never perfectly clean.">
          <TypographySpec />
        </GuidelineSection>

        {/* Voice & Tone */}
        <GuidelineSection id="voice" title="Voice & Tone" subtitle="Quiet confidence. We don't yell. We invite.">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <VoiceAndToneCard 
              title="We Are" 
              heading="Warm but exclusive" 
              description="Welcoming to the right people — not everyone. The door is soft, but it exists." 
            />
            <VoiceAndToneCard 
              title="We Are" 
              heading="Understated" 
              description="Never hype. Never countdown clocks. Let the music and the people speak louder than the marketing." 
            />
            <VoiceAndToneCard 
              title="We Are" 
              heading="Rooted" 
              description="African. Ugandan. The golden hour belongs here too — we are not imitating Ibiza, we are answering it." 
            />
            <VoiceAndToneCard 
              title="We Are Not" 
              heading="Loud or pushy" 
              description='No "🔥🔥 BIG ANNOUNCEMENT". No urgency bait. Confidence needs no exclamation mark.' 
              isNot 
            />
          </div>

          <div className="bg-[#D4B88A]/10 p-8 md:p-12 border border-[#3D1F0A]/10 rounded-sm">
             <h4 className="font-mono text-sm tracking-widest uppercase text-[#8A6040] mb-8">Copy Examples</h4>
             
             <div className="space-y-8">
               <div className="grid md:grid-cols-12 gap-4 border-b border-[#3D1F0A]/10 pb-6">
                 <div className="md:col-span-3 font-mono text-xs uppercase text-[#8A6040] tracking-widest pt-1">Taglines</div>
                 <div className="md:col-span-9 font-serif italic text-2xl text-[#1A0C04] space-y-3">
                   <p>"Where the sun meets the sound."</p>
                   <p>"Feel it before the dark comes."</p>
                   <p>"The hour between light and music."</p>
                 </div>
               </div>

               <div className="grid md:grid-cols-12 gap-4 border-b border-[#3D1F0A]/10 pb-6">
                 <div className="md:col-span-3 font-mono text-xs uppercase text-[#8A6040] tracking-widest pt-1">Form Intro</div>
                 <div className="md:col-span-9 font-sans text-lg text-[#3D1F0A] leading-relaxed">
                   "This is not a party announcement. It is an invitation — and your answer shapes what we build. Under 4 minutes."
                 </div>
               </div>

               <div className="grid md:grid-cols-12 gap-4">
                 <div className="md:col-span-3 font-mono text-xs uppercase text-[#8A6040] tracking-widest pt-1">YouTube Bio</div>
                 <div className="md:col-span-9 font-sans text-lg text-[#3D1F0A] leading-relaxed">
                   "Meridian at Dusk Sessions — Session 001. Recorded live in Kampala. Deep house, afro house, soulful amapiano. No lights. No stage. Just the music and the people who felt it."
                 </div>
               </div>
             </div>
          </div>
        </GuidelineSection>

        {/* Texture & Visual Feel */}
        <GuidelineSection id="texture" title="Texture & Feel" subtitle="Tactile, warm, printed. Away from the pristine digital space.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            <TextureCard 
              title="Grain & Distress" 
              description="All assets carry subtle paper grain or ink bleed. Nothing is too clean or digital."
              visual={
                <ImageWithFallback src={imgPaperTexture} alt="Paper grain" className="w-full h-full object-cover mix-blend-multiply opacity-80 sepia-[0.3]" />
              }
            />
            <TextureCard 
              title="Woodblock / Stamp" 
              description="Labels, dates and tags use a stamped aesthetic — slightly imperfect edges, mono typeface."
              visual={
                <div className="w-full h-full flex items-center justify-center p-8 bg-[#F2E0C0]">
                  <div className="border-4 border-[#1A0C04] px-6 py-4 transform -rotate-2 mix-blend-multiply opacity-80" style={{ filter: "url(#roughness)" }}>
                    <span className="font-mono text-xl tracking-[0.2em] uppercase text-[#1A0C04] font-bold">Session 001</span>
                  </div>
                  {/* SVG Filter for rough edges */}
                  <svg className="hidden">
                    <filter id="roughness">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </svg>
                </div>
              }
            />
            <TextureCard 
              title="Risograph Layers" 
              description="Overlapping colour areas with slight mis-registration. Warm, printed, tactile."
              visual={
                <div className="w-full h-full flex items-center justify-center bg-[#F2E0C0] relative mix-blend-multiply">
                  <div className="w-24 h-24 rounded-full bg-[#C4412A] mix-blend-multiply absolute -ml-6 -mt-4 opacity-90 blur-[1px]"></div>
                  <div className="w-24 h-24 rounded-full bg-[#E09A50] mix-blend-multiply absolute ml-6 mt-4 opacity-90 blur-[0.5px]"></div>
                </div>
              }
            />
            <TextureCard 
              title="Sunburst Motif" 
              description="Rays of light, horizon lines, the half-sun — recurring visual across all touchpoints."
              visual={
                <div className="w-full h-full flex items-end justify-center bg-[#F2E0C0] pb-8 overflow-hidden">
                  <div className="relative w-32 h-16 overflow-hidden">
                    <div className="absolute bottom-0 w-32 h-32 rounded-full border-4 border-[#C4712A]"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#1A0C04]"></div>
                    {/* rays */}
                    <div className="absolute bottom-0 left-1/2 origin-bottom w-1 h-40 bg-[#D4B88A] -rotate-[30deg] -ml-0.5"></div>
                    <div className="absolute bottom-0 left-1/2 origin-bottom w-1 h-40 bg-[#D4B88A] rotate-[30deg] -ml-0.5"></div>
                    <div className="absolute bottom-0 left-1/2 origin-bottom w-1 h-40 bg-[#D4B88A] -rotate-[60deg] -ml-0.5"></div>
                    <div className="absolute bottom-0 left-1/2 origin-bottom w-1 h-40 bg-[#D4B88A] rotate-[60deg] -ml-0.5"></div>
                  </div>
                </div>
              }
            />
            <TextureCard 
              title="Vinyl Record Label" 
              description="Circular compositions, circular crops on photos, circular artist badges."
              visual={
                <div className="w-full h-full flex items-center justify-center bg-[#F2E0C0]">
                  <div className="w-32 h-32 rounded-full bg-[#1A0C04] flex items-center justify-center relative p-2 shadow-inner">
                    <div className="w-full h-full rounded-full border border-[#D4B88A]/30 flex items-center justify-center p-1">
                      <div className="w-full h-full rounded-full bg-[#C4712A] flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#F2E0C0]"></div>
                        {/* curved text approximation */}
                        <div className="absolute inset-0 rounded-full border border-[#1A0C04]/20 m-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <TextureCard 
              title="Parchment Ground" 
              description="Cream / off-white is the default background. Pure white feels too cold for this brand."
              visual={
                <div className="w-full h-full flex items-center justify-center bg-[#F2E0C0] relative p-6">
                  <div className="w-full h-full border border-[#D4B88A]/50 bg-[#F2E0C0] shadow-sm flex items-center justify-center text-[#1A0C04] font-serif italic text-lg">
                    Not pure white
                  </div>
                </div>
              }
            />
          </div>
        </GuidelineSection>

        {/* Components */}
        <GuidelineSection id="components" title="Components" subtitle="Actionable UI pieces retaining the print aesthetic.">
          <ComponentExamples />
        </GuidelineSection>

        {/* Social Templates */}
        <GuidelineSection id="templates" title="Social Templates" subtitle="Ready-to-use compositions for Instagram and stories.">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-6">
               <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040]">Instagram Post (1:1)</h3>
               <SocialTemplate type="post" imageUrl={imgIntimateLighting} />
            </div>
            
            <div className="space-y-6">
               <h3 className="font-mono text-sm tracking-widest uppercase text-[#8A6040]">Instagram Story (9:16)</h3>
               <div className="flex justify-center">
                 <SocialTemplate type="story" imageUrl={imgDuskLandscape} />
               </div>
            </div>
          </div>
        </GuidelineSection>

      </main>

      <footer className="bg-[#1A0C04] text-[#D4B88A] py-16 text-center mt-24 border-t-4 border-[#C4712A]">
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
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppContent,
  },
  {
    path: "/design-system",
    Component: DesignSystemPage,
  },
  {
    path: "/invitation-example",
    Component: InvitationPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}