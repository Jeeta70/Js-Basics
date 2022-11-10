const array = ["header", "section", "aside", "footer"];
const find = "section";

function checkEleisPresent(array, ele) {
  return array.includes(ele);
}

function checkEleisPresent1(array, ele) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === ele) {
      return true;
    }
  }
  return false;
}

console.log(checkEleisPresent1(array, find));
