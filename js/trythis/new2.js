/** 
다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}


console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
*/

function ex2() {
  const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

  const { passwd, ...userInfo } = user;

  const userInfo2 = { ...user };
  delete userInfo.passwd;

  console.log("__________________________");

  console.log(userInfo);
  console.log(userInfo2);
  console.log("__________________________");
}

ex2();

/**
 * 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 
(destructuring 활용)

const arr = [ [{id: 1}], [{id:2}, {id: 3}] ]
cf. const id1 = arr[0][0].id;  // Bad
console.log(id1, id2, id3); 
// 출력결과: 1 2 3
 */

function ex3() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log("__________________________");

  console.log(id1, id2, id3);

  console.log("__________________________");
}

ex3();

/**
 * 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getValueExceptInitial(k) {
  const (가) = user;
  const (나) = [...val];
  return (다);
}
console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'
 */

function ex4() {
  const user2 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  function getValueExceptInitial(key) {
    const { [key]: val } = user2;
    if (typeof val !== "string") return;
    const [, ...ret] = val;
    return ret.join("");
  }

  console.log("__________________________");
  console.log(getValueExceptInitial("name")); // 'ong'
  console.log(getValueExceptInitial("passwd")); // 'yz'
  console.log(getValueExceptInitial("addr")); // 'eoul'
  console.log(getValueExceptInitial("id")); // 'eoul'
  console.log("__________________________");
}

ex4();

function ex5() {
  /**
  function getDiffMillis(dt1, dt2) {
    const { getTime: getTime1 } = new Date(dt1);
    const { getTime: getTime2 } = new Date(dt2);
    console.log(new Date(dt1).getTime());
    console.log(getTime1);
    return getTime1() - getTime2(dt2);
  }
  getDiffMillis("2021-01-01", "2021-01-02");
   */

  function getDiffMilliss(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);
    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.bind(d1)() - getTime2.bind(d2)();
  }
  console.log(getDiffMilliss("2021-01-01", "2021-01-02"));
}

ex5();

function des() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  user.f = function () {
    console.log("fff", this.name);
  };

  console.log(user);
  user.f();

  const { f: xf } = user;
  xf();
}

des();
