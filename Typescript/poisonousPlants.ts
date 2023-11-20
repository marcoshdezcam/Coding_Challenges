import { lotsOfPlants17_32374, testCase5_1 } from "./lotsOfPlants";

interface PlantsPointer {
  leftIndex: number;
  leftValue: number;
  rightIndex: number;
  rightValue: number;
  nextIndex: number;
  nextValue: number;
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

function poisonousPlants(p: number[]): number {
  let days: number = 0;
  let maxIterations: number = Math.floor(p.length / 2);
  let poisonousIndexes: Set<number> = new Set<number>();

  for (let index = 0; index < maxIterations; index++) {
    let foundPoison: boolean = false;

    let leftSide: PlantsPointer = {
      leftIndex: index,
      leftValue: p[index],
      rightIndex: index + 1,
      rightValue: p[index + 1],
      nextIndex: index + 2,
      nextValue: p[index + 2],
    };
    let rightSide: PlantsPointer = {
      leftIndex: p.length - index - 2,
      leftValue: p[p.length - index - 2],
      rightIndex: p.length - index - 1,
      rightValue: p[p.length - index - 1],
      nextIndex: p.length - index - 3,
      nextValue: p[p.length - index - 3],
    };

    if (leftSide.rightValue > leftSide.leftValue) {
      foundPoison = true;
      poisonousIndexes.add(leftSide.rightIndex);
    }

    if (rightSide.rightValue > rightSide.leftValue) {
      foundPoison = true;
      poisonousIndexes.add(rightSide.rightIndex);
    }

    //! IF LOOP8 FINISHED && POISON WAS FOUND
    if (
      (foundPoison && index === maxIterations - 1) ||
      (foundPoison && leftSide.nextIndex === rightSide.leftIndex)
    ) {
      p = filterPoison(p, poisonousIndexes);

      days++;
      maxIterations = Math.floor(p.length / 2);
      poisonousIndexes.clear();
      index = -1;
    }
  }

  console.log({
    Days: days,
    "Array after": p.toString(),
  });

  return days;
}

const plants1_With2 = [6, 5, 8, 4, 7, 10, 9];
const plants2_With2 = [3, 2, 5, 4];
const plants4_With2 = [5, 4, 6, 1, 3, 2];
const plants1Same = [1, 1, 1, 1, 1];
const plantsNoPoison = [5, 4, 3, 2, 1];

console.log(poisonousPlants(testCase5_1));
