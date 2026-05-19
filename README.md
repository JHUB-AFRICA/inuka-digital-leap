# Inuka Digital Leap

> Building Kenya’s Digital Infrastructure Talent Pipeline

---

## Overview

Inuka Digital Leap Web Application is a modern institutional digital platform designed to showcase, manage, and scale Kenya’s digital infrastructure workforce development initiative.

The platform serves as:
- A public-facing institutional website
- A storytelling and impact platform
- A trainee showcase system
- A digital transformation awareness portal
- A future-ready workforce development platform

The web application is designed with a premium modern interface, scalable frontend architecture, responsive user experience, and production-grade deployment infrastructure.

---

# Core Objectives

The platform aims to:

- Showcase the Inuka Digital Leap initiative
- Highlight trainee journeys and achievements
- Present program activities and impact metrics
- Promote digital infrastructure development
- Provide a scalable digital experience
- Support institutional partnerships
- Deliver a modern accessible web experience

---

# Technology Stack

## Frontend Framework

| Technology | Version |
|------------|---------|
| Angular | 21.2.11 |
| TypeScript | 5.9.2 |

---

## UI & Styling

| Technology | Version |
|------------|---------|
| TailwindCSS | 4.3.0 |
| PrimeNG | 21.1.8 |
| PrimeIcons | 7.0.0 |
| SCSS | Latest |

---

## Animations & UX

| Technology | Purpose |
|------------|---------|
| Angular Animations | UI transitions |
| GSAP | Advanced animations |
| Intersection Observer API | Scroll reveals |
| CSS Transitions | Microinteractions |

---

## State Management

| Technology | Purpose |
|------------|---------|
| Angular Signals | Reactive state |
| RxJS | Async streams |
| Signal Store Pattern | Feature state management |

---

## Infrastructure & Deployment

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Multi-service orchestration |
| Nginx | Production web server |
| Node.js 22 LTS | Runtime environment |
| pnpm | Package manager |

---

## Development Tooling

| Technology | Purpose |
|------------|---------|
| Zed IDE | 
| OpenCode | AI-assisted development |
| ESLint | Linting |
| Prettier | Code formatting |
| Angular CLI | Project tooling |
| Git | Version control |

---

# Project Architecture

The project follows a scalable enterprise Angular architecture using:
- Standalone Components
- Feature-based organization
- Shared UI abstractions
- Modular design principles
- Reusable component systems

---

# Project Structure

```txt
idl-app/
│
├── .angular/
├── .vscode/
├── dist/idl-app
├── node_modules/
│
│
├── docs/
│   ├── design.md
│   ├── architecture.md
│   ├── animation-guidelines.md
│   ├── component-guidelines.md
│   └── deployment.md
│
├── designs/
│   ├── homepage-desktop.png
│   ├── about-desktop.png
│   ├── cohort-desktop.png
│   ├── activities-desktop.png
│   └── dashboard-desktop.png
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── config/
│   │   │   ├── constants/
│   │   │   ├── guards/
│   │   │   ├── layout/
│   │   │   ├── models/
│   │   │   ├── tokens/
│   │   │   └── utils/
│   │   │
│   │   ├── shared/
│   │   │   ├── animations/
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   └── ui/
│   │   │
│   │   ├── features/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pathway/
│   │   │   ├── cohort/
│   │   │   ├── activities/
│   │   │   ├── stories/
│   │   │   ├── impact/
│   │   │   ├── partners/
│   │   │   ├── gallery/
│   │   │   ├── apply/
│   │   │   └── contact/
│   │   │
│   │   ├── app.scss
│   │   ├── app.ts
│   │   ├── app.config.ts
│   │   ├── app.hmtl
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   ├── logos/
│   │   ├── images/
│   │
│   ├── environments/
│   │
│   ├── styles/
│   │   ├── _mixins.scss/
│   │   ├── _theme.scss
│   │   ├── _topography.scss
│   │   └── _variables.scss
│   │
│   ├── index.html
│   └── main.ts
│
├── .dockerignore
├── .editorconfig
├── .gitignore
├── .prettierrc
├── angular.json
├── docker-compose.yml
├── dockerfile
├── nginx.conf
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tailwind.config.ts
