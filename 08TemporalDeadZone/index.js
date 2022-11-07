console.log(getName);
var a = 10;
let b = 20;
const c = 30;

var getName = (xyz, ...abc) => {
  console.log(abc[0]);
  console.log("Hello My name is my Ajeet");
};


getName(1, 2, 3);
