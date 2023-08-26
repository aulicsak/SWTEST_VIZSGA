const selector = require("./selector");
const sorter = require("./sorter");

describe("Selector tests", () => {
  test("Select larger from 34 and 67 = 67", () => {
    expect(selector.larger(34, 67)).toBe(67);
  });
  test("Select smaller from 3856 and 3645 = 3645", () => {
    expect(selector.smaller(3856, 3645)).toBe(3645);
  });
  test("Select larger from 555 and 555 = Egyenlo", () => {
    expect(selector.larger(555, 555)).toBe("Egyenlo");
  });
  test("Swap 46 and 64 in arr = testarr[0]=64", () => {
    let testarr = [46, 64];
    expect(selector.swap(testarr, 0, 1)).toBe(64);
  });
});
describe("Sorter test", () => {
  test("Sort array: [123, 3445, 54, 632, 234, 1, 45563, -1, 2343, 1.1, 123123412] from lower to higher", () => {
    let testarr = [123, 3445, 54, 632, 234, 1, 45563, -1, 2343, 1.1, 123123412];
    let emptyarr = [];
    expect(sorter(testarr)).toEqual([
      -1, 1, 1.1, 54, 123, 234, 632, 2343, 3445, 45563, 123123412,
    ]);
  });
});
