import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import type { Event } from '@/data/events';
import { formatDate } from '@/lib/utils';

export function EventCard({ event }: { event: Event }) {
  const isPast = event.status === 'past';

  return (
    <Link
      to={`/sessions/${event.id}`}
      className="group block bg-[#F2E0C0] border border-[#3D1F0A]/15 hover:border-[#C4712A]/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Card grain */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Image */}
      {event.image && (
        <div className="relative h-64 overflow-hidden bg-[#3D1F0A]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover mix-blend-multiply opacity-80 sepia-[0.2] group-hover:scale-105 transition-transform duration-700"
          />
          {/* Status badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={[
                'font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 border',
                isPast
                  ? 'bg-[#1A0C04] text-[#D4B88A] border-[#1A0C04]'
                  : 'bg-[#C4412A] text-[#F2E0C0] border-[#C4412A]',
              ].join(' ')}
            >
              {isPast ? 'Past' : 'Upcoming'}
            </span>
          </div>
          {/* Session stamp */}
          <div className="absolute bottom-4 right-4 z-10">
            <span
              className="font-mono text-xs tracking-[0.15em] uppercase px-2 py-1 border-2 border-[#D4B88A]/70 text-[#D4B88A] transform rotate-[-2deg] inline-block"
              style={{ filter: 'url(#roughness)' }}
            >
              {event.session}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.genres.map((genre) => (
            <span
              key={genre}
              className="font-mono text-xs tracking-widest uppercase text-[#8A6040] border border-[#8A6040]/30 px-2 py-0.5"
            >
              {genre}
            </span>
          ))}
        </div>

        <h2 className="font-serif italic text-xl text-[#1A0C04] mb-4 group-hover:text-[#C4712A] transition-colors leading-snug">
          {event.title}
        </h2>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#8A6040]">
            <Calendar size={14} />
            <span className="font-mono text-xs">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-[#8A6040]">
            <Clock size={14} />
            <span className="font-mono text-xs">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-[#8A6040]">
            <MapPin size={14} />
            <span className="font-mono text-xs">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-[#8A6040]">
            <Users size={14} />
            <span className="font-mono text-xs">{event.capacity} guests</span>
          </div>
        </div>

        {/* CTA hint */}
        <div className="mt-6 pt-4 border-t border-[#3D1F0A]/10 flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest uppercase text-[#C4412A] group-hover:tracking-[0.25em] transition-all duration-300">
            {isPast ? 'View recording →' : 'Request invite →'}
          </span>
          {!isPast && event.rsvpOpen && (
            <span className="font-mono text-xs text-[#C4712A] animate-pulse">
              ● Open
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
