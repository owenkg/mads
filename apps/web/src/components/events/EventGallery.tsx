import React, { useState, useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  sessionLabel: string;
};

export function EventGallery({ images, sessionLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [open, prev, next]);

  const openAt = (i: number) => {
    setActiveIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="aspect-square overflow-hidden group relative bg-[#1A0C04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4712A]"
          >
            <img
              src={src}
              alt={`${sessionLabel} — photo ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply sepia-[0.15]"
            />
            <div className="absolute inset-0 bg-[#1A0C04]/0 group-hover:bg-[#1A0C04]/25 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-[#1A0C04]/95 backdrop-blur-sm animate-in fade-in duration-150" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 focus:outline-none"
            aria-label={`${sessionLabel} gallery`}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5">
              <p className="font-mono text-xs tracking-widest uppercase text-[#8A6040]">
                {activeIndex + 1} / {images.length}
              </p>
              <Dialog.Close asChild>
                <button
                  className="text-[#8A6040] hover:text-[#F2E0C0] transition-colors"
                  aria-label="Close gallery"
                >
                  <X size={22} />
                </button>
              </Dialog.Close>
            </div>

            {/* Image */}
            <div className="w-full max-w-4xl max-h-[78vh] flex items-center justify-center">
              <img
                key={activeIndex}
                src={images[activeIndex]}
                alt={`${sessionLabel} — photo ${activeIndex + 1}`}
                className="max-w-full max-h-[78vh] object-contain"
              />
            </div>

            {/* Prev / next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 text-[#8A6040] hover:text-[#F2E0C0] transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 text-[#8A6040] hover:text-[#F2E0C0] transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Session label */}
            <p className="absolute bottom-5 font-mono text-xs tracking-widest uppercase text-[#8A6040]">
              {sessionLabel}
            </p>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
