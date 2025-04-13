// /**
//  * @param {BigInt} a
//  * @param {BigInt} b
//  * @return {BigInt}
//  */
// function countConversionBits(a, b) {
//     // Implement it here
//     let count  = 0
//     let xor = a ^ b;
//     while(xor !==0){
//         count += (xor & 1);
//         xor =  xor >> 1;
//     }
//     return count;
// }

// console.log(countConversionBits(10, 20)); // 4


a = 12; // 1100 in binary
b = 7;  // 0111 in binary
result = a ^ b;
console.log(result); // Output: 10 (binary 1010)    

// 1011 in binary = 11 in decimal