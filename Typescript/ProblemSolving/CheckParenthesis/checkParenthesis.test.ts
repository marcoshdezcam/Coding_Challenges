import { checkParenthesis } from "./checkParenthesis"

describe("Base cases", () => {
  it("Should return TRUE: Balanced brackets", () => {
    expect(checkParenthesis("{[]()}")).toBe(true)
  })

  it("Should return FALSE: Unbalanced brackets", () => {
    expect(checkParenthesis("{[(])}")).toBe(false)
  })
})
