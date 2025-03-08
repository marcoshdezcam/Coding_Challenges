function returnWays(amount: number, coins: number[]): number {
  let numOfways = [];
  for (let i = 0; i <= amount; i++) {
    numOfways[i] = 0;
  }
  numOfways[0] = 1;

  for (let coinX = 0; coinX < coins.length; coinX++) {
    let coin = coins[coinX];

    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      let change: number = currentAmount - coin;
      let waysForChange: number = numOfways[change];
      numOfways[currentAmount] += waysForChange;
    }
  }

  return numOfways[amount];
}

var coins = [2, 4, 5];
var amount = 10;
console.log(returnWays(amount, coins));
