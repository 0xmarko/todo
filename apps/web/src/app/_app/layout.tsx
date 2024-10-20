import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app')({ component: Layout });

function Layout() {
  return (
    <>
      <div>App Layout</div>
      <Outlet />
    </>
  );
}
