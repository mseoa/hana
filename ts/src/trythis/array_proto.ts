import assert from "assert";
import { promises } from "dns";

declare global {
  interface Array<T> {
    // Array interface 병합
    // first(): T;
    mapBy: (prop: string) => T[];
    filterBy: (prop: string, value: string, isIncludes?: boolean) => any;
    rejectBy: (prop: string, value: string, isIncludes?: boolean) => any;
    findBy: (prop: string, value: string) => any;
    sortBy: (prop: string, value: string) => any;
  }
}

Array.prototype.mapBy = function (prop: string) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: any) => a[prop]?.includes(value)
    : (a: any) => a[prop] === value;

  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: any) => !a[prop]?.includes(value)
    : (a: any) => a[prop] !== value;

  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  const [key, direction = "asc"] = prop?.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

Array.prototype.groupBy = function (gfn) {
  const ret = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
      // this.with(0, value); // pure fn
    },
  },
  lastObject: {
    get() {
      return this.at([-1]);
    },
    set(value) {
      this[this.length - 1] = value;
      // this.with(-1, value);
    },
  },
});

const hongx = { id: 1, name: "Hong" };
const kimx = { id: 2, name: "Kim" };
const leex = { id: 3, name: "Lee" };
const users = [hongx, leex, kimx];

console.log(users.mapBy("id")); // [1, 3, 2];
console.log(users.mapBy("name")); // ['Hong', 'Lee', 'Kim']);
console.log(users.filterBy("id", 2)); // [kim]);
console.log(users.filterBy("name", "i", true)); // [hong, kim]
console.log(users.rejectBy("id", 2)); // [hong, lee]
console.log(users.rejectBy("name", "i", true)); // [lee]
console.log(users.findBy("name", "Kim")); //  kim;
console.log(users.sortBy("name:desc")); //  [lee, kim, hong];
console.log(users.sortBy("name")); // [hong, kim, lee]

console.log("first/last=", users.firstObject.name, users.lastObject.name); // hong
users.firstObject = kimx;
console.log("kim=", users.firstObject.name); // kim
users.lastObject = hongx;
console.log(users.lastObject, hongx);
