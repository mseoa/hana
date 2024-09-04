/** 
for (let i = 1; i <= 10; i += 1) {
  //   console.log(`${i.toFixed(1)}`);
  if (i == 10) {
    console.log(1);
    break;
  }
  console.log((i / 10).toFixed(1));
}
  */

// 강사님 코드
for (let i = 1; i <= 10; i += 1) {
  console.log(+(i / 10).toFixed(1));
}

console.log("_____________________");
/** 
for (let i = 1; i <= 10; i++) {
  let n = Math.sqrt(i);
  if ((n / 1) % 1 !== 0) console.log(i, " ", n.toFixed(3));
}
*/
for (let i = 1; i <= 10; i++) {
  let n = Math.sqrt(i);
  if (!Number.isInteger(n)) console.log(i, " ", n.toFixed(3));
}

console.log("____________________");
function printIrr(a) {
  for (let i = a; ; i++) {
    let n = Math.sqrt(i);
    if (i !== a && (n / 1) % 1 == 0) break;
    if (i == a && (n / 1) % 1 == 0) console.log(i, " ", n.toFixed(3));
    if ((n / 1) % 1 !== 0) console.log(i, " ", n.toFixed(3));
  }
}

// function printIrr2(n){
//     do{
//         const s = Math.sqrt(n);
//         console.log(s, n , +s.toFixed(3));

//     }
// }

printIrr(5);
console.log("-----");
printIrr(9);

console.log("_____________________");

const today = new Date();
const day = today.getDay();
const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
const dayStr = "일월화수목금토";
const daySpreadArr = [...dayStr];
console.log(`오늘은 ${dayArr[day]}요일입니다.`);
console.log(`오늘은 ${dayStr[day]}요일입니다.`);
console.log(`오늘은 ${daySpreadArr[day]}요일입니다.`);

console.log("_____________________");

function addPoints(a, b) {
  const aLen = a.toString().length - 2;
  const bLen = b.toString().length - 2;
  const maxLen = Math.max(aLen, bLen);
  return (a + b).toFixed(maxLen);
}

console.log(addPoints(0.21354, 0.1)); // 0.31354
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566
