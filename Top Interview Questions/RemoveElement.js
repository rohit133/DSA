/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0; 
    for (let i =0; i <nums.length; i++){
        if(nums[i] !== val){
            nums[j++] = nums[i]
        }
    }
    return j;
};


let nums = [3,2,2,3];
let val = 3;


console.log(removeElement(nums, val));