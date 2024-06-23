// Create an EducationSection component

import { educationTemplate } from './education.template.js';
import { educationStyles } from './education.style.js';

class EducationSection {
    constructor() {
        this.sectionElement = document.getElementById('Education');
    }

    render() {
        const sectionContent = `
            <style>${educationStyles}</style>
            ${educationTemplate}
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the EducationSection component and render it
const educationSection = new EducationSection();
educationSection.render();