// Create a SkillsSection component

import { skillsTemplate } from './skills.template.js';
import { skillsStyles } from './skills.style.js';

class SkillsSection {
    constructor() {
        this.sectionElement = document.getElementById('Skills');
    }

    render() {
        const sectionContent = `
            <style>${skillsStyles}</style>
            ${skillsTemplate}
        `;

        this.sectionElement.innerHTML = sectionContent;

        // JavaScript code for the hover effect (similar to the previous example)
        const skillSetItems = this.sectionElement.querySelectorAll('.skill-set li');

        skillSetItems.forEach((item) => {
            item.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const rect = item.getBoundingClientRect();
                const itemX = rect.left + rect.width / 2;
                const itemY = rect.top + rect.height / 2;
                const deltaX = mouseX - itemX;
                const deltaY = mouseY - itemY;
                item.style.transform = `translate(${deltaX / 5}px, ${deltaY / 5}px)`;
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Instantiate and render the SkillsSection
const skillsSection = new SkillsSection();
skillsSection.render();
