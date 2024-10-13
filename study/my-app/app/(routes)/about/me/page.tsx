'use client';

// react client component (RCC)
// async를 쓸수가 없음
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import { cn } from '@/lib/utils';

export default function Me() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // 지연이 발생함
  const urlSearchParams = new URLSearchParams(searchParams.toString());

  const goback = () => {
    router.back();
  };

  const goHello = () => {
    router.push('/hello', { scroll: false });
  };

  const changeSearchParams = (x: string) => {
    urlSearchParams.set('xxx', x);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  };

  return (
    <Modal>
      <div className={cn('p-3 justify-between text-sm flex')}>
        <button onClick={goback}>Back</button>
        <button onClick={goHello}>Hello</button>
        <button onClick={() => changeSearchParams('999')}>change-xxx</button>
      </div>
      Me Page : {pathname} ? xxx={searchParams.get('xxx')}
    </Modal>
  );
}
