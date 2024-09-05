import assert from 'assert';

class Stack {
  arr;
  // new Stack(1,2,3) => [1,2,3]
  // new Stack([1,2,3]) => [[1,2,3]]
  // new Stack([[1,2,3]]) => [[[1,2,3]]]
  constructor(...args) {
    // this.arr = Array.isArray(args[0]) ? [...args] : args; //사용자가 원하는 값이 무엇인지 알수없으므로
    this.arr = [...args]; // 주는대로 나오는게 낫다
  }

  // 1) push(1)
  // 2) push(1,2)
  push(...args) {
    //front-end
    // this.arr = [...this.arr, ...values];
    this.arr.push(...args); // 메모리 절약
    return this.arr;
  }

  pop() {
    return this.arr.pop();
  }

  toArray() {
    return this.arr;
  }
}

const stack = new Stack();
assert.deepStrictEqual(stack.toArray(), []);
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack.toArray(), []);

// ToDo: stack.push(4,5);

const stack2 = new Stack(...[1, 2]);
const stackT = new Stack(...[[1], [2]]);
stack2.push(2).push(3);
assert.deepStrictEqual(stackT.toArray(), [1, 2]);
assert.deepStrictEqual(stack2.toArray(), [1, 2]);
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 3]);
console.log(stack.pop(), 3); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack2.toArray(), [1, 2]);
stack2.push(4, 5);
assert.deepStrictEqual(stack2.toArray(), [1, 2, 4, 5]);

// Todo: check side effect
// stack.arr = [5, 6, 7]; //error
// assert.throws();
