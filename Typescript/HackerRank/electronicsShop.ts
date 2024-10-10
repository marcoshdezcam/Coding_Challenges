function getMoneySpent(keyboards, drives, budget) {
  // Sort Prices
  let keyboardPrices = keyboards.sort((a, b) => b - a);
  let drivesPrices = drives.sort((a, b) => b - a);
  let highestPrice = -1;

  keyboardPrices.forEach((keyboardPrice) => {
    drivesPrices.forEach((drivePrice) => {
      let totalCost = keyboardPrice + drivePrice;
      console.log({
        Budget: budget,
        TotalCost: totalCost,
      });
      if (totalCost <= budget) {
        highestPrice = totalCost;
      }
    });
  });
  return highestPrice;
}
