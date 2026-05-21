import { NextResponse } from 'next/server'
import { normalizeCountry, getRelativeTime, mapJobType } from '../../utils/jobUtils'

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
