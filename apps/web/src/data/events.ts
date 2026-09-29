export type EventStatus = 'past' | 'upcoming' | 'cancelled';

export type MixLink = {
  platform: 'youtube' | 'mixcloud' | 'soundcloud';
  url: string;
  label: string;
};

export type DJSet = {
  dj: string;
  genre: string;
  duration?: string;
  mixLinks: MixLink[];
};

export type Event = {
  id: string;
  session: string; // e.g. "Session 001"
  title: string;
  date: string; // ISO format
  time: string; // e.g. "4:00 PM - Sunset"
  location: string;
  locationDetail?: string; // revealed closer to event
  description: string;
  image?: string;
  capacity: number;
  status: EventStatus;
  genres: string[];
  // Past event fields
  djSets?: DJSet[];
  gallery?: string[]; // photo URLs for past event gallery
  // Future event fields
  rsvpDeadline?: string; // ISO
  rsvpOpen?: boolean;
};

export const events: Event[] = [
  {
    id: 'session-001',
    session: 'Session 001',
    title: 'Where the sun meets the sound',
    date: '2026-04-12',
    time: '4:00 PM – Sunset',
    location: 'Kampala, Uganda',
    locationDetail: 'Revealed to confirmed guests 24hrs before',
    description:
      'The first Meridian at Dusk Sessions. An intimate afternoon of deep house, afro house, and soulful amapiano as the sun sets over Kampala. No lights. No stage. Just the music and the people who felt it.',
    image: 'https://images.unsplash.com/photo-1680446459280-9f77db805b8d?w=1080&q=80',
    capacity: 20,
    status: 'past',
    genres: ['Deep House', 'Afro House', 'Soulful Amapiano'],
    djSets: [
      {
        dj: 'Owen KG',
        genre: 'Deep House · Afro House',
        duration: '3h 00m',
        mixLinks: [
          {
            platform: 'mixcloud',
            url: 'https://www.mixcloud.com/',
            label: 'Full Set — Mixcloud',
          },
        ],
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
    ],
  },
  {
    id: 'session-002',
    session: 'Session 002',
    title: 'The second hour',
    date: '2026-11-15',
    time: '4:00 PM – Sunset',
    location: 'Kampala, Uganda',
    locationDetail: 'Revealed to confirmed guests 24hrs before',
    description:
      'The second gathering. A new venue, new sounds, same intimacy. Meridian at Dusk returns for an afternoon that belongs to those present.',
    image: 'https://images.unsplash.com/photo-1772290617718-2a0908ff0f35?w=1080&q=80',
    capacity: 20,
    status: 'upcoming',
    genres: ['Deep House', 'Soulful Amapiano', 'Afro Soul'],
    rsvpDeadline: '2026-11-08',
    rsvpOpen: true,
  },
];

export function getPastEvents() {
  return events.filter((e) => e.status === 'past');
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status === 'upcoming');
}

export function getEventById(id: string) {
  return events.find((e) => e.id === id);
}
