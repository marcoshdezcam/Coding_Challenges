function fibonacci(n: number): number {
  return fib(n, new Map<number, number>());
}

function fib(n: number, memo: Map<number, number>): number {
  if (n === 0 || n === 1) {
    return n;
  }
  if (memo.has(n)) {
    return memo.get(n);
  }
  let result: number = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, result);
  return result;
}
