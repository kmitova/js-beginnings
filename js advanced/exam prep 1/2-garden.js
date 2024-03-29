class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    } else {
      let plant = {
        plantName,
        spaceRequired,
        ripe: false,
        quantity: 0,
      };

      this.plants.push(plant);
      this.spaceAvailable -= plant.spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }

  ripenPlant(plantName, quantity) {
    let plant = undefined;
    for (let pl of this.plants) {
      if (pl.plantName === plantName) {
        plant = pl;
        break;
      }
    }

    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    plant.ripe = true;
    plant.quantity += quantity;
    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = undefined;
    for (let pl of this.plants) {
      if (pl.plantName === plantName) {
        plant = pl;
        break;
      }
    }
    // if (this.plants.includes(plant))
    if (plant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    this.spaceAvailable += plant.spaceRequired;
    const index = this.plants.indexOf(plant);
    let qty = plant.quantity;
    this.plants.splice(index, 1);
    let plantStored = {
      plantName,
      qty,
    };
    this.storage.push(plantStored);
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let result = "";
    result += `The garden has ${this.spaceAvailable} free space left.\n`;
    result += `Plants in the garden: ${this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((x) => x.plantName)
      .join(", ")}\n`;

    result += `Plants in storage: `;
    if (this.storage.length === 0) {
      result += "The storage is empty.";
    } else {
      let stringsToAdd = [];
      for (let p of this.storage) {
        stringsToAdd.push(`${p.plantName} (${p.qty})`);
      }
      result += stringsToAdd.join(", ");
    }
    return result;
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
