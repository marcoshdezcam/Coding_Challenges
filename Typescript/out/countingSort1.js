function countingSort(arr) {
    const occurrences = Array(100).fill(0);
    for (const index in arr) {
        console.log(arr[index]);
        occurrences[arr[index]]++;
    }
    return occurrences;
}
const arr = [1, 1, 3, 2, 1];
const occurrencesResult = countingSort(arr);
console.log(occurrencesResult);
//# sourceMappingURL=countingSort1.js.map