import { strongPassword } from "./index";
import { expect, test, describe } from "@jest/globals";
describe("strongPassword", () => {
  test("returns false for an empty string", () => {
    expect(strongPassword("")).toBe(false);
  });

  test("returns false for a string with length less than 8", () => {
    expect(strongPassword("Abc123!")).toBe(false);
  });

  test("returns false for a string without a digit", () => {
    expect(strongPassword("Abcdefg!")).toBe(false);
  });

  test("returns false for a string without a lowercase letter", () => {
    expect(strongPassword("ABCDEFG1!")).toBe(false);
  });

  test("returns false for a string without an uppercase letter", () => {
    expect(strongPassword("abcdefg1!")).toBe(false);
  });

  test("returns false for a string without a special character", () => {
    expect(strongPassword("Abcdefg1")).toBe(false);
  });

  test("returns true for a valid strong password", () => {
    expect(strongPassword("Abcdefg1!")).toBe(true);
  });

  test("trims leading and trailing spaces", () => {
    expect(strongPassword("  Abcdefg1!  ")).toBe(true);
  });
});
