function testregex() {
    console.log("on va tester le regex")
    return false;
}
// /^[A-Z]+$/i
let var1 = testregex();

console.log(var1)

// function exempleFunction1() {
//     console.log("00000000001")
// }
// console.log("00000000002")

// exempleFunction1();

// console.log("00000000003")

function exempleFunction2(param1) {
  console.log("00000000004");
  // return "blabla"
  // if(param1 === "john lennon"){
  //     return true
  // } else {
  //     return false
  // }
  // return param1
  let regex = /^[A-Z]+$/i;
  let result = regex.test(param1);
  //   return regex.test(String(email).toLowerCase());
  return result;
}
// exempleFunction2();
console.log("00000000001:" + exempleFunction2("ABCD7e"));


function isValidEmail(param1) {
    console.log("00000000004");
    let regex = /^[A-Z]+$/i;
    let result = regex.test(param1);
  //   return regex.test(String(email).toLowerCase());
      
    return result;
  }
  console.log("00000000001:" + isValidEmail("ABCD7e"));
  