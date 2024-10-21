import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia, t } from 'elysia';
import { env } from '../lib/env';
import { todosRouter } from '../routers/todos';

export const app = new Elysia()
  .use(
    swagger({
      documentation: {
        openapi: '3.1.0',
        info: {
          title: 'Todo API',
          description: 'Todo REST API.',
          version: '0.0.0',
        },
        servers: [{ url: `http://localhost:${env.PORT}` }],
      },
    }),
  )
  .use(
    cors({
      origin: env.ALLOWED_ORIGIN,
      allowedHeaders: ['content-type'],
    }),
  )
  .use(todosRouter)
  .get('/ping', () => ({ status: 'OK' }), {
    response: t.Object({ status: t.String() }),
  })
  .onError(({ code, error }) => {
    switch (code) {
      case 'VALIDATION':
        return error.all;
      default:
        return error;
    }
  });

export type App = typeof app;
