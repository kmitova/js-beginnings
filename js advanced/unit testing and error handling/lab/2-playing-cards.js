function solve(face, suit) {
  const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = { S: "♠", H: "♥", D: "♦", C: "♣" };

  if (face != face.toUpperCase()) {
    throw new Error("error");
  }

  if (!suits[suit] || !faces.includes(Number(face))) {
    throw new Error("Error");
  }

  let card = {
    face,
    suit,
    toString() {
      console.log(this.face + suits[this.suit]);
    },
  };

  return card;
}

let card = solve("1", "C");
card.toString();
