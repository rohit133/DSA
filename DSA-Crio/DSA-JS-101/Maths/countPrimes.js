function isPrime(n){
    if(n <= 1) return false;
    for(let i = 2; i < n; i++)
        if(n % i == 0) return false;
    return true;
}  
function countPrimes(n) {
    let result = [];
    for(let i = 2; i < n; i++)
        if(isPrime(i)) result.push(i);
    return result.length;
}
console.log(countPrimes(5));