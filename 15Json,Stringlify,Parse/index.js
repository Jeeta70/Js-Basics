const obj = {
  name:"Ajeet",
  age:18
}
const x = JSON.stringify(obj);
console.log(x);
const y = JSON.parse(x)
console.log(y);