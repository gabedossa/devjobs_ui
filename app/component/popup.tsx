'use client'

import React, { useState } from 'react'

const Popup = ({ state, closeDialog, onSearch, countries }: PopupProps) => {
  const [country, setCountry] = useState('')
  const [fullTimeOnly, setFullTimeOnly] = useState(false)

  const handleSearch = () => {
    onSearch(country, fullTimeOnly)
    closeDialog()
  }

  if (!state) return null

  return (
    <div className="popup-overlay" onClick={closeDialog}>
      <div className="popup-dialog" onClick={e => e.stopPropagation()}>
        <div className="popup-body">
          <div className="popup-upper">
            <span className="filter-icon">
              <svg width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path
                  d="M14.5 10c0 4.418-6 11-6 11S2.5 14.418 2.5 10a6 6 0 0 1 12 0Z"
                  stroke="#6E8098"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="10" r="2" stroke="#6E8098" strokeWidth="1.5" />
              </svg>
            </span>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="country-select"
              autoFocus
            >
              <option value="">All countries</option>
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="popup-lower">
            <div className="popup-checkbox-row">
              <input
                type="checkbox"
                id="fulltime-mobile"
                checked={fullTimeOnly}
                onChange={e => setFullTimeOnly(e.target.checked)}
              />
              <label htmlFor="fulltime-mobile">Full Time Only</label>
            </div>

            <button className="popup-search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
