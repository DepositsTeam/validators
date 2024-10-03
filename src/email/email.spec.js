import { email } from "./index";
import { expect, test } from "@jest/globals";
test("Test a valid email", () => {
  expect(email("eric@deposits.inc")).toBe(true);
  expect(email("eric.mcwinner@deposits.inc")).toBe(true);
  expect(email("ericmcwinner01@deposits.inc")).toBe(true);
  expect(email("ericmcwinner01@deposits.inc")).toBe(true);
});

test("Test an invalid email", () => {
  expect(email("eric@@deposits.inc")).toBe(false);
});

test("Test fails for emails with any special characters", () => {
  expect(email("erick+01@deposits.inc")).toBe(false);
  expect(email("erick+@deposits.inc")).toBe(false);
  expect(email("erick?@deposits.inc")).toBe(false);
  expect(email("erick?01@deposits.inc")).toBe(false);
  expect(email("eric=@deposits.inc")).toBe(false);
  expect(email("erick-@deposits.inc")).toBe(false);
  expect(email("erick!@deposits.inc")).toBe(false);
});

test("Test email starting with dot", () => {
  expect(email(".eric@deposits.inc")).toBe(false);
});

test("Test email ending with dot before at sign", () => {
  expect(email("eric.@deposits.inc")).toBe(false);
});

test("Test email with multiple dots in domain part", () => {
  expect(email("eric@deposits..inc")).toBe(false);
});

test("Test email where local part is only digits", () => {
  expect(email("12345@deposits.inc")).toBe(true);
});

test("Test email with hyphen in domain part", () => {
  expect(email("eric@deposits-inc.com")).toBe(true);
  expect(email("eric@deposits-inc-.com")).toBe(false);
  expect(email("eric@-deposits-inc.com")).toBe(false);
  expect(email("eric@deposits-inc.-com")).toBe(false);
  expect(email("eric@deposits-inc.com-")).toBe(false);
  expect(email("eric@deposits-inc.-com-")).toBe(false);
});

test("Ensure the maximum characters is 63", () => {
  expect(
    email("abcdefghijklmnop2stdsdsuvwxyz123456@abcdefghijklmnop-size-32.com"),
  ).toBe(false);
});

test("Test email with subdomain", () => {
  expect(email("eric@mailer.deposits.inc")).toBe(true);
});
