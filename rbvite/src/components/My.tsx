import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  logout: () => void;
  //   login: (id: number, name: string) => void;
  login: () => void;
};

export default function My({ session, logout, login }: Props) {
  return (
    <>
      {session.loginUser?.name ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul className='my-3 border'>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name} <small>({price.toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </>
  );
}
