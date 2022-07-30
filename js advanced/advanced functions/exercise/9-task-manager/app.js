function solve() {
  const input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };
  const [_, openSection, progressSection, finishedSection] = Array.from(
    document.querySelectorAll("section")
  ).map((e) => e.children[1]);
  document.getElementById("add").addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();
    const article = document.createElement("article");
    article.appendChild(createElement("h3", input.name.value));
    article.appendChild(
      createElement("p", `Description: ${input.description.value}`)
    );
    article.appendChild(createElement("p", `Due Date: ${input.date.value}`));

    const div = document.createElement("div", "", "flex");

    // div.append(createElement("button", "Delete", "red"));
    const startBtn = createElement("button", "Start", "green");
    div.appendChild(startBtn);
    const deleteBtn = createElement("button", "Delete", "red");
    div.appendChild(deleteBtn);
    article.appendChild(div);
    const finishBtn = createElement("button", "Finish", "orange");

    openSection.appendChild(article);
    Object.values(input).forEach((i) => (i.value = ""));

    deleteBtn.addEventListener("click", onDelete);
    startBtn.addEventListener("click", onStart);
    finishBtn.addEventListener("click", onFinish);

    function onDelete() {
      article.remove();
    }

    function onStart() {
      startBtn.remove();
      div.appendChild(finishBtn);
      progressSection.appendChild(article);
    }
    function onFinish() {
      div.remove();
      finishedSection.appendChild(article);
    }
  }
  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
