'use client'

import React, { useState } from 'react'

import Popup from './popup'
import JobListing from './JobListing'
import data from '../utils/data.json'

const Homepage = () => {
  const [filterPopUpState, setFilterPopupState] = useState(false);
  const [mockedListings, setMockedListings] = useState<JobListing[]>(data.jobListings);

  const openDialog = () => {
    setFilterPopupState(true);
  };

  const closeDialog = () => {
    setFilterPopupState(false);
  };

  return (
    <div className='homepage-wrapper'>
      <div className="header-section">
        logo | switch
      </div>
      <div className="filter-input-section">
        <div className="input-limiter-container">
          <input
            type="text"
            name="filter"
            placeholder="Filter by title…"
          />
          <span
            className="pi pi-filter-fill"
            onClick={openDialog}
          ></span>
          <button type="button">
            <span className="pi pi-search"></span>
          </button>
        </div>
      </div>
      <div className="job-listings-section">
        <JobListing jobsListings={mockedListings} />
      </div>
      <div className="load-more-section">
        <div className="load-more-button">
          button
        </div>
      </div>
      <Popup
        state={filterPopUpState}
        closeDialog={closeDialog}
      />
    </div>
  )
}

export default Homepage