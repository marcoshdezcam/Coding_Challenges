function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
      console.log("FizzBuzz");
    } else if (Number.isInteger(i / 3) && !Number.isInteger(i / 5)) {
      console.log("Fizz");
    } else if (!Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(15));
