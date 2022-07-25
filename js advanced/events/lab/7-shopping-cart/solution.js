function solve() {
  const products = [];
  let total = 0;
  const addBtns = Array.from(document.getElementsByClassName("add-product"));
  const textArea = document.getElementsByTagName("textarea")[0];
  const checkoutBtn = document.getElementsByClassName("checkout")[0];

  addBtns.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("click");
      addToCart(button);
    });
  });

  checkoutBtn.addEventListener("click", () => {
    checkOutDisplay();
    const btns = document.getElementsByTagName("button");
    for (const btn of btns) {
      btn.disabled = true;
    }
  });

  function addToCart(btn) {
    const parent = btn.parentNode;
    const grandParent = parent.parentNode;
    const productDetails = grandParent.children[1];
    const productName = productDetails.children[0].textContent;
    const productPrice = Number(grandParent.children[3].textContent);
    if (!products.includes(productName)) {
      products.push(productName);
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(
        2
      )} to the cart.\n`;
      total += productPrice;
    }
  }

  function checkOutDisplay() {
    textArea.textContent += `You bought ${products.join(
      ", "
    )} for ${total.toFixed(2)}.`;
  }
}
