import { creditCard } from "./index";
import { expect, test, describe } from "@jest/globals";

describe("creditCard", () => {
  test("returns true for a valid credit card pan", () => {
    expect(creditCard("5555 5555 5555 4444")).toBe(true);
  });

  test("returns true for a valid credit card pan", () => {
    expect(creditCard("4111111111111111")).toBe(true);
  });

  test("returns true for a valid credit card pan", () => {
    expect(creditCard("6011000990139424")).toBe(true);
  });

  test("returns true for a valid Amex card number", () => {
    expect(creditCard("378282246310005")).toBe(true);
  });

  test("returns true for a valid Amex card number with spaces", () => {
    expect(creditCard("3782 822463 10005")).toBe(true);
  });

  test("returns false for an invalid Amex card number", () => {
    expect(creditCard("378282246310006")).toBe(false);
  });

  test("returns true for a valid Visa card number", () => {
    expect(creditCard("4111111111111111")).toBe(true);
  });

  test("returns true for a valid Visa card number with spaces", () => {
    expect(creditCard("4111 1111 1111 1111")).toBe(true);
  });

  test("returns false for an invalid Visa card number", () => {
    expect(creditCard("4111111111111112")).toBe(false);
  });

  test("returns true for a valid Mastercard number", () => {
    expect(creditCard("5555555555554444")).toBe(true);
  });

  test("returns true for a valid Mastercard number with spaces", () => {
    expect(creditCard("5555 5555 5555 4444")).toBe(true);
  });

  test("returns false for an invalid Mastercard number", () => {
    expect(creditCard("5555555555554445")).toBe(false);
  });

  test("returns true for a valid Discover card number", () => {
    expect(creditCard("6011000990139424")).toBe(true);
  });

  test("returns true for a valid Discover card number with spaces", () => {
    expect(creditCard("6011 0009 9013 9424")).toBe(true);
  });

  test("returns false for an invalid Discover card number", () => {
    expect(creditCard("6011000990139425")).toBe(false);
  });

  test("returns false for a card number that fails the Luhn algorithm", () => {
    expect(creditCard("1234567812345670")).toBe(false);
  });

  test("returns false for a card number with non-digit characters", () => {
    expect(creditCard("4111a11111111111")).toBe(false);
  });
});
