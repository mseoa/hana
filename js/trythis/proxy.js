const assert = require("assert");

/**
 * Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오. (Emp class 소스만 수정해서)

class Emp {
  firstName;
  lastName;
}
const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, 'Kildong HONG');
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!
assert.strictEqual(hong.fullName, 'Kildong LEE');
 */

class Emp {
  firstName;
  lastName;
  constructor() {
    // super.constructor
    return new Proxy(this, {
      //this는 emp의 부모
      // hong:instance of Proxy, 생성 당시의 this target: instance of Emp
      set(target, prop, value) {
        //target은 hong과 kim
        // 생성자 함수 속에서 타겟 사용할 수 없음 _target은 사용하지 않겠다는 뜻
        // target에는 나중에 hong이라는 객체가 들어옴.
        // this도 만들어진 인스턴스라서 target이랑 같게 나옴
        if (prop === "fullName") {
          const tmp = value?.split(" ") || []; //'a b', 'a'
          target["lastName"] = (tmp[1] || tmp[0])?.toUpperCase();
          target["firstName"] = tmp[1] ? tmp[0] : target.firstName;
          //   [target["firstName"], target["lastName"]] = value?.split("");
        } else {
          target[prop] = value;
        }
      },

      get(target, prop) {
        if (prop === "fullName") {
          return `${target.firstName}${target.firstName ? " " : ""}${
            target.lastName
          }`;
        }

        return target[prop];
      },
    });
  }
}
const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong LEE");
assert.deepStrictEqual(
  [hong.firstName, hong.lastName],
  "Kildong LEE".split(" ")
);
