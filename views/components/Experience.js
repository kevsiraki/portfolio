// Create an ExperienceSection component
class ExperienceSection {
    constructor() {
        this.sectionElement = document.getElementById('Experience');
    }

    render() {
        const sectionContent = `
        <style>
            /* Info styles */
            #info {
                font-size: 1.1em;
            }

            /* Dropdown styles */
            .dropdown1,
            .dropdown2,
            .dropdown3,
            #details {
                padding: 1px;
            }
			
			.dropdown1,
            .dropdown2,
            .dropdown3,
			.dropdown-content1,.dropdown-content2,.dropdown-content3,
            #details {
               margin-bottom: 25px;
            }
		
            /* Details styles */
            #details {
                max-width: 95%;
                margin-left: auto;
                margin-right: auto;
            }

            /* Hover styles */
            .dropdown1:hover,
            .dropdown2:hover,
            .dropdown3:hover,
            #info:hover,
            #details:hover {
                color: black !important;
            }

            .dropdown-content1 p,
            .dropdown-content2 p,
            .dropdown-content3 p {
                color: black !important;
				width: 75%;
				margin-left: auto;
				margin-right: auto;
				text-align: justify-center;
            }
        </style>
        <h1>Experience</h1>
        <p class="dropdown1"><span class="arrow1">&#9660;</span><em>GUSD | IT/Tech Lead</em><br>9/2022 - Present</p>
        <div class="dropdown-content1">
            <p>- Responsible for setup and configuration of computers and switches in collaboration with IT Admins.</p>
            <p>- Successfully handling nearly all troubleshooting and website issues independently.</p>
            <p>- Teaching technology-related curriculum in liaison with numerous certificated instructors.</p>
            <p>- Creating engaging lesson plans with variable difficulty for all grade levels.</p>
            <p>- Facilitating the use of technology such as 3D printers to enhance classroom environments.</p>
            <p>- Achieving a >90% success rate in student Chromebook repairs.</p>
        </div>
        <p class="dropdown2"><span class="arrow2">&#9660;</span><em>Don't Trip | Lead Developer</em><br>1/2021 - 7/2022</p>
        <div class="dropdown-content2">
            <p>- A full-stack progressive web app that generates a personalized dynamic list of places based on destination and trip length.</p>
            <p>- Garnered over 1500 page visits in the first month, primarily from CSUN students.</p>
            <p>- Migrated from AWS to in-house server for cost and control over hardware.</p>
            <p>- Implemented automatic night mode with adaptive UI.</p>
            <p>- Features 2FA, protection against brute force, CSRF tokens, and SQL injection prevention.</p>
            <p>- Third-party SSO integrations through Google, Discord, and Steam.</p>
        </div>
        <p class="dropdown3"><span class="arrow3">&#9660;</span><em>Self Employed | PC Builder</em><br>5/2018 - Present</p>
        <div class="dropdown-content3">
            <p>- Independently specced and built over 20 server-grade and/or gaming systems.</p>
            <p>- Advertised services via social media to colleagues and coworkers.</p>
            <p>- Currently utilizing my skills to create cost-effective solutions for computing requirements.</p>
        </div>
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the ExperienceSection component and render it
const experienceSection = new ExperienceSection();
experienceSection.render();

document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Menu
    const dropdownCount = 6;
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