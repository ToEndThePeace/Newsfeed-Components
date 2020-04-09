let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

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

get(".header")[0].appendChild(makeMenu(menuItems));

const menuButton = get(".menu-button")[0];
menuButton.addEventListener("click", () => {
  get(".menu")[0].classList.toggle("menu--open");
});
