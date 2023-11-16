function fibonacci(n) {
    return fib(n, new Map());
}
function fib(n, memo) {
    if (n === 0 || n === 1) {
        return n;
    }
    if (memo.has(n)) {
        return memo.get(n);
    }
    let result = fib(n - 1, memo) + fib(n - 2, memo);
    memo.set(n, result);
    return result;
}
//# sourceMappingURL=fibonacci.js.map