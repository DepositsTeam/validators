import { ein } from "./index.js";
import { expect, test, describe } from "@jest/globals";

describe("ein", () => {
  test("Test valid EINs", () => {
    expect(ein("12-3456789")).toBe(true);
    expect(ein("98-7654321")).toBe(true);
  });

  test("Test invalid EINs", () => {
    expect(ein("abc")).toBe(false);
    expect(ein("98-754321")).toBe(false);
    expect(ein("987-54321")).toBe(false);
    expect(ein("98754321")).toBe(false);
  });
});
