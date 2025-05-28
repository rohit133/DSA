/**
 * @param {number[]} digits
 * @return {number[]}
 */

// this solution will fail the edges case

// var plusOne = function(digits) {
//     let lastdigit = digits[digits.length-1] + 1
//     if(lastdigit < 10){
//         digits[digits.length-1] = lastdigit;
//         return digits;
//     } else {
//         digits.pop()
//         for(let i of String(lastdigit).split("")){
//             digits.push(Number(i));
//         }
//         return digits;
//     }
// };
// console.log(plusOne([1,2,3]))  // [1, 2, 4]
// console.log(plusOne([1,2,3,9]))  // [1, 2, 3, 1, 0]

var plusOne = function (digits) {
  let n = digits.length - 1;
  for (let i = n; i >= 0; i--) {
    if (digits[i] + 1 !== 10) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
    
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
};

console.log(plusOne([9, 9])); // [1, 0, 0]
