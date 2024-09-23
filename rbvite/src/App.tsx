import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';
import Login from './components/Login';
import Profile from './components/Profile';

type LoginUser = typeof SampleSession.loginUser;
type cartItem = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: cartItem[];
};

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  // public은 static

  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  const logout = () => setSession({ ...session, loginUser: null });
  const login = (id: number, name: string) =>
    setSession({ ...session, loginUser: { id, name } });

  return (
    <>
      <div>
        <Hello
          name='seoa'
          age={33}
          plusCount={plusCount}
          minusCount={minusCount}
          count={count}
        />
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          APP count is {count} (plus)
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          APP count is {count} (minus)
        </button>
      </div>
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <My session={session} logout={logout} login={login} />
    </>
  );
}

export default App;
