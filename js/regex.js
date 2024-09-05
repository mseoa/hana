// const regexp = /senior|coding/gi;

// if (regexp.test("Junior Developer")) console.log("OK1");
// if (regexp.test("Senior Developer")) console.log("OK2");
// if (regexp.test("JS Coding")) console.log("OK3");
// if (regexp.test("JavaScript Coding")) console.log("OK4");

// const regex = /^[A-z0-9][\w-\.]*@[\w-]+\.[A-z]*([A-z]{2,7})$/; // 2f_d.f@a.company
// console.log(regex.test("jade123@topician.com")); // true
// regex.test("jade123@topician.store"); // true
// regex.test("jade123@topician"); // false
// regex.test("ja_de.j-u-n@topician.store"); // true
// regex.test("jade@jeon@topician.store"); // false

// const res = "1234-2323-2323-2323".replace(
//   /(\d{4})-(\d{4})-(.*)$/,
//   "$1-####-$3"
// );

function q1() {
  const total = { price: 45000, vat: 4500 };
  function fmt(txts, a) {
    return txts[0] + Number(a).toLocaleString().padStart(9) + txts[1];
  }

  console.log(fmt`주문합계: ${total.price}원`);
  console.log(fmt`세액합계: ${total.vat}원`);
}

q1();

function isEndJaum(str) {
  let arr = [];
  for (let i = 44032; i <= 55175; i += 28) arr.push(i);
  for (let i = 12623; i <= 12643; i++) arr.push(i);

  //   console.log(arr);
  let find = arr.filter((el) => el == str[str.length - 1].charCodeAt());
  console.log(str[str.length - 1].charCodeAt());
  console.log(find);
  console.log(find.length > 0 ? false : true);
}

isEndJaum("강원도"); // false
isEndJaum("바라당"); // true
isEndJaum("ㅜㅜ"); // false
isEndJaum("케잌"); // true
isEndJaum("점수 A"); // false lmnr   cf. isEndJaum('알파벳L')은 true
isEndJaum("24"); // false   cf. isEndJaum('23')은 true 136780
