/** 2496. Maximum Value of a String in an Array
 * The value of an alphanumeric string can be defined as:
    * The numeric representation of the string in base 10, if it comprises of digits only.
    * The length of the string, otherwise.
* Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let ans = 0;
    for (let i of strs){
        console.log(i)
        if(isNaN(i)){
            ans = Math.max(i.length, ans)
        } else {
            ans = Math.max(Number(i), ans)
        }
    }
    return ans
};

console.log(maximumValue(["alic3","bob","3","4","00000"]));
console.log(maximumValue(["1","01","001","0005"]));
