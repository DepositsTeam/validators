import { ssn } from "./index";
import { expect, test } from "@jest/globals";

// Valid SSNs
test("returns true for a valid SSN", () => {
  expect(ssn("123-45-6789")).toBe(true);
  expect(ssn("234-56-7890")).toBe(true);
});

// Invalid SSNs
test("returns false for an SSN with less than 9 digits", () => {
  expect(ssn("123-45-678")).toBe(false);
});

test("returns false for an SSN with more than 9 digits", () => {
  expect(ssn("123-45-67890")).toBe(false);
});

test("returns false for an SSN with non-digit characters", () => {
  expect(ssn("123-45-67a9")).toBe(false);
  expect(ssn("abc-de-fghi")).toBe(false);
});

test("returns false for an SSN without dashes", () => {
  expect(ssn("123456789")).toBe(false);
});

test("returns false for an SSN with invalid format", () => {
  expect(ssn("12-345-6789")).toBe(false);
  expect(ssn("123-456-789")).toBe(false);
  expect(ssn("123-45-67890")).toBe(false);
});

// SSNs beginning with 9 should fail
test("returns false for an SSN starting with 9", () => {
  expect(ssn("912-34-5678")).toBe(false);
  expect(ssn("923-45-6789")).toBe(false);
});
