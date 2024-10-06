import { PropsWithChildren, createContext, useContext, useState } from 'react';

const contextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type CounterContextProps = typeof contextInitValue;

// 이렇게 생성한 것을
const CounterContext = createContext<CounterContextProps>(contextInitValue);

// 이걸로 provider를 만들어서 사용할 수 있게 함
export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0); // count가 바뀌면 rerendering이 발생함

  const plusCount = () => {
    // console.log('plusCount---->', count);
    setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // const cnt = document.getElementById('cnt');
    // console.log('count======>', count, cnt?.innerText);
    // setTimeout(() => {
    //   console.log('>>>>======>', count, cnt?.innerText);
    // }, 17); //17ms가 지나도 virtual DOM이 변경되지 않아서 count는 변경되지 않음.
  };

  const minusCount = () => {
    // console.log('minusCount---->', count);
    setCount((count) => count - 1);
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
