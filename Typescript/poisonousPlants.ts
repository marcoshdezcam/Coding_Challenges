import { lotsOfPlants } from "./lotsOfPlants";

function thereIsPoison(plants: number[]): boolean {
  let plantsHavePoison: boolean = false;

  for (let plant = 0; plant < plants.length; plant++) {
    let leftPlant: number = plants[plant];
    let rightPlant: number = plants[plant + 1];

    if (rightPlant > leftPlant) return true;
  }

  return plantsHavePoison;
}

function removePlants(
  poisonousPlantsIndexes: number[],
  plants: number[]
): number[] {
  let indexOffset: number = 0;

  poisonousPlantsIndexes.forEach((index) => {
    plants.splice(index + indexOffset, 1);
    indexOffset++;
  });
  return plants;
}

function poisonousPlants(p: number[]): number {
  let days: number = 0;
  let poisonousPlantsIndexes: number[] = [];

  for (let plant = 0; plant < p.length; plant++) {
    const leftPlant: number = p[plant];
    const rightPlant: number = p[plant + 1];

    if (rightPlant > leftPlant) {
      poisonousPlantsIndexes.push(plant + 1);
    }

    if (rightPlant == undefined && poisonousPlantsIndexes.length != 0) {
      p = removePlants(poisonousPlantsIndexes, p);
      poisonousPlantsIndexes = [];
      days++;

      // Restart loop
      if (thereIsPoison(p)) plant = -1;
    }
  }

  console.log({
    Days: days,
    "Array after": p,
  });

  return days;
}

const plants = [6, 5, 8, 4, 7, 10, 9];
const plants2 = [1, 1, 1, 1, 1];
const plantsNoPoison = [5, 4, 3, 2, 1];

console.log(poisonousPlants(lotsOfPlants));
