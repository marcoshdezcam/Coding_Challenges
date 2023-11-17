"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lotsOfPlants_1 = require("./lotsOfPlants");
function thereIsPoison(plants) {
    let plantsHavePoison = false;
    for (let plant = 0; plant < plants.length; plant++) {
        let leftPlant = plants[plant];
        let rightPlant = plants[plant + 1];
        if (rightPlant > leftPlant)
            return true;
    }
    return plantsHavePoison;
}
function removePlants(poisonousPlantsIndexes, plants) {
    let indexOffset = 0;
    poisonousPlantsIndexes.forEach((index) => {
        plants.splice(index + indexOffset, 1);
        indexOffset++;
    });
    return plants;
}
function poisonousPlants(p) {
    let days = 0;
    let poisonousPlantsIndexes = [];
    for (let plant = 0; plant < p.length; plant++) {
        const leftPlant = p[plant];
        const rightPlant = p[plant + 1];
        if (rightPlant > leftPlant) {
            poisonousPlantsIndexes.push(plant + 1);
        }
        if (rightPlant == undefined && poisonousPlantsIndexes.length != 0) {
            p = removePlants(poisonousPlantsIndexes, p);
            poisonousPlantsIndexes = [];
            days++;
            // Restart loop
            if (thereIsPoison(p))
                plant = -1;
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
console.log(poisonousPlants(lotsOfPlants_1.lotsOfPlants));
//# sourceMappingURL=poisonousPlants.js.map