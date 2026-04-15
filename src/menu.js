export function renderMenu(div) {
  const container = document.createElement("div");
  container.classList.add("menu-container");
  div.appendChild(container);
  const menuDesc = [
    "Creamy pesto butter beans",
    "Garlic mushroom frittata",
    "Linguine alla puttanesca",
    "Spicy salmon rice bowls",
    "Steak fajitas",
    "Vegetable fajitas",
    "Mango, coconut and tofu curry",
  ];
  for (let menu of menuDesc) {
    container.appendChild(createMenuCard(menu));
  }
}
function createImage(item) {
  const img = document.createElement("img");
  const menuImg = `images/Menu/${item}.jpg`;
  img.src = menuImg;
  img.alt = item;
  return img;
}
function createText(item) {
  const txt = document.createElement("h2");
  txt.textContent = item;
  return txt;
}
function createMenuCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(createText(item));
  card.appendChild(createImage(item));
  return card;
}
