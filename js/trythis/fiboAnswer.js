// function loopFibonacci(n) {
//   if (n <= 1) return n;
//   let prev = 0;
//   let curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let t = prev;
//     prev = curr;
//     curr = curr + t;
//   }
//   return curr;
// }

function loopFibonacci(n) {
  if (n <= 1) return n;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + [i - 1];
  }
  return arr[n];
}

function loopFibonacci(n) {
  if (n <= 1) return n;
  const arr = [0, 1];
}
console.log("5", loopFibonacci(5));
console.log("7", loopFibonacci(7));
console.log("15", loopFibonacci(15));

function recursiveFibo(n) {
  if (n <= 1) return n;
  return recursiveFibo(n - 2) + recursiveFibo(n - 1);
}

console.log(recursiveFibo());
