const assert = require("assert");

const hong = { id: 1, name: "Hongi" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Parki" };

const users = [hong, kim, lee, park];
const idxKim = users.indexOf(kim);
console.log("🚀  idxKim:", idxKim);

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log("🚀  idxId2:", idxId2);

// const idxId1 = users.findLastIndex(a => a.id === 3);
const idxId1 = users.findLastIndex(find3);
console.log("🚀  idxId1:", idxId1);

const findId = (id) => (a) => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

console.log("______________");
users.forEach((a) => console.log(a.name));

const arr = [1, 2, 3, 4, 5];
const arr100 = Array.from(Array(100), (_, i) => i + 1);
const isOdd = (n) => n % 2 !== 0;
// for (const val of arr) {
//   console.log(val);
// }

arr.forEach((a) => console.log(a, isOdd(a)));

const kim2 = users.find((user) => user.name == "Kim");
console.log("🚀 ~ kim2:", kim2);
const hong2 = users.findLast((user) => user.name == "Hongi");
console.log("🚀 ~ hong2:", hong2);

const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀 ~ hasIUsers:", hasIUsers);

//소수인게 하나라도 있는지
const hasPrime = (arr) => arr.some(isPrime);

const primeNumbers = (arr) => arr.filter(isPrime);

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const isPrimeArrayFilter = (n) => {
  const arr = Array.from(Array(n), (_, i) => i + 1);
  const res = arr.filter((el) => n % el == 0);
  return res.length > 2 ? false : true;
};

// const isPrimeArrayFind = (n) => {
//   const arr = Array.from(Array(n), (_, i) => i + 1);
//   console.log(arr);
//   const res = arr.find((el) => el !== 1 && el !== n && n % el == 0);
//   console.log("머지?", res);
//   res ?? false;
// };

console.log("?????", isPrimeArrayFilter(2));
console.log("?????", isPrimeArrayFilter(7));
// console.log("!!!!!!!", isPrimeArrayFind(4));
// console.log("!!!!!!!!", isPrimeArrayFind(7));

assert.strictEqual(hasPrime([1, 2, 3]), true);
assert.deepStrictEqual(primeNumbers([1, 2, 3, 4, 5]), [2, 3, 5]);
assert.deepStrictEqual(
  primeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);

console.log(primeNumbers(arr100));

console.log(arr.some(isPrime));
console.log(arr.find(isPrime));
console.log(arr100.filter(isPrime));
