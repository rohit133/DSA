function extractNumbers(N, arr) {
    let result = []
    //implement this function
    for(let i = 0; i < N; i++){
        if(Number(arr[i]) == arr[i]){
            result.push(Number(arr[i]));
        }
    }
    return result;
}


console.log(extractNumbers(8, ['a', '3', 'long', '17', 'crio', 'dsa', '100', '20']))