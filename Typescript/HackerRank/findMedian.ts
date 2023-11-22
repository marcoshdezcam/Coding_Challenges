function findMedian(arr: number[]): number {
  const sortedArray: number[] = arr.sort((a: number, b: number) => a - b);
  const medianIndex: number = Math.trunc(sortedArray.length / 2 + 1);
  return sortedArray[medianIndex - 1];
}

console.log(findMedian([5, 3, 1, 2, 4]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
