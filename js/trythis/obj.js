import assert from 'assert';

/**
 * const arr = [100, 200, 300, 400, 500, 600, 700];

1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

 */

function f1() {
  const arr = [100, 200, 300, 400, 500, 600, 700];

  for (const idx in arr) {
    console.log(+idx);
  }

  for (const val of arr) {
    console.log(val);
  }
}

/**
 * const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }

3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.
4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
 // Object.defineProperty
7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
 */

const obj = {
  name: "Kim",
  addr: "Yongsan",
  level: 1,
  role: 9,
  receive: false,
};

function f2() {
  for (const key in obj) {
    console.log(key);
  }

  console.log("________________");

  for (const key in obj) {
    console.log(obj[key]);
  }

  console.log("____________________");

  for (const val of Object.entries(obj)) {
    console.log(val[1]);
  }

  Object.defineProperty(obj, "level", {
    enumerable: false,
  });

  Object.defineProperty(obj, "role", {
    writable: false,
    enumerable: true,
    configurable: false,
  });

  console.log(Object.entries(obj));
  obj.role = "hack";
  console.log(obj.role);
}
// f2();

/**
 * [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)

=> { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

 */

function makeObjectFromArray() {
  let obj = {};
  const arr = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  for (let val of arr) {
    const key = val[0];
    const [, ...value] = val;
    obj[key] = value;
  }

  console.log(obj);
}

// makeObjectFromArray();

/**
 * 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)

{ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

=> [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

 */

function makeArrayFromObject() {
  const obj = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };
  const arr = [];

  for (let k in obj) {
    arr.push([k, ...obj[k]]);
  }
  console.log(arr);
}
makeArrayFromObject();

function copyObject(obj) {
  const copy = Object.assign({}, obj);
  return copy;
}

const obj1 = { key1: "value1" };
const obj2 = { key1: "value1" };
assert.deepStrictEqual(obj1, obj2);

// shallow copy
// const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
// const newKim = copyObject(kim);
// newKim.addr = "Daegu";
// console.log(kim.addr !== newKim.addr); // true면 통과!
// 이하 deep copy
const kim = { nid: 3, nm: "Kim", addr: { city: "Pusan" } };
const newKim = copyObject(kim);
newKim.addr.city = "Daegu";
console.log(kim.addr.city !== newKim.addr.city); // true면 통과!
