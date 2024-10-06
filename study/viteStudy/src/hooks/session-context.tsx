import {
  PropsWithChildren,
  createContext,
  createRef,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { LoginHandler } from '../components/Login';
import { useFetch } from './fetch-hook';

// const SampleSession = {
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };

const SampleSession = {
  loginUser: null,
  cart: [],
};

type LoginUser = { id: number; name: string };
export type CartItem = { id: number; name: string; price: number };

export type Session = { loginUser: LoginUser | null; cart: CartItem[] }; // My에서 사용

const contextInitValue = {
  session: SampleSession,
  login: (id: number, name: string) => {
    console.log(id, name);
  },
  logout: () => {},
  addCartItem: (name: string, price: number) => {
    console.log(name, price);
  },
  editCartItem: (item: CartItem) => console.log(item),
  removeCartItem: (id: number) => console.log(id),
  loginRef: createRef<LoginHandler>(),
};

// type SessionContextProps = typeof contextInitValue;
type SessionContextProps = Omit<typeof contextInitValue, 'session'> & {
  session: Session;
};

const SessionContext = createContext<SessionContextProps>(contextInitValue);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);

  // useImperativeHandle
  const loginRef = useRef<LoginHandler>(null);

  /** counter-hook.tsx
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
  */

  const logout = () => setSession({ ...session, loginUser: null }); // 리액트는 객체의 주소값(참조)이 바뀌었을 때만 "어, 뭔가 변경됐구나!" 하고 인식해서 다시 렌더링을 해줍니다.
  // 위에처럼 하는게 순수함수인 이유는 session을 직접 변경하지 않고 새로운 객체를 만들어서 변경하기 때문
  // const logout = () => {
  //   session.loginUser = null;
  //   // setSession(session); // 이렇게해도 주소값이 바뀌지 않아서 인식을 못함
  // }; // session의 주소가 안바껴서 virtual DOM이 변경을 인식하지 못함
  // // session의 주소를 바꾸는거는 setSession를 사용해야함
  const login = (id: number, name: string) => {
    if (!id) {
      alert('ID를 입력해주세요.');
      return loginRef.current?.focus('id');
    }
    if (!name) {
      alert('Name을 입력해주세요.');
      return loginRef.current?.focus('name');
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const removeCartItem = (id: number) =>
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== id),
    });

  const editCartItem = (item: CartItem) => {
    setSession({
      ...session,
      cart: session.cart.map((oldItem) =>
        oldItem.id === item.id ? item : oldItem
      ),
    });
  };

  const { data } = useFetch<Session>('/data/sample.json', true);
  useLayoutEffect(() => setSession(data || SampleSession), [data]);

  return (
    <SessionContext.Provider
      value={{
        session,
        logout,
        login,
        removeCartItem,
        addCartItem,
        editCartItem,
        loginRef,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
