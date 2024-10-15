import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login')({ component: Page });

function Page() {
  return <div>Login</div>;
}
