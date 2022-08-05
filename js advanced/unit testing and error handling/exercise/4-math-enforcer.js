const expect = require("chai").expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("MathEnforcerTests", () => {
  describe("addFiveTests", () => {
    it("return undefined if param is not of type number", () => {
      expect(mathEnforcer.addFive("string")).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it("return sum plus five if param is valid", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
  });

  describe("subtractTenTests", () => {
    it("return undefined if param is not of type number", () => {
      expect(mathEnforcer.subtractTen("string")).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it("return subtract ten from param if is valid", () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    });
  });

  describe("sumTests", () => {
    it("return undefined if two params is not of type number", () => {
      expect(mathEnforcer.sum("invalid", "num")).to.be.undefined;
    });
    it("return undefined if one of params is not of type number", () => {
      expect(mathEnforcer.sum("invalid", 9)).to.be.undefined;
    });

    it("return undefined if one of params is not of type number", () => {
      expect(mathEnforcer.sum(9, "invalid")).to.be.undefined;
    });

    it("return sum of two params if valid", () => {
      expect(mathEnforcer.sum(9, 9)).to.equal(18);
    });
  });
});
