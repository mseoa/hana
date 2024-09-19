// let firstName = "Tom";
// firstName.length();
// 함수처럼 호출 불가능

// const myName: string = "seoa";
// console.log(`Hello, ${myName}`);

// const myAge: number = 33;
// console.log(`${myAge} years old`);

// let x: number | string;
// x = 1;
// console.log("x:", x);

// x = "abc";
// console.log("x", x);

// const len = x.length;
// let y: number | undefined;

// console.log("y:", y);

// let john = {
//   firstName: "John",
//   lastName: "Ahn",
// };

// // console.log(john.middleName);

// const something = ({
//   id,
//   name,
//   age,
//   address,
// }: {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }) => {
//   // Do something...
// };

// type PersonInfo = {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// };

// interface PersonInfo2 {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// } // class와 동급. constructor가 없음. 일종의 function object로 인정받음
// // 함수 선언부에 등록됨

// let hong: PersonInfo;

// const something2 = ({ id, name, age, address }: PersonInfo) => {
//   hong = {
//     id,
//     name,
//     age,
//     address,
//   };
// };

// something2({ id: 1, name: "hang", age: 12, address: "성수" });

// const sltr = "LITERAL";
// let literal: "LITERAL";
// literal = sltr;
// let str: string;
// str = `xxxx`;
// str = sltr;

// let grade: "A" | "B" | "C" | "D" | "E";
// // grade = "H";

// type Member = {
//   name: string;
//   addr: string;
//   discountRate: number;
// };
// type Guest = {
//   name: string;
//   age: number;
// };

// type Customer = Member | Guest;

// let customer: Customer;
// // let m: Member;
// // let g: Guest;

// customer = {
//   // Mem
//   name: "홍길동",
//   addr: "용산구",
//   discountRate: 0.1,
// };
// // m = customer;
// // g = customer;

// customer = {
//   // Guest
//   name: "홍길동",
//   age: 26,
// };
// // m = customer;
// // g = customer;

// customer = {
//   // Guest
//   name: "홍길동",
//   age: 26,
//   addr: "용산구",
// };
// // m = customer;
// // g = customer;

// customer = {
//   // 둘다 인정
//   name: "홍길동",
//   addr: "용산구",
//   discountRate: 0.1,
//   age: 26,
// };
// // m = customer;
// // g = customer;

// // customer = {
// //   // no discountrate
// //   name: "홍길동",
// //   addr: "용산구",
// // };
// // m = customer;
// // g = customer;

// let xx: Guest | Member = {
//   name: "홍길동",
//   age: 26,
//   addr: "용산구",
//   discountRate: 1,
// };

// if ("age" in xx) g = xx;
// // xx.id = "xx";
// if ("addr" in xx && "discountRate" in xx) m = xx;

// if (typeof xx.id === "number") g = xx;
// if (typeof xx.id === "string") m = xx.id;

// xx.id = 100;

let rocker; // type : any

rocker = "Alice"; // type : string
rocker.toUpperCase(); // OK!

rocker = 12.34; // type : number
rocker.toPrecision(1); // OK!

rokcker.toLowerCase();
//
// Error : 'toLowerCase' does not exist on type 'number'.
