function arrayManipulation(n: number, queries: number[][]): number {
  // Start with a 1-indexed array of 0 with N as length
  let arrayResults: number[] = [undefined, ...Array(n).fill(0)];
  let highestValue: number = 0;
  queries.forEach((operations) => {
    const start: number = operations[0],
      end = operations[1],
      addValue = operations[2];
    for (let i = start; i <= end; i++) {
      const total = arrayResults[i] + addValue;
      arrayResults[i] = total;
      total > highestValue ? (highestValue = total) : highestValue;
    }
  });

  return highestValue;
}
