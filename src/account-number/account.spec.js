import { accountNumber } from "./index";
import { expect, test } from "@jest/globals";

test("returns true for a valid account number", () => {
  expect(accountNumber("021000021")).toBe(true);
});

test("returns true for valid account number", () => {
  expect(accountNumber("1234")).toBe(true);
});

test("returns true for valid account number", () => {
  expect(accountNumber("12345678901234567")).toBe(true);
});

test("returns false for a account number with non-digit characters", () => {
  expect(accountNumber("12345a789")).toBe(false);
});

test("trims whitespace from the input", () => {
  expect(accountNumber(" 021000021 ")).toBe(true);
});
