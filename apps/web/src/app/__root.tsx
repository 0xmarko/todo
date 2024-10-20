import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Button } from '~/components/ui/button';
import { Providers } from './-providers';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <Providers>
      <div>Root Layout</div>
      <div className="flex gap-2 mb-2">
        <Button asChild>
          <Link to="/">App</Link>
        </Button>
        <Button asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </Providers>
  );
}
