# Deal Domain

A learning project for building a full-stack deals community application. The goal is to learn how a real web application works by building it in small steps and understanding each part along the way.

Users will be able to share product deals, browse and filter a feed, vote on deals, and comment. The project will begin as a local application and gradually introduce common production practices such as input validation, rate limiting, caching, logging, metrics, and load testing.

## Learning goals

- Build and document a JSON API
- Create a modern, accessible React frontend
- Model relational data and query it with PostgreSQL
- Add authentication, authorization, and data validation
- Handle pagination, filtering, and sorting
- Learn rate limiting and caching with Redis
- Observe application behavior with Prometheus and Grafana
- Practice testing, logging, Docker-based local development, and system design

## Planned technology stack

- **TypeScript** for frontend and backend code
- **React** for the frontend
- **Fastify** for the API
- **PostgreSQL** as the durable source of truth
- **Redis** later for caching and shared rate-limit counters
- **Docker Compose** optionally for running local services consistently
- **Prometheus and Grafana OSS** later for local metrics and dashboards

The application is intended to be developed locally without paid services. Any hosted deployment will be optional and evaluated against the provider’s current free-tier limits before use.

## Initial feature scope

- Browse a paginated deals feed
- View a deal and its comments
- Register, sign in, and sign out
- Create, edit, and delete your own deals
- Vote once per deal
- Add and delete your own comments
- Filter by category and sort by newest or score
- Return clear validation errors from the API

Image uploads, notifications, search infrastructure, and deployment are later additions, after the core app works.

## Repository layout

```text
apps/
  api/       Fastify API (planned)
  web/       React frontend (planned)
docs/        Architecture decisions and learning notes
outputs/     Project guide and learning track
```

## Current status

The project is in the planning and setup stage. The technology stack and one-repository structure have been chosen. The detailed project guide is in [`outputs/deals-community-project-guide.md`](outputs/deals-community-project-guide.md), and architecture decisions are in [`docs/architecture-decisions.md`](docs/architecture-decisions.md).

No application features have been implemented yet. Development will proceed as small, explained steps so that the learner can understand the purpose and behavior of the code rather than receive a complete generated application.

## Getting started

The app scaffolding and local services are not in place yet. Setup instructions will be added as those pieces are introduced. Docker is intended as an optional way to run local dependencies; users of a future hosted deployment will access the hosted instance without needing the developer’s computer to be running.

## License

No license has been selected yet. Choose one before accepting contributions or distributing the project.
