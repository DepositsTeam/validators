const { swiftCode } = require("./index");
const { expect, test } = require("@jest/globals");

// Valid SWIFT codes
test("returns true for a valid SWIFT code with 8 characters", () => {
  expect(swiftCode("ABCDEF12")).toBe(true);
  expect(swiftCode("12345678")).toBe(true);
});

test("returns true for a valid SWIFT code with 11 characters", () => {
  expect(swiftCode("ABCDEF12GHI")).toBe(true);
  expect(swiftCode("12345678ABC")).toBe(true);
});

// Invalid SWIFT codes
test("returns false for a SWIFT code with less than 8 characters", () => {
  expect(swiftCode("ABCDEF1")).toBe(false);
  expect(swiftCode("1234567")).toBe(false);
});

test("returns false for a SWIFT code with more than 11 characters", () => {
  expect(swiftCode("ABCDEF12GHIJ")).toBe(false);
  expect(swiftCode("12345678ABCD")).toBe(false);
});

test("returns false for a SWIFT code with non-alphanumeric characters", () => {
  expect(swiftCode("ABCDEF12!@#")).toBe(false);
  expect(swiftCode("12345678-AB")).toBe(false);
});

test("returns true and trims SWIFT code", () => {
  expect(swiftCode(" ABCDEF12")).toBe(true);
  expect(swiftCode("12345678 ")).toBe(true);
});

test("returns false for a SWIFT code with whitespace", () => {
  expect(swiftCode(" ABCD EF12")).toBe(false);
  expect(swiftCode("1234 5678 ")).toBe(false);
});
