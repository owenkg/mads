import React, { useState } from 'react';
import type { Event } from '@/data/events';
import { sanitizeText } from '@/lib/utils';

function encode(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

type State = 'idle' | 'submitting' | 'success' | 'error';

export function NotifyForm({ event }: { event: Event }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'notify-me',
          'event-id': event.id,
          'event-title': event.title,
          name: sanitizeText(name),
          email: sanitizeText(email),
        }),
      });
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="border border-[#3D1F0A]/15 p-6 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-[#C4412A] mb-2">
          Noted
        </p>
        <p className="font-sans text-sm text-[#3D1F0A]">
          We'll let you know when the next session opens.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#3D1F0A]/15 p-6">
      <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-1">
        RSVP Closed
      </p>
      <p className="font-sans text-sm text-[#3D1F0A] mb-4 leading-relaxed">
        This session is full. Leave your details and we'll notify you when the next one opens.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          type="text"
          placeholder="Your name"
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-3 py-2.5 font-sans text-sm text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#3D1F0A]/20 bg-transparent px-3 py-2.5 font-sans text-sm text-[#1A0C04] placeholder-[#8A6040]/50 focus:outline-none focus:border-[#C4712A] transition-colors"
        />
        {state === 'error' && (
          <p className="font-mono text-xs text-[#C4412A]">Something went wrong. Try again.</p>
        )}
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full bg-[#1A0C04] text-[#F2E0C0] font-mono text-xs tracking-[0.2em] uppercase py-3 hover:bg-[#3D1F0A] transition-colors disabled:opacity-50"
        >
          {state === 'submitting' ? 'Sending...' : 'Notify Me'}
        </button>
      </form>
    </div>
  );
}
