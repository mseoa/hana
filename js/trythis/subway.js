const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

class Subway {
  #start; // 외부에서 접근 불가
  #end;
  constructor(start, end) {
    this.#start = start;
    this.#end = end;
  }

  *[Symbol.iterator]() {
    const start = LINE2.indexOf(this.#start);
    const end = LINE2.indexOf(this.#end);
    let i = start;
    while (i != end) {
      yield LINE2[i];
      i++;
      if (i >= LINE2.length) i = 0;
    }
    yield LINE2[i];
  }
}

// class Subway {
//   #start; // 외부에서 접근 불가
//   #end;
//   #currIdx;
//   #didEnd = false;
//   constructor(start, end) {
//     this.#start = start;
//     this.#currIdx = LINE2.indexOf(start);
//     this.#end = end;
//   }

//   nextStation() {
//     if (this.#currIdx === LINE2.length) this.#currIdx = 0;
//     // this.#didEnd = this.#currIdx ==LINE2.indexOf(this.#end)
//     const currStation = LINE2[this.#currIdx++];
//     this.#didEnd = currStation == this.#end;
//     return currStation;
//   }

//   *[Symbol.iterator]() {
//     while (true) {
//       if (this.#didEnd) {
//       }

//       yield this.nextStation();
//     }
//   }
// }

const routes = new Subway("문래", "신림");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway("구로디지털단지", "성수"); // 32개 정거장
console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
const route3 = new Subway("문래", "합정"); // 46개 정거장이면 통과!
const route4 = new Subway("신도림", "을지로입구"); // 48개 정거장이면 통과!
