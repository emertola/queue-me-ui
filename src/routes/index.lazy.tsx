import HomePage from '@/components/features/home/HomePage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => <HomePage />,
});
