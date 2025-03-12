function dynamicProgramming(amount: number, coins: number[]): number {
  // Ways Tracker
  let possibleWays: number[] = new Array(amount).fill(0);
  possibleWays[0] = 1;

  coins.forEach(coin => {
    // Try every coin
    console.log({
      "new coin": coin
    });
    for (let hAmount = coin; hAmount <= amount; hAmount++) {
      let change = hAmount - coin;
      console.log({
        coin,
        hAmount,
        change,
      })
      console.log({ possibleWays });
      possibleWays[hAmount] += possibleWays[change];
      console.log({
        possibleWays,
      });
    }
  })

  return possibleWays[amount];
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
