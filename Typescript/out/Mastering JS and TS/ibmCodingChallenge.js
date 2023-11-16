function multiplyMinMax(sortedArray) {
    let min = sortedArray[0];
    let max = sortedArray[sortedArray.length - 1];
    return min * max;
}
function maxMin(operations, x) {
    let products = [];
    console.log({
        Operations: operations,
        Numbers: x,
    });
    let orderedNumbers = [];
    for (let i = 0; i < operations.length; i++) {
        const currentNum = x[i];
        if (operations[i] == "push") {
            orderedNumbers.push(currentNum);
            orderedNumbers = orderedNumbers.sort((a, b) => a - b);
            products.push(multiplyMinMax(orderedNumbers));
        }
        else if (operations[i] == "pop") {
            const orderedSet = new Set(orderedNumbers);
            orderedSet.delete(currentNum);
            orderedNumbers = Array.from(orderedSet).sort((a, b) => a - b);
            products.push(multiplyMinMax(orderedNumbers));
        }
    }
    return products;
}
//# sourceMappingURL=ibmCodingChallenge.js.map