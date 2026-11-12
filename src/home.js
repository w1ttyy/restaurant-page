// <button>Domov</button><button>Menu</button><button>Kontakt</button>

//   <h1>Bistro Varecha</h1>
//   <p class="slogan">Jedlo, ktoré sa varí a potom sa je</p>
//   <p>
//     Sme bistro. Máme kuchyňu, v kuchyni máme sporák a na sporáku varíme
//     jedlo. Jedlo potom nosíme na stôl, kde ho hostia jedia. Takto to robíme
//     každý deň, keď máme otvorené.
//   </p>
//   <p>
//     Naši kuchári vedia variť polievky, hlavné jedlá aj dezerty. Niekedy
//     varíme aj niečo iné. Príďte k nám, sadnite si za stôl a my vám niečo
//     prinesieme.
//   </p>
//   <h3>Otváracie hodiny:</h3>
//   <ul>
//     <li>Pondelok - Piatok: 10:00 - 22:00</li>
//     <li>Sobota: 11:00 - 23:00</li>
//     <li>Nedeľa: 11:00 - 20:00</li>
//   </ul>

const loadHome = (function () {
  const contentDiv = document.querySelector("#content");

  const homeDiv = createElement("div");
  homeDiv.classList.add("home");

  const restaurantName = createElement("h1");
  restaurantName.classList.add("name");
  restaurantName.textContent = "Bistro Varecha";

  const pSlogan = createElement("p");
  pSlogan.classList.add("slogan");
  pSlogan.textContent = "Jedlo, ktoré sa varí a potom sa je";

  const pDesc1 = createElement("p");
  pDesc1.classList.add("description");
  pDesc1.textContent =
    "Sme bistro. Máme kuchyňu, v kuchyni máme sporák a na sporáku varíme jedlo. Jedlo potom nosíme na stôl, kde ho hostia jedia. Takto to robíme každý deň, keď máme otvorené.";

  const pDesc2 = createElement("p");
  pDesc2.classList.add("description extra");
  pDesc2.textContent =
    "Naši kuchári vedia variť polievky, hlavné jedlá aj dezerty. Niekedy varíme aj niečo iné. Príďte k nám, sadnite si za stôl a my vám niečo prinesieme.";

  const openHoursHeading = createElement("h3");
  openHoursHeading.classList.add("opening-heading");
  openHoursHeading.textContent = "Otváracie hodiny:";

  const openingHours = [
    "Pondelok - Piatok: 10:00 - 22:00",
    "Sobota: 11:00 - 23:00",
    "Nedeľa: 11:00 - 20:00",
  ];
  const hoursList = createElement("ul");
  hoursList.classList.add("opening-list");
  openingHours.forEach((day) => {
    const dayList = document.createElement("li");
    dayList.textContent = day;
  });

  return {};
})();
