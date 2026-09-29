import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Music, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import { getEventById } from '@/data/events';
import { formatDate } from '@/lib/utils';
import { MixEmbed } from '@/components/events/MixEmbed';
import { RSVPForm } from '@/components/events/RSVPForm';
import { EventGallery } from '@/components/events/EventGallery';

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : null;

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <p className="font-serif italic text-2xl text-[#8A6040]">Session not found.</p>
        <Link
          to="/"
          className="font-mono text-xs tracking-widest uppercase text-[#C4412A] hover:underline"
        >
          ← Back to sessions
        </Link>
      </div>
    );
  }

  const isPast = event.status === 'past';

  return (
    <div className="pb-24">
      {/* Hero image */}
      {event.image && (
        <div className="relative h-[50vh] min-h-[300px] overflow-hidden bg-[#1A0C04]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover mix-blend-multiply opacity-70 sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F2E0C0]" />

          {/* Session stamp over image */}
          <div className="absolute bottom-8 left-8 z-10">
            <span
              className="font-mono text-sm tracking-[0.2em] uppercase border-2 border-[#D4B88A]/80 text-[#D4B88A] px-3 py-1.5 transform -rotate-1 inline-block"
              style={{ filter: 'url(#roughness)' }}
            >
              {event.session}
            </span>
          </div>
          <div className="absolute bottom-8 right-8 z-10">
            <span
              className={[
                'font-mono text-xs tracking-widest uppercase px-3 py-1 border',
                isPast
                  ? 'bg-[#1A0C04]/80 text-[#D4B88A] border-[#D4B88A]/40'
                  : 'bg-[#C4412A] text-[#F2E0C0] border-[#C4412A]',
              ].join(' ')}
            >
              {isPast ? 'Past Session' : 'Upcoming'}
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-5xl px-6 pt-12">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4412A] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All Sessions
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Title & genres */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {event.genres.map((g) => (
                  <span
                    key={g}
                    className="font-mono text-xs tracking-widest uppercase border border-[#8A6040]/30 text-[#8A6040] px-2 py-0.5"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <h1 className="font-serif italic text-3xl md:text-5xl text-[#1A0C04] leading-tight mb-6">
                {event.title}
              </h1>
              <p className="font-sans text-lg text-[#3D1F0A] leading-relaxed">{event.description}</p>
            </div>

            {/* Past: DJ sets & recordings */}
            {isPast && event.djSets && event.djSets.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                  <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                    Recordings
                  </span>
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                </div>

                {event.djSets.map((set, i) => (
                  <div key={i} className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {set.artistId ? (
                          <Link
                            to={`/artists/${set.artistId}`}
                            className="font-serif italic text-xl text-[#1A0C04] hover:text-[#C4412A] transition-colors inline-flex items-center gap-2"
                          >
                            {set.dj}
                            <ExternalLink size={14} className="text-[#8A6040]" />
                          </Link>
                        ) : (
                          <p className="font-serif italic text-xl text-[#1A0C04]">{set.dj}</p>
                        )}
                        <p className="font-mono text-xs text-[#8A6040]">
                          {set.genre}
                          {set.duration && ` · ${set.duration}`}
                        </p>
                      </div>
                      <Music size={18} className="text-[#C4712A]" />
                    </div>
                    <div className="space-y-4">
                      {set.mixLinks.map((link, j) => (
                        <MixEmbed key={j} mixLink={link} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Past: photo gallery */}
            {isPast && event.gallery && event.gallery.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                  <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                    Gallery
                  </span>
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                </div>
                <EventGallery images={event.gallery} sessionLabel={event.session} />
              </div>
            )}

            {/* Upcoming: RSVP form */}
            {!isPast && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                  <span className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                    Request Your Spot
                  </span>
                  <div className="h-px flex-1 bg-[#3D1F0A]/10" />
                </div>
                {event.rsvpOpen ? (
                  <RSVPForm event={event} />
                ) : (
                  <div className="text-center py-12 border border-[#3D1F0A]/15">
                    <p className="font-serif italic text-xl text-[#8A6040]">
                      RSVP is currently closed.
                    </p>
                    <p className="font-mono text-xs text-[#8A6040] mt-2">
                      Follow us on Instagram for updates.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar: event info */}
          <aside>
            <div className="border border-[#3D1F0A]/15 bg-[#F2E0C0] p-6 space-y-6 sticky top-24">
              <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040] border-b border-[#3D1F0A]/10 pb-4">
                Event Details
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-[#C4412A] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[#8A6040] mb-1">Date</p>
                    <p className="font-sans text-sm text-[#1A0C04]">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#C4412A] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[#8A6040] mb-1">Time</p>
                    <p className="font-sans text-sm text-[#1A0C04]">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#C4412A] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[#8A6040] mb-1">Location</p>
                    <p className="font-sans text-sm text-[#1A0C04]">{event.location}</p>
                    {event.locationDetail && (
                      <p className="font-sans text-xs text-[#8A6040] mt-1 italic">
                        {event.locationDetail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users size={16} className="text-[#C4412A] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-[#8A6040] mb-1">Capacity</p>
                    <p className="font-sans text-sm text-[#1A0C04]">{event.capacity} guests</p>
                  </div>
                </div>

                {!isPast && event.rsvpDeadline && (
                  <div className="border-t border-[#3D1F0A]/10 pt-4">
                    <p className="font-mono text-xs text-[#8A6040] mb-1">RSVP Deadline</p>
                    <p className="font-sans text-sm text-[#C4412A] font-medium">
                      {formatDate(event.rsvpDeadline)}
                    </p>
                  </div>
                )}
              </div>

              {/* Dress code / policy snippets for upcoming */}
              {!isPast && (
                <div className="border-t border-[#3D1F0A]/10 pt-4 space-y-3">
                  <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                    House Rules
                  </p>
                  <ul className="font-sans text-xs text-[#3D1F0A] space-y-1.5 leading-relaxed">
                    <li>· Invite only — non-transferable</li>
                    <li>· Valid photo ID required</li>
                    <li>· No phones on the dance floor</li>
                    <li>· Comfortable shoes — we'll be outside</li>
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
