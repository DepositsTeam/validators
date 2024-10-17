import { name } from "./index.js";
import { expect, test, describe } from "@jest/globals";

describe("name", () => {
  test("Test a valid first name", () => {
    expect(name("Eric")).toBe(true);
    expect(name("eric")).toBe(true);
    expect(name("ERIC")).toBe(true);
  });

  test("Allows only one word", () => {
    expect(name("Eric Apriok")).toBe(false);
  });

  test("Prevents special characters", () => {
    expect(name("Eric@")).toBe(false);
    expect(name("Eric?")).toBe(false);
    expect(name("Eric=")).toBe(false);
    expect(name("Eric!")).toBe(false);
    expect(name("Eric+")).toBe(false);
    expect(name("Eric*")).toBe(false);
    expect(name("Eric/")).toBe(false);
    expect(name("Eric\\")).toBe(false);
    expect(name("Eric|")).toBe(false);
    expect(name("Eric,")).toBe(false);
    expect(name("Eric;")).toBe(false);
    expect(name("Eric:")).toBe(false);
    expect(name('Eric"')).toBe(false);
    expect(name("Eric<")).toBe(false);
    expect(name("Eric>")).toBe(false);
    expect(name("Eric{")).toBe(false);
    expect(name("Eric}")).toBe(false);
    expect(name("Eric[")).toBe(false);
    expect(name("Eric]")).toBe(false);
    expect(name("Eric(")).toBe(false);
    expect(name("Eric)")).toBe(false);
    expect(name("Eric!")).toBe(false);
    expect(name("Eric@")).toBe(false);
    expect(name("Eric#")).toBe(false);
    expect(name("Eric$")).toBe(false);
    expect(name("Eric%")).toBe(false);
    expect(name("Eric^")).toBe(false);
    expect(name("Eric&")).toBe(false);
    expect(name("Eric*")).toBe(false);
    expect(name("Eric_")).toBe(false);
    expect(name("Eric+")).toBe(false);
    expect(name("Eric=")).toBe(false);
    expect(name("Eric`")).toBe(false);
    expect(name("Eric~")).toBe(false);
    expect(name("Eric?")).toBe(false);
    expect(name("Eric/")).toBe(false);
    expect(name("Eric\\")).toBe(false);
    expect(name("Eric|")).toBe(false);
    expect(name("Eric,")).toBe(false);
    expect(name("Eric;")).toBe(false);
    expect(name("Eric:")).toBe(false);
    expect(name('Eric"')).toBe(false);
    expect(name("Eric<")).toBe(false);
  });

  test("Allows only - . and ' as special characters", () => {
    expect(name("Eric-.'")).toBe(true);
  });

  test("Prevents names with length of characters greater than 40", () => {
    expect(name("MariaAbdEl-MaksoudAlyMohamedEl-GuindyErick")).toBe(false);
  });
});
