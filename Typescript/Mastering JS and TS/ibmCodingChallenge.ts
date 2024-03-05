function multiplyMinMax(sortedArray: number[]): number {
  let min: number = sortedArray[0];
  let max: number = sortedArray[sortedArray.length - 1];

  return min * max;
}

function maxMin(operations: string[], x: number[]): number[] {
  let products: number[] = [];
  console.log({
    Operations: operations,
    Numbers: x,
  });
  let orderedNumbers: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    const currentNum: number = x[i];
    if (operations[i] == "push") {
      orderedNumbers.push(currentNum);
      orderedNumbers = orderedNumbers.sort((a, b) => a - b);

      products.push(multiplyMinMax(orderedNumbers));
    } else if (operations[i] == "pop") {
      const orderedSet = new Set(orderedNumbers);
      orderedSet.delete(currentNum);
      orderedNumbers = Array.from(orderedSet).sort((a, b) => a - b);
      products.push(multiplyMinMax(orderedNumbers));
    }
  }

  return products;
}
