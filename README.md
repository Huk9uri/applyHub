# ApplyHub

ApplyHub는 여러 기업에 지원하는 개발자가 공고 정보, 자기소개서 문항, 포트폴리오 버전, 지원 상태를 한 곳에서 관리할 수 있도록 만든 지원 관리 대시보드입니다.

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS, TanStack Query
- Backend: Node.js, Express, TypeScript, Prisma
- Database: PostgreSQL
- Infra: Docker Compose

## Project Structure

```text
applyHub/
  frontend/          Next.js app
  backend/           Express API server
  docs/              Planning and project docs
  docker-compose.yml Local development services
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:3000`.

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on `http://localhost:4000`.

### Docker Compose

```bash
docker compose up --build
```

This starts PostgreSQL, the backend API, and the frontend app together.

## API

The first available endpoint is:

```http
GET /api/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "applyhub-api"
}
```

## Planning

The original planning document is stored at `docs/applyhub_planning.md`.
