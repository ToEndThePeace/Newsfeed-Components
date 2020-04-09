const formContainer = get(".form")[0];

function toggleForm() {
  formContainer.classList.toggle("toggleOn");
}
function clearForm() {
  // Clear the form
  get("#title")[0].value = "";
  get("#date")[0].value = "";
  get("#firstP")[0].value = "";
  get("#secondP")[0].value = "";
  get("#thirdP")[0].value = "";
}

formContainer.addEventListener("click", event => {
  if (!event.target.matches("form")) {
    toggleForm();
  }
})


const addButton = get(".new-button")[0];
addButton.addEventListener("click", (event) => {
  toggleForm();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    formContainer.classList.remove("toggleOn");
    clearForm();
  }
});

const closeButton = get("#formCloseButton")[0];
closeButton.addEventListener("click", () => {
  toggleForm();
  clearForm();
});
closeButton.addEventListener("mouseover", () => {
  closeButton.style["text-shadow"] = "0 0 2px #000";
});
closeButton.addEventListener("mouseout", () => {
  closeButton.style["text-shadow"] = "none";
});

const submitBtn = get("#submit")[0];
submitBtn.addEventListener("click", () => {
  // Pull the data from the form
  const formText = {
    title: get("#title")[0].value,
    date: get("#date")[0].value,
    firstParagraph: get("#firstP")[0].value,
    secondParagraph: get("#secondP")[0].value,
    thirdParagraph: get("#thirdP")[0].value,
  };

  // Clear and hife the form
  clearForm();
  toggleForm();

  // Add article to the DOM
  addArticles([formText]);
});
