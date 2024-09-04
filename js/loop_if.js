var sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("🚀 ~ sum-for:", sum);

sum = 0;

for (let i = 0; i < 100; sum = sum + (i += 1));
console.log("🚀 ~ sum-for 심화:", sum);

sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log("🚀 ~ sum-while:", sum);

sum = 0;
i = 0;
do {
  i += 1;
  sum += i;
} while (i < 100);

console.log("🚀 ~ sum-do-while:", sum);

//-----------------------------
if (sum > 0 && sum <= 10) {
  console.log("sum", sum);
} else if (sum > 10) {
  console.log("sum is over 10");
} else {
  console.log("sum is zero");
}

console.log(sum > 10 ? "T" : "F");

const bloodType = "A";

let sports = "운동";
if (bloodType === "A" || bloodType === "B") {
  sports = "근대오종";
} else if (bloodType === "O") {
  sports = "배드민턴";
} else if (bloodType === "AB") {
  sports = "야구";
} else {
  sports = "운동";
}
console.log("🚀 ~ sports:", sports);

switch (bloodType) {
  case "A":
  case "B":
    sports = "근대오종";
    break;
  case "O":
    sports = "배드민턴";
    break;
  case "AB":
    sports = "야구";
    break;
  default:
    sports = "운동";
}

console.log("🚀 ~ sports:", sports);

//________________________
x = 2;
let ret = x === 1 ? "one" : x === 2 ? "two" : x === 3 ? "three" : "ELSE";
console.log("🚀 ~ ret:", ret);

ret =
  (x === 1 ? "one" : "") ||
  (x == 2 ? "two" : "") ||
  (x === 3 ? "three" : "") ||
  "ELSE";
console.log("🚀 ~ ret:", ret);

const alpha = ["zero", "one", "two", "three"];
console.log(alpha[x] || "ELSE");
