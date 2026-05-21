export const COUNTRY_ALIASES: Record<string, string> = {
  'usa': 'United States',
  'us': 'United States',
  'u.s.': 'United States',
  'u.s.a.': 'United States',
  'united states': 'United States',
  'united states of america': 'United States',
  'uk': 'United Kingdom',
  'u.k.': 'United Kingdom',
  'united kingdom': 'United Kingdom',
  'great britain': 'United Kingdom',
  'england': 'United Kingdom',
  'worldwide': 'Worldwide',
  'global': 'Worldwide',
  'anywhere': 'Worldwide',
  'remote': 'Worldwide',
  'international': 'Worldwide',
  'canada': 'Canada',
  'ca': 'Canada',
  'germany': 'Germany',
  'deutschland': 'Germany',
  'de': 'Germany',
  'france': 'France',
  'fr': 'France',
  'netherlands': 'Netherlands',
  'the netherlands': 'Netherlands',
  'nl': 'Netherlands',
  'spain': 'Spain',
  'españa': 'Spain',
  'es': 'Spain',
  'portugal': 'Portugal',
  'pt': 'Portugal',
  'italy': 'Italy',
  'italia': 'Italy',
  'it': 'Italy',
  'poland': 'Poland',
  'pl': 'Poland',
  'sweden': 'Sweden',
  'se': 'Sweden',
  'norway': 'Norway',
  'no': 'Norway',
  'denmark': 'Denmark',
  'dk': 'Denmark',
  'finland': 'Finland',
  'fi': 'Finland',
  'austria': 'Austria',
  'at': 'Austria',
  'switzerland': 'Switzerland',
  'ch': 'Switzerland',
  'belgium': 'Belgium',
  'be': 'Belgium',
  'brazil': 'Brazil',
  'brasil': 'Brazil',
  'br': 'Brazil',
  'argentina': 'Argentina',
  'ar': 'Argentina',
  'mexico': 'Mexico',
  'méxico': 'Mexico',
  'mx': 'Mexico',
  'colombia': 'Colombia',
  'co': 'Colombia',
  'chile': 'Chile',
  'cl': 'Chile',
  'india': 'India',
  'in': 'India',
  'australia': 'Australia',
  'au': 'Australia',
  'new zealand': 'New Zealand',
  'nz': 'New Zealand',
  'singapore': 'Singapore',
  'sg': 'Singapore',
  'japan': 'Japan',
  'jp': 'Japan',
  'south korea': 'South Korea',
  'korea': 'South Korea',
  'kr': 'South Korea',
  'israel': 'Israel',
  'il': 'Israel',
  'turkey': 'Turkey',
  'türkiye': 'Turkey',
  'tr': 'Turkey',
  'ukraine': 'Ukraine',
  'ua': 'Ukraine',
  'romania': 'Romania',
  'ro': 'Romania',
  'czech republic': 'Czech Republic',
  'czechia': 'Czech Republic',
  'cz': 'Czech Republic',
  'hungary': 'Hungary',
  'hu': 'Hungary',
  'latam': 'Latin America',
  'latin america': 'Latin America',
  'europe': 'Europe',
  'eu': 'Europe',
  'emea': 'Europe, Middle East & Africa',
  'apac': 'Asia Pacific',
  'asia': 'Asia',
  'africa': 'Africa',
}

export function normalizeCountry(rawLocation: string): string {
  if (!rawLocation) return 'Worldwide'

  const parts = rawLocation.split(/[,/;]/)
  for (const part of parts) {
    const key = part.trim().toLowerCase()
    if (COUNTRY_ALIASES[key]) return COUNTRY_ALIASES[key]
  }

  const lower = rawLocation.toLowerCase()
  for (const [alias, country] of Object.entries(COUNTRY_ALIASES)) {
    if (lower.includes(alias)) return country
  }

  return rawLocation
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

export function getRelativeTime(dateString: string): string {
  const diffMs = Date.now() - new Date(dateString).getTime()
  const diffHours = Math.floor(diffMs / 3_600_000)
  const diffDays = Math.floor(diffHours / 24)
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return `${Math.floor(diffDays / 7)}w ago`
}

export function mapJobType(jobType: string): string {
  const map: Record<string, string> = {
    full_time: 'Full Time',
    part_time: 'Part Time',
    contract: 'Contract',
    freelance: 'Freelance',
    internship: 'Internship',
  }
  return map[jobType] ?? jobType
}
