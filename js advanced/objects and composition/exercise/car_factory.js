function factory(object) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const carTypes = [
    { type: "hatchback", color: object.color },
    { type: "coupe", color: object.color },
  ];

  const wheelSize =
    object.wheelsize % 2 == 1 ? object.wheelsize : object.wheelsize - 1;

  return {
    model: object.model,
    engine: engines.filter((e) => e.power >= object.power)[0],
    carriage: carTypes.filter((c) => c.type == object.carriage)[0],
    wheels: [wheelSize, wheelSize, wheelSize, wheelSize],
  };
}

console.log(
  factory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
