function birthday(s, d, m) {
    let possibleDivisions = 0;
    for (const key in s) {
        console.log(s[key]);
        const piece = s.slice(Number(key), Number(key) + m);
        console.log(piece);
        let sum = piece.reduce((a, b) => a + b);
        console.log(sum);
        sum === d ? possibleDivisions++ : null;
    }
    return possibleDivisions;
}
const birthExample = {
    chocolate: [2, 2, 1, 3, 2],
    day: 4,
    month: 2, // Month: Piece length
};
const birthExample2 = {
    chocolate: [1, 2, 1, 3, 2],
    day: 3,
    month: 2, // Month: Piece length
};
console.log(birthday(birthExample2.chocolate, birthExample2.day, birthExample2.month));
//# sourceMappingURL=subArrayDivision.js.map