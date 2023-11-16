function thereIsPoison(plants) {
  let plantsHavePoison = false;
  for (let plant = 0; plant < plants.length; plant++) {
    let leftPlant = plants[plant];
    let rightPlant = plants[plant + 1];
    if (rightPlant > leftPlant) plantsHavePoison = true;
  }
  return plantsHavePoison;
}
function removePlants(poisonousPlantsIndexes, plants) {
  poisonousPlantsIndexes.forEach((index) => {
    plants.splice(index, 1);
    // Update the rest of indexes - 1, to delete preserving original order
    for (let plant = 0; plant < poisonousPlantsIndexes.length; plant++) {
      const element = poisonousPlantsIndexes[plant];
      poisonousPlantsIndexes[plant] = element - 1;
    }
  });
  return plants;
}
function poisonousPlants(p) {
  let days = 0;
  let poisonousPlantsIndexes = [];
  for (let plant = 0; plant < p.length; plant++) {
    const leftPlant = p[plant];
    const rightPlant = p[plant + 1];
    console.log({
      "Left plant": leftPlant,
      "Right plant": rightPlant,
      Indexes: poisonousPlantsIndexes.some(Number),
    });
    if (rightPlant > leftPlant) {
      poisonousPlantsIndexes.push(plant + 1);
    }
    if (rightPlant == undefined && poisonousPlantsIndexes.some(Number)) {
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
console.log(thereIsPoison(plants));
//# sourceMappingURL=poisonousPlants.js.map
