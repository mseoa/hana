// 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
// diff

// 2) 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
// random

// 3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.
// add

// 4) 오늘(2월 1일)로 부터 100일 후의 날짜는?

function q1() {
  const date1 = new Date(1970, 1, 1).getTime();
  const date2 = new Date(1970, 1, 2).getTime();
  console.log(date2 / 1000 - date1 / 1000);
}

function q2() {
  const dateArr = [];
  for (let i = 0; i < 5; i++) {
    const date = Math.ceil(Math.random() * 30);
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    dateArr.push(new Date(year, month, date));
  }
  console.log(dateArr.sort((a, b) => b - a).map((el) => el.toLocaleString()));
}

function q3() {
  let now = new Date();
  now.setFullYear(now.getFullYear() + 1);
  console.log(now);
}

function q4() {
  let now = new Date();
  now.setDate(now.getDay() + 100);
  console.log(now);
}

// q1();
// q2();
// q3();
// q4();

function q5() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let arr = ["일", "월", "화", "수", "목", "금", "토"];
  // let day = new Date().getDay();
  let lastDate = new Date(year, month, 0).getDate();
  let startDay = new Date(year, month - 1, 1).getDay();
  // console.log(day);
  console.log(lastDate);
  console.log(startDay);
  const arr2 = Array.from(Array(6), () => Array(7).fill(" "));
  let start = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i == 0) {
        arr2[i][j] = arr[j];
      } else {
        if (i == 1 && j == startDay) {
          console.log("here?");
          arr2[i][j] = start.toString().padEnd(2, " ");
          start++;
        } else if (start > 1 && start <= lastDate) {
          console.log("???");
          arr2[i][j] = start.toString().padEnd(2, " ");
          start++;
        } else {
          console.log("????");
          break;
        }
      }
    }
  }
  console.log(`${month}월 ${year}`.padStart(18, " "));
  console.log(arr2.map((el) => el.join("  ")).join("\n"));
  // console.log(arr2);
}

q5();
