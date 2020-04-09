// Menu item data
let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

// Element Declarations
const menuButton = get(".menu-button")[0];

/**
 * Loops through an array of menu items and creates a dynamic menu
 * @param {string[]} itemArr is an array of menu item names
 * @returns a menu div to be appended to the header
 */
function makeMenu(itemArr) {
  // Create Elements
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const items = itemArr.map((x) => {
    const temp = document.createElement("li");
    temp.textContent = x;
    return temp;
  });

  // Add class
  menu.classList.add("menu");

  // Create the structure
  menu.appendChild(list);
  items.forEach((x) => {
    list.appendChild(x);
  });

  return menu;
}

// When menu button is clicked, open the menu bar
menuButton.addEventListener("click", () => {
  get(".menu")[0].classList.toggle("menu--open");
});

// When window finishes loading, fill the menu with content
window.addEventListener("click", () => {
  get(".header")[0].appendChild(makeMenu(menuItems));
});
