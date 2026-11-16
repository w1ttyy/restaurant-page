import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector('[data-tab="home"]');
const menuButton = document.querySelector('[data-tab="menu"]');
const contactButton = document.querySelector('[data-tab="contact"]');
const allTabButtons = document.querySelectorAll("[data-tab]"); // ← NEW

const switchTab = function (loadPage, button) {
  // ← CHANGED: second parameter
  allTabButtons.forEach((tabButton) => {
    // ← NEW
    tabButton.classList.remove("active"); // ← NEW
  }); // ← NEW
  button.classList.add("active"); // ← NEW

  contentDiv.replaceChildren();
  loadPage();
};

homeButton.addEventListener("click", () => switchTab(loadHome, homeButton)); // ← CHANGED
menuButton.addEventListener("click", () => switchTab(loadMenu, menuButton)); // ← CHANGED
contactButton.addEventListener("click", () =>
  switchTab(loadContact, contactButton),
); // ← CHANGED

switchTab(loadHome, homeButton); // ← CHANGED
