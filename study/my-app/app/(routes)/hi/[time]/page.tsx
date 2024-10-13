type Params = {
  params: {
    time: string;
  };
  searchParams: {
    q: string;
  };
};

// 연예인 뉴스같은 사람들 많이 보는 페이지를 이런식으로 서버에서 html을 미리 다 만들어서 보내주는게 좋음
//SSG
export async function generateStaticParams() {
  return ['morning', 'afternoon', 'evening', 'night'].map((time) => ({ time }));
}

export default function Time({
  params: { time },
  searchParams: { q },
}: Params) {
  return (
    <div className='capitalize'>
      Good {time}! <span className='text-red-500 font-semibold'>{q}</span>
    </div>
  );
}
