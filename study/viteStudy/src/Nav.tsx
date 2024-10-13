import { Link } from 'react-router-dom';
import { useSession } from './hooks/session-context';
import { FaUserAlt } from 'react-icons/fa';

export default function Nav() {
    const {session} = useSession();
  return (
    <nav className='w-full'>
      <ul className='flex justify-around'>
        <li>
          <Link to='/' replace>
            Home
          </Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/my'>My</Link>
        </li>
        <li>
          <Link to='/items'>Items</Link>
        </li>
        <li>
          <Link to='/hello'>Hello</Link>
        </li>
        {session.loginUser && <li className='flex items-center gap-1'>
            <FaUserAlt size={14} className='text-slate-300' />{session.loginUser?.name}
        </li>}
      </ul>
    </nav>
  );
}
