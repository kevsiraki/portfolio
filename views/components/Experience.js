// Create an ExperienceSection component
class ExperienceSection {
    constructor() {
        this.sectionElement = document.getElementById('Experience');
    }

    render() {
        const sectionContent = `
        <style>
			#Experience {
				margin-top: 50px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: left; /* Left-justify the text within the component */
			}
			
            /* Info styles */
            #info {
                font-size: 1.1em;
                text-align: left; /* Left-justify the text */
            }

            /* Dropdown styles */
            .dropdown1,
            .dropdown2,
            .dropdown3,
			.dropdown4 {
                padding: 1px;
                text-align: center; /* Center the text */
            }

            /* Hover styles */
            .dropdown1:hover,
            .dropdown2:hover,
            .dropdown3:hover,
			.dropdown4:hover,
            #info:hover {
                color: black;
            }

            .dropdown-content1,
            .dropdown-content2,
            .dropdown-content3,
			.dropdown-content4 
			{
				width: 85%;
			}

            .dropdown-content1 p,
            .dropdown-content2 p,
            .dropdown-content3 p,
			.dropdown-content4 p {
                color: black;
                text-align: left; /* Left-justify the text */
            }

            .arrow1, 
			.arrow2, 
			.arrow3, 
			.arrow4 {
                font-size: 14px;
            }

            #dt-link, #minecraft-link, #java_c-link {
                color: blue;
            }
			
			@media only screen and (min-width: 768px) {
				.dropdown-content1,
				.dropdown-content2,
				.dropdown-content3,
				.dropdown-content4 {
					width: 65%; /* Adjust the width for larger screens */
				}
			}
        </style>
        <h1>Experience</h1>
        <p class="dropdown1"><span class="arrow1">&#9660;</span><em><b>IT, Technology Lead</b> | GUSD</em><br>9/2022 - Present</p>
        <div class="dropdown-content1">
            <p>• Configured network equipment and software, ensuring adherence to procedures whilst troubleshooting.</p>
            <p>• Managed user authentication and network access control through Active Directory.</p>
            <p>• Co-trained instructors in creating engaging lessons using Google Workspace and educational software.
            <br><small>◦ Integrated modern devices like 3D printers into lesson plans to enhance student engagement.</small></p>
            <p>• Achieved a 99% ticket resolution rate, escalating critical issues for timely resolution by IT colleagues.
            <br><small>◦ Utilized trend analysis to optimize ticket response times.
            <br>◦ Revived non-functional systems, leading to cost savings and resource optimization.
            <br>◦ Successfully repaired 95% of Chromebooks, promoting eco-friendliness and reducing e-waste.</small></p>
            <p>• Automated recurring tasks using CMD, Bash, and launchd, significantly improving productivity.</p>
            <p>• Streamlined the transition from DHCP to static device IPs for printers and print server setup.</p>
        </div>
        <p class="dropdown2"><span class="arrow2">&#9660;</span><em><b>Full Stack Developer</b> | Don't Trip</em><br>1/2021 - 5/2022</p>
        <div class="dropdown-content2">
            <p>• Led a team of 2 developers to create <a id="dt-link" href="https://donttrip.org" target = "_blank">Don't Trip</a>, a successful Google Maps API based PWA using Laravel/PHP and Vue.js.
            <br><small>◦ Generates personalized curated travel plans (“Tesla EV Charging Stations on the way to Palo Alto, CA”).</small></p>
            <p>• Full CRUD for user preference history with regional popularity rating per location built in using the Yelp API.</p>
            <p>• Garnered 1500+ page visits within a month, primarily from CSUN's academic community.</p>
            <p>• Implemented security measures, including 2FA, salt hashing, and protection against common vulnerabilities.</p>
            <p>• Integrated third-party SSO options for authentication as well as JSON web tokens to replace sessions.</p>
            <p>• Managed Agile development with Git, Jira, and Docker Containers.</p>
            <p>• Conducted unit testing using Jenkins with PHPUnit for robust controller and business logic.</p>
        </div>
        <p class="dropdown3"><span class="arrow3">&#9660;</span><em><b>PC & Server Consulting</b> | Freelance</em><br>5/2018 - Present</p>
        <div class="dropdown-content3">
            <p>• Independently built 50+ server-grade and gaming systems within strict budget and time constraints.</p>
            <p>• Utilized equipment like multimeters, oscilloscopes, and EEPROM programmers for precise debugging.</p>
            <p>• Developed a software suite for CPU, FPU, and RAM stability testing in C, PowerShell, Python, & Bash.
            <br><small>◦ Contributed to open-source core-by-core test software for AMD Zen 3 architecture (<i><u>corcycler</u></i> by <b>sp00n</b>).
            <br>◦ Achieved 100% system stability results through comprehensive testing.</small></p>
            <p>• Provided cost-effective solutions based on current market knowledge for clients.</p>
        </div>
        <p class="dropdown4"><span class="arrow4">&#9660;</span><em><b>Java_C</b> | Compiler Design Project</em></p>
        <div class="dropdown-content4">
            <p>• Experimental<a id="java_c-link" href="https://github.com/kevsiraki/Java_C" target = "_blank"> Java to C compiler </a>featuring OOP, bounds checking on arrays, and subtyping.</p>
            <p>• Used Apache Maven build automation in conjunction with J-Unit + JaCoCo to administer full-coverage unit tests.</p>
            <p>• Compiler is fully capable of code execution; has a Tokenizer, Parser, Typechecker, and Code Generator.</p>
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