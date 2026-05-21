import { NextResponse } from 'next/server'

interface RemotiveJob {
  id: number
  url: string
  title: string
  company_name: string
  company_logo: string | null
  job_type: string
  publication_date: string
  candidate_required_location: string
  description: string
  tags: string[]
  salary: string
}

const COUNTRY_ALIASES: Record<string, string> = {
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

function normalizeCountry(rawLocation: string): string {
  if (!rawLocation) return 'Worldwide'

  const parts = rawLocation.split(/[,/;]/)
  for (const part of parts) {
    const key = part.trim().toLowerCase()
    if (COUNTRY_ALIASES[key]) return COUNTRY_ALIASES[key]
  }

  // Substring scan for longer strings like "USA Only", "Remote - USA"
  const lower = rawLocation.toLowerCase()
  for (const [alias, country] of Object.entries(COUNTRY_ALIASES)) {
    if (lower.includes(alias)) return country
  }

  // Capitalize and return as-is if unknown
  return rawLocation
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

function getRelativeTime(dateString: string): string {
  const diffMs = Date.now() - new Date(dateString).getTime()
  const diffHours = Math.floor(diffMs / 3_600_000)
  const diffDays = Math.floor(diffHours / 24)
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return `${Math.floor(diffDays / 7)}w ago`
}

function mapJobType(jobType: string): string {
  const map: Record<string, string> = {
    full_time: 'Full Time',
    part_time: 'Part Time',
    contract: 'Contract',
    freelance: 'Freelance',
    internship: 'Internship',
  }
  return map[jobType] ?? jobType
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') ?? '12', 10)
  const offset = parseInt(searchParams.get('offset') ?? '0', 10)

  const res = await fetch(
    'https://remotive.com/api/remote-jobs?category=software-dev&limit=100',
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 502 })
  }

  const data = await res.json()

  const DEV_KEYWORDS = [
    'developer', 'engineer', 'programmer', 'software', 'frontend', 'back-end',
    'backend', 'front-end', 'fullstack', 'full-stack', 'full stack', 'devops',
    'mobile', 'ios', 'android', 'react', 'vue', 'angular', 'node', 'python',
    'java', 'ruby', 'php', 'golang', 'rust', 'kotlin', 'swift',
  ]

  const devJobs = (data.jobs as RemotiveJob[]).filter(job => {
    const title = job.title.toLowerCase()
    return DEV_KEYWORDS.some(kw => title.includes(kw))
  })

  const allJobs = devJobs.map(job => ({
    id: job.id,
    company_name: job.company_name,
    job_title: job.title,
    employment_type: mapJobType(job.job_type),
    posted_time: getRelativeTime(job.publication_date),
    location: job.candidate_required_location || 'Worldwide',
    country: normalizeCountry(job.candidate_required_location),
    logo: '',
    logo_url: job.company_logo ?? null,
    job_url: job.url,
    description: job.description,
    tags: job.tags ?? [],
    salary: job.salary || null,
  }))

  const countries = Array.from(new Set(allJobs.map(j => j.country))).sort((a, b) => {
    if (a === 'Worldwide') return -1
    if (b === 'Worldwide') return 1
    return a.localeCompare(b)
  })

  const jobs = allJobs.slice(offset, offset + limit)

  return NextResponse.json({ jobs, total: allJobs.length, countries })
}
