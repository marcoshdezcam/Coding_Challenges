import { versatileSum } from "./versatileSum";

describe("Base cases:", () => {
  it("Should return 7: ", () => {
    expect(versatileSum(3, 4)).toBe(7);
  });

  it("Should return: ", () => {
    expect(versatileSum(10, 12)).toEqual(22)
  })

  it("Should return: ", () => {
    expect(versatileSum(3)(7)).toEqual(10)
  })

  it("Should return: ", () => {
    expect(versatileSum(3)()(4)).toEqual(7)
  })

  it("Should return: ", () => {
    expect(versatileSum(5)()()()()(10)).toEqual(15)
  })

  it("Should return: ", () => {
    expect(versatileSum()(3)()(4)).toEqual(7)
  })

  it("Should return: ", () => {
    expect(versatileSum()()()(5)()()()()()(10)).toEqual(15)
  })
});



