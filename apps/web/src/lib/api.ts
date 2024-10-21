import { createEdenTreatyReactQuery } from '@ap0nia/eden-react-query';
import type { App } from '@repo/api';

// import { treaty } from '@elysiajs/eden';

// export const api = treaty<App>(import.meta.env.VITE_BASE_API_URL, {
//   fetch: { credentials: 'include' },
// });

export const api = createEdenTreatyReactQuery<App>();
