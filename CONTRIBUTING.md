# Contributing To NovaSupport

## Project Goal

NovaSupport is a Stellar-native support platform focused on helping maintainers, creators, and developers receive transparent community funding through Stellar. The near-term goal is a submission-ready MVP with public profiles, wallet connection, and obvious Stellar Testnet integration.

## Contribution Rules

- keep changes small and focused
- preserve the split between `frontend/`, `backend/`, and `contract/`
- prefer readable code over abstraction-heavy patterns
- document intent clearly when a feature is scaffolded but not complete
- do not switch the target network away from Stellar Testnet in MVP work
- keep Freighter as the first wallet unless the team explicitly expands wallet support
- write working test
- build project before contribution and before commiting.


## Environment Setup

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev
```

### Contract

```bash
cd contract
rustup target add wasm32-unknown-unknown
cargo test
```

Install Soroban CLI separately if you want to build, deploy, or inspect the contract on Stellar Testnet.


## Guidance For Small PRs

- one concern per PR is ideal
- include screenshots for frontend UI changes
- include schema notes for Prisma changes
- mention any new environment variables explicitly
- keep naming consistent with `NovaSupport`


