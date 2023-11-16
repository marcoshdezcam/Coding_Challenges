function flippingMatrix(matrix) {
    for (const key in matrix) {
        // ? Find MAX SUM per row
        matrix[key][0] + matrix[key][1] < matrix[key][2] + matrix[key][3]
            ? matrix[key].reverse()
            : null;
    }
    for (const key in matrix) {
        // ? Find MAX sum per COL
        if (matrix[0][key] + matrix[1][key] < matrix[2][key] + matrix[3][key]) {
            const reversedCol = matrix.map((row) => row[key]).reverse();
            matrix.forEach((row, index) => {
                row[key] = reversedCol[index];
            });
        }
    }
    return matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
}
const matrixExample = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
];
console.log(flippingMatrix(matrixExample));
//# sourceMappingURL=flippingMatrix.js.map