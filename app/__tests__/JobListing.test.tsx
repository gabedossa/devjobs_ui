import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JobListing from '../component/JobListing'

const mockJobs: JobListing[] = [
  {
    id: 1,
    company_name: 'Acme Corp',
    job_title: 'Senior React Developer',
    employment_type: 'Full Time',
    posted_time: '2h ago',
    location: 'USA',
    country: 'United States',
    logo: '',
    logo_url: null,
  },
  {
    id: 2,
    company_name: 'Globex',
    job_title: 'Backend Engineer',
    employment_type: 'Contract',
    posted_time: '1d ago',
    location: 'Brazil',
    country: 'Brazil',
    logo: '',
    logo_url: null,
  },
]

describe('JobListing', () => {
  it('renderiza todos os cards de vaga', () => {
    render(<JobListing jobsListings={mockJobs} onJobClick={jest.fn()} />)
    expect(screen.getByText('Senior React Developer')).toBeInTheDocument()
    expect(screen.getByText('Backend Engineer')).toBeInTheDocument()
  })

  it('exibe o nome da empresa em cada card', () => {
    render(<JobListing jobsListings={mockJobs} onJobClick={jest.fn()} />)
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Globex')).toBeInTheDocument()
  })

  it('exibe o tipo de contrato', () => {
    render(<JobListing jobsListings={mockJobs} onJobClick={jest.fn()} />)
    expect(screen.getByText('Full Time')).toBeInTheDocument()
    expect(screen.getByText('Contract')).toBeInTheDocument()
  })

  it('exibe o tempo de publicação', () => {
    render(<JobListing jobsListings={mockJobs} onJobClick={jest.fn()} />)
    expect(screen.getByText('2h ago')).toBeInTheDocument()
    expect(screen.getByText('1d ago')).toBeInTheDocument()
  })

  it('chama onJobClick com a vaga correta ao clicar no card', async () => {
    const onJobClick = jest.fn()
    render(<JobListing jobsListings={mockJobs} onJobClick={onJobClick} />)
    await userEvent.click(screen.getByText('Senior React Developer'))
    expect(onJobClick).toHaveBeenCalledWith(mockJobs[0])
  })

  it('renderiza inicial da empresa quando não há logo_url', () => {
    render(<JobListing jobsListings={[mockJobs[0]]} onJobClick={jest.fn()} />)
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('não renderiza nada quando a lista está vazia', () => {
    const { container } = render(<JobListing jobsListings={[]} onJobClick={jest.fn()} />)
    expect(container.firstChild).toBeNull()
  })
})
