import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { routeTree } from './routes.gen';
import './styles/globals.css';

const router = createRouter({
  routeTree,
  defaultPendingMinMs: 0,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <RouterProvider router={router} />,
);
