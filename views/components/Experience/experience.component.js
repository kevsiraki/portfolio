// Create an ExperienceSection component

import { experienceTemplate } from './experience.template.js';
import { experienceStyles } from './experience.style.js';

class ExperienceSection {
    constructor() {
        this.sectionElement = document.getElementById('Experience');
    }

    render() {
        const sectionContent = `
            <style>${experienceStyles}</style>
            ${experienceTemplate}
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the ExperienceSection component and render it
const experienceSection = new ExperienceSection();
experienceSection.render();