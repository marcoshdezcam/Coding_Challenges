function flippintBits(n: number): number {
  return ~n >>> 0;
}

const original: number = 10000000000;
const result: number = flippintBits(original);
console.log(result);
