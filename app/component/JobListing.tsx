import React from 'react'


const JobListing = ({ jobsListings }: JobListingProps) => {
  return (
    <>
      {jobsListings.map(each => (
        <div key={each.id} className="job-listing-card">
          <div className="card-header">
            {each.logo}
          </div>
          <div className="card-body">
            {each.posted_time} | {each.employment_type}
            {each.job_title}
            {each.company_name}
          </div>
          <div className="card-footer">
            {each.location}
          </div>
        </div>
      ))}
    </>
  )
}

export default JobListing