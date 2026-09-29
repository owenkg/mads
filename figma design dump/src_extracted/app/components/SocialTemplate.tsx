import React from 'react';
import { Play, Share2, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TemplateProps {
  type: 'post' | 'story' | 'poster';
  imageUrl: string;
  caption?: string;
}

export function SocialTemplate({ type, imageUrl, caption }: TemplateProps) {
  if (type === 'post') {
    return (
      <div className="w-full max-w-sm mx-auto bg-[#F2E0C0] shadow-xl overflow-hidden rounded-md border border-[#D4B88A]/40 relative">
        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1A0C04] flex items-center justify-center text-[#F2E0C0] font-mono text-[10px] uppercase tracking-wider">M</div>
          <span className="font-sans font-bold text-sm text-[#1A0C04]">meridianatdusk</span>
        </div>
        <div className="aspect-square relative">
          <ImageWithFallback src={imageUrl} alt="Meridian Post" className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale-[0.2]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0C04]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-serif italic text-2xl text-[#F2E0C0] mb-2 leading-none">Session 001</h3>
            <p className="font-mono text-xs text-[#D4B88A] tracking-widest uppercase">Kampala · Uganda</p>
          </div>
        </div>
        <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-black/5">
          <div className="flex gap-4 mb-3 text-[#1A0C04]">
            <Heart size={20} />
            <MessageCircle size={20} />
            <Share2 size={20} />
          </div>
          <p className="font-sans text-sm text-[#3D1F0A] leading-relaxed">
            <span className="font-bold mr-2">meridianatdusk</span>
            {caption || '"We are building something quiet. Something that starts at noon and ends before the city gets loud. More soon."'}
          </p>
        </div>
      </div>
    );
  }

  if (type === 'story') {
    return (
      <div className="w-full max-w-[280px] mx-auto bg-[#1A0C04] shadow-2xl rounded-2xl overflow-hidden border border-[#D4B88A]/20 relative aspect-[9/16]">
        <ImageWithFallback src={imageUrl} alt="Story bg" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen sepia-[0.3]" />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />

        <div className="absolute top-8 left-0 right-0 px-6">
          <div className="w-full h-1 bg-white/20 rounded-full mb-4">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-[#D4B88A] flex items-center justify-center text-[#1A0C04] font-mono text-[8px] uppercase tracking-wider">M</div>
            <span className="font-sans font-medium text-xs text-white">meridianatdusk</span>
            <span className="font-sans text-xs text-white/60 ml-auto">2h</span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
           <div className="w-24 h-24 border border-[#C4712A]/60 rounded-full mb-6 flex items-center justify-center p-2 backdrop-blur-md bg-[#1A0C04]/30">
             <div className="w-full h-full border border-[#D4B88A] rounded-full flex items-center justify-center">
               <span className="font-serif italic text-3xl text-[#F2E0C0]">001</span>
             </div>
           </div>
           
           <h2 className="font-serif text-3xl text-[#F2E0C0] mb-2 leading-tight">Invites Sent</h2>
           <p className="font-mono text-[10px] tracking-[0.2em] text-[#D4B88A] uppercase mb-8">
             By Invitation Only
           </p>

           <div className="mt-auto mb-16">
             <button className="bg-[#C4712A] text-[#1A0C04] font-mono text-xs uppercase tracking-widest py-3 px-8 rounded-sm hover:bg-[#E09A50] transition-colors">
               Request Invite
             </button>
           </div>
        </div>
      </div>
    );
  }

  return null;
}
