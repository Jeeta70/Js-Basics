//01Print all animal in Object

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log(`# ${i} ${this.species} : ${this.name}`);
//   };

//   this.print();
// }

//02Append an array to another array

// const array = ["a", "b"];
// const element = [0, 1, 2];

//03Min Max of an array

// const numbers = [-6,2,3,4,5];

// console.log(Math.max(...numbers));

//04

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password === "h") success();
//   else failed();
// }
// let user = {
//   name: "Piyush Agrawal",
//   loginSuccessfull() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed`);
//   },
// };

// checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

//05Polyfill of Call

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} is not callable`);
//   }

//   context.fn = this;
//   context.fn(...args)

// };

// Function.prototype.myApply = function (context = {}, args=[]) {
//   if (typeof this !== "function") {
//     throw new Error(this + "is not callable");
//   }

//   if(!Array.isArray(args)){
//     throw new TypeError("")
//   }

//   context.fn = this;
//   context.fn(...args)
// };

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context.fn = this;
  return function (...ne) {
    context.fn(...args,...ne);
  };
};

const ans = purchaseCar.myBind(car1 );
ans("Rs", 10000);
