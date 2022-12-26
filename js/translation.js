// The active locale
const locale = "pt-BR";

// The translations
const translations = {
  // Portuguese translations
  "pt-BR": {
    "nav-home": "Início",
    "nav-about": "Sobre mim",
    "nav-projects": "Projetos",
    "nav-skills": "Habilidades",
    "me-title": "Olá, me chamo",
    "me-name": "Guilherme Lopes",
    "me-description": "Desenvolvedor FullStack Pl."
  },

  // English translations
  "en": {
    "nav-home": "Home",
    "nav-about": "About me",
    "nav-projects": "Projects",
    "nav-skills": "Skills",
    "me-title": "Hello, my name is",
    "me-name": "Guilherme Lopes",
    "me-description": "FullStack Pl. Developer"
  },
};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-lang-key]")
    .forEach(translateElement);
});

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("[data-lang-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}