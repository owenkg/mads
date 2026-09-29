import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Music } from 'lucide-react';
import { getDJById } from '@/data/artists';
import { events } from '@/data/events';
import { MixEmbed } from '@/components/events/MixEmbed';
import { formatDate } from '@/lib/utils';

const platformLabel: Record<string, string> = {
  instagram: 'Instagram',
  mixcloud: 'Mixcloud',
  soundcloud: 'SoundCloud',
  youtube: 'YouTube',
  twitter: 'Twitter / X',
};

export function DJProfilePage() {
  const { id } = useParams<{ id: string }>();
  const dj = id ? getDJById(id) : null;

  if (!dj) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <p className="font-serif italic text-2xl text-[#8A6040]">Artist not found.</p>
        <Link
          to="/"
          className="font-mono text-xs tracking-widest uppercase text-[#C4412A] hover:underline"
        >
          ← Back to sessions
        </Link>
      </div>
    );
  }

  // Collect all sets by this artist across all past events
  const sets = events.flatMap((event) =>
    (event.djSets ?? [])
      .filter((s) => s.artistId === dj.id)
      .map((s) => ({ ...s, event }))
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1A0C04] pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4712A] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All Sessions
          </Link>

          <div className="flex items-end gap-8">
            {/* Photo or placeholder */}
            <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 bg-[#3D1F0A] border border-[#C4712A]/30 overflow-hidden">
              {dj.photo ? (
                <img src={dj.photo} alt={dj.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Music size={32} className="text-[#C4712A]/40" />
                </div>
              )}
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4712A] mb-2">
                Artist
              </p>
              <h1 className="font-serif italic text-4xl md:text-5xl text-[#F2E0C0] mb-4">
                {dj.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {dj.genres.map((g) => (
                  <span
                    key={g}
                    className="font-mono text-xs tracking-widest uppercase border border-[#C4712A]/30 text-[#D4B88A] px-2 py-0.5"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 pt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main: bio + sets */}
          <div className="lg:col-span-2 space-y-12">
            <p className="font-sans text-lg text-[#3D1F0A] leading-relaxed">{dj.bio}</p>

            {sets.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                  <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                    Recorded Sets
                  </span>
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                </div>

                <div className="space-y-10">
                  {sets.map(({ event, genre, duration, mixLinks }, i) => (
                    <div key={i}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Link
                            to={`/sessions/${event.id}`}
                            className="font-serif italic text-xl text-[#1A0C04] hover:text-[#C4412A] transition-colors"
                          >
                            {event.session}
                          </Link>
                          <p className="font-mono text-xs text-[#8A6040] mt-1">
                            {formatDate(event.date)}
                            {duration && ` · ${duration}`}
                          </p>
                          <p className="font-mono text-xs text-[#8A6040]">{genre}</p>
                        </div>
                        <Music size={16} className="text-[#C4712A] mt-1 shrink-0" />
                      </div>
                      <div className="space-y-4">
                        {mixLinks.map((link, j) => (
                          <MixEmbed key={j} mixLink={link} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: social links */}
          {dj.social && dj.social.length > 0 && (
            <aside>
              <div className="border border-[#3D1F0A]/15 bg-[#F2E0C0] p-6 sticky top-24">
                <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040] border-b border-[#3D1F0A]/10 pb-4 mb-4">
                  Find {dj.name.split(' ')[0]}
                </p>
                <ul className="space-y-3">
                  {dj.social.map((link) => (
                    <li key={link.platform}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between group"
                      >
                        <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040] group-hover:text-[#C4412A] transition-colors">
                          {platformLabel[link.platform] ?? link.platform}
                        </span>
                        <span className="font-sans text-xs text-[#C4712A] group-hover:text-[#C4412A] transition-colors">
                          {link.handle} →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#3D1F0A]/10 mt-6 pt-6">
                  <p className="font-mono text-xs text-[#8A6040]">
                    {sets.length} recorded session{sets.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
