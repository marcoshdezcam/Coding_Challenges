"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function thereIsPoison(plants) {
    let maxIterations = Math.floor(plants.length / 2);
    for (let plant = 0; plant < maxIterations; plant++) {
        let leftPlantL = plants[plant];
        let leftPlantR = plants[plant + 1];
        const rightPlantL = plants.length - plant - 2;
        const rightPlantR = plants.length - plant - 1;
        if (leftPlantR > leftPlantL)
            return true;
        if (rightPlantR > rightPlantL)
            return true;
    }
    return false;
}
function removePlants(poisonousIndexes, plants) {
    let indexOffset = 0;
    let maxIterations = Math.floor(plants.length / 2);
    for (let plantIndex = 0; plantIndex < maxIterations; plantIndex++) {
        let leftIndex = poisonousIndexes[plantIndex];
        plants.splice(leftIndex - indexOffset, 1);
        indexOffset++;
        let rightIndex = poisonousIndexes[poisonousIndexes.length - 1 - plantIndex];
        plants.splice(rightIndex - indexOffset, 1);
    }
    return plants;
}
function poisonousPlants(p) {
    let days = 0;
    let maxIterations = Math.floor(p.length / 2);
    let poisonousPlantsIndexes = new Set();
    for (let plantIndex = 0; plantIndex < maxIterations; plantIndex++) {
        const leftPlantL = plantIndex;
        const leftPlantR = plantIndex + 1;
        const rightPlantR = p.length - plantIndex - 1;
        const rightPlantL = p.length - plantIndex - 2;
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
        if (p[leftPlantR] > p[leftPlantL])
            poisonousPlantsIndexes.add(leftPlantR);
        if (p[rightPlantR] > p[rightPlantL])
            poisonousPlantsIndexes.add(rightPlantR);
        if (poisonousPlantsIndexes.size > 0 && plantIndex == maxIterations - 1) {
            let poisonousIndexes = Array.from(poisonousPlantsIndexes).sort((a, b) => a - b);
            p = removePlants(poisonousIndexes, p);
            poisonousPlantsIndexes.clear();
            days++;
            maxIterations = Math.floor(p.length / 2);
            console.log({
                "Poisonous Plants Indexes": poisonousIndexes,
                "Array after remove": p,
                "POISON?": thereIsPoison(p),
            });
            if (thereIsPoison(p))
                plantIndex = -1;
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
//# sourceMappingURL=poisonousPlants.js.map