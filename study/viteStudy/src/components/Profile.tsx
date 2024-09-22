import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <>
      <div>
        <h1>{session.loginUser?.name}이 로그인했습니다.(My)</h1>
        <button onClick={logout} className='btn btn-primary'>Sign out</button>
      </div>
    </>
  );
}
