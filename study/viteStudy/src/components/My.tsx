import Login from './Login';
import Profile from './Profile';
import { FaPlus } from 'react-icons/fa6';
import Button from './atoms/Button';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';
import Item from './Item';
import useToggle from '../hooks/toggle';
import { FaSearch } from 'react-icons/fa';
import { useDebounce } from '../hooks/timer-hooks';

// type Props = {
//   session: Session;
//   logout: () => void;
//   login: (id: number, name: string) => void;
//   removeCartItem: (itemId: number) => void;
//   addCartItem: (name: string, price: number) => void;
// };

export default function My() {
  const { session } = useSession();

  const { count } = useCounter();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  // const [isAdding, setIsAdding] = useState(false);
  // const toggleAdding = () => setIsAdding((prev) => !prev);
  const [isAdding, toggleAdding] = useToggle();

  const [, toggleSearch] = useToggle();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchStr, setSearchStr] = useState('');

  useDebounce(
    () => {
      console.log('useDebounce SEARCH>>>', searchRef.current?.value);
      setSearchStr(searchRef.current?.value || '');
    },
    2000,
    [searchRef.current?.value]
  );

  // const totalPrice = session.cart.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = useMemo(() => {
    return session.cart.reduce((acc, item) => acc + item.price, 0);
  }, [session.cart]);

  const dcPrice = useMemo(() => {
    return totalPrice * 0.1;
  }, [totalPrice]);

  useLayoutEffect(() => {
    console.log('$$$$$$$$$$$$$');
  }, [totalPrice]);

  // 계속 바뀌는 데이터는 asset에 두고
  // 고정 데이터는 public에 둔다. 왜냐하면 public은 파일명이 바뀌지 않는 이상 캐시가 되기 때문이다.

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const { signal } = abortController;
  //   fetch('/data/sample.json', { signal })
  //     .then((res) => res.json())
  //     .then((data) => console.log('data>>>>', data));

  //   return () => {
  //     abortController.abort(); // 앞에서의 fetch를 취소한다.
  //   };
  // }, []);

  return (
    <>
      <h1>(My)</h1>
      {session.loginUser ? (
        <div className='flex gap-5'>
          <Profile ref={logoutButtonRef} />
          <Button
            onClick={() => logoutButtonRef.current?.focus()}
            className='whitespace-pre-wrap'
          >
            <>
              Profile 상위인
              <br />
              My에서 SignOut
            </>
          </Button>
        </div>
      ) : (
        <Login />
      )}
      <div className='w-2/3 border p-3'>
        <div className='flex items-center gap-2'>
          <FaSearch />
          <input
            // onChange={(e) => setSearchStr(e.currentTarget.value)}
            onChange={toggleSearch}
            ref={searchRef}
            type='text'
            className='inp'
            placeholder='아이템 검색...'
          />
        </div>
        <ul className='my-3 border px-3'>
          {session.cart.length ? (
            session.cart
              .filter(({ name }) => name.includes(searchStr))
              .map((item) => (
                <li key={item.id}>
                  <Item item={item} />
                </li>
              ))
          ) : (
            <li className='text-slate-500'>장바구니가 비었습니다.</li>
          )}
          <li className='mt-3 text-center'>
            {isAdding ? (
              <Item
                item={{ id: 0, name: '', price: 0 }}
                toggleAdding={() => toggleAdding()}
              />
            ) : (
              <Button onClick={toggleAdding}>
                <FaPlus /> Add Item count-{count}
              </Button>
            )}
          </li>
        </ul>
      </div>
      <div className='flex gap-5'>
        <span>
          <strong>*총액: {totalPrice.toLocaleString()}원</strong>
        </span>
        <span>
          <strong>*할인: {dcPrice.toFixed(0).toLocaleString()}원</strong>
        </span>
      </div>
    </>
  );
}
