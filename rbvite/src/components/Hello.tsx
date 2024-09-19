// NOTE:

import { ReactNode, useState } from 'react';

// const HelloPast: React.FC = () => {};
// export default HelloPast;
// <> </> React Fragment 생략

// const Title = (props: { text: string }) => <h1>{props.text}</h1>;

type TitleProps = { text: string; name: string };

const Title = ({ text, name }: TitleProps) => (
  <h1>
    {text} {name}
  </h1>
);

/**
NOTE: children 쓰는 방법
아래에서 들어갈 내용을 정하고 싶을때?
얘도 property는 맞음
 */
const Body = ({ children }: { children: ReactNode }) => {
  console.log('바뀌고있음????');
  return (
    <div className='red' style={{ color: 'pink' }}>
      {children}
    </div>
  );
};

/*
NOTE: 내부에 있는게 외부에 있는 것보다 늦게 실행된다
children이 변경이 계속 일어나기 때문에 바뀌고있음????이 계속 실행됨
props가 바꼈을때 function이 다시 실행된다
// react는 함수를 호출해줌
*/
export default function Hello() {
  const [myState, setMyState] = useState(0); // 초기값 0, hook의 가장 기본이 STATE
  let v = 1;
  console.log('*****', myState);
  return (
    <>
      <Title text='Hi~😉' name='Seoa' />
      <h1>Hello</h1>
      <Body>
        This is Hello Body Component. {v} - {myState}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          console.log('v/myState', v, myState);
        }}
      >
        Click Here!
      </button>
    </>
  ); // 변경사항있을 때마다 다 새로 호출됨. 그래서 무거운 컴포넌트일 수록 memoization을 잘해야함
}
