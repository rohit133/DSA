/**
 * 
 * @param { Number } num 
 * @param { Number } target 
 * @returns {Number} `inedx` of the Element or `inedx` where it would be if it were inserted in order. 
 * @description Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not,  return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 */


function searchInsert(num, target){
    let left =0, right = num.length -1;
    while(left <= right){
        let mid = Math.floor((right + left) / 2);
        if(num[mid] > target){
            right = mid - 1;
        } else if (num[mid] < target){
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return left;
}


let num = [1,3,5,6], target=5;
let result = searchInsert(num, target);
console.log(result);