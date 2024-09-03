/** 
1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
(단, array 메소드를 사용하지 말고, destructuring을 사용하시오)
*/

/** 
let arr = [];
function makeArray(a) {
  if (a == 1) return (arr[0] = 1);
  arr[a - 1] = a;
  return makeArray(a - 1);
}

makeArray(10);
console.log(arr);

let arr2 = [];

function makeReverseArray(a) {
  if (a == 1) return (arr2[a - 1] = a);
  arr2[a - 1] = a;
  return makeReverseArray(a - 1);
}

makeReverseArray(5);
console.log(arr2);
*/

function makeArray(n) {
  if (n == 1) return [1];
  return [...makeArray(n - 1), n];
}

console.log(makeArray(10));

function makeReverseArray(n) {
  if (n == 1) return [1];
  return [n, ...makeReverseArray(n - 1)];
}
// [5, makeReverseArray(4)]
// [4, makeReverseArray(3)]
// [3, makeReverseArray(2)]
// [2, makeReverseArray(1)]
// [2, ...[1]]

console.log("=======================");

function addTo100(a) {
  if (a == 100) return 100;
  return a + addTo100(a + 1);
}

console.log(addTo100(1, (sum = 0)));
console.log("________________________________");

console.log(addTo100TCO(1));

function addTo100TCO(a, sum = 0) {
  if (a == 100) return sum + 100;
  return addTo100TCO(a + 1, sum + a);
}

function makeArrayTCO(n, acc = []) {
  if (n == 1) return [1, ...acc];
  return makeArrayTCO(n - 1, [n, ...acc]);
}

function makeArrayTCO2(n, acc = []) {
  const t = [n, ...acc];
  if (n == 1) return t;
  return makeArrayTCO2(n - 1, t);
}

console.log("makeTCO", makeArrayTCO2(10));
