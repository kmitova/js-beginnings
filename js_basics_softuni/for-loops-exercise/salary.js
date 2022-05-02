function salaryDeductions(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 1; i <= openTabs; i++) {
    let site = input[1 + i];

    if (site === "Facebook") {
      salary -= 150;
    } else if (site === "Instagram") {
      salary -= 100;
    } else if (site === "Reddit") {
      salary -= 50;
    }
  }

  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}

salaryDeductions([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
