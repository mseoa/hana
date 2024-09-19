type R = Record<string, number>;

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type Users = typeof users;
type FullUser1 = Record<string, string | number>;
type FullUser2 = Partial<Record<keyof Users[number], string | number>>;
type FullUser = {
  [k in keyof Users[number]]: Users[number][k];
};
const ret: FullUser = users.reduce((acc, user) => ({ ...acc, ...user }), {});

// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[number];

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);
