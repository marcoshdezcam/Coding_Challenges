function diagonalDifference(arr: number[][]): number {
  let leftToRight: number = 0;
  let rightToLeft: number = 0;

  let leftToRightIndex: number = 0;
  let rightToLeftIndex: number = arr.length - 1;

  for (const line of arr) {
    leftToRight += line[leftToRightIndex];
    leftToRightIndex++;

    rightToLeft += line[rightToLeftIndex];
    rightToLeftIndex--;
  }

  return Math.abs(leftToRight - rightToLeft);
}

const matrix: number[][] = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const diagDiffResult: number = diagonalDifference(matrix);
console.log(diagDiffResult);
