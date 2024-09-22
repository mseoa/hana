import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
};

export default function My({ session, logout, login ,removeCartItem}: Props) {
  return (
    <>
      <h1>(My)</h1>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul className='border my-3 p-3 w-1/3'>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name} <small>({price.toLocaleString()})</small>
            <button
              onClick={() => removeCartItem(id)}
              className='btn btn-danger'
            >
                DEL
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
