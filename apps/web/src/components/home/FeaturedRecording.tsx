import React from 'react';
import { Link } from 'react-router-dom';
import { getPastEvents } from '@/data/events';
import { MixEmbed } from '@/components/events/MixEmbed';

export function FeaturedRecording() {
  const past = getPastEvents();
  if (past.length === 0) return null;

  // Most recent past event with a YouTube set
  const event = [...past]
    .reverse()
    .find((e) => e.djSets?.some((s) => s.mixLinks.some((l) => l.platform === 'youtube')));

  if (!event) return null;

  const set = event.djSets!.find((s) => s.mixLinks.some((l) => l.platform === 'youtube'))!;
  const ytLink = set.mixLinks.find((l) => l.platform === 'youtube')!;

  return (
    <section className="px-6 pb-24 border-t border-[#3D1F0A]/10 pt-24">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-[#3D1F0A]/10" />
          <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
            Latest Recording
          </span>
          <div className="h-px flex-1 bg-[#3D1F0A]/10" />
        </div>

        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#C4412A] mb-1">
              {event.session}
            </p>
            <h2 className="font-serif italic text-2xl text-[#1A0C04]">{set.dj}</h2>
            <p className="font-mono text-xs text-[#8A6040] mt-1">
              {set.genre}{set.duration && ` · ${set.duration}`}
            </p>
          </div>
          <Link
            to={`/sessions/${event.id}`}
            className="font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4412A] transition-colors"
          >
            Full Session →
          </Link>
        </div>

        <MixEmbed mixLink={ytLink} />
      </div>
    </section>
  );
}
