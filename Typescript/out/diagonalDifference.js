function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let leftToRightIndex = 0;
    let rightToLeftIndex = arr.length - 1;
    for (const line of arr) {
        leftToRight += line[leftToRightIndex];
        leftToRightIndex++;
        rightToLeft += line[rightToLeftIndex];
        rightToLeftIndex--;
    }
    return Math.abs(leftToRight - rightToLeft);
}
const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];
console.log(diagonalDifference(matrix));
//# sourceMappingURL=diagonalDifference.js.map