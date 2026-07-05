# DevJobs UI

Interface de busca de vagas remotas para desenvolvimento de software, construída com Next.js e TypeScript. O projeto consome a API pública da Remotive por meio de uma rota server-side, normaliza os dados e oferece filtros, paginação e tema claro/escuro.

## Funcionalidades

- Listagem de vagas remotas de desenvolvimento
- Busca por cargo ou empresa
- Filtro por país e modalidade full-time
- Paginação com carregamento incremental
- Modal com detalhes da vaga
- Tema claro e escuro salvo no `localStorage`
- Layout responsivo para desktop e mobile
- Rota interna para consumir e normalizar dados da Remotive

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library
- Remotive API

## Arquitetura

```text
app/
├── api/jobs/          # Proxy e normalização das vagas da Remotive
├── component/         # Componentes da interface
├── utils/             # Funções de normalização e formatação
└── page.tsx           # Entrada da aplicação
```

A rota `app/api/jobs/route.ts` busca vagas de software, filtra cargos relacionados a desenvolvimento, normaliza localização e tipo de contratação e retorna resultados paginados para o front-end.

## Como executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run test:coverage
```

## Pontos técnicos demonstrados

- Consumo de API externa no servidor
- Tipagem de dados recebidos de terceiros
- Cache e revalidação de dados com Next.js
- Gerenciamento de estado e filtros no cliente
- Persistência de preferência de tema
- Componentização e responsividade
- Preparação para testes com Jest e Testing Library

## Melhorias planejadas

- Adicionar testes para filtros, paginação e tratamento de erros
- Validar e limitar parâmetros de paginação na API
- Adicionar skeleton loading
- Sincronizar filtros com a URL
- Melhorar acessibilidade e gerenciamento de foco dos modais

## Fonte dos dados

As vagas são obtidas pela API pública da Remotive e atualizadas periodicamente pelo cache do Next.js.
