import { lotsOfPlants17_32374 } from "./lotsOfPlants";

function thereIsPoison(plants: number[]): boolean {
  let maxIterations: number = Math.floor(plants.length / 2);

  for (let plant = 0; plant < maxIterations; plant++) {
    let leftPlantL: number = plants[plant];
    let leftPlantR: number = plants[plant + 1];
    const rightPlantL: number = plants.length - plant - 2;
    const rightPlantR: number = plants.length - plant - 1;

    if (leftPlantR > leftPlantL) return true;
    if (rightPlantR > rightPlantL) return true;
  }

  return false;
}

function removePlants(poisonousIndexes: number[], plants: number[]): number[] {
  let indexOffset: number = 0;
  let maxIterations: number = Math.floor(plants.length / 2);

  // Implement two pointers to remove plants
  // Possible use of pop() and shift() to remove elements
  for (let plantIndex = 0; plantIndex < maxIterations; plantIndex++) {
    let leftIndex: number = poisonousIndexes[plantIndex];
    plants.splice(leftIndex - indexOffset, 1);
    indexOffset++;
    let rightIndex: number =
      poisonousIndexes[poisonousIndexes.length - 1 - plantIndex];
    plants.splice(rightIndex - indexOffset, 1);
  }
  return plants;
}

function poisonousPlants(p: number[]): number {
  let days: number = 0;
  let maxIterations: number = Math.floor(p.length / 2);
  let poisonousPlantsIndexes: Set<number> = new Set();

  for (let plantIndex = 0; plantIndex < maxIterations; plantIndex++) {
    const leftPlantL: number = plantIndex;
    const leftPlantR: number = plantIndex + 1;
    const rightPlantR: number = p.length - plantIndex - 1;
    const rightPlantL: number = p.length - plantIndex - 2;

    console.log({
      "ITERATION NUMBER": plantIndex,
      "LEFT SIDE": {
        Left: p[leftPlantL],
        Right: p[leftPlantR],
      },
      "RIGHT SIDE": {
        Left: p[rightPlantL],
        Right: p[rightPlantR],
      },
    });

    if (p[leftPlantR] > p[leftPlantL]) poisonousPlantsIndexes.add(leftPlantR);
    if (p[rightPlantR] > p[rightPlantL])
      poisonousPlantsIndexes.add(rightPlantR);

    if (poisonousPlantsIndexes.size > 0 && plantIndex == maxIterations - 1) {
      let poisonousIndexes: number[] = Array.from(poisonousPlantsIndexes).sort(
        (a, b) => a - b
      );
      p = removePlants(poisonousIndexes, p);
      poisonousPlantsIndexes.clear();
      days++;
      maxIterations = Math.floor(p.length / 2);

      console.log({
        "Poisonous Plants Indexes": poisonousIndexes,
        "Array after remove": p,
        "POISON?": thereIsPoison(p),
      });

      if (thereIsPoison(p)) plantIndex = -1;
    }
  }

  console.log({
    Days: days,
    "Array after": p,
  });

  return days;
}

const plants1_With2 = [6, 5, 8, 4, 7, 10, 9];
const plants2_With2 = [3, 2, 5, 4];
const plants4_With2 = [5, 4, 6, 1, 3, 2];
const plants1Same = [1, 1, 1, 1, 1];
const plantsNoPoison = [5, 4, 3, 2, 1];

console.log(poisonousPlants(plants1_With2));
