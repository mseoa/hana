import assert from "assert";

const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 힣 = "힣".charCodeAt();
const 자음알파벳숫자 = [..."LMNRlmnr136780"].map((a) => a.charCodeAt());

export default function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  // console.log('🚀  s:', s, str.charCodeAt(str.length - 1));
  // console.log(str, s - 가, (s - 가) % 28, 자음알파벳숫자.includes(s));
  // if (s >= ㄱ && s <= ㅎ) return true;
  // if (자음알파벳숫자.includes(s)) return true;

  return (
    (s >= ㄱ && s <= ㅎ) ||
    자음알파벳숫자.includes(s) ||
    (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
  );

  // return (
  //   (s - 가) % 28 !== 0 &&
  //   ((s >= ㄱ && s <= ㅎ) || 자음알파벳숫자.includes(s))
  // );
}

const josa = (str, ja_mo) => {
  const [ja, mo] = ja_mo.split("/");
  return isEndJaum(str) ? ja : mo;
};

const iga = (str) => josa(str, "이/가");
const eunun = (str) => josa(str, "은/는");
const eulul = (str) => josa(str, "을/를");
const eyuya = (str) => josa(str, "이어야/여야");
const rang = (str) => josa(str, "이랑/랑");

assert.strictEqual(`고성군${iga("고성군")}`, "고성군이");
assert.strictEqual(`고성군${eunun("고성군")}`, "고성군은");
assert.strictEqual(`고성군${eulul("고성군")}`, "고성군을");
assert.strictEqual(`성동구${iga("성동구")}`, "성동구가");
assert.strictEqual(`성동구${eunun("성동구")}`, "성동구는");
assert.strictEqual(`성동구${eulul("성동구")}`, "성동구를");

export { josa, iga, eunun, eulul, eyuya, rang };
