import './index.css';
import enLang from './data/en.json';
import esLang from './data/es.json';
import frLang from './data/fr.json';
import jaLang from './data/ja.json';
import nlLang from './data/nl.json';
import ruLang from './data/ru.json';
import zhLang from './data/zh.json';

const cards = document.querySelectorAll('.card');
const button = document.querySelector('.button');

function changeClassActive() {
  if (!this.classList.contains('active')) {
    cards.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  }
}

function followTheLink() {
  if (cards[0].classList.contains('active')) {
    location.href = 'https://apple.com/';
  } else {
    location.href = 'https://google.com/ ';
  }
}

cards.forEach((card) => {
  card.addEventListener('click', changeClassActive);
});

button.addEventListener('click', followTheLink);

//lang

const str = window.location.href;
let lang = window.navigator.language;
if (str.indexOf('lang=') > 0) {
  let subSrt = str.slice(str.indexOf('lang=') + 5, str.indexOf('lang=') + 8);
  if (
    subSrt === 'en' ||
    subSrt === 'es' ||
    subSrt === 'fr' ||
    subSrt === 'ja' ||
    subSrt === 'nl' ||
    subSrt === 'ru' ||
    subSrt === 'zh'
  ) {
    lang = subSrt;
  }
}

const i18Obj = {
  en: enLang,
  es: esLang,
  fr: frLang,
  ja: jaLang,
  nl: nlLang,
  ru: ruLang,
  zh: zhLang,
};
function getTranslate(lang) {
  const elements = document.querySelectorAll('[data-i18]');
  elements.forEach((item) => {
    item.innerHTML = i18Obj[lang][item.dataset.i18];
  });
  return lang;
}

getTranslate(lang);

if (lang === 'ru' || lang === 'es' || lang === 'fr' || lang === 'nl') {
  document.querySelector('.main-title').style.fontSize = '28px';
  document.querySelector('.main-title').style.lineHeight = '34px';
}
