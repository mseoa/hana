import { FormEvent } from 'react';

type Props = {
  login: () => void;
};

export default function Login({ login }: Props) {
  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //
    console.log('$$$');
    login();
  };
  return (
    <form onSubmit={(e) => signIn(e)}>
      Name:
      <input type='text' placeholder='name...'></input>
      Password:
      <input
        type='password'
        placeholder='password...'
        autoComplete='off'
      ></input>
      <button>Sign In</button>
    </form>
  );
}
