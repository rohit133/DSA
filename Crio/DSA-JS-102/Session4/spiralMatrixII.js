/**
 * @param {number} n
 * @return {number[][]}
 */
function spiralMatrixII(n) {
    // implement this function

    // 1. Creata an empty matrix  
    let mat = []
    for(let i=0; i<n; i++){
        let arr = new Array(n).fill(0);
        mat.push(arr);
    }
    let left = 0, top = 0, bottom = n-1, right = n-1;
    let count = 1;
    while(count <= (n*n) ){

        // First Row 
        for(let i = left; i <= right; i++){
            mat[top][i] = count;
            count +=1;
        }
        top++;
        // Last Col 
        for(let i = top; i <= bottom; i++){
            mat[i][right] = count;
            count +=1;
        }
        right--;
        // Bottom Row
        for(let i = right; i >= left; i--){
            mat[bottom][i] = count;
            count +=1;
        }
        bottom--;
        // left Col 
        for(let i = bottom; i >= top; i--){
            mat[i][left] = count;
            count +=1;
        }
        left++;
    }
    return mat;

}