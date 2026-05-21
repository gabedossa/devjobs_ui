'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import LogoBranca from '../img/Logo_Branca.png'
import Popup from './popup'
import JobListing from './JobListing'
import JobModal from './JobModal'

const PAGE_SIZE = 12

const SunIcon = ({ className }: { className: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1.5" />
    <path
      d="M10 1v2M10 17v2M1 10h2M17 10h2M3.22 3.22l1.42 1.42M15.36 15.36l1.42 1.42M3.22 16.78l1.42-1.42M15.36 4.64l1.42-1.42"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const MoonIcon = ({ className }: { className: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M15.5 10.5A7 7 0 0 1 7.5 2.5a7 7 0 1 0 8 8Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const Homepage = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [titleFilter, setTitleFilter] = useState('')
  const [countryFilter, setCountryFilter] = useState('')
  const [fullTimeOnly, setFullTimeOnly] = useState(false)

  const [allJobs, setAllJobs] = useState<JobListing[]>([])
  const [availableCountries, setAvailableCountries] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved === 'dark' || (!saved && prefersDark)
    setIsDark(dark)
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    setMounted(true)
  }, [])

  const fetchJobs = useCallback(async (currentOffset: number, append: boolean) => {
    try {
      const res = await fetch(`/api/jobs?limit=${PAGE_SIZE}&offset=${currentOffset}`)
      if (!res.ok) throw new Error('Failed to fetch jobs')
      const data = await res.json()
      setAllJobs(prev => append ? [...prev, ...data.jobs] : data.jobs)
      if (!append && data.countries) setAvailableCountries(data.countries)
      setHasMore(currentOffset + PAGE_SIZE < data.total)
      setOffset(currentOffset + PAGE_SIZE)
    } catch {
      setError('Não foi possível carregar as vagas. Tente novamente.')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    fetchJobs(0, false)
  }, [fetchJobs])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleSearch = (title: string, country: string, fullTime: boolean) => {
    setTitleFilter(title)
    setCountryFilter(country)
    setFullTimeOnly(fullTime)
  }

  const handleLoadMore = () => {
    setLoadingMore(true)
    fetchJobs(offset, true)
  }

  const filteredJobs = allJobs.filter(job => {
    const matchesTitle =
      !titleFilter ||
      job.job_title.toLowerCase().includes(titleFilter.toLowerCase()) ||
      job.company_name.toLowerCase().includes(titleFilter.toLowerCase())

    const matchesCountry =
      !countryFilter || job.country === countryFilter

    const matchesType = !fullTimeOnly || job.employment_type === 'Full Time'

    return matchesTitle && matchesCountry && matchesType
  })

  return (
    <div className="homepage-wrapper">
      <header className="header-section">
        <div className="header-content">
          <Image src={LogoBranca} alt="Hirenix" height={120} style={{ width: 'auto', display: 'block' }} priority />

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={mounted ? isDark : undefined}
          >
            <SunIcon className={`toggle-icon ${!isDark ? 'active' : ''}`} />
            <span className="toggle-track">
              <span className={`toggle-thumb${isDark ? ' is-dark' : ''}`} />
            </span>
            <MoonIcon className={`toggle-icon ${isDark ? 'active' : ''}`} />
          </button>
        </div>
      </header>

      <div className="filter-bar">
        <div className="filter-bar-inner">
          <div className="filter-field">
            <span className="filter-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
                  stroke="#5964E0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Filter by title, companies…"
              value={titleFilter}
              onChange={e => setTitleFilter(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch(titleFilter, countryFilter, fullTimeOnly)}
            />
          </div>

          <div className="filter-divider desktop-only" />

          <div className="filter-field filter-field--select desktop-only">
            <span className="filter-icon">
              <svg width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path
                  d="M14.5 10c0 4.418-6 11-6 11S2.5 14.418 2.5 10a6 6 0 0 1 12 0Z"
                  stroke="#5964E0"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="10" r="2" stroke="#5964E0" strokeWidth="1.5" />
              </svg>
            </span>
            <select
              value={countryFilter}
              onChange={e => setCountryFilter(e.target.value)}
              className="country-select"
            >
              <option value="">All countries</option>
              {availableCountries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="filter-divider desktop-only" />

          <div className="filter-fulltime desktop-only">
            <input
              type="checkbox"
              id="fulltime-desktop"
              checked={fullTimeOnly}
              onChange={e => setFullTimeOnly(e.target.checked)}
            />
            <label htmlFor="fulltime-desktop">Full Time Only</label>
          </div>

          <div className="filter-actions">
            <button
              className="filter-mobile-btn"
              onClick={() => setPopupOpen(true)}
              aria-label="Open filters"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M19 3H1l7.2 8.52V17l3.6 1.8V11.52L19 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="search-btn"
              onClick={() => handleSearch(titleFilter, countryFilter, fullTimeOnly)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <main className="job-listings-section">
        {loading ? (
          <div className="empty-state">Carregando vagas...</div>
        ) : error ? (
          <div className="empty-state">{error}</div>
        ) : filteredJobs.length === 0 ? (
          <div className="empty-state">No jobs found. Try adjusting your filters.</div>
        ) : (
          <JobListing jobsListings={filteredJobs} onJobClick={setSelectedJob} />
        )}
      </main>

      {!loading && !error && hasMore && (
        <div className="load-more-section">
          <button
            className="load-more-button"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? 'Carregando...' : 'Load More'}
          </button>
        </div>
      )}

      <Popup
        state={popupOpen}
        closeDialog={() => setPopupOpen(false)}
        onSearch={(country, fullTime) => handleSearch(titleFilter, country, fullTime)}
        countries={availableCountries}
      />

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  )
}

export default Homepage
