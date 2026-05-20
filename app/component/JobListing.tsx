import React from 'react'

const logoStyles: Record<string, { bg: string; label: string }> = {
  scoot:          { bg: '#19202d', label: 'S' },
  blogr:          { bg: '#ff5e5e', label: 'B' },
  vector:         { bg: '#0d3fad', label: 'V' },
  office_lite:    { bg: '#16906a', label: 'O' },
  pod:            { bg: '#6c47ff', label: 'P' },
  creative:       { bg: '#f55a5a', label: 'C' },
  pomodoro:       { bg: '#e05964', label: 'P' },
  maker:          { bg: '#2cb1bc', label: 'M' },
  coffeeeroasters:{ bg: '#7b4700', label: 'C' },
}

const JobListing = ({ jobsListings }: JobListingProps) => {
  return (
    <>
      {jobsListings.map(job => {
        const style = logoStyles[job.logo] ?? { bg: '#5964e0', label: job.company_name[0] }

        return (
          <div key={String(job.id)} className="job-listing-card">
            <div
              className="card-logo"
              style={{ background: style.bg }}
              aria-hidden="true"
            >
              {style.label}
            </div>

            <div className="card-meta">
              <span>{job.posted_time}</span>
              <span className="dot" />
              <span>{job.employment_type}</span>
            </div>

            <h2 className="card-title">{job.job_title}</h2>
            <p className="card-company">{job.company_name}</p>
            <p className="card-location">{job.location}</p>
          </div>
        )
      })}
    </>
  )
}

export default JobListing
