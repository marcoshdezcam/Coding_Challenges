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
    let stack = [];
    let days = new Array(p.length).fill(0);
    let maxDays = 0;
    for (let i = 0; i < p.length; i++) {
        let maxDay = 0;
        while (stack.length > 0 && p[stack[stack.length - 1]] >= p[i]) {
            maxDay = Math.max(maxDay, days[stack.pop()]);
        }
        if (stack.length > 0) {
            days[i] = maxDay + 1;
        }
        maxDays = Math.max(maxDays, days[i]);
        stack.push(i);
    }
    return maxDays;
}
exports.poisonousPlants = poisonousPlants;
//# sourceMappingURL=poisonousPlants.js.map