import React from 'react';
import { CalendarPlus } from 'lucide-react';
import type { Event } from '@/data/events';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function toICSDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
}

function buildICS(event: Event) {
  const start = toICSDate(event.date);
  // Treat event as all-day since exact start time isn't an ISO datetime
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MADS//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@meridianatdusk.com`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${start}`,
    `SUMMARY:${event.session} — ${event.title}`,
    `DESCRIPTION:Meridian at Dusk Sessions. ${event.description}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function buildGoogleURL(event: Event) {
  const date = toICSDate(event.date);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.session} — ${event.title}`,
    dates: `${date}/${date}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function AddToCalendar({ event }: { event: Event }) {
  const downloadICS = () => {
    const blob = new Blob([buildICS(event)], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.id}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-3">
        Add to Calendar
      </p>
      <div className="space-y-2">
        <a
          href={buildGoogleURL(event)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 w-full border border-[#3D1F0A]/15 px-3 py-2 font-mono text-xs tracking-widest uppercase text-[#3D1F0A] hover:border-[#C4712A] hover:text-[#C4712A] transition-colors"
        >
          <CalendarPlus size={13} />
          Google Calendar
        </a>
        <button
          onClick={downloadICS}
          className="flex items-center gap-2 w-full border border-[#3D1F0A]/15 px-3 py-2 font-mono text-xs tracking-widest uppercase text-[#3D1F0A] hover:border-[#C4712A] hover:text-[#C4712A] transition-colors"
        >
          <CalendarPlus size={13} />
          Apple / Outlook (.ics)
        </button>
      </div>
    </div>
  );
}
