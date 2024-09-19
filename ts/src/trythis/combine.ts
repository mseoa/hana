interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

// type Combine<T, U> = {
//   id: number;
//   age: string;
// } & (T | U);

type Combine<T, U> = Omit<T, keyof U> & U;
type ICombined = Combine<IUser, IDept>;

// type ICombined = {
//       id: number;
//   age: string;
//   name:string;
//   dname: string;
//   captain: string;
// }
