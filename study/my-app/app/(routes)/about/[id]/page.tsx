import { notFound } from 'next/navigation';
import { getTodos } from '@/lib/todos';

export const revalidate = 5; // 5초마다 revalidate ISR
// export const dynamic = 'force-dynamic'; // ssr
// export const dynamic = 'force-static'; // generate하면서 한번 콘솔찍고, html을 response하면서 한번 콘솔
// export const dynamic = 'auto';

// generateStaticParams가 존재하면 무조건 ssg
export async function generateStaticParams() {
  return (await getTodos(1)).map(({ id }) => ({
    id: id.toString(),
  }));
  // return [{ id: '1' }, { id: '2' }];
}
// getTodo가 force-cache이기 때문에, dynamic이지만 한번 호출된 id에 대해서는 SSG
export default async function AboutTodo({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log('About - todo - id:', id); // dynamic test

  const todos = await getTodos(1);
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    // return <h1 className='text2xl text-red-500'>#{id} is not found !!</h1>;
    // throw new Error('xxxxxx');
    return notFound();
  }

  const { title, completed } = todo;

  return (
    <>
      <h1 className='text-2xl'>About Todo #{id}</h1>
      <strong className={`${completed ? 'line-through' : 'font-extrabold'}`}>
        title: {title}
      </strong>
    </>
  );
}
