import { getToken } from '@/api';
import Login from '@/authentication/Login';
import { createLazyFileRoute } from '@tanstack/react-router';
import SecuredApp from './(hidden)/secured';

export const Route = createLazyFileRoute('/signin')({
  component: () => (getToken() ? <SecuredApp /> : <Login />),
});
