function outerDiv() {
    event.stopPropagation()
  alert("outerdiv");
}

function middleDiv() {
    event.stopPropagation()
  alert("middlediv");
}

function innerDiv() {
    event.stopPropagation()
  alert("innerdiv");
}

const arr = [1, 2, 3];
// const ans = arr.reduce((acc, val) => (acc -= val));
// console.log(ans);
