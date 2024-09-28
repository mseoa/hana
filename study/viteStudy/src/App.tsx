import { useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] }; // My에서 사용

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => {
    setCount(count + 1);
    // setCount((count) => count + 1);
    const cnt = document.getElementById('cnt');
    console.log('count======>', count, cnt?.innerText);
    setTimeout(() => {
      console.log('>>>>======>', count, cnt?.innerText);
    }, 17); //17ms가 지나도 virtual DOM이 변경되지 않아서 count는 변경되지 않음.
    // DOM이 상태값보다 먼저 변경되었다는 것을 알 수 있음
    //16ms가 지나 rerendering이 발생해서 DOM은 먼저 그려졌고 상태값은 아직 변경되지 않았음
  }; // setCount를 직접 전달하면 side effect가 발생할 수 있음
  const minusCount = () => setCount(count - 1);

  const logout = () => setSession({ ...session, loginUser: null }); // 리액트는 객체의 주소값(참조)이 바뀌었을 때만 "어, 뭔가 변경됐구나!" 하고 인식해서 다시 렌더링을 해줍니다.
  // 위에처럼 하는게 순수함수인 이유는 session을 직접 변경하지 않고 새로운 객체를 만들어서 변경하기 때문
  // const logout = () => {
  //   session.loginUser = null;
  //   // setSession(session); // 이렇게해도 주소값이 바뀌지 않아서 인식을 못함
  // }; // session의 주소가 안바껴서 virtual DOM이 변경을 인식하지 못함
  // // session의 주소를 바꾸는거는 setSession를 사용해야함
  const login = (id: number, name: string) =>
    setSession({ ...session, loginUser: { id, name } });

  const removeCartItem = (id: number) =>
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });

  return (
    <div className='mt-5 flex flex-col items-center'>
      <h1>Vite Study (App)</h1>
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1); // setCount는 상태값을 변경하고 리렌더링을 발생시킴
            // setCount가 주석처리되면 count값은 변경되지만 화면에 반영되지 않음
            // 왜냐하면 상태값을 변경하고 리렌더링을 발생시키지 않았기 때문
            if (session.loginUser) session.loginUser.name = 'XXX';
            console.table(session.loginUser);
          }}
          className='btn'
        >
          count is {count}
        </button>
      </div>
      <hr />
      <Hello
        name='홍길동'
        age={33}
        count={count}
        plusCount={plusCount}
        minusCount={minusCount}
      />
      <hr />
      <My
        session={session}
        logout={logout}
        login={login}
        removeCartItem={removeCartItem}
      />
    </div>
  );
}

export default App;
