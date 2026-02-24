import { SITE_CONFIG } from './constants';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  name: `${SITE_CONFIG.name} - Fisioterapia Domiciliar`,
  description:
    'Fisioterapia domiciliar humanizada. Atendimento em casa para idosos, pós-operatório, reabilitação e mobilidade.',
  url: SITE_CONFIG.siteUrl,
  telephone: SITE_CONFIG.phone,
  image: `${SITE_CONFIG.siteUrl}/images/og-image.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.city,
    addressRegion: SITE_CONFIG.state,
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'City',
    name: SITE_CONFIG.city,
  },
  openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00',
  founder: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
    jobTitle: 'Fisioterapeuta',
  },
  medicalSpecialty: 'PhysicalTherapy',
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Fisioterapia Domiciliar' },
    { '@type': 'MedicalTherapy', name: 'Reabilitação Motora' },
    { '@type': 'MedicalTherapy', name: 'Fisioterapia para Idosos' },
    { '@type': 'MedicalTherapy', name: 'Fisioterapia Pós-Operatória' },
    { '@type': 'MedicalTherapy', name: 'Fisioterapia Ortopédica' },
    { '@type': 'MedicalTherapy', name: 'Exercícios Terapêuticos' },
  ],
};
