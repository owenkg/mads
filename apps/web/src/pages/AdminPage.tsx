import React, { useState } from 'react';
import { events } from '@/data/events';

type Submission = {
  id: string;
  created_at: string;
  data: {
    name: string;
    email: string;
    phone?: string;
    instagram?: string;
    howDidYouHear?: string;
    musicNote?: string;
    recordingConsent?: string;
    'event-id'?: string;
    'event-title'?: string;
  };
};

type AuthState = 'idle' | 'loading' | 'error';
type DataState = 'idle' | 'loading' | 'loaded' | 'error';

export function AdminPage() {
  const [password, setPassword] = useState('');
  const [authState, setAuthState] = useState<AuthState>('idle');
  const [dataState, setDataState] = useState<DataState>('idle');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filterEventId, setFilterEventId] = useState<string>('all');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthState('loading');
    setDataState('loading');

    try {
      const res = await fetch('/.netlify/functions/rsvp-queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.status === 401) {
        setAuthState('error');
        setDataState('idle');
        setErrorMsg('Incorrect password.');
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setAuthState('error');
        setDataState('error');
        setErrorMsg(body.error || `Server error (${res.status})`);
        return;
      }

      const data: Submission[] = await res.json();
      setSubmissions(data);
      setAuthState('idle');
      setDataState('loaded');
    } catch {
      setAuthState('error');
      setDataState('idle');
      setErrorMsg('Network error. Are you on Netlify?');
    }
  };

  const displayed =
    filterEventId === 'all'
      ? submissions
      : submissions.filter((s) => s.data['event-id'] === filterEventId);

  const upcomingEvents = events.filter((e) => e.status === 'upcoming');

  if (dataState !== 'loaded') {
    return (
      <div className="min-h-screen bg-[#1A0C04] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4712A] mb-2">
              Meridian at Dusk
            </p>
            <h1 className="font-serif italic text-2xl text-[#F2E0C0]">Admin</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full border border-[#3D1F0A] bg-transparent px-4 py-3 font-mono text-sm text-[#F2E0C0] placeholder-[#8A6040] focus:outline-none focus:border-[#C4712A] transition-colors"
            />
            {authState === 'error' && (
              <p className="font-mono text-xs text-[#C4412A]">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={authState === 'loading'}
              className="w-full bg-[#C4712A] text-[#1A0C04] font-mono text-xs tracking-[0.2em] uppercase py-3 hover:bg-[#E09A50] transition-colors disabled:opacity-50"
            >
              {authState === 'loading' ? 'Fetching...' : 'View Queue'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0C04] text-[#F2E0C0] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4712A] mb-1">
              Meridian at Dusk
            </p>
            <h1 className="font-serif italic text-3xl text-[#F2E0C0]">RSVP Queue</h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-[#8A6040]">
              {displayed.length} / 20 requests
            </p>
            <button
              onClick={() => {
                setDataState('idle');
                setSubmissions([]);
                setPassword('');
              }}
              className="font-mono text-xs tracking-widest uppercase text-[#8A6040] hover:text-[#C4412A] transition-colors mt-1"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Event filter */}
        {upcomingEvents.length > 1 && (
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setFilterEventId('all')}
              className={[
                'font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-colors',
                filterEventId === 'all'
                  ? 'border-[#C4712A] text-[#C4712A]'
                  : 'border-[#3D1F0A] text-[#8A6040] hover:border-[#C4712A]/50',
              ].join(' ')}
            >
              All Events
            </button>
            {upcomingEvents.map((e) => (
              <button
                key={e.id}
                onClick={() => setFilterEventId(e.id)}
                className={[
                  'font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-colors',
                  filterEventId === e.id
                    ? 'border-[#C4712A] text-[#C4712A]'
                    : 'border-[#3D1F0A] text-[#8A6040] hover:border-[#C4712A]/50',
                ].join(' ')}
              >
                {e.session}
              </button>
            ))}
          </div>
        )}

        {displayed.length === 0 ? (
          <div className="border border-[#3D1F0A] p-16 text-center">
            <p className="font-serif italic text-xl text-[#8A6040]">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayed.map((s, i) => (
              <div key={s.id} className="border border-[#3D1F0A] p-5 grid md:grid-cols-[2rem_1fr_1fr_auto] gap-4 items-start">
                {/* Position */}
                <div className="font-mono text-sm text-[#C4712A] pt-0.5">#{i + 1}</div>

                {/* Name + contact */}
                <div>
                  <p className="font-sans font-medium text-[#F2E0C0]">{s.data.name}</p>
                  <a
                    href={`mailto:${s.data.email}`}
                    className="font-mono text-xs text-[#8A6040] hover:text-[#C4712A] transition-colors"
                  >
                    {s.data.email}
                  </a>
                  {s.data.phone && (
                    <p className="font-mono text-xs text-[#8A6040] mt-0.5">{s.data.phone}</p>
                  )}
                  {s.data.instagram && (
                    <p className="font-mono text-xs text-[#8A6040] mt-0.5">{s.data.instagram}</p>
                  )}
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  {s.data.howDidYouHear && (
                    <p className="font-mono text-xs text-[#8A6040]">
                      Via: <span className="text-[#D4B88A]">{s.data.howDidYouHear}</span>
                    </p>
                  )}
                  {s.data.musicNote && (
                    <p className="font-sans text-xs text-[#D4B88A] italic leading-relaxed">
                      "{s.data.musicNote}"
                    </p>
                  )}
                  <p className="font-mono text-xs text-[#8A6040]">
                    Recording:{' '}
                    <span className={s.data.recordingConsent === 'yes' ? 'text-[#C4712A]' : 'text-[#C4412A]'}>
                      {s.data.recordingConsent === 'yes' ? 'consented' : 'declined'}
                    </span>
                  </p>
                </div>

                {/* Date + event */}
                <div className="text-right">
                  <p className="font-mono text-xs text-[#8A6040]">
                    {new Date(s.created_at).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </p>
                  {s.data['event-id'] && (
                    <p className="font-mono text-xs text-[#3D1F0A] mt-0.5">{s.data['event-id']}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
