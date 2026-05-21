import { normalizeCountry, getRelativeTime, mapJobType } from '../utils/jobUtils'

describe('normalizeCountry', () => {
  it('retorna Worldwide para string vazia', () => {
    expect(normalizeCountry('')).toBe('Worldwide')
  })

  it('normaliza abreviações comuns dos EUA', () => {
    expect(normalizeCountry('USA')).toBe('United States')
    expect(normalizeCountry('US')).toBe('United States')
    expect(normalizeCountry('U.S.A.')).toBe('United States')
    expect(normalizeCountry('United States')).toBe('United States')
  })

  it('normaliza abreviações do Reino Unido', () => {
    expect(normalizeCountry('UK')).toBe('United Kingdom')
    expect(normalizeCountry('United Kingdom')).toBe('United Kingdom')
    expect(normalizeCountry('England')).toBe('United Kingdom')
  })

  it('normaliza variações de Worldwide', () => {
    expect(normalizeCountry('Worldwide')).toBe('Worldwide')
    expect(normalizeCountry('Global')).toBe('Worldwide')
    expect(normalizeCountry('Anywhere')).toBe('Worldwide')
    expect(normalizeCountry('Remote')).toBe('Worldwide')
  })

  it('normaliza países da América Latina', () => {
    expect(normalizeCountry('Brazil')).toBe('Brazil')
    expect(normalizeCountry('Brasil')).toBe('Brazil')
    expect(normalizeCountry('BR')).toBe('Brazil')
    expect(normalizeCountry('Mexico')).toBe('Mexico')
    expect(normalizeCountry('Argentina')).toBe('Argentina')
  })

  it('normaliza países europeus', () => {
    expect(normalizeCountry('Germany')).toBe('Germany')
    expect(normalizeCountry('Deutschland')).toBe('Germany')
    expect(normalizeCountry('France')).toBe('France')
    expect(normalizeCountry('Portugal')).toBe('Portugal')
  })

  it('extrai país de strings compostas como "USA Only"', () => {
    expect(normalizeCountry('USA Only')).toBe('United States')
    expect(normalizeCountry('Remote - Brazil')).toBe('Worldwide')
  })

  it('retorna string capitalizada para países desconhecidos', () => {
    expect(normalizeCountry('wakanda')).toBe('Wakanda')
  })

  it('usa o primeiro segmento em listas separadas por vírgula', () => {
    expect(normalizeCountry('USA, Canada')).toBe('United States')
  })
})

describe('mapJobType', () => {
  it('converte full_time para Full Time', () => {
    expect(mapJobType('full_time')).toBe('Full Time')
  })

  it('converte part_time para Part Time', () => {
    expect(mapJobType('part_time')).toBe('Part Time')
  })

  it('converte contract para Contract', () => {
    expect(mapJobType('contract')).toBe('Contract')
  })

  it('converte freelance para Freelance', () => {
    expect(mapJobType('freelance')).toBe('Freelance')
  })

  it('converte internship para Internship', () => {
    expect(mapJobType('internship')).toBe('Internship')
  })

  it('retorna o valor original para tipos desconhecidos', () => {
    expect(mapJobType('unknown_type')).toBe('unknown_type')
  })
})

describe('getRelativeTime', () => {
  const minutesAgo = (m: number) =>
    new Date(Date.now() - m * 60_000).toISOString()

  const hoursAgo = (h: number) =>
    new Date(Date.now() - h * 3_600_000).toISOString()

  const daysAgo = (d: number) =>
    new Date(Date.now() - d * 86_400_000).toISOString()

  it('retorna "Just now" para menos de 1 hora', () => {
    expect(getRelativeTime(minutesAgo(30))).toBe('Just now')
  })

  it('retorna horas para menos de 24 horas', () => {
    expect(getRelativeTime(hoursAgo(5))).toBe('5h ago')
    expect(getRelativeTime(hoursAgo(23))).toBe('23h ago')
  })

  it('retorna dias para menos de 7 dias', () => {
    expect(getRelativeTime(daysAgo(1))).toBe('1d ago')
    expect(getRelativeTime(daysAgo(6))).toBe('6d ago')
  })

  it('retorna semanas para 7 dias ou mais', () => {
    expect(getRelativeTime(daysAgo(7))).toBe('1w ago')
    expect(getRelativeTime(daysAgo(14))).toBe('2w ago')
  })
})
