import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard')({
  component: () => <div>Hello /_protected/dashboard!</div>
})