import { sum, multiply } from "..";

describe("sum module", () => {
  test("add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("multiply module", () => {
  test("multiply 1 * 2 to equal 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
