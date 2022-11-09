// let a = 10;
// let b = "abc"
// console.log(isNaN(b))

//Memoize
let sum = 0;
const calc = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let temp = sum;
  sum = 0;
  return temp;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let ele = args[0];
    if (ele in cache) {
      console.log("ele is already present in cache");
      return cache[ele];
    } else {
      console.log("first time");
      let result = fun(ele);
      cache[ele] = result;
      return result;
    }
  };
};

console.time();
const a = memoize(calc);
console.log(a(4));
console.timeEnd();

console.time();
const b = a;
console.log(b(4));
console.timeEnd();
