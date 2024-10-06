import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef(
  (_: unknown, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    return (
      <>
        <div className='mb-3 border px-5 py-2'>
          <h1>{session.loginUser?.name}이 로그인했습니다.(My)</h1>
          <button
            onClick={logout}
            ref={ref}
            className='btn btn-primary normal-case'
          >
            Profile Sign out
          </button>
        </div>
      </>
    );
  }
);

Profile.displayName = 'Profile'; //밖에서 참조할 컴포넌트 이름을 지정해줄 수 있음
export default Profile;
