import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useReducer,
  useState,
  useTransition,
} from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch-hook';
import { FaSpinner } from 'react-icons/fa6';
import { useMyReducer, useMyState } from '../libs/my-uses';
import Button from './atoms/Button';

type TitleProps = {
  text: string;
  name?: string;
};

const Title = ({ text, name }: TitleProps) => {
  //   console.log('Titttttttttttttt!!');
  return (
    <h1 className='text-3xl'>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  //   console.log('bodddddddd!!!');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

type Props = {
  friend: number;
};

export type MyHandler = {
  jumpHelloState: () => void;
};

type PlaceUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function Hello({ friend }: Props, ref: ForwardedRef<MyHandler>) {
  //   const [myState, setMyState] = useState(() => new Date().getTime());
  const {
    session: { loginUser },
  } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  // const [myState, setMyState] = useState(0);

  const [p, dispatchP] = useReducer((pre) => pre + 10, 0);
  const [q, dispatchQ] = useMyReducer((pre) => pre + 10, 0);
  const [myState, setMyState] = useMyState(0);
  let v = 1;

  const [isPending, startTransition] = useTransition();
  const [arr, setArr] = useState<{ id: number }[]>([]);
  //   console.debug('********', v, myState);

  //useImperativeHandle
  const handler: MyHandler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };

  useImperativeHandle(ref, () => handler);

  const {
    data: friendInfo,
    isLoading,
    error,
  } = useFetch<PlaceUser>(
    `https://jsonplaceholder.typicode.com/users/${friend}`,
    true,
    [friend]
  );

  return (
    <div className='my-5 w-2/3 border border-slate-300 p-3 text-center'>
      <Title text='(Hello) Hi~' name={loginUser?.name} />
      p: {p}
      <Button onClick={dispatchP}>PPP</Button>
      q: {q}
      <Button onClick={dispatchQ}>PPP</Button>
      <Body>
        <h3 className='text-center text-2xl'>myState: {myState}</h3>
        {isLoading ? (
          <h3 className='flex justify-center'>
            <FaSpinner size={20} className='animate-spin text-slate-500' />
          </h3>
        ) : error ? (
          <strong className='text-red-500'>
            {error.message && error.message.startsWith('404')
              ? `Your friend is not found ${friend}`
              : error.message}
          </strong>
        ) : (
          <strong>
            My friend is {friendInfo?.id}. {friendInfo?.name}.
          </strong>
        )}
        <p>
          {v} - {friend}
        </p>
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          plusCount();
          // console.log('v/myState=', v, myState);
          startTransition(() => {
            // 브라우저의 메인스레드가 아니라 다른 스레드에서 실행해라
            const newArr = Array.from({ length: 40000 }, (_, i) => ({
              id: i + myState,
            }));
            setArr(newArr);
          });
        }}
        className='btn'
      >
        Hello!
      </button>
      <strong id='cnt' className='mx-5'>
        {count}
      </strong>
      <button onClick={() => minusCount()} className='btn btn-danger'>
        Minus
      </button>
      {isPending ? (
        <FaSpinner className='animate-spin' />
      ) : (
        <ul>
          {arr.map((a) => (
            <li key={a.id}>{a.id}</li>
          ))}{' '}
        </ul>
      )}
    </div>
  );
}

const ImperativeHello = forwardRef(Hello);

export default ImperativeHello;
