'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

const JobModal = ({ job, onClose }: JobModalProps) => {
  useEffect(() => {
    if (!job) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [job, onClose])

  if (!job) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="modal-header">
          <div
            className="modal-logo"
            style={job.logo_url ? { background: '#f4f6f8', padding: '6px' } : { background: '#5964e0' }}
          >
            {job.logo_url ? (
              <Image
                src={job.logo_url}
                alt={job.company_name}
                width={56}
                height={56}
                style={{ objectFit: 'contain', borderRadius: '4px' }}
              />
            ) : (
              job.company_name[0]?.toUpperCase()
            )}
          </div>

          <div className="modal-header-info">
            <h2 className="modal-job-title">{job.job_title}</h2>
            <p className="modal-company">{job.company_name}</p>
          </div>
        </div>

        <div className="modal-meta">
          <span>{job.posted_time}</span>
          <span className="dot" />
          <span>{job.employment_type}</span>
          <span className="dot" />
          <span>{job.location}</span>
          {job.salary && (
            <>
              <span className="dot" />
              <span className="modal-salary">{job.salary}</span>
            </>
          )}
        </div>

        {job.tags && job.tags.length > 0 && (
          <div className="modal-tags">
            {job.tags.map(tag => (
              <span key={tag} className="modal-tag">{tag}</span>
            ))}
          </div>
        )}

        {job.description && (
          <div
            className="modal-description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        )}

        {job.job_url && (
          <a
            href={job.job_url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-apply-btn"
          >
            Ver vaga completa
          </a>
        )}
      </div>
    </div>
  )
}

export default JobModal
