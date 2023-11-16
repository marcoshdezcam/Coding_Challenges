function sockMerchant(n, ar) {
    let occurrences = {};
    for (const index in ar) {
        const currentValue = ar[index];
        occurrences[currentValue] = ar.filter((item) => item == currentValue);
    }
    console.log(occurrences);
    let pairs = 0;
    for (const index in occurrences) {
        if (occurrences[index].length / 2 >= 1) {
            pairs += Math.trunc(occurrences[index].length / 2);
        }
    }
    return pairs;
}
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(ar.length, ar));
//# sourceMappingURL=salesByMatch.js.map