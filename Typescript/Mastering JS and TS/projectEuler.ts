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

function getPrimes(limit: number): number[] {
  const primes: number[] = [];
  const isPrime: boolean[] = Array(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes;
}

function highestPrimeFactor(limit: number): number {
  const primeNumbers: number[] = getPrimes(limit);
  let highestPrimeFactor: number = 0;

  primeNumbers.forEach((prime) => {
    if (limit % prime === 0) highestPrimeFactor = prime;
  });

  // Return max prime factor
  return highestPrimeFactor;
}
