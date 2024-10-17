import { routingNumber } from "./index";
import { expect, test, describe } from "@jest/globals";

describe("routingNumber", () => {
  test("returns true for a valid routing number", () => {
    expect(routingNumber("021000021")).toBe(true);
  });

  test("returns false for a routing number with less than 9 digits", () => {
    expect(routingNumber("12345678")).toBe(false);
  });

  test("returns false for a routing number with more than 9 digits", () => {
    expect(routingNumber("1234567890")).toBe(false);
  });

  test("returns false for a routing number with non-digit characters", () => {
    expect(routingNumber("12345a789")).toBe(false);
  });

  test("returns false for a routing number with invalid checksum", () => {
    expect(routingNumber("123456789")).toBe(false);
  });

  test("trims whitespace from the input", () => {
    expect(routingNumber(" 021000021 ")).toBe(true);
  });
});
