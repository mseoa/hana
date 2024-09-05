import assert from 'assert';
// function push(array, …args) {}
let arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];
const pop1 = (arr, idx = 1) =>
  idx === -1 ? arr.slice(-idx)[0] : arr.slice(idx);
const pop = (arr, idx = 1) => {
  const result = arr.slice(-idx);
  if (result.length === 1) return result[0];
  return result;
};
const unshift = (arr, ...args) => [...args, ...arr];
const shift = (arr, idx = 1) => arr.slice(idx);
const shift2 = (arr, idx = 1) => a;

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

//_________________________
arr = [1, 2, 3, 4];

/** 1단계
const deleteArray = (arr, start, end = Infinity) =>
  arr.filter((a, i) => i < start || i >= end);
 */

const deleteArray = (arr, start, end = Infinity) => {
  if (typeof start === "number")
    return arr.filter((a, i) => i < start || i >= end);
  return arr.filter((a) => a[start] !== end);
};

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
let users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

//________________________

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (newer) {
  return [...this, newer];
};

users.removeUser = function (toRemoveUser) {
  return this.filter((user) => user.id !== toRemoveUser.id);
};

users.changeUser = function (fromUser, toUser) {
  return users.map((user) => (user.id === fromUser ? toUser : user));
};

Object.defineProperty(users, "addUser", { enumerable: false });

users.addUser(hong); // [kim, lee, park, hong]
users.removeUser(lee); // [kim, park]
users.changeUser(kim, choi); // [choi, lee, park]

// const classNames = (...args)=>args.reduce((acc,a)=>`${acc}`${acc})

//___________________
const reduce = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return [];

  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);
  //   if (!initValue) {
  //     acc = arr[0];
  //     i = 1;
  //   }
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
reduce(users, (acc, user) => acc + user.name); // [object Object]LeePar

// const square = (a) => a ** 2;
// const sqrt = Math.sqrt(a);
// const cube = (a) => a ** 3;

// arr = [1, 2, 3, 4, 5];
// const r5 = arr.map(square).map(sqrt).map(cube);

// const baseJobs = [square, sqrt, cube];
// const r6 = arr.map((a) => baseJobs.reduce((acc,job)=> job());
// console.log("🚀 ~ r6:", r6);

//__________________________
// range 함수

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  if ((start - end) * step > 0) return [];
  // if ((start>end && step>0) || (start<end&&step<0)) return[];

  // if(end===undefined){
  //     if(start>0){
  //         end=start;
  //         start=1;
  //     } else if(start<0){
  //         end=-1;
  //     } else{
  //         return [0]
  //     }

  // }

  let temp = start;
  //   end = end ?? (start > 0 ? ((start = 1), temp) : start % 2);
  end = end ?? (start > 0 ? ((start = 1), temp) : start < 0 ? -1 : 0);

  const results = [];
  // for(let i=start;i<=end;i+=1){
  //     results.push(i);
  // }
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
  }

  return results;
};

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
