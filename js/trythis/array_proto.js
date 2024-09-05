import assert from 'assert';

/** 모든 Array가 다음 기능을 갖도록 구현하세요.
1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
2) firstObject, lastObject*/

Object.defineProperties(Array.prototype, {
  //   get firstObject() {
  //     return this[0];
  //   },
  //   get lastObject() {
  //     // return this[this.length-1]
  //     return this.at([-1]);
  //   },
  firstObject: {
    get() {
      return this[0];
    },
    set() {},
  },
  lastObject: {
    get() {},
    set() {},
  },
});

//____________________
Array.prototype.mapBy = function (prop) {
  console.log("......");
  return this.map((a) => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes ? a[prop]?.isIncludes(value) : a[prop] === value;
  //   if (isIncludes) {
  //     return this.filter((a) => a[prop]?.isIncludes(value));
  //   }
  //   return this.filter((a) => a[prop] === value);
  return this.filter(cb);
};
Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop, value) {
  // name | name:desc | name:asc
  const [key, direction = "asc"] = prop?.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

const nullArr = [];
nullArr?.mapBy("id");

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

const arr = [1, 2, 3, 4, 5]; // arr.firstObject; // 1    arr.lastObject; // 5
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy("name:desc", [lee, kim, hong]));
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, kim);
users.lastObject = lee;
assert.deepStrictEqual(users.firstObject, lee);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
