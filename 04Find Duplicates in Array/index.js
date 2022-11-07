const arr1 = [1, 3, 4, 1, 0, 2, 5, 7, 9, 2];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
}

function quickSort(params) {
  
}

function findDublicates(array) {
  const uniqueele = [];
  // array.sort();
  array = bubbleSort(array);
  if (array.length > 1) {
    let i = 0;
    let j = 1;
    for (let index = 0; j < array.length; index++) {
      const first = array[i];
      const second = array[j];
      // console.log(first + "--" + second);
      if (first !== second) {
        uniqueele.push(first);
      }
      i++;
      j++;
    }

    return uniqueele;
  } else {
    console.log("array Does not have any dublicate");
  }

  // if (array.length > 1) {
  //   for (let i = 0; i < array.length; i++) {
  //     let find = false;
  //     for (let j = 0; j < array.length; j++) {
  //       if (i !== j) {
  //         if (array[i] === array[j]) {
  //           find = true;
  //         }
  //       }
  //     }
  //     if (find) uniqueele.push(array[i]);
  //   }
  //   return uniqueele
  // } else {
  //   console.log("array Does not have any dublicates");
  // }
}

// bubbleSort(arr1);
const ans = findDublicates(arr1);
console.log(ans);
