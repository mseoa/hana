globalThis.name = "globalName";
this.name = "moduleName";

const dog = {
  name: "Maxx",
  showMyName() {
    this.name = "smn";
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(dog)(), 3000);
    // setTimeout(() => this.showMyName(), 1000);
  },
  //   whatsYourName() {
  //     const self = this;
  //     setTimeout(self.showMyName.bind(this)(), 3000);
  //     // setTimeout(() => this.showMyName(), 1000);
  //   },
};

dog.whatsYourName();

// globalThis.id = "Global_ID";
// this.id = "Module_ID";

// const obj = {
//   id: 123,
//   f: function () {
//     console.log("obj > f = ", this.id);
//   },
//   af: () => console.log("obj > af = ", this.id),
//   subObj: {
//     id: 999,
//     f: function () {
//       console.log("obj > subobj> af = ", this.id);
//     },
//     af: () => console.log("obj > subobj> af = ", this.id),
//   },
// };

// obj.f();
// obj.af();
// obj.subObj.f();
// obj.subObj.af();

// for (let i = 0; i < 5; i += 1) {
for (var i = 0; i < 5; i += 1) {
  // ⇒ ⇒ ⇒
  //   setTimeout((i) => console.log(i), 100, i); // (나)
  setTimeout(console.log, 100, i); // (나)
  //   setTimeout(() => console.log(i), 100);
  // ⇐⇒ setTimeout(() => console.log(i), 100);
}
