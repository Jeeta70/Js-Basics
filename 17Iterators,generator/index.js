const array = ["apple","mango","grapes"]


function fruitsIterators(values) {
  let nextIndex = 0;
  return {
    next:function () {
      if(nextIndex < values.length){
        return {
          fruit:values[nextIndex++],
          done:false
        }
      }else{
        return {
          done:true
        }
      }
    }
  }
}

const fruits = fruitsIterators(array)
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

