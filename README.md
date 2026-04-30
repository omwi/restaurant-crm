# Restaurant CRM

A responsive web application for managing restaurant operations with employee oversight, real-time communication, authentication, and a modern mobile-friendly interface.

[Deploy](https://restaurant-crm-bay.vercel.app/)

## Features

- Employees: Manage and view employee information in one place
- Chat: Built-in chat page for team communication and quick coordination.
- Authentication: Secure login system with protected routes
- Responsive Design: Fully adaptive interface optimized for mobile and desktop screens

## How to run locally

```bash
# Install dependencies
pnpm i

# Development server
pnpm dev

# Or build and preview
pnpm build
pnpm preview
```

## Tech Stack:

Core dependencies:

- React 19 - UI library for building interactive components
- shadcn/ui - Accessible, reusable UI components
- Tailwind CSS - Utility-first styling for fast responsive layouts
- TanStack Router - Type-safe client-side routing
- TanStack Query - Server state management and API requests
- React Hook Form - Form handling and validation
- Zod - Schema validation for forms and data
- @hookform/resolvers - Integration between React Hook Form and Zod
- React Responsive - Media query hooks

Build tools:

- vite
- pnpm
