import React, { useState } from 'react';
import type { Event } from '@/data/events';
import { formatDate } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FormData = {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  howDidYouHear: string;
  musicNote: string;
  recordingConsent: boolean;
};

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  instagram: '',
  howDidYouHear: '',
  musicNote: '',
  recordingConsent: false,
};

function encode(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

export function RSVPForm({ event }: { event: Event }) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [data, setData] = useState<FormData>(initialData);

  const update = (field: keyof FormData, value: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'rsvp',
          'event-id': event.id,
          'event-title': event.title,
          'event-rsvp-deadline': event.rsvpDeadline ?? '',
          name: data.name,
          email: data.email,
          phone: data.phone,
          instagram: data.instagram,
          howDidYouHear: data.howDidYouHear,
          musicNote: data.musicNote,
          recordingConsent: data.recordingConsent ? 'yes' : 'no',
        }),
      });
      setFormState('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="border border-[#3D1F0A]/15 bg-[#F2E0C0] p-8 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#C4712A] flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#F2E0C0]" />
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-[#C4412A] mb-3">
            Request Received
          </p>
          <h3 className="font-serif italic text-2xl text-[#1A0C04] mb-4">
            You're on the list.
          </h3>
          <p className="font-sans text-[#3D1F0A] leading-relaxed max-w-md mx-auto">
            We'll confirm your attendance via email by{' '}
            {event.rsvpDeadline ? formatDate(event.rsvpDeadline) : 'a week before the event'}.
          </p>
        </div>
        <p className="font-mono text-xs text-[#8A6040]">
          Questions? hello@meridianatdusk.com
        </p>
      </div>
    );
  }

  if (formState === 'error') {
    return (
      <div className="border border-[#C4412A]/30 bg-[#F2E0C0] p-8 text-center space-y-4">
        <p className="font-mono text-xs tracking-widest uppercase text-[#C4412A]">
          Submission Failed
        </p>
        <p className="font-sans text-[#3D1F0A]">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:hello@meridianatdusk.com" className="underline">
            hello@meridianatdusk.com
          </a>
          .
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="font-mono text-xs tracking-widest uppercase text-[#C4412A] hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          Full Name <span className="text-[#C4412A]">*</span>
        </label>
        <input
          required
          type="text"
          placeholder="As it appears on ID"
          value={data.name}
          onChange={(e) => update('name', e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-4 py-3 font-sans text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          Email Address <span className="text-[#C4412A]">*</span>
        </label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-4 py-3 font-sans text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+256 700 000 000"
          value={data.phone}
          onChange={(e) => update('phone', e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-4 py-3 font-sans text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
      </div>

      {/* Instagram */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          Instagram Handle
        </label>
        <input
          type="text"
          placeholder="@yourhandle"
          value={data.instagram}
          onChange={(e) => update('instagram', e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-4 py-3 font-sans text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
      </div>

      {/* How did you hear */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          How did you hear about us?
        </label>
        <select
          value={data.howDidYouHear}
          onChange={(e) => update('howDidYouHear', e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-[#F2E0C0] px-4 py-3 font-sans text-[#1A0C04] focus:outline-none focus:border-[#C4712A] transition-colors appearance-none"
        >
          <option value="">Select...</option>
          <option value="friend">A friend / word of mouth</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter / X</option>
          <option value="past-guest">I attended a previous session</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Music note */}
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-2">
          What music are you listening to at 4PM? (Optional)
        </label>
        <textarea
          placeholder="Share a track, artist, or feeling..."
          value={data.musicNote}
          onChange={(e) => update('musicNote', e.target.value)}
          rows={3}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-4 py-3 font-sans text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors resize-none"
        />
      </div>

      {/* Recording consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="recording-consent"
          checked={data.recordingConsent}
          onChange={(e) => update('recordingConsent', e.target.checked)}
          className="mt-1 accent-[#C4712A]"
        />
        <label htmlFor="recording-consent" className="font-sans text-sm text-[#3D1F0A] leading-relaxed">
          I understand this event may be recorded for YouTube/social media, and I consent to
          appearing in recordings and photographs.
        </label>
      </div>

      <div className="border-t border-[#3D1F0A]/10 pt-6">
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full bg-[#1A0C04] text-[#F2E0C0] font-mono text-sm tracking-[0.2em] uppercase py-4 hover:bg-[#3D1F0A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formState === 'submitting' ? 'Submitting...' : 'Request My Spot'}
        </button>
        <p className="font-mono text-xs text-center text-[#8A6040] mt-4">
          Invitations are not transferable. We'll confirm by email.
        </p>
      </div>
    </form>
  );
}
