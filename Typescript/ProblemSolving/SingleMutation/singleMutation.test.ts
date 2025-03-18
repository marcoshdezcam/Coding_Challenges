import { singleMutation } from "./singleMutation"

describe("Base cases:", () => {
  test("Single deletion, should return TRUE: ", () => {
    expect(singleMutation(`abcd`, `abc`)).toBe(true)
  });

  test("Single insertion, should return TRUE: ", () => {
    expect(singleMutation(`abcd`, `abcde`)).toBe(true)
  });

  test("Sngle substitution, should return TRUE ", () => {
    expect(singleMutation(`abcd`, `abXd`)).toBe(true)
  });

  test("More than 1 substitution, should return false", () => {
    expect(singleMutation(`abcd`, `abXD`)).toBe(false)
  });

  test("More than 1 deletion, should return false", () => {
    expect(singleMutation(`abcd`, `ab`)).toBe(false)
  });

  test("More than 1 insertion, should return false", () => {
    expect(singleMutation(`abcd`, `abcdef`)).toBe(false)
  });
});

