/**
 * @description isEven function without using mod operator.t
 * @param {*} num 
 * @returns 
 */

function isEven(num) {
  let abs = Math.abs(num);
  let out = true;
  for (let i = 0; i < abs; i++) {
    out = !out;
  }
  return out;
}


let result = isEven(2);
console.log(result);
