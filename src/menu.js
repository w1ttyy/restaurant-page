const menuData = [
  {
    name: "Polievky",
    items: [
      {
        name: "Polievka dňa",
        description: "Polievka, ktorú dnes varíme.",
        price: "2,50 €",
      },
      {
        name: "Iná polievka",
        description: "Tiež polievka, ale iná.",
        price: "2,90 €",
      },
    ],
  },
  {
    name: "Hlavné jedlá",
    items: [
      {
        name: "Jedlo s prílohou",
        description: "Hlavné jedlo, ku ktorému je príloha.",
        price: "8,50 €",
      },
      {
        name: "Jedlo bez prílohy",
        description: "To isté, len bez prílohy.",
        price: "7,00 €",
      },
      {
        name: "Niečo z panvice",
        description: "Jedlo, ktoré sme urobili na panvici.",
        price: "9,20 €",
      },
    ],
  },
  {
    name: "Dezerty",
    items: [
      {
        name: "Sladký dezert",
        description: "Je sladký.",
        price: "3,50 €",
      },
      {
        name: "Ešte sladší dezert",
        description: "Je ešte sladší.",
        price: "3,90 €",
      },
    ],
  },
];

const loadMenu = function () {
  const contentDiv = document.querySelector("#content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuData.forEach((category) => {
    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("menu-category-title");
    categoryTitle.textContent = category.name;

    const categorySection = document.createElement("div");
    categorySection.classList.add("menu-category");
    categorySection.append(categoryTitle);

    category.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      const itemName = document.createElement("h3");
      itemName.classList.add("menu-item-name");
      const itemDescription = document.createElement("p");
      itemDescription.classList.add("menu-item-description");
      const itemPrice = document.createElement("p");
      itemPrice.classList.add("menu-item-price");

      itemName.textContent = item.name;
      itemDescription.textContent = item.description;
      itemPrice.textContent = item.price;

      menuItem.append(itemName, itemDescription, itemPrice);
      categorySection.append(menuItem);
    });
    menuDiv.append(categorySection);
  });

  contentDiv.appendChild(menuDiv);
};

export default loadMenu;
