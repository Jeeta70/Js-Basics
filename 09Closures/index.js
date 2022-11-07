function x() {
  const a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
const z = x();
// console.log(z);
z()
