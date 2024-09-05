const obj = { id: 1, name: "Hong" };
// cf. obj = {..., __proto__: { x: 11 }};

console.log(obj.toString);
((Object.getPrototypeOf(obj) === Object.prototype) ===
  obj.constructor.prototype) ===
  obj.__proto__;

class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  static ID = 1;
  constructor(name) {
    // {name: …}
    this.name = name || super.constructor.name;
  }
}
const dog = new Animal("Dog");
console.log("obj.keys=", Object.keys(obj));
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id"));
console.log("dh=", dog.hasOwnProperty("id"));

class Cat extends Animal {
  static IDd = 2;
  kukuki() {
    console.log("kkkokkk");
  }
}

const cat = new Cat();
console.log("ststiccat", Cat.IDD);
Animal.ID = 3;
console.log(Cat.ID);

console.log("=========================");
/**
 * Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오.

class Emp {
  firstName;
  lastName;
}

const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!
 */

import assert from 'assert';

class Emp {
  firstName;
  lastName;
}

const hong = new Emp();
hong.fullName = "Kildong Hong";
assert.strictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
assert.strictEqual(hong.fullName, "Kildong LEE");
