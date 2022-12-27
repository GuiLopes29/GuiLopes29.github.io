const defaultLocale = navigator.language || "en";
let locale;

let translations = {};

document.addEventListener("DOMContentLoaded", () => {
  setLocale(defaultLocale);
});

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations =
    await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}

async function fetchTranslationsFor(newLocale) {
  let response = await fetch(`../lang/${newLocale}.json`);

  if (!response.ok) {
    response = await fetch('../lang/en.json');
    console.warn(`Could not load translations for ${newLocale}`);
  }

  return await response.json();
}

function translatePage() {
  document
    .querySelectorAll("[lang-key]")
    .forEach(translateElement);
}

function translateElement(element) {
  const key = element.getAttribute("lang-key");
  const translation = translations[key];
  element.innerText = translation;
}