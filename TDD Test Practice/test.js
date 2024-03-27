// "npm test" to run

import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";

test("Capitalize first letter of word.", () => {
  expect(capitalize("thunderstruck")).toBe("Thunderstruck");
});
test("Returns string reversed.", () => {
  expect(reverseString("thunderstruck")).toBe("kcurtsrednuht");
})
test("Calculator, add, subtract, divide and multiply.", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(2, 2)).toBe(4);
})
test("Returns string characters shifted.", () => {
  expect(caesarCipher(3, "thunderstruck")).toBe("wkxqghuvwuxfn");
})
// .toEqual is better for comparing objects and arrays
test("Analyze array for average, min, max and length.", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})