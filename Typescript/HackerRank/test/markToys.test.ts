import { maximumToys } from "../markToys";
import { fileAsArray } from "./importTest";

const testCase_3: number[] = fileAsArray(
  `/home/marcos/Coding_Challenges/Typescript/HackerRank/test/markToys_tc3`
);

describe("MaxToys", () => {
  it("Test Case 3: Expected output 10", () => {
    const result = maximumToys(testCase_3, 80000000);
    expect(result).toEqual(10);
  });
});
