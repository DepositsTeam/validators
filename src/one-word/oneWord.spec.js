const { oneWord } = require("./index.js");
const { expect, test } = require("@jest/globals");

test("returns true for a single word without spaces", () => {
  expect(oneWord("Hello")).toBe(true);
  expect(oneWord("World")).toBe(true);
});

test("returns false for a string with spaces", () => {
  expect(oneWord("Hello World")).toBe(false);
  expect(oneWord("Hello  World")).toBe(false);
});

test("returns false for a single word with leading and trailing spaces", () => {
  expect(oneWord("  Hello  ")).toBe(false);
  expect(oneWord("  World")).toBe(false);
});

test("returns false for an empty string", () => {
  expect(oneWord("")).toBe(false);
});

test("returns false for a string with only spaces", () => {
  expect(oneWord("   ")).toBe(false);
});

test("returns true for a single word with special characters", () => {
  expect(oneWord("Hello!")).toBe(true);
  expect(oneWord("World123")).toBe(true);
});

test("returns true for a string with non-English characters", () => {
  expect(oneWord("こんにちは")).toBe(true);
  expect(oneWord("Привет")).toBe(true);
  expect(oneWord("مرحبا")).toBe(true);
  expect(oneWord("你好")).toBe(true);
  expect(oneWord("안녕하세요")).toBe(true);
});
