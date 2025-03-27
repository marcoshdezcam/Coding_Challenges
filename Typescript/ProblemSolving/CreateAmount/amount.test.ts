import { wasyFromCoins } from "./amount"

describe("Base cases", () => {
  it("Should return 4", () => {
    expect(wasyFromCoins(4, [1, 2, 3])).toEqual(4)
  })

  it("Should return 7", () => {
    expect(wasyFromCoins(6, [1, 2, 3])).toEqual(6)
  })

  it("Should return 0", () => {
    expect(wasyFromCoins(0, [])).toEqual(0);
  })

})
