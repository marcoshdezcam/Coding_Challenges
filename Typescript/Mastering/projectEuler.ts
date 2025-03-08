function multiplesOf3and5(limit: number): number {
  let totalSum: number = 0;
  for (let i = 1; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(i);

      totalSum += i;
    }
  }
  return totalSum;
}

function evenFibonacciNums(limit: number): number {
  let fibonacciSequence: number[] = [1, 2];
  let sumEvenValues: number = 0;
  let currentNumber: number = 0;

  while (currentNumber < limit) {
    let last: number = fibonacciSequence[fibonacciSequence.length - 1];
    let beforeLast: number = fibonacciSequence[fibonacciSequence.length - 2];
    currentNumber = last + beforeLast;
    console.log(currentNumber);

    if (last % 2 == 0) sumEvenValues += last;

    fibonacciSequence.push(currentNumber);
    console.log(fibonacciSequence);
    fibonacciSequence.shift();
  }

  return sumEvenValues;
}

function highestPrimeFactor(num: number): number {
  let factor = 2;

  while (factor * factor <= num) {
    if (num % factor === 0) {
      num /= factor;
    } else {
      factor += 1;
    }
  }
  return num;
}
