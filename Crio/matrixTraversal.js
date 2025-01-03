function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
  let res = [];
  for (let i = 0; i < stepsToMove; i++) {
    if (dirToMove === 3) currPosCol--;
    else if (dirToMove === 1) currPosCol++;
    else if (dirToMove === 4) currPosRow--;
    else if (dirToMove === 2) currPosRow++;
    if (currPosRow < 0 || currPosCol < 0 || currPosRow >= matrix.length || currPosCol >= matrix[0].length) {
      res = [];
      res.push(-1);
      return res;
    }
    res.push(matrix[currPosRow][currPosCol]);
  }
  return res;
}

const matrix = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];
let currPosRow = 1;
let currPosCol = 1;
let dirToMove = 4;
let stepsToMove = 2;

console.log(matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove))