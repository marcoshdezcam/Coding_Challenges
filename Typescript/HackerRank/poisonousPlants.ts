import { lotsOfPlants } from "./lotsOfPlants";

interface PlantsPointer {
  leftIndex: number;
  leftValue: number;
  rightIndex: number;
  rightValue: number;
}

function filterPoison(
  plants: number[],
  poisonousIndexes: Set<number>
): number[] {
  let plantsWithoutPoison: number[] = [];
  let plantsWithoutPoison_L: number[] = [];
  let plantsWithoutPoison_R: number[] = [];
  let left: number = 0;
  let right: number = plants.length - 1;

  while (left <= right) {
    if (!poisonousIndexes.has(left)) {
      plantsWithoutPoison_L.push(plants[left]);
    }

    if (!poisonousIndexes.has(right) && left !== right) {
      plantsWithoutPoison_R.unshift(plants[right]);
    }

    left++;
    right--;
  }
  plantsWithoutPoison = plantsWithoutPoison_L.concat(plantsWithoutPoison_R);

  return plantsWithoutPoison;
}

export function poisonousPlants(p: number[]): number {
  let stack: number[] = [];
  let days: number[] = new Array(p.length).fill(0);
  let maxDays = 0;

  for (let i = 0; i < p.length; i++) {
    let maxDay = 0;
    while (stack.length > 0 && p[stack[stack.length - 1]] >= p[i]) {
      maxDay = Math.max(maxDay, days[stack.pop() as number]);
    }

    if (stack.length > 0) {
      days[i] = maxDay + 1;
    }

    maxDays = Math.max(maxDays, days[i]);
    stack.push(i);
  }

  return maxDays;
}
