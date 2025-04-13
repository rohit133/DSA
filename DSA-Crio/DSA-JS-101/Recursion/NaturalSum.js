function naturalSum(n) {
    if(n == 0){
        return 1;
    } return n + naturalSum(n-1);
}

console.log(naturalSum(5));