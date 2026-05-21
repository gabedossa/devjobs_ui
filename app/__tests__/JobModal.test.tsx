import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JobModal from '../component/JobModal'

const mockJob: JobListing = {
  id: 42,
  company_name: 'Acme Corp',
  job_title: 'Senior React Developer',
  employment_type: 'Full Time',
  posted_time: '3h ago',
  location: 'USA',
  country: 'United States',
  logo: '',
  logo_url: null,
  job_url: 'https://example.com/job/42',
  description: '<p>Buscamos um desenvolvedor React experiente.</p>',
  tags: ['react', 'typescript'],
  salary: '$100k - $130k',
}

describe('JobModal', () => {
  it('não renderiza quando job é null', () => {
    const { container } = render(<JobModal job={null} onClose={jest.fn()} />)
    expect(container.firstChild).toBeNull()
  })

  it('renderiza o título da vaga', () => {
    render(<JobModal job={mockJob} onClose={jest.fn()} />)
    expect(screen.getByText('Senior React Developer')).toBeInTheDocument()
  })

  it('renderiza o nome da empresa', () => {
    render(<JobModal job={mockJob} onClose={jest.fn()} />)
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
  })

  it('renderiza o salário quando disponível', () => {
    render(<JobModal job={mockJob} onClose={jest.fn()} />)
    expect(screen.getByText('$100k - $130k')).toBeInTheDocument()
  })

  it('renderiza as tags de tecnologia', () => {
    render(<JobModal job={mockJob} onClose={jest.fn()} />)
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
  })

  it('renderiza o link "Ver vaga completa"', () => {
    render(<JobModal job={mockJob} onClose={jest.fn()} />)
    const link = screen.getByRole('link', { name: /ver vaga completa/i })
    expect(link).toHaveAttribute('href', 'https://example.com/job/42')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('chama onClose ao clicar no botão de fechar', async () => {
    const onClose = jest.fn()
    render(<JobModal job={mockJob} onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: /fechar/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('chama onClose ao clicar no overlay', async () => {
    const onClose = jest.fn()
    render(<JobModal job={mockJob} onClose={onClose} />)
    await userEvent.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('não exibe seção de salário quando salary é null', () => {
    const jobSemSalario = { ...mockJob, salary: null }
    render(<JobModal job={jobSemSalario} onClose={jest.fn()} />)
    expect(screen.queryByText('$100k - $130k')).not.toBeInTheDocument()
  })

  it('não exibe tags quando a lista está vazia', () => {
    const jobSemTags = { ...mockJob, tags: [] }
    const { container } = render(<JobModal job={jobSemTags} onClose={jest.fn()} />)
    expect(container.querySelector('.modal-tags')).toBeNull()
  })
})
