import { FormEvent, useEffect, useImperativeHandle, useRef } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { useSession } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-hook';
import { useInterval, useTimeout } from '../hooks/timer-hooks';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default function Login() {
  console.log('Login render');
  const { login, loginRef } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  // const [id, setId] = useState(0); // 정답은 useRef
  // const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null); // 매번 바뀔때마다 rerender안됨
  const idRef = useRef<HTMLInputElement>(null);
  //   console.log(id); // useState쓰면 id가 바뀔때마다 렌더링돼서 cpu에 부담이 될 수 있음
  // 그래서 useRef를 씀

  // useImperativeHandle써서 바깥에서 ref로 접근할 수 있게 할거임
  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') {
        idRef.current?.focus();
      }
      if (prop === 'name') {
        nameRef.current?.focus();
      }
    },
  };

  useImperativeHandle(loginRef, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value ?? ''; // validation check은 LoginHandler에 떠넘김
    const id = idRef.current?.value ?? 0;

    /**
    const elements = e.currentTarget.elements; // currentTarget은 form
    const { id, name } = elements as typeof elements & {
      id: HTMLInputElement;
      name: HTMLInputElement;
    };
    // console.log('signIn!!!!', elements, id, name);
    if (!id.value || !name.value) {
      alert('ID와 Name을 입력해주세요.');
      id.focus();
      return;
    }
    login(+id.value, name.value);
     */
    login(+id, name);
  };

  // const changeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  // useEffect(() => {
  //   idRef.current?.focus();
  //   console.log('*******1111');
  //   return () => {
  //     alert('unmount1111');
  //   };
  // }, []); // DOM이 mount되고 paint되기 전의 시점에 실행됨

  // useEffect(() => {
  //   console.log('******22222');
  //   alert('login please');
  //   return () => {
  //     alert('unmount22222');
  //   };
  // }, []); // DOM이 mount되고 paint되기 전의 시점에 실행됨

  /** 왜 useTimeout에 callback함수를 useRef로 감싸서 사용하는가?
   * 매번 새로운 함수를 생성하면 useEffect가 실행될 때마다 새로운 함수가 생성되어
  console.log('****', new Date().getSeconds());
  useInterval(plusCount, 1500);
  const f = () => {
    console.log('once??');
  };
  useTimeout(f, 1000);
  */

  // useEffect(() => {
  //   const intl = setTimeout((x) => console.log('xxxxx', x), 500, 123);

  //   return () => {
  //     clearTimeout(intl);
  //   };
  // }, []);

  // useTimeout(
  //   (x: number, y: number) => console.log('useTimeout!!!!', x, y),
  //   500,
  //   123,
  //   456
  // );

  // useTimeout((y: number) => console.log('useTimeout!!!!', y), 500, 456);

  useInterval(() => console.log('useInterval'), 1000);
  const f = () => console.log('once??');
  useTimeout(f, 1500);

  useEffect(() => {
    // console.log('useefffffffff', count);
    plusCount();
    return minusCount;
  }, [count, plusCount, minusCount]);
  // useEffect(paint), useLayoutEffect(layout) -> lifecycle method
  // flushSync는 vdom이 그리기 전에 실행됨

  return (
    <>
      <form onSubmit={signIn} className='p-4'>
        <LabelInput
          label='ID'
          type='number'
          classNames='mb-3'
          // onChange={(e) => setId(+e.currentTarget.value)}
          ref={idRef}
        />
        {/* <LabelInput label='Name' classNames='mb-3' onChange={changeName} /> */}
        {/* <div className='flex'>
        <label htmlFor="id" className='w-24'>ID:</label>
        <input
          id='id'
          type='number'
          placeholder='Id...'
          className='inp mb-3'
          //   onChange={(e) => setId(+e.currentTarget.value)}
        />
        </div> */}
        <div className='flex'>
          <label htmlFor='name' className='w-24'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            placeholder='Name...'
            // onChange={changeName}
            ref={nameRef}
            className='inp'
          />
        </div>
        {/* <button className='btn btn-success float-end mt-3'>Sign in</button> */}
        <Button variant='btn-success' classNames='float-end mt-3'>
          Sign in
        </Button>
      </form>
    </>
  );
}
