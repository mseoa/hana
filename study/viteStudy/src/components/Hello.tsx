import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch-hook';
import { RiH3 } from 'react-icons/ri';
import { FaSpinner } from 'react-icons/fa6';

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
  const [myState, setMyState] = useState(0);
  let v = 1;
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
    </div>
  );
}

const ImperativeHello = forwardRef(Hello);

export default ImperativeHello;
