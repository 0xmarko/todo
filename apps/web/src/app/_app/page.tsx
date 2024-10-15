import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/')({ component: Page });

function Page() {
  return <div>App</div>;
}
