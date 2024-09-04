// function f() {
//   console.log("f>>", this.name);
// }

// f();
// f.bind({ name: "Binding" })();
// f.call({ name: "Binding" });

// const f2 = f;
// const obj = { id: 1 };
// const obj2 = obj;
// console.log(obj === obj2);
// console.log(f2 === f);
// f2();

// const obj = {
//   id: 1,
//   f1: function () {
//     console.log("f1>>", this.id);
//   },
//   f2: () => console.log("f2>>", this.id),
// };

globalThis.name = "Global n";
this.name = "Module n";

function tf() {
  console.log("11=", self.name);
  console.log("12=", this);
}

const obj = {
  name: "ObjName",
  bark1: function () {
    console.log("1=", this.name);
    const self = this; // OLD version
    setTimeout(function () {
      console.log("11=", self.name);
      console.log("12=", this); // Timeout
    }, 1000); // .bind(this)
    console.log("xxxx");
  },
  bark2() {
    // same as bark2: function() {
    console.log("2=", this.name);
    setTimeout(() => {
      console.log("22=", this.name);
    }, 1000);
  },
  bark3() {
    // ⇐⇒ bark3: function() {
    function innerFn() {
      console.log(this); // ?
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// obj.bark1(); // vs  var x = obj.bark1;
// obj.bark2();
// obj.bark3();
// obj.bark4();
tf.bind(obj)();
