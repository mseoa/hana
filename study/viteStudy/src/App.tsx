import { memo, useReducer, useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
// import { useCounter } from './hooks/counter-hook';
import { SessionProvider } from './hooks/session-context';
import useToggle from './hooks/toggle';
import { useDebounce } from './hooks/timer-hooks';
import Button from './components/atoms/Button';
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { NotFound } from './NotFound';

const ColorTitle = ({
  color,
  backgroundColor,
}: {
  color: string;
  backgroundColor: string;
}) => {
  console.log('@@@ColorTitle', color);
  return (
    <h1 className='text-2xl' style={{ color, backgroundColor }}>
      MEMO
    </h1>
  );
};

const MemoedColorTitle = memo(
  ColorTitle,
  ({ color: prev }, { color: curr }) => prev === curr
);

function App() {
  // const [count, setCount] = useState(0);
  //useImperativeHandle
  const [friend, setFriend] = useState(10);
  const [, toggleRerender] = useToggle();
  const myHandleRef = useRef<MyHandler>(null); // ref의 current가 가질 타입, 자식이 아직 안그려졌으면 핸들러가 없을 수 있음

  const [color, changeColor] = useReducer(() => 'blue', 'red');

  const friendRef = useRef<HTMLInputElement>(null);
  useDebounce(
    () => {
      console.log('useDebounce>>>', friendRef.current?.value);
      setFriend(+(friendRef.current?.value || 0));
    },
    3000,
    [friendRef.current?.value]
  );
  // const { count, plusCount } = useCounter();
  return (
    <div className='flex flex-col items-center'>
      <h1>Vite Study (App)</h1>
      <MemoedColorTitle color='white' backgroundColor={color} />
      <Button onClick={changeColor}>Change Color</Button>
      {/* <pre>{JSON.stringify(session.loginUser)}</pre>
      <div className='card'>
        <button
          onClick={() => {
            plusCount(); // setCount는 상태값을 변경하고 리렌더링을 발생시킴
            // setCount가 주석처리되면 count값은 변경되지만 화면에 반영되지 않음
            // 왜냐하면 상태값을 변경하고 리렌더링을 발생시키지 않았기 때문
            if (session.loginUser) session.loginUser.name = 'XXX';
            // console.table(session.loginUser);
            myHandleRef.current?.jumpHelloState();
          }}
          className='btn'
        >
          count is {count}
        </button>
      </div> */}
      <hr />
      <SessionProvider>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/my' element={<My />} />
          {/* <Route path='/items' element={<Items />} /> */}
          {/* <Route path='/items/:id' element={<ItemDetail />} /> */}
          <Route path='/hello' element={<Hello />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <div className='mt-3 w-64'>
          <input
            type='number'
            defaultValue={friend}
            // onChange={(e) => setFriend(+e.currentTarget.value)}
            onChange={toggleRerender}
            ref={friendRef}
            placeholder='friend id...'
            className='inp'
          />
        </div>
        <Hello friend={friend} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>
    </div>
  );
}

export default App;
