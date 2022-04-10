function price(input) {
  let pensPrice = 5.8;
  let markersPrice = 7.2;
  let cleanerPrice = 1.2;
  let pensPacks = Number(input[0]);
  let markerPacks = Number(input[1]);
  let cleanerLiters = Number(input[2]);
  let discountPercent = Number(input[3]);
  let pens = pensPacks * pensPrice;
  let markers = markerPacks * markersPrice;
  let cleaner = cleanerLiters * cleanerPrice;
  let total = (pens + markers + cleaner);
  let totalWithDiscount = total - total * (discountPercent / 100);
  console.log(totalWithDiscount);
}

price(["2 ", "3 ", "4 ", "25 "])
