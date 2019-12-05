// null 变量存在 但是值是 null

console.log(a); // function a () {}
a(); // 10

var a = 3;
function a() {
  console.log(10);
}
console.log(a); // 3
a = 6;
a(); // 10



