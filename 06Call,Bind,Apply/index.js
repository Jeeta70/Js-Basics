// const obj = {
//   firstName:"Ajeet",
//   lastName:"Singh"
// }

// const obj1={
//   firstName:"abc",
//   lastName:"def",
// }

// function fullName(ex) {
//   return `${this.firstName} + ${this.lastName}+${ex}`
// }

// console.log(fullName.call(obj,"eee"));

function makeid(length,user) {
  var result = "";
  var characters = user;
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


const user = "ajrana70"s;
const l = user.length;
console.log(makeid(l, user));
