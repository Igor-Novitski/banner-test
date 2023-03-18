import './index.css';

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
