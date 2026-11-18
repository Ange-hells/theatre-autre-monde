
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("objet") || "Demande depuis le site");
      const body = encodeURIComponent(
        `Nom : ${data.get("nom")}\nEmail : ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:contact@theatreautremonde.fr?subject=${subject}&body=${body}`;
    });
  }
});
