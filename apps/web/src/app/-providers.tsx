import { safeHttpLink } from '@ap0nia/eden-react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { eden } from '~/lib/eden';

const queryClient = new QueryClient();

const edenClient = eden.createClient({
  links: [
    safeHttpLink({
      domain: 'http://localhost:3000',
      fetch: { credentials: 'include' },
    }),
  ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <eden.Provider client={edenClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </eden.Provider>
  );
}
