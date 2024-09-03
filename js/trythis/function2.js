/**
 * 함수를 한번만 실행하게 하는 once 함수를 작성하시오.
ex)
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
* try this
매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
(test 요령: 0.1초 한 번씩 실행하게 해놓고, 1초 후에 초기화)
 */
const time = new Date().getTime();
function once(f, rebirthDelay = 1000) {
  let trial = 0;
  const time = console.log(time);
  return function (...args) {
    if (trial == 1 || time + 1000 > new Date().getTime()) return;
    trial++;
    return f(...args);
  };
}

// const once =
//   (f) =>
//   (...args) =>
//     console.log(f());

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

setInterval(() => console.log(fn(1, 6)), 100);

// function fivePart(x, y) {
//   return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fn = once(fivePart.bind({ id: 11 }));
// console.log(fn(1, 2));
// const fn2 = once(fivePart);
// console.log(fn2.bind({ id: 22 })(3, 4));
