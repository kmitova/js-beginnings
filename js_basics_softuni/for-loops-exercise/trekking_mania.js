function climbers(input) {
  let groupsNumber = Number(input[0]);
  let allMembers = 0;
  let musala = 0;
  let monBlanc = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let group = 0; group < groupsNumber; group++) {
    let members = Number(input[1 + group]);

    if (members <= 5) {
      musala += members;
    } else if (members <= 12) {
      monBlanc += members;
    } else if (members <= 25) {
      kilimanjaro += members;
    } else if (members <= 40) {
      k2 += members;
    } else if (members >= 41) {
      everest += members;
    }
    allMembers += members;
  }

  console.log(`${((musala / allMembers) * 100).toFixed(2)}%`);
  console.log(`${((monBlanc / allMembers) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaro / allMembers) * 100).toFixed(2)}%`);
  console.log(`${((k2 / allMembers) * 100).toFixed(2)}%`);
  console.log(`${((everest / allMembers) * 100).toFixed(2)}%`);
}

climbers(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
