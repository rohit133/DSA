function nthFibonacci(n){
    if(n == 0) 
        return 0;
    if(n == 1) 
        return 1;
    return nthFibonacci(n-1) + nthFibonacci(n-2);
}
let result = nthFibonacci(5)
console.log(result);