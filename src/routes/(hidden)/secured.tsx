import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FC } from 'react';
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import { getToken } from '@/api';
import DisplayProfile from '@/components/features/DisplayProfile';

export const Route = createFileRoute('/(hidden)/secured')({
  beforeLoad: () => {
    if (!getToken()) {
      throw redirect({
        to: '/signin',
      });
    }
  },
  component: () => <SecuredApp />,
  notFoundComponent: () => <div>This page does not exist</div>,
});

const SecuredApp: FC = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Button className="flex items-center gap-2 font-semibold text-primary bg-transparent hover:bg-muted">
              <Package2 className="h-6 w-6" />
              <span className="">Logo Here</span>
            </Button>
          </div>
          <div className="flex-1">
            <div className="my-5">
              <DisplayProfile />
            </div>

            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Button
                className="flex items-center justify-start gap-3 rounded-lg bg-transparent px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted"
                asChild>
                <Link to="/secured/dashboard">
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button
                className="flex items-center justify-start gap-3 rounded-lg bg-transparent px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted"
                asChild>
                <Link to="/secured/personnel-list">
                  <Users className="h-4 w-4" />
                  Personnel
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Button className="flex items-center gap-2 text-lg font-semibold text-primary bg-transparent hover:bg-muted">
                  <Package2 className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </Button>
                <Button className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-primary bg-transparent hover:text-primary hover:bg-muted">
                  <Home className="h-5 w-5" />
                  Dashboard
                </Button>
                <Button className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-primary bg-transparent hover:text-primary hover:bg-muted">
                  <Package className="h-5 w-5" />
                  Products
                </Button>
                <Button className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-primary bg-transparent hover:text-primary hover:bg-muted">
                  <Users className="h-5 w-5" />
                  Customers
                </Button>
                <Button className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-primary bg-transparent hover:text-primary hover:bg-muted">
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 bg-gray-100 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SecuredApp;
