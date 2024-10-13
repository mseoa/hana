export default function HiTime_intercept({
  params: { time },
}: {
  params: { time: string };
}) {
  return (
    <>
      <h1 className='text-2xl'>Hi/Time [{time}] - INTERCEPT</h1>
      <a href='/hi/morning'>Real Morning</a>
    </>
  );
}
