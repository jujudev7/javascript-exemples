console.log("00000000001");
function test01() {
  console.log("00000000002");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
function test02() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
console.log("00000000003");

const aaaa = test01();
aaaa.then((value) => {
  console.log("3seconde");
});
console.log("00000000004");

const aaaa2 = test02();
aaaa2.then((value) => {
  console.log("1seconde");
  const array1 = ["a", "b", "c"];
  console.log("00000000005 : " + array1);
  array1.forEach((element) => console.log(element));
  console.log("00000000006 : " + array1);
});
