// Create a Footer component

import { footerTemplate } from './footer.template.js';
import { footerStyles } from './footer.style.js';

class Footer {
	constructor() {
		this.footerElement = document.getElementById('footer');
	}

	render() {
		const footerContent = `
			<style>${footerStyles}</style>
			${footerTemplate}
		`;
		this.footerElement.innerHTML = footerContent;
	}
}

// Instantiate the Footer component and render it
const footer = new Footer();
footer.render();