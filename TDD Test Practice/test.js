import { capitalize, reverseString, calculator } from "./index.js";

test("Capitalize first letter of word.", () => {
  expect(capitalize("thunderstruck")).toBe("Thunderstruck");
});
test("Returns string reversed.", () => {
  expect(reverseString("thunderstruck")).toBe("kcurtsrednuht");
})
test("Calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
})