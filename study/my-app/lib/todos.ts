const BASE_URL = 'https://jsonplaceholder.typicode.com';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodo = async (todoId: number = 1) => {
  const data = await fetch(`${BASE_URL}/todos/${todoId}`, {
    // cache: 'force-cache',
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return data as Todo;
};

export const getTodos = async (userId: number = 1) => {
  const data = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
    // cache: 'force-cache',
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return data as Todo[];
};
