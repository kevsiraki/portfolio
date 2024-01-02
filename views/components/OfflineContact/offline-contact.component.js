// Create a OfflineContactSection component

import { offlineContactTemplate } from './offline-contact.template.js';
import { offlineContactStyles } from './offline-contact.style.js';

class OfflineContactSection {
    constructor() {
        this.sectionElement = document.getElementById('Contact');
    }

    render() {
        const sectionContent = `
            <style>${offlineContactStyles}</style>
            ${offlineContactTemplate}
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the OfflineContactSection component and render it
const offlineContactSection = new OfflineContactSection();
offlineContactSection.render();
