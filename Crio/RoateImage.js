
function swap(matrix, row1, col1, row2, col2){
    let temp = matrix[row1][col1] ;
    matrix[row1][col1] = matrix[row2][col2];
    matrix[row2][col2] = temp
}

function transpose(matrix){
    for(let row = 0; row < matrix.length - 1; row++){
        for(let col = row; col < matrix[0].length; col++){
            swap(matrix, row, col, col, row)
        }
    }

}

function reverseRows(matrix){
    for(let row = 0; row < matrix.length; row++){
        let left = 0;
        let right = matrix[0].length-1;
        while(left < right){
            swap(matrix, row, left, row, right)
            left++;
            right--;
        }
    }
}

function rotateImage(n, matrix) {
    //implement this function
    transpose(matrix);
    reverseRows(matrix)
    return matrix;
}