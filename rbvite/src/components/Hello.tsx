// NOTE:
import { ReactNode, useState } from 'react';

// const HelloPast: React.FC = () => {};
// export default HelloPast;
// <> </>: fragment (root element 필요함) 사이에 React Fragment 생략

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
  // console.log('바뀌고있음????');
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
type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  minusCount: () => void;
  count: number;
};

export default function Hello({
  name,
  age,
  plusCount,
  minusCount,
  count,
}: Props) {
  const [myState, setMyState] = useState(() => new Date().getTime());
  // 초기값 0, hook의 가장 기본이 STATE, virtual DOM에 상태 테이블에. 이 컴포넌트에 대해서는 싱글톤. 그래서 증가하는 카운트를 만들 수 있음.
  let v = 1;
  // console.log('*****', myState);
  return (
    <>
      <Title text='Hi~!' name={name} />
      <h1>Hello</h1>
      <Body>
        This is Hello Body Component. {v} - {myState} - {age}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          plusCount();
          // console.log('v/myState', v, myState);
        }}
      >
        HELLO PLUS {count}
      </button>
      <button
        onClick={() => {
          v++;
          setMyState(myState - 1);
          minusCount();
          // console.log('v/myState', v, myState);
        }}
      >
        HELLO MINUS {count}
      </button>
    </>
  ); // 변경사항있을 때마다 다 새로 호출됨. 그래서 무거운 컴포넌트일 수록 memoization을 잘해야함
}
