function findMedian(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    const medianIndex = Math.trunc(sortedArray.length / 2 + 1);
    return sortedArray[medianIndex - 1];
}
console.log(findMedian([5, 3, 1, 2, 4]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
//# sourceMappingURL=findMedian.js.map