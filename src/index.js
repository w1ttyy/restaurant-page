import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector('[data-tab="home"]');
const menuButton = document.querySelector('[data-tab="menu"]');
const contactButton = document.querySelector('[data-tab="contact"]');

const switchTab = function (loadPage) {
  contentDiv.replaceChildren();
  if (loadPage === loadHome) {
    loadHome();
  }
  if (loadPage === loadMenu) {
    loadMenu();
  }
  if (loadPage === loadContact) {
    loadContact();
  }
};

homeButton.addEventListener("click", () => switchTab(loadHome));
menuButton.addEventListener("click", () => switchTab(loadMenu));
contactButton.addEventListener("click", () => switchTab(loadContact));

switchTab(loadHome);
