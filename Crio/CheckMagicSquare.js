function checkMagicSquare(n, matrix) {
    let target = 0;
    for(let i = 0; i < n; i++){
        target = target + matrix[0][i];
    }
    let d1sum = 0, d2sum = 0
    for(let i = 0; i < n; i++){
        let currentRowSum = 0, currentColSum = 0;
        for(let j = 0; j < n; j++){
            currentRowSum = currentRowSum + matrix[i][j];
            currentColSum = currentColSum + matrix[j][i];
            if(i == j){
                d1sum = d1sum + matrix[i][j]
            } 
            if(i+j === n-1){
                d2sum = d2sum + matrix[i][j]
            }
        }
        if(currentRowSum !== target || currentColSum !== target){
            return false;
        }  
    }
    if(d1sum !== target || d2sum !== target){
        return false;
    }
return true;
}


let n = 3;
matrix = [[4,9,2], [3,5,7], [8,1,6]];


let result = checkMagicSquare(n, matrix);
console.log((!result) ? "No" : "Yes");