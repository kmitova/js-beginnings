const expect = require("chai").expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("test", () => {
  it("check if first param is of valid type", () => {
    expect(lookupChar(0, 0)).to.equal(undefined);
  });

  it("check if second param is of valid type", () => {
    expect(lookupChar("hello", "invalid")).to.equal(undefined);
  });

  it("check if first param is of valid type integer", () => {
    expect(lookupChar("hello", 0.1)).to.equal(undefined);
  });

  it("check value with negative index", () => {
    expect(lookupChar("hi", -3)).to.equal("Incorrect index");
  });

  it("check value if index is bigger than length", () => {
    expect(lookupChar("hi", 100)).to.equal("Incorrect index");
  });

  it("check value if params are valid", () => {
    expect(lookupChar("hi", 1)).to.equal("i");
  });
});
