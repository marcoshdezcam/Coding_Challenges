import { lotsOfPlants } from "../lotsOfPlants";
import { poisonousPlants } from "../poisonousPlants";

describe("PoisonousPlants", () => {
  it("Should return 0", () => {
    const result = poisonousPlants(lotsOfPlants.testCase_0);
    expect(result).toEqual(0);
  });
  it("Should return 2", () => {
    const result = poisonousPlants(lotsOfPlants.testCase0_2);
    expect(result).toEqual(2);
  });
  it("Should return 0", () => {
    const result = poisonousPlants(lotsOfPlants.testCase1_0);
    expect(result).toEqual(0);
  });
  it("Should return 2", () => {
    const result = poisonousPlants(lotsOfPlants.testCase2_2);
    expect(result).toEqual(2);
  });
  it("Should return 2", () => {
    const result = poisonousPlants(lotsOfPlants.testCase4_2);
    expect(result).toEqual(2);
  });
  it("Should return 1", () => {
    const result = poisonousPlants(lotsOfPlants.testCase5_1);
    expect(result).toEqual(1);
  });
  it("Should return 32374", () => {
    const result = poisonousPlants(lotsOfPlants.testCase17_32374);
    expect(result).toEqual(32374);
  });
});
