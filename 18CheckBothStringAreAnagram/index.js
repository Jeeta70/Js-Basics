const string1 = "melon";
const string2 = "lemon";

function checkAnagram(a, b) {
  let string1 = a;
  let string2 = b;

  const c = string1.split("").sort();
  const d = string2.split("").sort();
  let ans = true;
  if (c.length !== d.length) {
    ans = false;
  } else {
    for (let i = 0; i < c.length; i++) {
      if (c[i] !== d[i]) {
        ans = false;
      }
    }
  }
  return ans;
}

function checkAnagram2(a, b) {
  const newArray = new Array(200);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = 0;
  }
  for (let i = 0; i < a.length; i++) {
    newArray[a.charCodeAt(i)] += 1;
  }
  for (let i = 0; i < b.length; i++) {
    newArray[b.charCodeAt(i)] -= 1;
  }
  // console.log(newArray);
  for (let index = 0; index < newArray.length; index++) {
    // console.log(index);
    if (newArray[index] !== 0) {
      // console.log(newArray[index]);
      return false;
    }
   
  }
  return true
  console.log(newArray);
}

const result = checkAnagram2(string1, string2);
console.log(result);
