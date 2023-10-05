function sumOfSquareDigits(n: number): number {
  let sum = 0;
  while (n > 0) {
    // MOD by 10 to get the last digit
    const digit = n % 10;
    // Add the square of the digit to the sum
    sum += digit * digit;
    // Divide by 10 to remove the last digit
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappyNumber(n: number): boolean {
  let slow = n;
  let fast = sumOfSquareDigits(n);
  console.log(slow, fast);
  if (fast === 1) return true;

  // IF fast is no equal to 1, nor equal to slow
  while (slow !== fast) {
    // Increment SLOW by 1
    slow = sumOfSquareDigits(slow);
    // Increment FAST by 2
    fast = sumOfSquareDigits(sumOfSquareDigits(fast));
    console.log(slow, fast);
    // IF either SLOW or FAST is equal to 1, return true
    if (fast === 1) return true;
  }

  return false;
}

console.log(isHappyNumber(1));
