var x = 1;
console.log("Hello World!"); //TODO

let a = 1;
let B = 2;
let c = (a++, B++);
let d = (a--, B + a);
console.log("a,b,c,d", a, B, c, d);

d = void (c = a + B);
console.log("🚀 ~ d:", d);
console.log("d:", d);

function f() {
  console.log("xxxxx");
  return undefined;
}

x = f();
console.log("🚀 ~ x:", x);
console.log("x:", x);

const s = `${a}::${B}`;
console.log("🚀 ~ s:", s);

console.log("________________");
let aa = 0b1010;
let bb = 0b1100;
const and = aa & bb;
console.log("🚀 ~ and:", and.toString(2));

const or = aa | bb;
console.log("🚀 ~ or:", or.toString(2));

const xor = aa ^ bb;
console.log("🚀 ~ xor:", xor.toString(2));

const notA = (~aa).toString(2);
const notB = ~bb.toString(2);
console.log("notA,notB: ", notA, notB);

console.log("____________________________");

const R = 1,
  W = 2,
  E = 4; // 0b001, 0b010, 0b100
let auth = parseInt("011", 2);
console.log("🚀 ~ auth:", auth, auth.toString(2));
const hasWriteAuth = !!(auth & W);
console.log("🚀 ~ hasWriteAuth:", hasWriteAuth);
const hasExeAuth = !!(auth & E);
console.log("🚀 ~ hasExeAuth:", hasExeAuth);
const hasReadAndExeAuth = !!(auth & (R | E));
console.log("🚀 ~ hasReadAndExeAuth:", hasReadAndExeAuth);
auth = auth ^ E; // XOR
console.log("🚀 ~ auth:", auth);
