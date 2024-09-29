"use strict";
const myName = "Alice";
console.log(`Hello, ${myName}!`);
const myAge = 30;
console.log(`I'm ${myAge} years old.`);
const myHobbies = ["reading", "coding"];
console.log(`My hobbies are ${myHobbies.join(", ")}.`);
let x;
x = 1; // 여기까지 x의 타입은 any
console.log("x:", x); // 여기서 할당됨
x = "str";
console.log("x:", x); // 여기서 할당됨
let team;
console.log(team === null || team === void 0 ? void 0 : team.length); // Variable 'team' is used before being assigned.
//TypeScript는 기본적으로 변수가 할당되지 않으면 컴파일 타임에 에러를 발생
team = "team";
console.log(team.length);
let coach;
console.log(coach === null || coach === void 0 ? void 0 : coach.length);
coach = "headCoach";
console.log(coach.length);
const sltr = "LITERAL";
let literal; // string literal type
let nltr = 1000; // number literal type
literal = sltr;
let str;
str = sltr;
str = "xxx";
let grade; // string literal union type
grade = "g";
let customer;
let m;
let g;
customer = {
    id: "c1",
    name: "Alice",
    addr: "Seoul",
    discountRate: 0.1,
};
customer = {
    id: "c1",
    name: "Alice",
    age: 30,
};
customer = {
    id: "c1",
    name: "Alice",
    addr: "Seoul",
    age: 26,
};
const xx = {
    id: "c1",
    name: "Alice",
    age: 30,
    addr: "Seoul",
};
if ("age" in xx)
    g = xx;
if ("discountRate" in xx)
    m = xx;
if (typeof xx.id === "string" && "discountRate" in xx)
    m = xx;
let s = "str";
let n = 1;
let yy;
yy = "abc";
if (yy === "abc") {
    s = yy;
}
else {
    n = yy;
}
