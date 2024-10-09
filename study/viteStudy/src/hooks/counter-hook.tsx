import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';

const contextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type CounterContextProps = typeof contextInitValue;

// 이렇게 생성한 것을
const CounterContext = createContext<CounterContextProps>(contextInitValue);

type Action = { type: 'PLUS' | 'MINUS'; payload: number };
const reducer = (count: number, { type, payload }: Action) => {
  if (type === 'PLUS') return count + payload;
  if (type === 'MINUS') return count - payload;
  return count;
};

// 이걸로 provider를 만들어서 사용할 수 있게 함
export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0); // count가 바뀌면 rerendering이 발생함
  //useReducer로 바꾸기
  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = (step: number = 1) => {
    // console.log('plusCount---->', count);
    // setCount((count) => count + step); //useState
    dispatch({ type: 'PLUS', payload: step });
    // setCount((count) => count + 1);
    // const cnt = document.getElementById('cnt');
    // console.log('count======>', count, cnt?.innerText);
    // setTimeout(() => {
    //   console.log('>>>>======>', count, cnt?.innerText);
    // }, 17); //17ms가 지나도 virtual DOM이 변경되지 않아서 count는 변경되지 않음.
  };

  const minusCount = (step: number = 1) => {
    dispatch({ type: 'MINUS', payload: step });
    // console.log('minusCount---->', count);
    // setCount((count) => count - step); //useState
  };

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export const useCount = (defVal = 0) => {
  const [count, setCount] = useState(defVal);
  const plusCount = (flag = 1) => setCount((pre) => pre + flag);
  return [count, plusCount];
};
