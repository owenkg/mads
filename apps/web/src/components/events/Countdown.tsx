import React, { useState, useEffect } from 'react';

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ date }: { date: string }) {
  const [left, setLeft] = useState(() => getTimeLeft(date));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(date)), 1000);
    return () => clearInterval(id);
  }, [date]);

  if (!left) {
    return (
      <p className="font-mono text-xs tracking-widest uppercase text-[#C4412A]">
        Session is today
      </p>
    );
  }

  const units = [
    { label: 'Days', value: left.days },
    { label: 'Hrs', value: left.hours },
    { label: 'Min', value: left.minutes },
    { label: 'Sec', value: left.seconds },
  ];

  return (
    <div>
      <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040] mb-3">
        Countdown
      </p>
      <div className="grid grid-cols-4 gap-2">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center border border-[#3D1F0A]/15 py-2">
            <p className="font-mono text-lg text-[#1A0C04] leading-none">
              {String(value).padStart(2, '0')}
            </p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#8A6040] mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
