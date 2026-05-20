'use client'

import React, { useState, useEffect } from 'react'
import Popup from './popup'
import JobListing from './JobListing'
import data from '../utils/data.json'

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
  const [locationFilter, setLocationFilter] = useState('')
  const [fullTimeOnly, setFullTimeOnly] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved === 'dark' || (!saved && prefersDark)
    setIsDark(dark)
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleSearch = (title: string, location: string, fullTime: boolean) => {
    setTitleFilter(title)
    setLocationFilter(location)
    setFullTimeOnly(fullTime)
  }

  const filteredJobs = data.jobListings.filter(job => {
    const matchesTitle =
      !titleFilter ||
      job.job_title.toLowerCase().includes(titleFilter.toLowerCase()) ||
      job.company_name.toLowerCase().includes(titleFilter.toLowerCase())

    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase())

    const matchesType = !fullTimeOnly || job.employment_type === 'Full Time'

    return matchesTitle && matchesLocation && matchesType
  })

  return (
    <div className="homepage-wrapper">
      <header className="header-section">
        <div className="header-content">
          <span className="logo">devjobs</span>

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
              onKeyDown={e =>
                e.key === 'Enter' && handleSearch(titleFilter, locationFilter, fullTimeOnly)
              }
            />
          </div>

          <div className="filter-divider desktop-only" />

          <div className="filter-field desktop-only">
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
            <input
              type="text"
              placeholder="Filter by location…"
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
              onKeyDown={e =>
                e.key === 'Enter' && handleSearch(titleFilter, locationFilter, fullTimeOnly)
              }
            />
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
              onClick={() => handleSearch(titleFilter, locationFilter, fullTimeOnly)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <main className="job-listings-section">
        {filteredJobs.length === 0 ? (
          <div className="empty-state">No jobs found. Try adjusting your filters.</div>
        ) : (
          <JobListing jobsListings={filteredJobs} />
        )}
      </main>

      <div className="load-more-section">
        <button className="load-more-button">Load More</button>
      </div>

      <Popup
        state={popupOpen}
        closeDialog={() => setPopupOpen(false)}
        onSearch={(location, fullTime) => handleSearch(titleFilter, location, fullTime)}
      />
    </div>
  )
}

export default Homepage
