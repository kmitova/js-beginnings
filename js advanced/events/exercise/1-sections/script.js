function create(words) {
  console.log("TODO:...");
  for (el of words) {
    const section = document.createElement("div");
    document.getElementById("content").appendChild(section);
    const par = document.createElement("p");
    section.appendChild(par);
    par.textContent = el;
    par.style.display = "none";
  }

  const divs = Array.from(document.getElementsByTagName("div")[0].children);
  console.log(divs);
  divs.forEach((div) => {
    div.addEventListener("click", () => {
      div.children[0].style.display = "";
    });
  });
}
