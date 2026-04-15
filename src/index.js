const content = document.querySelector("#content");

import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
const routes = {
  home: renderHome,
  menu: renderMenu,
  contact: renderContact,
};
routes.home(content)
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const page = event.target.dataset.page;
    if (routes[page]) {
      content.innerHTML = "";
      routes[page](content);
    }
  });
});
