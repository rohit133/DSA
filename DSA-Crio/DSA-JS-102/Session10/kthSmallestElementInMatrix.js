function kthSmallestElementInMatrix(matrix, k) {
    let row  = matrix.length;
    let col = matrix[0].length;
    let left = matrix[0][0];
    let right = matrix[row-1][col-1];  
    while(left < right){
        let mid = Math.floor((left + right)/2);
        let count = 0;
        let j = col-1;
        for(let i =0; i < row; i++){
            while(j >= 0 && matrix[i][j] > mid){
                j--;
            }
            count += j + 1;
        }
        if(count < k){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}