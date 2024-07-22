import SignUp from '@/authentication/SignUp';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/signup')({
  component: () => <SignUp />,
});
