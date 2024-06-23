'use client'
import React, { useState } from 'react'
import { Checkbox } from 'primereact/checkbox';


const Popup = ({ state, closeDialog }: PopupProps) => {
  const [isFullTime, setIsFullTime] = useState(false);

  const toggleIsFullTime = () => {
    setIsFullTime(oldVal => !oldVal);
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
                <Checkbox
                  onChange={toggleIsFullTime}
                  checked={isFullTime}
                ></Checkbox>

                <span>Full Time Only</span>


              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Popup