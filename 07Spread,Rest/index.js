//Spread operators

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

arr1.push(...arr2);
// console.log(arr1);


//Rest Operators

function getSum(first,...rest) {
  return rest.reduce((eval,ele)=>eval+=ele)
}

console.log(getSum(1,3,4,5,6))