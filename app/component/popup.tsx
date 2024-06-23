'use client'
import React, { useState } from 'react'

const Popup = ({ state, closeDialog }: PopupProps) => {
  const [isFullTime, setIsFullTime] = useState(false);

  const toggleIsFullTime = () => {
    setIsFullTime(oldVal => !oldVal);
  }

  const handleSubmitFilter = () => {
    closeDialog();
  }
  return (
    <div>
      {state && (
        <div className="popup-overlay">
          <div className="popup-dialog">
            <div className="popup-body">
              <div className="upper-section">
                <span className='pi pi-map-marker' />
                <input
                  type="text"
                  name="filter"
                  placeholder="Filter by location"
                />
              </div>
              <div className="lower-section">
                <input
                  type="checkbox"
                  id="fullTimeCheckbox"
                  checked={isFullTime}
                  onChange={toggleIsFullTime}
                />
                <label htmlFor="fullTimeCheckbox" className="ml-2">Full Time Only</label>
                <div className="submit-dialog-section">
                  <button
                    type="button"
                    className="filter-sumit-btn"
                    onClick={handleSubmitFilter}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Popup