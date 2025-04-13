/**
 * @param {number} N
 * @param {number[]} nums
 * @return {number[]} 
 */
function twoNonRepeatingNumbers(N,nums) {
    let xor = 0;
    for(let val of nums){
        xor ^= val;
    }

    let rightMostSetBit = xor & ~xor;

    let first = 0;
    
    for(let val of nums){
        if((rightMostSetBit & val) !== 0){
            first = val ^ first; 
        }
    }

    let second = xor ^ first;

    if(first <=  second){
        return [first, second];
    } else {
        return [second, first];
    }
}