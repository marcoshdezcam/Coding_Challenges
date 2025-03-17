import { singleMutation } from "./singleMutation"

describe("Base cases:", () => {
  test("Single deletion, should return 1: ", () => {
    expect(singleMutation(`abcd`, `abc`)).toBe(1)
  });

  test("Single insertion, should return 0: ", () => {
    expect(singleMutation(`abcd`, `abcde`)).toBe(0)
  });

  test("Sngle substitution, should return ???: ", () => {
    expect(singleMutation(`abcd`, `abXd`)).toBe(0)
  });

  test(", should return false", () => {
    expect(singleMutation(`abcd`, `abXd`)).toBe(false)
  });

  test(", should return false", () => {
    expect(singleMutation(`abcd`, `abXd`)).toBe(false)
  });
});

