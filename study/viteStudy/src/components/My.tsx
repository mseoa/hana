import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import { FaTrashCan } from 'react-icons/fa6';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
};

export default function My({ session, logout, login, removeCartItem }: Props) {
  const removeItem = (id: number) => {
    if (confirm('삭제하시겠습니까?')) removeCartItem(id);
  };
  return (
    <>
      <h1>(My)</h1>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul className='my-3 w-1/2 border p-3'>
        {session.cart.length ? (
          session.cart.map(({ id, name, price }) => (
            <li key={id} className='flex justify-between'>
              <strong>
                {name}{' '}
                <small className='font-light text-gray-500'>
                  ({price.toLocaleString()})
                </small>
              </strong>
              <button
                onClick={() => removeItem(id)}
                className='btn btn-danger px-1'
              >
                <FaTrashCan />
              </button>
            </li>
          ))
        ) : (
          <li className='text-slate-500'>장바구니가 비었습니다.</li>
        )}
      </ul>
    </>
  );
}
