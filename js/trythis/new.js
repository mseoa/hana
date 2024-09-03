/**
user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
(Function signature를 3개 이상으로 표현하기)
1.    function f1(user) { … }
2.    function f2(<이 부분을 작성하시오>) {...}
3.    const f3 = <이 부분을 작성하시오>


const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};
f1(hong);  f2
⇒ 1, 'Hong'        console.log(id, name)
 */

//signature: 함수의 형태를 의미함

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

function f1(user) {
  console.log(user.id, user.name);
}

function f2({ id: idd, name: namee }) {
  console.log(idd, namee);
}

const f3 = ({ id, name }) => console.log(id, name);

console.log("Hong TEST ___________");
f1(hong);
f2(hong);
f3(hong);

console.log("lee TEST _____________");
f1(lee);
f2(lee);
f3(lee);

/** 
다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}


console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
*/

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

let userInfo = { ...user, passwd: undefined };

console.log(userInfo);
