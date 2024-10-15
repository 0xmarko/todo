import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: Page });

function Page() {
  return <h3>Welcome</h3>;
}
