import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-UG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isEventPast(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}

/** Strip HTML tags and trim whitespace from user input before storage. */
export function sanitizeText(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

/** Rough email format check — only for safe href construction, not auth. */
export function isValidEmail(str: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
