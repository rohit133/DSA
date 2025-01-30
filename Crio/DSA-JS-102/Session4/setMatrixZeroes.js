/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function setMatrixZeroes(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let boolArrayRow = new Array(m).fill(false);
    let boolArrayCol= new Array(n).fill(false);

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(matrix[row][col] === 0){
                boolArrayRow[row] = true;
                boolArrayCol[col] = true; 
            }
        }
    }

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(boolArrayRow[row] == true || boolArrayCol[col] == true){
                matrix[row][col] = 0
            }
        }
    }

    return matrix;

}
