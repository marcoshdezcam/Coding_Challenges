"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poisonousPlants = void 0;
function filterPoison(plants, poisonousIndexes) {
    let plantsWithoutPoison = [];
    let plantsWithoutPoison_L = [];
    let plantsWithoutPoison_R = [];
    let left = 0;
    let right = plants.length - 1;
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
function poisonousPlants(p) {
    let days = 0;
    let maxIterations = Math.floor(p.length / 2);
    let poisonousIndexes = new Set();
    for (let index = 0; index < maxIterations; index++) {
        let leftSide = {
            leftIndex: index,
            leftValue: p[index],
            rightIndex: index + 1,
            rightValue: p[index + 1],
        };
        let rightSide = {
            leftIndex: p.length - index - 2,
            leftValue: p[p.length - index - 2],
            rightIndex: p.length - index - 1,
            rightValue: p[p.length - index - 1],
        };
        if (leftSide.rightValue > leftSide.leftValue) {
            poisonousIndexes.add(leftSide.rightIndex);
        }
        if (rightSide.rightValue > rightSide.leftValue) {
            poisonousIndexes.add(rightSide.rightIndex);
        }
        if (poisonousIndexes.size > 0 && index === maxIterations - 1) {
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
exports.poisonousPlants = poisonousPlants;
//# sourceMappingURL=poisonousPlants.js.map