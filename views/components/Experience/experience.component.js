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

document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Menu
    const dropdownCount = 7;
    for (let i = 1; i <= dropdownCount; i++) {
        const dropdown = document.querySelector(`.dropdown${i}`);
        const dropdownContent = document.querySelector(`.dropdown-content${i}`);
        const arrow = document.querySelector(`.arrow${i}`);

        dropdownContent.style.display = "none";

        dropdown.addEventListener("click", () => {
            if (dropdownContent.style.display === "none") {
                // Display dropdown content
                dropdownContent.style.display = "block";
                arrow.innerText = "▲"; // Change arrow icon
                dropdown.style.fontWeight = "bold";
            } else {
                // Hide dropdown content
                dropdownContent.style.display = "none";
                arrow.innerText = "▼"; // Change arrow icon
                dropdown.style.fontWeight = "";
            }
        });
    }
});