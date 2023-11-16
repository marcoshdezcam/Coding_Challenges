function minimumSwaps(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            let swapIndex = arr.indexOf(sorted[i], i);
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
            swaps++;
        }
    }
    return swaps;
}
//# sourceMappingURL=minumumSwaps.js.map