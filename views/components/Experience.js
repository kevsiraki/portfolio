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
                color: black ;
            }
			
			.dropdown-content1 ,
            .dropdown-content2 ,
            .dropdown-content3  {
				width: 85%;
				margin-left: auto;
				margin-right: auto;
			}

            .dropdown-content1 p,
            .dropdown-content2 p,
            .dropdown-content3 p {
                color: black ;
				
				margin-left: auto;
				margin-right: auto;
				
            }
			
			.arrow1, .arrow2, .arrow3 {
				font-size: 14px
			}
			
			#dt-link, #minecraft-link, #java_c-link {
				color: blue;
			}
        </style>
        <h1>Experience</h1>
        <p class="dropdown1"><span class="arrow1">&#9660;</span><em><b>IT, Technology Lead</b> | GUSD</em><br>9/2022 - Present</p>
        <div class="dropdown-content1">
            <p>• Configured/troubleshot equipment/software including firewalls, switches, & routers whilst adhering to procedures.</p>
			<p>• Employed Active Directory for user authentication, authorization, & network resource access control.</p>
			<p>• Co-trained instructors in devising engaging lesson plans using Google Workspace and educational software.
            <br><small>◦ Facilitated modern devices in lesson plans, such as 3D printers, reinforcing student interest.</small></p>
            <p>• Maintained a 99% overall ticket resolution rate, escalating major issues to IT colleagues for timely resolution.
			<br><small>◦ Adopted trend analysis to enhance our response time for resolving tickets more rapidly.
			<br>◦ Revived non-functional systems, resulting in substantial cost savings and resource optimization.
			<br>◦ Achieved a 95% success rate in Chromebook repairs to prevent e-waste and remain eco-friendly.</small></p>
			<p>• Leveraged CMD, Bash, and launchd to automate recurring tasks, significantly enhancing productivity.</p>
			<p>• Streamlined transition from DHCP to static device IPs for printers as well as print server hostname setup.</p>
		</div>
        <p class="dropdown2"><span class="arrow2">&#9660;</span><em><b>Full Stack Developer</b> | Don't Trip <small><sub>CSUN</sub></small></em><br>1/2021 - 5/2022</p>
        <div class="dropdown-content2">
            <p>• Led and collaborated with 2 developers to create a successful<a id="dt-link" href="https://donttrip.org" target = "_blank"> full-stack MVC Google Maps API based PWA.</a>
            <br><small>◦ Generates personalized curated travel plans (“Tesla EV Charging Stations on the way to Palo Alto, CA”).</small></p>
			<p>• Full CRUD for user preference history with regional popularity rating per location built in using the Yelp API.</p>
			<p>• Garnered over 1500 page visits in 1 month (tracked in SQL), primarily from CSUN students/professors.</p>
            <p>• Implemented time based theming and light/dark modes with adaptive UI throughout all the application routes.</p>
            <p>• Included 2FA, salt hashing, brute force/CSRF/SQL injection protection, and iptables for security hardening.</p>
            <p>• Integrated third-party SSO options through Google, Discord, and Steam for flexibility and authentication.</p>
			<p>• Managed Agile development process with Git, Jira, and Docker for seamless yet timely deliverables.</p>
			<p>• Conducted unit testing through Jenkins with PHPUnit to iron out edge cases with our controller/business logic.</p>
        </div>
        <p class="dropdown3"><span class="arrow3">&#9660;</span><em><b>PC & Server Consulting</b> | Freelance</em><br>5/2018 - Present</p>
        <div class="dropdown-content3">
            <p>• Independently built over 50 server-grade and gaming systems within strict budgetary and time constraints.</p>
			<p>• Utilized equipment such as multimeters, o-scopes, and EEPROM programmers for pinpointed debugging.</p>
			<p>• Developed a systematic software suite for CPU, FPU, and RAM stability testing in C, PowerShell, Python, & Bash.
			<br><small>◦ Contributed to open source core-by-core test software for AMD Zen 3 architecture (<i><u>corcycler</u></i> by <b>sp00n</b>).
			<br>◦ Each system is subject to these comprehensive tests, yielding 100% stability results in each system.</small></p>
            <p>• Provided cost-effective solutions based on up-to-date market knowledge for prospective and existing clients.</p>
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