import React from 'react';
import type { MixLink } from '@/data/events';
import { ExternalLink, Music } from 'lucide-react';

const platformConfig = {
  youtube: {
    color: '#FF0000',
    label: 'YouTube',
    icon: '▶',
  },
  mixcloud: {
    color: '#5000ff',
    label: 'Mixcloud',
    icon: '♫',
  },
  soundcloud: {
    color: '#FF5500',
    label: 'SoundCloud',
    icon: '☁',
  },
};

function getYouTubeEmbedUrl(url: string) {
  // Playlist
  const playlist = url.match(/[?&]list=([^&\s]+)/);
  if (playlist) return `https://www.youtube.com/embed/videoseries?list=${playlist[1]}`;
  // Single video
  const video = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return video ? `https://www.youtube.com/embed/${video[1]}` : null;
}

function getMixcloudEmbedUrl(url: string) {
  // https://www.mixcloud.com/username/trackname/
  const path = url.replace('https://www.mixcloud.com', '').replace(/\/$/, '');
  return `https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=${encodeURIComponent(path)}`;
}

function getSoundcloudEmbedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23C4712A&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
}

export function MixEmbed({ mixLink }: { mixLink: MixLink }) {
  const config = platformConfig[mixLink.platform];

  let embedUrl: string | null = null;
  if (mixLink.platform === 'youtube') embedUrl = getYouTubeEmbedUrl(mixLink.url);
  else if (mixLink.platform === 'mixcloud') embedUrl = getMixcloudEmbedUrl(mixLink.url);
  else if (mixLink.platform === 'soundcloud') embedUrl = getSoundcloudEmbedUrl(mixLink.url);

  return (
    <div className="border border-[#3D1F0A]/15 bg-[#F2E0C0] overflow-hidden">
      {/* Platform header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#3D1F0A]/10">
        <div className="flex items-center gap-2">
          <span style={{ color: config.color }} className="text-sm font-bold">
            {config.icon}
          </span>
          <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            {config.label}
          </span>
          <span className="text-[#3D1F0A] font-sans text-sm ml-2">{mixLink.label}</span>
        </div>
        <a
          href={mixLink.url}
          target="_blank"
          rel="noreferrer"
          className="text-[#8A6040] hover:text-[#C4412A] transition-colors"
          aria-label="Open in new tab"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Embed */}
      {embedUrl ? (
        <div
          className={
            mixLink.platform === 'youtube'
              ? 'aspect-video'
              : mixLink.platform === 'soundcloud'
              ? 'h-[166px]'
              : 'h-[120px]'
          }
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title={mixLink.label}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="h-20 flex items-center justify-center gap-2 text-[#8A6040]">
          <Music size={16} />
          <a
            href={mixLink.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs underline hover:text-[#C4412A] transition-colors"
          >
            Listen on {config.label} →
          </a>
        </div>
      )}
    </div>
  );
}
