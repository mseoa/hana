import { FaTrashCan } from 'react-icons/fa6';
import { useSession, type CartItem } from '../hooks/session-context';
import { FormEvent, useRef, useState, MouseEvent } from 'react';
import Button from './atoms/Button';
import { FaRedo, FaSave } from 'react-icons/fa';

type Props = {
  item: CartItem;
  toggleAdding?: () => void;
};

export default function Item({ item, toggleAdding }: Props) {
  const { id, name, price } = item;
  const { removeCartItem, addCartItem, editCartItem } = useSession();
  const [isEditing, setIsEditing] = useState(id == 0);
  const [hasDirty, setDirty] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const toggleEditing = (
    e?: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e?.preventDefault(); // reset을 여기서 무력화시키고,, form event랑 mouse event는 preventDefault가 있음
    if (hasDirty && nameRef.current && priceRef.current) {
      nameRef.current.value = name;
      priceRef.current.value = String(price);
    }
    // console.log('toggleAdding', !!toggleAdding);
    setTimeout(() => {
      if (toggleAdding)
        toggleAdding(); // 원래 add item 버튼으로 되돌림
      else setIsEditing((prev) => !prev); //
    }, 500);
  };

  const removeItem = (id: number) => {
    if (confirm('삭제하시겠습니까?')) removeCartItem(id);
  };

  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    if (!name) {
      alert('상품명을 입력해주세요.');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('가격을 입력해주세요.');
      return priceRef.current?.focus();
    }
    // console.log('name/price', name, price);
    if (id == 0) addCartItem(name, +price);
    else editCartItem({ id, name, price: +price });

    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current.focus();

    toggleEditing();
  };

  const checkDirty = () => {
    const currName = nameRef.current?.value;
    const currPrice = Number(priceRef.current?.value);
    setDirty(name !== currName || price !== currPrice);
  };

  return (
    <>
      {isEditing ? (
        <>
          <form onSubmit={(e) => saveItem(e)} className='mt-3 flex gap-3'>
            <small className='text-gray-300'>{id}</small>
            <input
              ref={nameRef}
              type='text'
              onChange={checkDirty}
              placeholder='name...'
              defaultValue={name}
              className='inp'
            />
            <input
              ref={priceRef}
              type='price'
              onChange={checkDirty}
              placeholder='price...'
              defaultValue={price}
              className='inp'
            />
            <Button type='reset' onClick={(e) => toggleEditing(e)}>
              <FaRedo />
            </Button>
            {hasDirty && (
              <Button type='submit' variant='btn-primary'>
                <FaSave />
              </Button>
            )}
          </form>{' '}
        </>
      ) : (
        <a
          href='#'
          onClick={() => toggleEditing()} // event 전달하지 않기 위해 arrow function 사용
          key={id}
          className='group flex justify-between hover:bg-gray-100'
        >
          <strong className='group-hover:text-blue-400'>
            <small className='text-gray-200'>{id}</small> {name}
            <small className='ml-2 font-light text-gray-500 group-hover:text-gray-100'>
              ({price.toLocaleString()})
            </small>
          </strong>
          <button
            onClick={() => removeItem(id)}
            className='btn btn-danger px-1'
          >
            <FaTrashCan />
          </button>
        </a>
      )}
    </>
  );
}
