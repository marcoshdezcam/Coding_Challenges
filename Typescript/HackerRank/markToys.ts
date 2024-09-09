export function maximumToys(prices: number[], k: number): number {
  // Write your code here
  let maxToys: number = 0,
    budget = k,
    total = 0;
  let sortedPrices: number[] = prices.sort((a, b) => a - b);
  console.log({
    sortedPrices,
  });

  sortedPrices.forEach((price, index) => {
    if (price > budget || total + price > budget) return maxToys;

    if (total + price <= budget) {
      (total += price), maxToys++;
    }
  });

  return maxToys;
}
