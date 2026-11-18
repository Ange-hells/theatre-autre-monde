function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

export const siteView = {
  renderNavigation(items, current) {
    return items.map(item => `
      <a href="${item.href}" ${item.key === current ? 'aria-current="page"' : ""}>
        ${escapeHtml(item.label)}
      </a>`).join("");
  },

  renderFooter(footer) {
    return `
      <div>${escapeHtml(footer.copyright)}</div>
      <span aria-hidden="true">-</span>
      <a href="spectacles.html">${escapeHtml(footer.descriptor)}</a>
      <span aria-hidden="true">-</span>
      <a href="mentions-legales.html">${escapeHtml(footer.legal)}</a>`;
  },

  renderHome() {
    return `
      <div class="home-layout">
        <div class="home-copy">
          <p>Bienvenue dans l'Autre Monde... le monde du spectacle bien sûr mais avant tout : le Monde de la diversité !</p>
          <p>À travers ce site, nous souhaitons nous présenter à vous, nous mettre à nu, vous faire découvrir notre Monde ainsi que celui de nos personnages !</p>
          <p>Pensés, façonnés, personnifiés à notre image, ils vivent, à travers nos histoires, des moments magiques et aiment par-dessus tout les partager.</p>
        </div>
        <img class="home-photo" src="assets/images/scene-marionnettes.jpg" alt="Un spectacle de marionnettes sur table">
      </div>
      <p class="welcome-note">Bienvenue donc et bonne découverte !</p>
      <div class="intro-copy">
        <p>La variété de nos spectacles est à l'image de notre univers, et comme tous les goûts sont dans la nature, nous proposons diverses formes de spectacles.</p>
        <p>De 6 mois à 99 ans, de 3 à 45 minutes, en salle ou en rue, nous aimons raconter nos histoires quelle que soit la configuration de l'événement.</p>
      </div>`;
  },

  renderCards(items) {
    return `<div class="cards">${items.map(item =>`
      <article class="card">
        <img src="${item.image}" alt="">
        <h2>${escapeHtml(item.title)}</h2>
        <p class="meta">${escapeHtml(item.meta)}</p>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join("")}</div>`;
  },

  // renderCards(items) {
  //   return `<div class="cards">${items.map(item =>` 
  //     <article class="card">
  //       <img src="${item.image}" alt="Affiche ${escapeHtml(item.title)}">
  //       <div>
  //         <h2>${escapeHtml(item.title)}</h2>
  //         <p class="meta">${escapeHtml(item.meta)}</p>
  //         ${item.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
  //         ${item.emphasis ? `<p class="emphasis">${escapeHtml(item.emphasis)}</p>` : ""}
  //       </div>
  //     </article>`).join("")}
  //   </div>`;
  // },

  renderShows(items) {
    return `<div class="item-list">${items.map(item => `
      <article class="show-item">
        <img src="${item.image}" alt="Affiche ${escapeHtml(item.title)}">
        <div>
          <h2>${escapeHtml(item.title)}</h2>
          <p class="meta">${escapeHtml(item.meta)}</p>
          ${item.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
          ${item.emphasis ? `<p class="emphasis">${escapeHtml(item.emphasis)}</p>` : ""}
        </div>
      </article>`).join("")}</div>`;
  },

  renderText(paragraphs) {
    return `<div class="simple-copy">${paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("")}</div>`;
  },

  renderPage(page) {
    let content = "";
    if (page.type === "home") content = this.renderHome();
    if (page.type === "cards") content = this.renderCards(page.items);
    if (page.type === "shows") content = this.renderShows(page.items);
    if (page.type === "text") content = this.renderText(page.paragraphs);
    return `<h1 class="page-title">${escapeHtml(page.title)}</h1>${content}`;
  }
};
