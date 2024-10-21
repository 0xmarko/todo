import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { api } from '~/lib/api';

export const Route = createFileRoute('/_app/')({ component: Page });

function Page() {
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await api.todos.all.get();
      console.log('response mutation:', response);
      if (response.error) throw response.error;
      return response.data;
    },
  });

  return (
    <div>
      <p>App</p>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      {todos && !todos.length && <p>No todos</p>}
      {isPending && <p>Loading todos...</p>}
      {isError && <p className="text-red-500">Error loading todos</p>}
    </div>
  );
}
