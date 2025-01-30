/**
 * @param {BigInt} n - a positive integer
 * @return {number}
 */
function numberOfOneBits(n) {
    let count = 0;
    for(let i =0 ; i<32 ; i++){
        if((n & (1<< i)) > 0){
            count++;
        }
    }
    return count;
}

console.log(numberOfOneBits(5)); // 2;