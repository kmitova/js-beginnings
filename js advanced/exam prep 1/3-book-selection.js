const { expect } = require("chai");

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

describe("BookSelectionTests", function () {
  describe("IsGenreSuitableTests", function () {
    it("returns message if age less than 12, genre thriller", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal(
        `Books with Thriller genre are not suitable for kids at 10 age`
      );
    });
    it("returns message if age less than 12, genre horror", function () {
      expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(
        `Books with Horror genre are not suitable for kids at 10 age`
      );
    });
    it("returns message if age more than 12, genre thriller", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(
        `Those books are suitable`
      );
    });
    it("returns message if age more than 12, genre horror", function () {
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(
        `Those books are suitable`
      );
    });
    it("returns message if age more less than 12, genre other", function () {
      expect(bookSelection.isGenreSuitable("Romance", 11)).to.equal(
        `Those books are suitable`
      );
    });
  });

  describe("IsItAffordableTests", function () {
    it("throws error if price not number", () => {
      expect(() => bookSelection.isItAffordable("invalid", 100)).to.throw();
    });
    it("throws error if budget not number", () => {
      expect(() => bookSelection.isItAffordable(100, "100")).to.throw();
    });
    it("not enough budget", () => {
      expect(bookSelection.isItAffordable(10, 1)).to.equal(
        "You don't have enough money"
      );
    });
    it("enough budget", () => {
      expect(bookSelection.isItAffordable(10, 100)).to.equal(
        "Book bought. You have 90$ left"
      );
    });
  });

  describe("SuitableTitlesTests", function () {
    it("happy case single match", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "aaa",
              genre: "bbb",
            },
          ],
          "bbb"
        )
      ).to.deep.equal(["aaa"]);
    });
    it("happy case two matches", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "aaa",
              genre: "bbb",
            },
            {
              title: "aabb",
              genre: "bbb",
            },
          ],
          "bbb"
        )
      ).to.deep.equal(["aaa", "aabb"]);
    });
    it("no match", () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: "aaa",
              genre: "ddd",
            },
          ],
          "bbb"
        )
      ).to.deep.equal([]);
    });

    it("invalid input", () => {
      expect(() => bookSelection.suitableTitles("a", "bbb")).to.throw();
      expect(() =>
        bookSelection.suitableTitles([{ title: "aa", genre: 5 }], 5)
      ).to.throw();
    });
  });
});
