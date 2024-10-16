import { Elysia, t } from 'elysia';
import { config } from '../config';

export const todosRouter = new Elysia({ prefix: '/todos' })
  .use(config)

  .get('/all', async () => {
    console.log('/todos/all');
    return [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
    ];
  })

  .get(
    '/byId',
    async ({ query }) => {
      console.log('/todos/byId');
      console.log('query:', query);
      return { id: query.id, title: `Todo ${query.id}` };
    },
    {
      query: t.Object({ id: t.Number() }),
    },
  )

  .post(
    '/create',
    async ({ body }) => {
      console.log('/todos/create');
      console.log('body:', body);
      return { id: 3, title: `Todo ${body.title}` };
    },
    {
      body: t.Object({ title: t.String() }),
    },
  );
