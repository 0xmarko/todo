import { httpBatchLink } from '@ap0nia/eden-react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { api } from '~/lib/api';

const apiClient = api.createClient({
  links: [httpBatchLink({ domain: import.meta.env.VITE_BASE_API_URL })],
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <api.Provider client={apiClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  );
}
