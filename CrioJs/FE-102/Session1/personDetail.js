/**
 *
 * @param {*} a
 * @param {*} b
 * @returns {}
 */

function personDetail(a, b) {
  let resultObj = {};
  resultObj["firstName"] = a;
  resultObj["lastName"] = b;
  resultObj["fullName"] = `${a} ${b}`;
  return resultObj;
}

// function personDetail(a, b) {
//   let resultObj = {};
//   resultObj = {
//     firstName: a,
//     lastName: b,
//     fullName: `${a} ${b}`,
//   };
//   return resultObj;
// }
console.log(personDetail("John", "Smith"));
