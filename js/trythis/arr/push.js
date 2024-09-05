/**다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
(단, 입력값은 다음 예시로 한정함)
*/
import assert from 'assert';

function push(array, ...args) {
  return array.concat(args);
}

function pop(array, number = 1) {
  const ret = array.slice(array.length - number, array.length);
  return ret.length == 1 ? ret[0] : ret;
}

function unshift(array, ...args) {
  return args.concat(array);
}
const arr = [1, 2, 3, 4];

function shift(array, number = 1) {
  return array.slice(number, array.length);
}

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
