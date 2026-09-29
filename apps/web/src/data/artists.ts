export type SocialLink = {
  platform: 'instagram' | 'mixcloud' | 'soundcloud' | 'youtube' | 'twitter';
  url: string;
  handle: string;
};

export type DJProfile = {
  id: string;        // kebab-case slug, used in URL /artists/:id
  name: string;
  bio: string;
  photo?: string;
  genres: string[];
  social?: SocialLink[];
};

export const djProfiles: DJProfile[] = [
  {
    id: 'owen-kg',
    name: 'Owen KG',
    bio: 'Kampala-based selector and founder of Meridian at Dusk Sessions. Owen KG curates the space between deep house and the African dusk — a sound rooted in Afro house and soulful amapiano that belongs to an hour, not a genre. Sessions is his way of sharing that hour with a small room of people who feel it.',
    genres: ['Deep House', 'Afro House', 'Soulful Amapiano'],
    social: [
      { platform: 'mixcloud', url: 'https://www.mixcloud.com/owenkg/', handle: 'owenkg' },
      { platform: 'youtube', url: 'https://www.youtube.com/playlist?list=PLJIjtStQzwaZ0G5PGgdhBkJkKmA7HkLSw', handle: 'Sessions playlist' },
      { platform: 'instagram', url: 'https://www.instagram.com/meridianatdusk/', handle: '@meridianatdusk' },
    ],
  },
];

export function getDJById(id: string) {
  return djProfiles.find((d) => d.id === id);
}
