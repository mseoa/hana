import Link from 'next/link';
import { getTodos } from '@/lib/todos';

export const dynamic = 'force-static';

export default async function Todos() {
  const todos = await getTodos();

  return (
    <>
      <h1 className='text-2xl'>#1&apos;s Todos</h1>
      <ul className='border p-3'>
        {todos.map(({ id, title }) => (
          <li key={id} className='border-b'>
            <small className='text-slate-300'>{id}.</small>
            <Link href={`todos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
