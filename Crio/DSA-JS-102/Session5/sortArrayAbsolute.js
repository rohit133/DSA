/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayAbsolute(n, nums) {
    //implement this function
    let arr = nums.map(value => value);
    arr.sort((a,b) => {
        if(Math.abs(a) < Math.abs(b)){
            return -1;
        }
        if(Math.abs(a) > Math.abs(b)){
            return +1;
        }
        else {
            return 0;
        }
    })
    for(let idx = 0; idx < n; idx++){
        nums[idx] = arr[idx];    
    }
    return nums;
}

console.log(sortArrayAbsolute(5, [2, -5, 1, -2, 4]))
