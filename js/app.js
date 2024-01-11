const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement('.nav-links');
const navBtnDom = getElement('.nav-btn');

navBtnDom.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;

  if (scrollHeight > 450) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});
