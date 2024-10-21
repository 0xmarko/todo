import { treaty } from '@elysiajs/eden';
import type { App } from '@repo/api';

export const api = treaty<App>(import.meta.env.VITE_BASE_API_URL, {
  fetch: { credentials: 'include' },
});
