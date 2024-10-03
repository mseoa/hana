import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';

export default function Login({
  login,
}: {
  login(id: number, name: string): void;
}) {
  const [id, setId] = useState(0); // 정답은 useRef
  const [name, setName] = useState('');
  //   console.log(id); // useState쓰면 id가 바뀔때마다 렌더링돼서 cpu에 부담이 될 수 있음
  // 그래서 useRef를 씀

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !name) {
      alert('ID와 Name을 입력해주세요.');
      return;
    }
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
    login(id, name);
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={signIn} className='border p-4'>
        <LabelInput
          label='ID'
          type='number'
          classNames='mb-3'
          onChange={(e) => setId(+e.currentTarget.value)}
        />
        <LabelInput label='Name' classNames='mb-3' onChange={changeName} />
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
        {/* <div className='flex'>
        <label htmlFor="name" className='w-24'>Name:</label>
        <input
          id='name'
          type='text'
          placeholder='Name...'
          //   onChange={(e) => setName(e.currentTarget.value)}
          autoComplete='off'
          className='inp'
        />
              </div> */}
        {/* <button className='btn btn-success float-end mt-3'>Sign in</button> */}
        <Button
          text='Sign in'
          variant='btn-success'
          classNames='float-end mt-3'
        />
      </form>
    </>
  );
}
