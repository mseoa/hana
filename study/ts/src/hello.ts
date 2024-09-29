// const myName: string = "Alice";
// console.log(`Hello, ${myName}!`);
// const myAge: number = 30;
// console.log(`I'm ${myAge} years old.`);
// const myHobbies: string[] = ["reading", "coding"];
// console.log(`My hobbies are ${myHobbies.join(", ")}.`);

// let x;
// x = 1; // 여기까지 x의 타입은 any
// console.log("x:", x); // 여기서 할당됨
// x = "str";
// console.log("x:", x); // 여기서 할당됨

// let team: string;
// console.log(team?.length); // Variable 'team' is used before being assigned.
// //TypeScript는 기본적으로 변수가 할당되지 않으면 컴파일 타임에 에러를 발생

// team = "team";
// console.log(team.length);

// let coach: string | undefined;
// console.log(coach?.length);

// coach = "headCoach";
// console.log(coach.length);

// const sltr = "LITERAL";
// let literal: "LITERAL"; // string literal type
// let nltr = 1000; // number literal type
// literal = sltr;
// let str: string;
// str = sltr;
// str = "xxx";

// let grade: "A" | "B" | "C" | "D" | "F"; // string literal union type
// grade = "g";

// //_______
// type Member = {
//   id: string;
//   name: string;
//   addr: string;
//   discountRate: number;
// };

// type Guest = {
//   id: string;
//   name: string;
//   age: number;
// };

// type Customer = Member | Guest;
// let customer: Customer;
// let m: Member;
// let g: Guest;

// customer = {
//   id: "c1",
//   name: "Alice",
//   addr: "Seoul",
//   discountRate: 0.1,
// };
// customer = {
//   id: "c1",
//   name: "Alice",
//   age: 30,
// };
// customer = {
//   id: "c1",
//   name: "Alice",
//   addr: "Seoul",
//   age: 26,
// };

// const xx: Customer = {
//   id: "c1",
//   name: "Alice",
//   age: 30,
//   addr: "Seoul",
// };

// if ("age" in xx) g = xx;
// if ("discountRate" in xx) m = xx;

// if (typeof xx.id === "string" && "discountRate" in xx) m = xx;
// if (xx.hasOwnProperty("discountRate")) m = xx; // 타입체크를 위해 못씀

// let s: string = "str";
// let n: number = 1;
// let yy: "abc" | number;

// yy = "abc";

// if (yy === "abc") {
//   s = yy;
// } else {
//   n = yy;
// }
