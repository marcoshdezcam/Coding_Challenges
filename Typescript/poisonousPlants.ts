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
    };
    let rightSide: PlantsPointer = {
      leftIndex: p.length - index - 2,
      leftValue: p[p.length - index - 2],
      rightIndex: p.length - index - 1,
      rightValue: p[p.length - index - 1],
    };

    if (leftSide.rightValue > leftSide.leftValue) {
      foundPoison = true;
      poisonousIndexes.add(leftSide.rightIndex);
    }

    if (rightSide.rightValue > rightSide.leftValue) {
      foundPoison = true;
      poisonousIndexes.add(rightSide.rightIndex);
    }

    if (
      (foundPoison && index === maxIterations - 1) ||
      (foundPoison && leftSide.rightIndex + 1 === rightSide.leftIndex)
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
