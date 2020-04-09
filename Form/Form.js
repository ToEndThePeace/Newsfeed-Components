// Element Declarations
const formContainer = get(".form")[0];
const addButton = get(".new-button")[0];
const closeButton = get("#formCloseButton")[0];
const submitBtn = get("#submit")[0];

// Basic Form Functions
// Toggles Form Overlay on the Page
function toggleForm() {
  formContainer.classList.toggle("toggleOn");
}
// Clears the form elements
function clearForm() {
  get("#title")[0].value = "";
  get("#date")[0].value = "";
  get("#firstP")[0].value = "";
  get("#secondP")[0].value = "";
  get("#thirdP")[0].value = "";
}

// When add article button is pressed, display the form
addButton.addEventListener("click", (event) => {
  toggleForm();
});

// Ways to close the form
// Close form if area outside of it is clicked
formContainer.addEventListener("click", (event) => {
  if (event.target.matches(".form")) {
    toggleForm();
  }
});
// Close form if the escape key is pressed
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    formContainer.classList.remove("toggleOn");
    clearForm();
  }
});
// Close form if close button is pressed
closeButton.addEventListener("click", () => {
  toggleForm();
  clearForm();
});

// Mouseover to add text-shadow to close button on form (could have used :hover)
closeButton.addEventListener("mouseover", () => {
  closeButton.style["text-shadow"] = "0 0 2px #000";
});
closeButton.addEventListener("mouseout", () => {
  closeButton.style["text-shadow"] = "none";
});

// When submit button is pressed, pull data from the form, clear it, and post new article
submitBtn.addEventListener("click", () => {
  // Pull the data from the form
  const formText = {
    title: get("#title")[0].value,
    date: get("#date")[0].value,
    firstParagraph: get("#firstP")[0].value,
    secondParagraph: get("#secondP")[0].value,
    thirdParagraph: get("#thirdP")[0].value,
  };

  // Clear and hide the form
  clearForm();
  toggleForm();

  // Add article to the DOM
  addArticles([formText]);
});
