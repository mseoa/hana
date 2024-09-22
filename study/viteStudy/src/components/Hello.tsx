import { ReactNode, useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
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
  name: string;
  age: number;
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export default function Hello({
  name,
  age,
  count,
  plusCount,
  minusCount,
}: Props) {
  //   const [myState, setMyState] = useState(() => new Date().getTime());
  const [myState, setMyState] = useState(0);
  let v = 1;
  //   console.debug('********', v, myState);

  return (
    <div className='border border-slate-300 p-3 my-5'>
      <Title text='(Hello) Hi~' name={name} />
      <Body>
        This is Hello Body Component. {v} - {myState} - {age}
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
      <strong className='mx-5'>{count}</strong>
      <button onClick={() => minusCount()} className='btn btn-danger'>Minus</button>
    </div>
  );
}
