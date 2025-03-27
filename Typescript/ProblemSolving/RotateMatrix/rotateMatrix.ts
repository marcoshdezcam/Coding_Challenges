export type Matrix = number[][];
export type MatrixMap = {
  [key: string]: Matrix;
};

export const originalMatrices: MatrixMap = {
  first: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  second: [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ],
  third: [
    [5, 3.14, -7, 9],
    [0, 8, 6, 2]
  ],
};

export const rotatedMatrices: MatrixMap = {
  first: [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ],
}

export function rotateMatrix(originalMatrix: Matrix): Matrix {
  let rotatedLines: number = originalMatrix[0].length;
  let rotatedCols: number = originalMatrix.length;
  let rotatedMatrix: Matrix = Array.from({ length: rotatedLines }, (v, k) => Array(rotatedCols).fill(0));

  let rotatedColIndex: number = 2;
  originalMatrix.forEach(line => {
    let rotatedLineIndex: number = 0;
    line.forEach(lineItem => {
      rotatedMatrix[rotatedLineIndex][rotatedColIndex] = lineItem;
      rotatedLineIndex++;
    })
    rotatedColIndex--;
  })

  return rotatedMatrix;
}

let rotatedMatrix: Matrix = rotateMatrix(originalMatrices.first);
