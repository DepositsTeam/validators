import { passportNumber } from "./index";
import { expect, test, describe } from "@jest/globals";

describe("passportNumber", () => {
  test("returns true for a valid passport number with 9 characters", () => {
    expect(passportNumber("A1B2C3D4E")).toBe(true);
    expect(passportNumber("123456789")).toBe(true);
    expect(passportNumber("abcdefghi")).toBe(true);
    expect(passportNumber("ABCDEF123")).toBe(true);
  });

  // Invalid passport numbers
  test("returns false for a passport number with less than 9 characters", () => {
    expect(passportNumber("A1B2C3D4")).toBe(false);
    expect(passportNumber("12345678")).toBe(false);
  });

  test("returns false for a passport number with more than 9 characters", () => {
    expect(passportNumber("A1B2C3D4E5")).toBe(false);
    expect(passportNumber("1234567890")).toBe(false);
  });

  test("trims passport number", () => {
    expect(passportNumber(" A1B2C3D4E5")).toBe(false);
    expect(passportNumber("1234567890 ")).toBe(false);
    expect(passportNumber(" 1234567890 ")).toBe(false);
  });

  test("returns false for a passport number with non-alphanumeric characters", () => {
    expect(passportNumber("A1B2C3D4!")).toBe(false);
    expect(passportNumber("12345-789")).toBe(false);
  });

  test("returns false for a passport number with whitespace", () => {
    expect(passportNumber("A1B2C 3D4 ")).toBe(false);
    expect(passportNumber(" 1234 56789")).toBe(false);
  });
});
