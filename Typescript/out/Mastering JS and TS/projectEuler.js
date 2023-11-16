function multiplesOf3and5(limit) {
    let totalSum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
            totalSum += i;
        }
    }
    return totalSum;
}
function evenFibonacciNums(limit) {
    let fibonacciSequence = [1, 2];
    let sumEvenValues = 0;
    let currentNumber = 0;
    while (currentNumber < limit) {
        let last = fibonacciSequence[fibonacciSequence.length - 1];
        let beforeLast = fibonacciSequence[fibonacciSequence.length - 2];
        currentNumber = last + beforeLast;
        console.log(currentNumber);
        if (last % 2 == 0)
            sumEvenValues += last;
        fibonacciSequence.push(currentNumber);
        console.log(fibonacciSequence);
        fibonacciSequence.shift();
    }
    return sumEvenValues;
}
function highestPrimeFactor(num) {
    let factor = 2;
    while (factor * factor <= num) {
        if (num % factor === 0) {
            num /= factor;
        }
        else {
            factor += 1;
        }
    }
    return num;
}
//# sourceMappingURL=projectEuler.js.map