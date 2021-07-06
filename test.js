// const test = (p) => {
//   p.name = "anti";
//   p = { name: "and" };
//   return p;
// };

// const a = { name: "syz" };

// const b = test(a);
// console.log(a);
// console.log(b);
// console.log(typeof console.log);
// const s = "a";
// console.log(s instanceof String);
// console.log(4 + true);

// function foo() {
//   console.log(this);
// }
// var a = 1;

// foo();
// const obj = {
//   a: 2,
//   foo: foo,
// };
// obj.foo();
// const c = new foo();

const throttle = (fn, interval) => {
  let previous = 0;

  return (...args) => {
    const now = Date.now();
    console.log(now, previous);

    if (now - previous >= interval) {
      previous = now;
      fn(...args);
    }
  };
};

throttle(() => console.log(Date.now()), 1000)();
