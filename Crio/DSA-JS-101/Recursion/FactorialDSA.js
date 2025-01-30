function factorialDSA(n){
    if(n == 1 || n == 0) return 1;
    return n*factorialDSA(n-1);
}
console.log(factorialDSA(0));