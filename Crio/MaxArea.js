
// /*

// ```
// Given an array of non negative number [2, 9, 5, 6, 2, 7, 1, 8, 4]
// let i = [0] j = [arrayLength - 1]
// while(j > i)
// how to move i => {if(num[i+1] > num[i]) stick1 = num[i+1] i++}
// how to move j => {if(num[j-1] > num[j]) stick2 = num[j-1] j--}

// ```
// */
// function maxArray(nums){
//     let answer = 0;
//     let left = 0, right = nums.length-1;
//     while(left < right){
//         let area = Math.min(nums[left], nums[right]) * (right - left);
//         answer = Math.max(area, answer);
//         if(nums[left] < nums[right]){
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return answer;
// }

// console.log(maxArray([1, 8, 6, 2, 5, 4, 8, 3, 7]))


for(let i = 10; i >  5; i=i-2){
    console.log(i);
}