export const SECTIONS = {
  HOME: 'hjem',
  ABOUT: 'om',
  TEAM: 'ansatte',
  DISEASES: 'sykdommer',
  CATARACT: 'katarakt',
  PRICING: 'priser',
  PARTNERS: 'partnere',
  CONTACT: 'kontakt',
} as const;

export type SectionKey = keyof typeof SECTIONS;
