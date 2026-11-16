import restaurantImage from "./images/food.svg";

const loadHome = function () {
  const contentDiv = document.querySelector("#content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("home-title");
  restaurantName.textContent = "Bistro Varecha";

  const pSlogan = document.createElement("p");
  pSlogan.classList.add("home-slogan");
  pSlogan.textContent = "Jedlo, ktoré sa varí a potom sa je";

  const pDesc1 = document.createElement("p");
  pDesc1.classList.add("home-description");
  pDesc1.textContent =
    "Sme bistro. Máme kuchyňu, v kuchyni máme sporák a na sporáku varíme jedlo. Jedlo potom nosíme na stôl, kde ho hostia jedia. Takto to robíme každý deň, keď máme otvorené.";

  const pDesc2 = document.createElement("p");
  pDesc2.classList.add("home-description");
  pDesc2.textContent =
    "Naši kuchári vedia variť polievky, hlavné jedlá aj dezerty. Niekedy varíme aj niečo iné. Príďte k nám, sadnite si za stôl a my vám niečo prinesieme.";

  const openHoursHeading = document.createElement("h3");
  openHoursHeading.classList.add("home-hours-title");
  openHoursHeading.textContent = "Otváracie hodiny:";

  const openingHours = [
    "Pondelok - Piatok: 10:00 - 22:00",
    "Sobota: 11:00 - 23:00",
    "Nedeľa: 11:00 - 20:00",
  ];
  const hoursList = document.createElement("ul");
  hoursList.classList.add("home-hours");
  openingHours.forEach((day) => {
    const dayItem = document.createElement("li");
    dayItem.textContent = day;
    hoursList.append(dayItem);
  });

  const foodImage = document.createElement("img");
  foodImage.src = restaurantImage;
  foodImage.alt = "Ilustrácia taniera s jedlom";
  foodImage.classList.add("home-image");

  homeDiv.append(
    restaurantName,
    pSlogan,
    foodImage,
    pDesc1,
    pDesc2,
    openHoursHeading,
    hoursList,
  );

  contentDiv.appendChild(homeDiv);
};

export default loadHome;
