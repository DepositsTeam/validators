import { suffix } from "./index.js";
import { expect, test } from "@jest/globals";

test("Test a valid suffix", () => {
  expect(suffix("Mr")).toBe(true);
  expect(suffix("eric")).toBe(true);
  expect(suffix("ERIC")).toBe(true);
});

test("Allows only one word", () => {
  expect(suffix("Mr S")).toBe(false);
});

test("Prevents special characters", () => {
  expect(suffix("Mr@")).toBe(false);
  expect(suffix("Mr?")).toBe(false);
  expect(suffix("Mr=")).toBe(false);
  expect(suffix("Mr!")).toBe(false);
  expect(suffix("Mr+")).toBe(false);
  expect(suffix("Mr*")).toBe(false);
  expect(suffix("Mr/")).toBe(false);
  expect(suffix("Mr\\")).toBe(false);
  expect(suffix("Mr|")).toBe(false);
  expect(suffix("Mr,")).toBe(false);
  expect(suffix("Mr;")).toBe(false);
  expect(suffix("Mr:")).toBe(false);
  expect(suffix('Mr"')).toBe(false);
  expect(suffix("Mr<")).toBe(false);
  expect(suffix("Mr>")).toBe(false);
  expect(suffix("Mr{")).toBe(false);
  expect(suffix("Mr}")).toBe(false);
  expect(suffix("Mr[")).toBe(false);
  expect(suffix("Mr]")).toBe(false);
  expect(suffix("Mr(")).toBe(false);
  expect(suffix("Mr)")).toBe(false);
  expect(suffix("Mr!")).toBe(false);
  expect(suffix("Mr@")).toBe(false);
  expect(suffix("Mr#")).toBe(false);
  expect(suffix("Mr$")).toBe(false);
  expect(suffix("Mr%")).toBe(false);
  expect(suffix("Mr^")).toBe(false);
  expect(suffix("Mr&")).toBe(false);
  expect(suffix("Mr*")).toBe(false);
  expect(suffix("Mr_")).toBe(false);
  expect(suffix("Mr+")).toBe(false);
  expect(suffix("Mr=")).toBe(false);
  expect(suffix("Mr`")).toBe(false);
  expect(suffix("Mr~")).toBe(false);
  expect(suffix("Mr?")).toBe(false);
  expect(suffix("Mr/")).toBe(false);
  expect(suffix("Mr\\")).toBe(false);
  expect(suffix("Mr|")).toBe(false);
  expect(suffix("Mr,")).toBe(false);
  expect(suffix("Mr;")).toBe(false);
  expect(suffix("Mr:")).toBe(false);
  expect(suffix('Mr"')).toBe(false);
  expect(suffix("Mr<")).toBe(false);
});

test("Allows only - . and ' as special characters", () => {
  expect(suffix("Mr-.'")).toBe(true);
});

test("Prevents suffixes with length of characters greater than 5", () => {
  expect(suffix("ndyMrk")).toBe(false);
});
