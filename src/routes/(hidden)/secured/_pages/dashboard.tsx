import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(hidden)/secured/_pages/dashboard')({
  component: () => <div>Hello /(hidden)/secured/_pages/dashboard!</div>
})