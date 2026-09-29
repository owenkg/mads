import React, { useState } from 'react';
import { events, getPastEvents, getUpcomingEvents } from '@/data/events';
import { EventCard } from '@/components/events/EventCard';

export function HomePage() {
  const [tab, setTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const displayed =
    tab === 'all' ? events : tab === 'upcoming' ? getUpcomingEvents() : getPastEvents();

  const upcomingCount = getUpcomingEvents().length;
  const pastCount = getPastEvents().length;

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <img
              src={`${import.meta.env.BASE_URL}mads_logo.webp`}
              alt="Meridian at Dusk Sessions"
              className="w-72 md:w-96 h-auto"
            />
          </div>

          <div className="mb-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4412A]">
              Meridian at Dusk Sessions
            </span>
          </div>
          <h1 className="font-serif italic text-4xl md:text-6xl text-[#1A0C04] leading-tight mb-8">
            Where the sun meets the sound.
          </h1>
          <p className="font-sans text-lg text-[#3D1F0A] max-w-2xl mx-auto leading-relaxed">
            An intimate music experience in Kampala. Deep house, afro house, soulful amapiano —
            before the dark comes. Invite only.
          </p>
        </div>

        {/* Horizon line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4712A]/30 to-transparent" />
      </section>

      {/* Sessions listing */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex items-center gap-0 mb-12 border-b border-[#3D1F0A]/10">
            {[
              { key: 'all', label: `All Sessions (${events.length})` },
              { key: 'upcoming', label: `Upcoming (${upcomingCount})` },
              { key: 'past', label: `Past (${pastCount})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as typeof tab)}
                className={[
                  'font-mono text-xs tracking-widest uppercase px-6 py-4 border-b-2 transition-all',
                  tab === key
                    ? 'border-[#C4412A] text-[#C4412A]'
                    : 'border-transparent text-[#8A6040] hover:text-[#3D1F0A]',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {displayed.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif italic text-2xl text-[#8A6040]">Nothing here yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayed.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
