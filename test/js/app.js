/**
 * Théâtre de l'Autre Monde
 * Controller + Model léger (MVC)
 * --------------------------------
 * - Charge data/spectacles.json
 * - Gère l'état actif de la navigation
 * - Gère le formulaire de contact
 */

(function () {
  'use strict';

  // ========== MODEL ==========
  const Model = {
    data: null,

    async load() {
      try {
        const res = await fetch('data/spectacles.json');
        if (!res.ok) throw new Error('Impossible de charger les données');
        this.data = await res.json();
        return this.data;
      } catch (err) {
        console.warn('Model.load:', err.message);
        this.data = null;
        return null;
      }
    },

    getSpectacles(category) {
      if (!this.data) return [];
      if (!category) return this.data.spectacles;
      return this.data.spectacles.filter(s => s.category.includes(category));
    },

    getSpectacleById(id) {
      if (!this.data) return null;
      return this.data.spectacles.find(s => s.id === id) || null;
    },

    getAnimations() {
      return this.data ? this.data.animations : [];
    },

    getCompany() {
      return this.data ? this.data.company : null;
    }
  };

  // ========== CONTROLLER ==========
  const Controller = {
    async init() {
      // Charger les données (utilisable par les pages dynamiques)
      await Model.load();

      this.setActiveNav();
      this.initContactForm();

      // Exposer le modèle globalement pour debug / extensions
      window.TAM = { Model, Controller };
    },

    setActiveNav() {
      const path = window.location.pathname;
      const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

      document.querySelectorAll('.main-nav a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkFile = href.substring(href.lastIndexOf('/') + 1);

        const isActive =
          linkFile === file ||
          (file === '' && linkFile === 'index.html') ||
          (file.startsWith('spectacle-') && linkFile === 'spectacles.html') ||
          (file.startsWith('animation-') && linkFile === 'animations.html') ||
          (file === 'fiche-miroir.html' && linkFile === 'spectacles.html');

        link.classList.toggle('active', isActive);
      });
    },

    initContactForm() {
      const form = document.getElementById('contact-form');
      if (!form) return;

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = (form.querySelector('#nom')?.value || '').trim();
        const email = (form.querySelector('#email')?.value || '').trim();

        if (!nom || !email) {
          alert('Merci de remplir au moins le nom et l\'e-mail.');
          return;
        }

        const btn = form.querySelector('.btn-submit');
        const original = btn.textContent;
        btn.textContent = 'Envoi en cours…';
        btn.disabled = true;

        // Simulation d'envoi (remplacer par un vrai endpoint)
        setTimeout(() => {
          alert('Merci ' + nom + ' ! Votre message a bien été transmis.\n(Nous vous répondrons rapidement.)');
          form.reset();
          btn.textContent = original;
          btn.disabled = false;
        }, 700);
      });
    }
  };

  // ========== BOOT ==========
  document.addEventListener('DOMContentLoaded', () => Controller.init());
})();
