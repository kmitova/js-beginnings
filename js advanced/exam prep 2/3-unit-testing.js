const { expect } = require("chai");

const companyAdministration = {
  hiringEmployee(name, position, yearsExperience) {
    if (position == "Programmer") {
      if (yearsExperience >= 3) {
        return `${name} was successfully hired for the position ${position}.`;
      } else {
        return `${name} is not approved for this position.`;
      }
    }
    throw new Error(`We are not looking for workers for this position.`);
  },
  calculateSalary(hours) {
    let payPerHour = 15;
    let totalAmount = payPerHour * hours;

    if (typeof hours !== "number" || hours < 0) {
      throw new Error("Invalid hours");
    } else if (hours > 160) {
      totalAmount += 1000;
    }
    return totalAmount;
  },
  firedEmployee(employees, index) {
    let result = [];

    if (
      !Array.isArray(employees) ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= employees.length
    ) {
      throw new Error("Invalid input");
    }
    for (let i = 0; i < employees.length; i++) {
      if (i !== index) {
        result.push(employees[i]);
      }
    }
    return result.join(", ");
  },
};

describe("companyAdministrationTests", function () {
  describe("hiringEmployeeTests", function () {
    it("throws error if not programmer", () => {
      expect(() =>
        companyAdministration.hiringEmployee("Name", "InvalidPos", 2)
      ).to.throw(`We are not looking for workers for this position.`);
    });
    it("return if exp is less than 3", () => {
      expect(
        companyAdministration.hiringEmployee("Name", "Programmer", 2)
      ).to.equal(`Name is not approved for this position.`);
    });
    it("return if exp is more than 3", () => {
      expect(
        companyAdministration.hiringEmployee("Name", "Programmer", 3)
      ).to.equal(`Name was successfully hired for the position Programmer.`);
    });
  });

  describe("calculateSalaryTests", () => {
    it("throws err if invalid input", () => {
      expect(() => companyAdministration.calculateSalary("100")).to.throw();
      expect(() => companyAdministration.calculateSalary(-1)).to.throw();
    });
    it("tests happy case no bonus", () => {
      expect(companyAdministration.calculateSalary(10)).to.equal(150);
    });
    it("tests happy case with bonus", () => {
      expect(companyAdministration.calculateSalary(170)).to.equal(3550);
    });
    it("check if hours is valid equal 160", () => {
      expect(companyAdministration.calculateSalary(160)).to.equal(15 * 160);
    });
  });

  describe("firedEmployeeTests", () => {
    it("throws if input is invalid", () => {
      expect(() => companyAdministration.firedEmployee("string", 1)).to.throw();
      expect(() => companyAdministration.firedEmployee({}, 1)).to.throw();
      expect(() =>
        companyAdministration.firedEmployee(["name"], "1")
      ).to.throw();
      expect(() => companyAdministration.firedEmployee(["name"], 1)).to.throw();
      expect(() =>
        companyAdministration.firedEmployee(["name"], -1)
      ).to.throw();
      expect(() => companyAdministration.firedEmployee(1, 1)).to.throw(
        "Invalid input"
      );
    });
    it("returns updated array", () => {
      expect(
        companyAdministration.firedEmployee(["name1", "name2", "name3"], 1)
      ).to.equal("name1, name3");
    });
  });
});
