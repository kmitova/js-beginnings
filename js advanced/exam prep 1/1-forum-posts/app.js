window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById("post-title");
  const categoryInput = document.getElementById("post-category");
  const contentInput = document.getElementById("post-content");
  const reviewList = document.getElementById("review-list");
  const publishBtn = document.getElementById("publish-btn");
  const publishedList = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  clearBtn.addEventListener("click", (e) => {
    removeAllChildNodes(publishedList);
  });

  publishBtn.addEventListener("click", (e) => {
    if (
      titleInput.value != "" &&
      categoryInput.value != "" &&
      contentInput.value != ""
    ) {
      console.log("in event");

      addPost(titleInput, categoryInput, contentInput);
      clearInputFields();
    }
  });
  function clearInputFields() {
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }
  function addPost(title, category, content) {
    const newLiReview = document.createElement("li");
    newLiReview.setAttribute("class", "rpost");
    reviewList.appendChild(newLiReview);
    const revArticle = document.createElement("article");
    newLiReview.appendChild(revArticle);
    const h4 = document.createElement("h4");
    h4.textContent = title.value;
    const p = document.createElement("p");
    p.textContent = category.value;
    const pContent = document.createElement("p");
    pContent.textContent = content.value;
    revArticle.appendChild(h4);
    revArticle.appendChild(p);
    revArticle.appendChild(pContent);
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "action-btn edit");
    newLiReview.appendChild(editBtn);
    const approveBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    approveBtn.textContent = "Approve";
    approveBtn.setAttribute("class", "action-btn approve");
    newLiReview.appendChild(approveBtn);
    console.log(h4.textContent);

    editBtn.addEventListener("click", (e) => {
      console.log(editBtn.parentElement);
      console.log("in edit button");
      editPost(
        titleInput,
        categoryInput,
        contentInput,
        h4,
        p,
        pContent,
        newLiReview
      );
    });

    approveBtn.addEventListener("click", (e) => {
      publishedList.appendChild(newLiReview);
      approveBtn.style.display = "none";
      editBtn.style.display = "none";
      // newLiReview.reviewList.remove();
    });
  }

  function editPost(title, category, content, h4, p, pContent, li) {
    title.value = h4.textContent;
    category.value = p.textContent;
    content.value = pContent.textContent;
    li.remove();
  }
}

// function solve() {
//   function solve() {
//     const titleInputEl = document.getElementById("post-title");
//     const categoryInputEl = document.getElementById("post-category");
//     const contentInputEl = document.getElementById("post-content");
//     const reviewUlEl = document.getElementById("review-list");
//     const publishedUlEl = document.getElementById("published-list");
//     const reviewMessage = document.getElementById("reviewed-msg");
//     const uploadedMessage = document.getElementById("approved-msg");
//     document.getElementById("clear-btn").addEventListener("click", clearPosts);
//     const submitButtonEl = document
//       .getElementById("publish-btn")
//       .addEventListener("click", (ev) => {
//         if (
//           titleInputEl.value !== "" &&
//           categoryInputEl.value !== "" &&
//           contentInputEl.value !== ""
//         ) {
//           addPost(
//             ev,
//             titleInputEl.value,
//             categoryInputEl.value,
//             contentInputEl.value
//           );
//           clearInputFileds();
//         }
//       });

//     function addPost(ev, titleInputEl, categoryInputEl, contentInputEl) {
//       // ev.preventDefault();

//       const li = elGenerator("li");
//       li.setAttribute("class", "rpost");
//       const article = elGenerator("article", "", li);
//       elGenerator("h4", `${titleInputEl}`, article);
//       elGenerator("p", `Category: ${categoryInputEl}`, article);
//       elGenerator("p", `Content: ${contentInputEl}`, article);

//       const approveBtn = elGenerator("button", "Approve", li);
//       approveBtn.setAttribute("class", "action-btn approve");
//       // approveBtn.setAttribute("class", "approve");
//       const editBtn = elGenerator("button", "Edit", li);
//       editBtn.setAttribute("class", "action-btn edit");
//       // editBtn.setAttribute("class", "edit");

//       reviewUlEl.appendChild(li);

//       if (reviewUlEl.children.length !== 0) {
//         reviewMessage.style.display = "none";
//       }

//       approveBtn.addEventListener("click", (ev) => approvePost(ev, article));
//       editBtn.addEventListener("click", (ev) =>
//         editPost(ev, titleInputEl, categoryInputEl, contentInputEl)
//       );
//     }

//     function editPost(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
//       ev.target.parentNode.remove();

//       titleInputEl.value = _titleInputEl;
//       categoryInputEl.value = _categoryInputEl;
//       contentInputEl.value = _contentInputEl;
//     }

//     function approvePost(ev, articleEl) {
//       ev.target.parentNode.remove();

//       const publishedLiEl = document.createElement("li");
//       publishedLiEl.className = "rpost";
//       publishedLiEl.appendChild(articleEl);
//       publishedUlEl.appendChild(publishedLiEl);

//       if (publishedUlEl.children.length !== 0) {
//         uploadedMessage.style.display = "none";
//       }

//       if (reviewUlEl.children.length == 0) {
//         reviewMessage.style.display = "block";
//       }
//     }

//     function clearPosts() {
//       // if (publishedUlEl.children.length > 0) {
//       //   publishedUlEl.innerHTML = "";
//       //   uploadedMessage.style.display = "block";
//       // }
//       let postsArray = Array.from(publishedUlEl.children);
//       postsArray.forEach((post) => {
//         post.remove();
//       });
//       if (publishedUlEl.children.length == 0) {
//         uploadedMessage.style.display = "block";
//       }
//     }

//     function clearInputFileds() {
//       titleInputEl.value = "";
//       categoryInputEl.value = "";
//       contentInputEl.value = "";
//     }

//     function elGenerator(type, content, parent) {
//       const element = document.createElement(type);
//       element.textContent = content;

//       if (parent) {
//         parent.appendChild(element);
//       }
//       return element;
//     }
//   }
// }
