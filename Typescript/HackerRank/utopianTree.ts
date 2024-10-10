// HackerRank URL: https://www.hackerrank.com/challenges/utopian-tree
function springGrowth(height: number): number {
  return height * 2;
}

function summerGrowth(height: number): number {
  return height + 1;
}

enum GrowthCycle {
  Spring,
  Summer,
}

function utopianTree(n: number): number {
  // Write your code here
  // SPRING: Height X 2
  // SUMMER: Height + 1
  // START onset of SPRING, first height X 2
  let height: number = 1,
    growthCycles = n;
  let currentGrowthCycle: GrowthCycle = GrowthCycle.Spring;

  for (
    let growthCycleItr = 1;
    growthCycleItr <= growthCycles;
    growthCycleItr++
  ) {
    if (currentGrowthCycle === GrowthCycle.Summer) {
      height = summerGrowth(height);
      currentGrowthCycle = GrowthCycle.Spring;
    } else if (currentGrowthCycle === GrowthCycle.Spring) {
      height = springGrowth(height);
      currentGrowthCycle = GrowthCycle.Summer;
    }
  }

  return height;
}
