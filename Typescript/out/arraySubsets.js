function subsetA(arr) {
    let arrB = arr.sort((a, b) => {
        return b - a;
    });
    let arrB_sum = 0;
    arrB.forEach((value, _) => (arrB_sum += value));
    let arrA = [];
    let arrA_sum = 0;
    while (arrA_sum <= arrB_sum) {
        let currentVal = arrB.shift();
        arrA_sum = arrA_sum + currentVal;
        arrB_sum = arrB_sum - currentVal;
        arrA.push(currentVal);
    }
    return arrA.reverse();
}
//# sourceMappingURL=arraySubsets.js.map