// Create a Header component

import { headerTemplate } from './header.template.js';
import { headerStyles } from './header.style.js';

class Header {
  constructor() {
    this.headerElement = document.getElementById('header');
  }

  render() {
		const headerContent = `
			<style>${headerStyles}</style>
			${headerTemplate}
		`;
    this.headerElement.innerHTML = headerContent;
  }
}

// Instantiate the Header component and render it
const header = new Header();
header.render();

// Smooth Scroll
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    const targetOffsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffsetTop - headerHeight + 80,
      behavior: 'smooth'
    });
  });
});

// Get the header container element
const headerContainer = document.querySelector('.name-heading');

// Listen for scroll events
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerContainer.classList.add('scrolled');
  } else {
    headerContainer.classList.remove('scrolled');
  }
});

