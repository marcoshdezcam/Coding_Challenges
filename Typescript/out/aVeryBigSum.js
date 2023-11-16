// Input (ar: number[])
// Output (): number
function aVeryBigSum(ar) {
    // O(n) Linear time complexity
    let sum = 0;
    ar.forEach((num) => {
        sum += num;
    });
    return sum;
}
function aVeryBigSumRecursive(ar) {
    if (ar.length === 0) {
        return 0;
    }
    else {
        return ar[0] + aVeryBigSumRecursive(ar.slice(1));
    }
}
const numbers = [1, 2];
const fruits = [
    "apple",
    "banana",
    "orange",
    "kiwi",
    "mango",
    "pineapple",
    "grape",
    "pear",
    "watermelon",
    "peach",
];
console.log(fruits.slice(1));
console.log(aVeryBigSumRecursive(numbers));
//# sourceMappingURL=aVeryBigSum.js.map