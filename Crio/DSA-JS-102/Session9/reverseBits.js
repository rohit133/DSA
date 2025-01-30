/**
 * @param {BigInt} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    // Implement here
    let l = 31n, r = 0n;
    while (r < l) {
      let lthBit = 0n, rthBit = 0n;
      
      if ((n & (1n << l)) == 0n) {
        lthBit = 0n;
      } else {
        lthBit = 1n;
      }
  
      if ((n & (1n << r)) > 0n) {
        rthBit = 1n;
      } else {
        rthBit = 0n;
      }
  
      if(lthBit !== rthBit){
          n ^= (1n << l);
          n ^= (1n << r);   
      }
      l--;
      r++;
    }
    return n;
  }


let n = BigInt(43261596, 10);
let answer = reverseBits(n);

console.log(answer);
