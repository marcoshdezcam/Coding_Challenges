import { rotateMatrix, Matrix, MatrixMap } from "./rotateMatrix";
import { originalMatrices, rotatedMatrices } from "./rotateMatrix";

describe("Base cases:", () => {
  test("Should return rotated matrix: ", () => {
    expect(originalMatrices.first).toEqual(rotatedMatrices.first);
  })
})
