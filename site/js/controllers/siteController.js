import { siteModel } from "../models/siteModel.js";
import { siteView } from "../views/siteView.js";

export function initSite() {
  const currentPage = document.body.dataset.page || "accueil";
  const page = siteModel.pages[currentPage];

  document.querySelector("#main-nav").innerHTML =
    siteView.renderNavigation(siteModel.navigation, currentPage);

  document.querySelector("#site-footer").innerHTML =
    siteView.renderFooter(siteModel.footer);

  const main = document.querySelector("#page-content");
  if (page) {
    main.innerHTML = siteView.renderPage(page);
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject") || "Demande de contact");
      const body = encodeURIComponent(
        `Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:contact@theatreautremonde.fr?subject=${subject}&body=${body}`;
    });
  }
}
