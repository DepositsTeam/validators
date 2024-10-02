const { itin } = require("./index");
const { expect, test } = require("@jest/globals");


test("returns true for a valid itin", () => {
    expect(itin("932-34-4485")).toBe(true);
});

test("returns true for a valid ITIN with different valid numbers", () => {
    expect(itin("912-34-5678")).toBe(true);
    expect(itin("923-45-6789")).toBe(true);
});

test("returns false for an ITIN without dashes", () => {
    expect(itin("912345678")).toBe(false);
});

test("returns false for an ITIN with invalid format", () => {
    expect(itin("91-234-5678")).toBe(false);
    expect(itin("912-345-678")).toBe(false);
    expect(itin("912-34-56789")).toBe(false);
});

test("returns false for an ITIN not starting with 9", () => {
    expect(itin("812-34-5678")).toBe(false);
    expect(itin("712-34-5678")).toBe(false);
});
