function sumCoinUntil(coin: number, total: number): number[] {
  if (coin <= 0) return [];

  let combinationToSum: number[] = [];
  let result: number = 0;
  while (result < total) {
    result += coin;
    console.log({
      coin,
      result,
      total
    });
    if (result === total) combinationToSum.push(coin);
    if (result > total) return combinationToSum;
  }

  return combinationToSum;
}

function dynamicProgramming(amount: number, coins: number[]): number {
  if (amount <= 0) return 0;
  if (coins.length <= 0) return 0;
  let tracker: Map<number, number[][]> = new Map;

  coins.forEach(coin => {
    console.log({
      coin,
      tracker,
    });
    let combinationFromCoin: number[] = sumCoinUntil(coin, amount);
    let newCombination: number[] = combinationFromCoin.length === 0 ? undefined : combinationFromCoin;

    let validCombinations: number[][] = tracker.get(coin);
    console.log({
      combinationFromCoin,
      newCombination,
      validCombinations
    });
    validCombinations.push(newCombination);
    //if (newCombination) tracker.set(coin, validCombinations);
  })

  console.log({
    tracker
  })

  // let amountPossibleCombinations: number = tracker.get(amount).length;
  return 0;
}

function recursive(coins: number[], numbOfCoins: number, amount: number) {
  if (amount === 0) return 1;
  if (amount < 0) return 0; // No solution for negative values
  if (numbOfCoins < 0 && amount > 0) return 0; // No coins left

  return recursive(coins, numbOfCoins, amount - coins[numbOfCoins]) +
    recursive(coins, numbOfCoins - 1, amount);
}

export function wasyFromCoins(amount: number, coins: number[]) {
  return dynamicProgramming(amount, coins);
}

console.log({
  "result": wasyFromCoins(4, [1, 2, 3])
})
