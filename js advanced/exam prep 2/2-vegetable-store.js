class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    const added = [];
    for (const el of vegetables) {
      let vegetableArr = el.split(" ");
      let type = vegetableArr[0];
      added.push(type);
      let qty = Number(vegetableArr[1]);
      let price = Number(vegetableArr[2]);
      let newVegetable = {
        type,
        qty,
        price,
      };
      let flag = false;
      if (this.availableProducts.length > 0) {
        for (let vegetable of this.availableProducts) {
          if (vegetable.type === newVegetable.type) {
            flag = true;
            vegetable.qty += qty;
            if (vegetable.price < price) {
              vegetable.price = price;
            }
          }
        }
      }
      if (!flag) {
        this.availableProducts.push(newVegetable);
      }
    }

    let vegSet = new Set(added);
    let vegString = [...vegSet].join(", ");
    let result = `Successfully added ${vegString}`;
    return result;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let el of selectedProducts) {
      let [type, qty] = el.split(" ");
      qty = Number(qty);
      let selectedVeg = undefined;

      for (let veg of this.availableProducts) {
        if (veg.type == type) {
          selectedVeg = veg;
        }
      }
      if (selectedVeg == undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (qty > selectedVeg.qty) {
        throw new Error(
          `The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      let price = selectedVeg.price * qty;
      totalPrice += price;
      for (let veg of this.availableProducts) {
        if (veg.type === selectedVeg.type) {
          veg.qty -= qty;
        }
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let rottingVeg = undefined;
    for (let veg of this.availableProducts) {
      if (veg.type == type) {
        rottingVeg = veg;
      }
    }
    if (rottingVeg == undefined) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (quantity > rottingVeg.qty) {
      rottingVeg.qty = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      rottingVeg.qty -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let result = "Available vegetables:\n";
    this.availableProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    for (let el of this.availableProducts) {
      result += `${el.type}-${el.qty}-$${el.price}\n`;
    }
    result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return result;
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
