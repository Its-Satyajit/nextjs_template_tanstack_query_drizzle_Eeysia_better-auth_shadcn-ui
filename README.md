# Next.js Template

A production-ready Next.js template with:

- **Next.js 16** - App Router, React 19
- **TanStack Query** - Data fetching and caching
- **Drizzle ORM** - Type-safe SQL operations with PostgreSQL
- **better-auth** - Authentication with social providers
- **shadcn/ui** - Component library with Tailwind CSS 4
- **Eden/Treaty** - Type-safe API client

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your database URL and secrets

# Start database (requires Docker)
./start-database.sh

# Generate Drizzle schema
pnpm db:generate

# Push to database
pnpm db:push

# Run dev server
pnpm dev
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TanStack Query | Client-side data fetching |
| Drizzle ORM | Database ORM |
| better-auth | Authentication |
| shadcn/ui | UI components |
| Eden/Treaty | Type-safe API calls |
| Elysia | API server |
| Tailwind CSS 4 | Styling |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Secret for session encryption |
| `BETTER_AUTH_GITHUB_CLIENT_ID` | GitHub OAuth (optional) |
| `BETTER_AUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth (optional) |
| `NEXT_PUBLIC_BASE_URL` | Public URL for production |

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm db:generate` - Generate Drizzle schema
- `pnpm db:push` - Push schema to database
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm check` - Run Biome linter
- `pnpm typecheck` - Run TypeScript check
