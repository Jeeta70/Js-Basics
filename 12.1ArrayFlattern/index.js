const arr = [1, 2, 3, [4, [5]]];
// const newArray = [];

// function myFlat(arr, narr) {
//   arr.forEach((element) => {
//     if (typeof element === "object") {
//       myFlat(element, narr);
//     } else {
//       narr.push(element);
//     }
//   });
// }

// myFlat(arr, newArray);

// console.log(newArray);

function myFunction(arr, depth) {
  const result = [];
  if (depth > 1) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        result.push(...myFunction(element, depth - 1));
      } else {
        result.push(element);
      }
    });
  } else {
    result.push(...arr);
  }
  return result;
}

function myFlat(depth = 1) {
  return myFunction(this, depth);
}

Array.prototype.myFlat = myFlat;

console.log(arr.myFlat(2));
