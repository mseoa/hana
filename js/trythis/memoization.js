/**
 * 피보나치 수열을 반복문을 이용하여 구현하세요.
2) 피보나치 수열을 memoization하여 출력하는 함수를 작성해 보세요.
수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
fibonacci(5); // 5
fibonacci(7); // 13
 */

// 1

console.log("===============================");
console.log("=============1번문제============");

function f1(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      arr.push(i);
      continue;
    }
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
}

console.log(f1(5));
console.log(f1(7));
console.log("===============================");
console.log("=============2번문제============");

function f2(n) {
  if (n <= 1) return n;
  return f2(n - 2) + f2(n - 1);
}

console.log(f2(5));
console.log(f2(7));

console.log("===============================");
console.log("=============3번문제============");

// let memoized = {};
// function f3(n) {
//   if (!!memoized[n]) return memoized[n];
//   if (n <= 1) return (memoized[n] = n);
//   return (memoized[n] = f2(n - 2) + f2(n - 1));
// }

// console.log(f3(5));
// console.log(f3(7));
// console.log(memoized);

// function f2Copy(n) {
//   if (n <= 1) return n;
//   return mm(n - 2) + mm(n - 1);
// }

function mm(fn) {
  const memoized = {};
  return function B(k) {
    console.log(memoized);
    return memoized[k] || (memoized[k] = fn(k));
  };
}
let mmcnt = 0;
const memoizedFibo = mm(function f2Copy(n) {
  mmcnt++;
  if (n <= 1) return n;
  return memoizedFibo(n - 2) + memoizedFibo(n - 1);
});
console.log(memoizedFibo(5));
console.log(mmcnt);
// console.log(memoizedFibo(7));

/**

let memoizedFactorialRunCnt = 0;

const memoizedFactorial = memoized(function A(n) {
  memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

function memoized(fn) {
  // 범용 memoized function
  const memoizedTable = {}; // {3: 3 * 2, 2: 2 * 1, 1: 1}
  return function B(k) {
    console.log(memoizedTable);
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

console.log(memoizedFactorial(3)); // B(3) ⇒ 6
console.log(memoizedFactorial(5));
console.log("count", memoizedFactorialRunCnt);
*/
