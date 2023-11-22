"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lotsOfPlants_1 = require("../HackerRank/lotsOfPlants");
const poisonousPlants_1 = require("../HackerRank/poisonousPlants");
describe("PoisonousPlants", () => {
    it("Should return 0.", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase_0);
        expect(result).toEqual(0);
    });
    it("Should return 2", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase0_2);
        expect(result).toEqual(2);
    });
    it("Should return 0", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase1_0);
        expect(result).toEqual(0);
    });
    it("Should return 2", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase2_2);
        expect(result).toEqual(2);
    });
    it("Should return 2", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase4_2);
        expect(result).toEqual(2);
    });
    it("Should return 1", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase5_1);
        expect(result).toEqual(1);
    });
    it("Should return 32374", () => {
        const result = (0, poisonousPlants_1.poisonousPlants)(lotsOfPlants_1.lotsOfPlants.testCase17_32374);
        expect(result).toEqual(32374);
    });
});
//# sourceMappingURL=poisonousPlants.test.js.map