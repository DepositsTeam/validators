import { zip } from "./index.js";
import { describe, expect, test } from "@jest/globals";

describe("zip", () => {
  // Valid zip codes
  test("returns true for a valid 5-digit zip code", () => {
    expect(zip("12345")).toBe(true);
    expect(zip("67890")).toBe(true);
  });

  test("returns true for a valid 9-digit zip code with hyphen", () => {
    expect(zip("123456789")).toBe(true);
    expect(zip("987654321")).toBe(true);
  });

  // Invalid zip codes
  test("returns false for a zip code with less than 5 digits", () => {
    expect(zip("1234")).toBe(false);
  });

  test("returns false for a zip code with more than 5 but less than 9 digits", () => {
    expect(zip("123456")).toBe(false);
  });

  test("returns false for a zip code with more than 9 digits", () => {
    expect(zip("1234567890")).toBe(false);
    expect(zip("1234567890")).toBe(false);
  });

  test("returns false for a zip code with non-digit characters", () => {
    expect(zip("1234a")).toBe(false);
    expect(zip("12345-678a")).toBe(false);
  });

  test("returns false for a zip code with invalid format", () => {
    expect(zip("1234-56789")).toBe(false);
    expect(zip("123456-789")).toBe(false);
  });

  test("returns false for a zip code with whitespace", () => {
    expect(zip(" 123 45")).toBe(false);
    expect(zip("12 345 ")).toBe(false);
    expect(zip("12345- 6789")).toBe(false);
  });

  test("trims values", () => {
    expect(zip(" 12345")).toBe(true);
    expect(zip("12345 ")).toBe(true);
    expect(zip(" 123456789 ")).toBe(true);
  });
});
