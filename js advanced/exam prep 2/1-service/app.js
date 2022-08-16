window.addEventListener("load", solve);

function solve() {
  const productInput = document.getElementById("type-product");
  const descriptionInput = document.getElementById("description");
  const clientNameInput = document.getElementById("client-name");
  const clientPhoneInput = document.getElementById("client-phone");
  const sendFormBtn = document.querySelector("button[type=submit]");
  const receivedOrders = document.getElementById("received-orders");
  const completedOrders = document.getElementById("completed-orders");
  const clearBtn = document.getElementsByClassName("clear-btn")[0];

  sendFormBtn.addEventListener("click", (e) => {
    if (
      productInput.value != "" &&
      descriptionInput.value != "" &&
      clientNameInput.value != "" &&
      clientPhoneInput.value != ""
    ) {
      addToReceivedOrders(
        productInput,
        descriptionInput,
        clientNameInput,
        clientPhoneInput,
        e
      );
      clearInputFields();
    }
  });

  function clearInputFields() {
    productInput.value = "";
    descriptionInput.value = "";
    clientNameInput.value = "";
    clientPhoneInput.value = "";
  }
  function addToReceivedOrders(product, description, name, phone, e) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container");
    receivedOrders.appendChild(newDiv);

    const h2 = document.createElement("h2");
    h2.textContent = "Product type for repair: " + product.value;
    newDiv.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "Client information " + name.value + ", " + phone.value;
    newDiv.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = "Description of the problem: " + description.value;
    newDiv.appendChild(h4);

    const startBtn = document.createElement("button");
    startBtn.setAttribute("class", "start-btn");
    startBtn.textContent = "Start repair";
    newDiv.appendChild(startBtn);

    const finishBtn = document.createElement("button");
    finishBtn.setAttribute("class", "finish-btn");
    finishBtn.textContent = "Finish repair";
    finishBtn.disabled = true;
    newDiv.appendChild(finishBtn);

    startBtn.addEventListener("click", (e) => {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });

    finishBtn.addEventListener("click", (e) => {
      newDiv.remove();
      completedOrders.appendChild(newDiv);
      startBtn.style.display = "none";
      finishBtn.style.display = "none";
    });

    clearBtn.addEventListener("click", (e) => {
      newDiv.remove();
    });
  }
}

// function solve() {
//   let description = document.querySelector("#description");
//   let clientName = document.querySelector("#client-name");
//   let phone = document.querySelector("#client-phone");
//   let repairType = document.querySelector("#type-product");
//   let box = document.getElementById("received-orders");
//   let completed = document.getElementById("completed-orders");

//   let btn = document.querySelector("form button");
//   btn.addEventListener("click", onClickSubmit);

//   function onClickSubmit(ev) {
//     ev.preventDefault();
//     let descriptionValue = description.value;
//     let clientNameValue = clientName.value;
//     let phoneValue = phone.value;

//     description.value = "";
//     clientName.value = "";
//     phone.value = "";

//     if (descriptionValue != "" && clientNameValue != "" && phoneValue != "") {
//       let newField = document.createElement("div");
//       newField.className = "container";
//       box.appendChild(newField);

//       let typeField = createElements(
//         "h2",
//         {},
//         `Product type for repair: ${repairType.value}`
//       );
//       let clientInfo = createElements(
//         "h3",
//         {},
//         `Client information: ${clientNameValue}, ${phoneValue}`
//       );
//       let descriptionField = createElements(
//         "h4",
//         {},
//         `Description of the problem: ${descriptionValue}`
//       );
//       let startBtn = createElements(
//         "button",
//         { className: "start-btn" },
//         "Start repair"
//       );
//       let finishBtn = createElements(
//         "button",
//         { className: "finish-btn", disabled: true },
//         "Finish repair"
//       );

//       function createElements(element, attr, content) {
//         let newElement = document.createElement(element);
//         newElement.textContent = content;
//         for (let a in attr) {
//           newElement[a] = attr[a];
//         }

//         newField.appendChild(newElement);

//         return newElement;
//       }

//       startBtn.addEventListener("click", onClickStart);

//       function onClickStart(e) {
//         startBtn.disabled = true;
//         finishBtn.disabled = false;

//         finishBtn.addEventListener("click", onClickFinish);

//         function onClickFinish(event) {
//           let newDiv = document.createElement("div");
//           newDiv.className = "container";
//           completed.appendChild(newDiv);

//           newDiv.appendChild(typeField);
//           newDiv.appendChild(clientInfo);
//           newDiv.appendChild(descriptionField);

//           newField.remove();

//           let clearBtn = document.querySelector(".clear-btn");
//           clearBtn.addEventListener("click", clear);

//           function clear(ev2) {
//             newDiv.remove();
//           }
//         }
//       }
//     }
//   }
// }
