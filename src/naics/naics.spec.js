const { naics } = require("./index");
const { expect, test } = require("@jest/globals");

test("returns true for a valid naics", () => {
  expect(naics("541511")).toBe(true);
});

// Valid NAICS codes
test("returns true for a valid 2-digit NAICS code", () => {
    expect(naics("11")).toBe(true);
});

test("returns true for a valid 4-digit NAICS code", () => {
    expect(naics("5415")).toBe(true);
});

test("returns true for a valid 6-digit NAICS code", () => {
    expect(naics("541511")).toBe(true);
});

// Invalid NAICS codes
test("returns false for a NAICS code with less than 2 digits", () => {
    expect(naics("1")).toBe(false);
});

test("returns false for a NAICS code with more than 6 digits", () => {
    expect(naics("5415111")).toBe(false);
});

test("returns false for a NAICS code with non-digit characters", () => {
    expect(naics("54a511")).toBe(false);
});

// Invalid sectors
test("returns false for a NAICS code with an invalid sector", () => {
    expect(naics("10")).toBe(false);
    expect(naics("1000")).toBe(false);
    expect(naics("100000")).toBe(false);
});

// Valid sectors with different lengths
test("returns true for a valid 2-digit sector", () => {
    expect(naics("22")).toBe(true);
});

test("returns true for a valid 4-digit sector", () => {
    expect(naics("2211")).toBe(true);
});

test("returns true for a valid 6-digit sector", () => {
    expect(naics("221122")).toBe(true);
});
