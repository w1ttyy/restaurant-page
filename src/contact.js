const loadContact = function () {
  const contentDiv = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Kontakt";

  const contactDescription = document.createElement("p");
  contactDescription.classList.add("contact-description");
  contactDescription.textContent =
    "Ak nám chcete niečo povedať, môžete nám zavolať, napísať alebo prísť osobne. Odpovieme, keď budeme mať otvorené.";

  const contactAddressTitle = document.createElement("h3");
  contactAddressTitle.classList.add("contact-address-title");
  contactAddressTitle.textContent = "Adresa:";

  const contactAddress = document.createElement("address");
  contactAddress.classList.add("contact-address");

  const contactStreet = document.createElement("p");
  contactStreet.classList.add("contact-street");
  contactStreet.textContent = "Vymyslená ulica 1";

  const contactCity = document.createElement("p");
  contactCity.classList.add("contact-city");
  contactCity.textContent = "000 00 Nejaké Mesto";

  const contactPhone = document.createElement("p");
  contactPhone.classList.add("contact-phone");
  const phoneLink = document.createElement("a");
  phoneLink.href = "tel:+421900000000";
  phoneLink.textContent = "0900 000 000";
  contactPhone.append("Telefón: ", phoneLink);

  const contactEmail = document.createElement("p");
  contactEmail.classList.add("contact-email");
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:info@example.com";
  emailLink.textContent = "info@example.com";
  contactEmail.append("E-mail: ", emailLink);

  contactAddress.append(contactStreet, contactCity, contactPhone, contactEmail);

  contactDiv.append(
    contactTitle,
    contactDescription,
    contactAddressTitle,
    contactAddress,
  );

  contentDiv.appendChild(contactDiv);
};

export default loadContact;
