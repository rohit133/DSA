/**
 * @param {number} m
 * @param {number[]} nums1
 * @param {number} n
 * @param {number[]} nums2
 * @return {number[]} 
 */
function mergeSortedArray(m, nums1, n, nums2) {
    let resultArr = [];
    let p1 = 0, p2 = 0;
    for(let i = 0; i<(m+n); i++){
        if(p1< m && (p2 >=n || nums1[p1] < nums2[p2])){
            resultArr.push(nums1[p1]);
            p1++;
        } else {
            resultArr.push(nums2[p2]);
            p2++;
        }
    }
    return resultArr;
}


// let m = 3;
// let n = 3;
// let nums1 = [1,2,3];
// let nums2 = [2,5,6];

let m = 1;
let n = 1;
let nums1 = [1];
let nums2 = [0];
let nums = mergeSortedArray(m, nums1, n, nums2);
console.log(...nums);