// Create a SkillsSection component
class SkillsSection {
    constructor() {
        this.sectionElement = document.getElementById('Skills');
    }

    render() {
        const sectionContent = `
        <style>
            /* List styles */
            ul {
                padding: 0;
                text-align: center;
				max-width: 100%;
				margin: auto;
            }
			
            /* Skill set item styles */
            .skill-set li {
                background: rgba(17, 84, 204, .15);
                border-radius: 35px;
                color: #000;
                display: inline-block;
                list-style: none;
                margin: 5px 5px 5px 5px;
                padding: 15px;
                text-align: center;
                cursor: pointer;
                transition: transform 0.3s ease-in-out;
            }
			
            /* Add the hover effect */
            .skill-set li:hover {
                transform: translate(5px, -5px); /* Adjust the values as needed */
            }
			
			/* Reset cursor for non-link list items */
			.skill-set li:not(.hover-item) {
				cursor: default;
			}
        </style>
        <section>
            <h1>Programming Languages</h1>
            <ul class="skill-set">
				<li><i class="fa-brands fa-js"></i>&nbsp;JavaScript</li>
				<li><i class="fa-solid fa-keyboard"></i>&nbsp;TypeScript</li>
				<li><i class="fa-brands fa-python"></i>&nbsp;Python</li>
                <li><i class="fa-brands fa-php"></i>&nbsp;PHP</li>
				<li><i class="fa-brands fa-java"></i>&nbsp;Java</li>
				<li><i class="fa-solid fa-csharp"></i>&nbsp;C# Dot.net</li>
                <li><i class="fa-solid fa-c"></i>&nbsp;C, C++</li>
				<li><i class="fa-brands fa-golang"></i>&nbsp;Go</li>
				<li><i class="fa-solid fa-gem"></i>&nbsp;Ruby</li>
				<li><i class="fa-brands fa-rust"></i>&nbsp;Rust</li>
				<li><i class="fa-brands fa-r-project"></i>&nbsp;R</li>
                <li><i class="fa-solid fa-microchip"></i>&nbsp;Assembly</li>
            </ul>
        </section>
        <section>
            <h1>Backend</h1>
            <ul class="skill-set">
				<li><i class="fa-solid fa-database"></i>&nbsp;SQL, MariaDB, RDBMS</li>
				<li><i class="fa-solid fa-sitemap"></i></i>&nbsp;NoSQL, MongoDB</li>
				<li><i class="fa-solid fa-layer-group"></i>&nbsp;Redis</li>
				<li><i class="fa-brands fa-node"></i>&nbsp;Node</li>
				<li><i class="fa-brands fa-js"></i>&nbsp;Express</li>
				<li><i class="fa-brands fa-laravel"></i>&nbsp;Laravel</li>
                <li><i class="fa fa-wordpress" aria-hidden="true"></i>&nbsp;Wordpress</li>
                <li><i class="fa-solid fa-feather"></i>&nbsp;Apache</li>
				<li><i class="fa fa-server"></i>&nbsp;Nginx</li>
                <li><i class="fa-brands fa-aws"></i>&nbsp;AWS</li>
				<li><i class="fa-brands fa-microsoft"></i>&nbsp;Azure</li>
                <li><i class="fa-brands fa-docker"></i>&nbsp;Docker</li>
				<li><i class="fa-solid fa-circle-nodes"></i>&nbsp;Kubernetes</li>
				<li><i class="fa fa-linux"></i>&nbsp;Linux</li>
				<li><i class="fa-solid fa-code"></i>&nbsp;Rest APIs</li>
				<li><i class="fa-solid fa-plug"></i>&nbsp;SocketIO</li>
				<li><i class="fa-solid fa-arrow-down-up-across-line"></i>&nbsp;MVC</li>
            </ul>
        </section>
        <section>
            <h1>Frontend</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-html5"></i>&nbsp;HTML</li>
				<li><i class="fa-solid fa-fan"></i>&nbsp;Blade</li>
                <li><i class="fa-brands fa-css3-alt"></i>&nbsp;CSS</li>
				<li><i class="fa-brands fa-sass"></i>&nbsp;SASS</li>
				<li><i class="fa-brands fa-bootstrap"></i>&nbsp;Bootstrap</li>
				<li><i class="fa-brands fa-css3"></i>&nbsp;Tailwind</li>
                <li><i class="fa-brands fa-js"></i>&nbsp;JS</li>
				<li><i class="fa-brands fa-node-js"></i>&nbsp;jQuery</li>
				<li><i class="fa-brands fa-vuejs"></i>&nbsp;Vue</li>
				<li><i class="fa-brands fa-react"></i>&nbsp;React</li>
				<li><i class="fa-brands fa-angular"></i>&nbsp;Angular</li>
				<li><i class="fa-brands fa-npm"></i>&nbsp;Next</li>
				<li><i class="fa-solid fa-f"></i></i>&nbsp;Flutter</li>
            </ul>
        </section>
        <section>
            <h1>Other Skills</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-microsoft"></i>&nbsp;MS Office</li>
				<li><i class="fa-solid fa-terminal"></i>&nbsp;Bash, Crontab</li>
                <li><i class="fa-brands fa-git"></i>&nbsp;Git</li>
				<li><i class="fa-solid fa-list-check"></i>&nbsp;TDD</li>
                <li><i class="fa-brands fa-jira"></i>&nbsp;Jira</li>
				<li><i class="fa-solid fa-timeline"></i></i>&nbsp;CI/CD</li>
				<li><i class="fa-solid fa-a"></i>&nbsp;Ansible</li>
				<li><i class="fa-brands fa-jenkins"></i>&nbsp;Jenkins</li>
                <li><i class="fa-solid fa-network-wired"></i>&nbsp;Networking</li>
				<li><i class="fa-brands fa-unity"></i>&nbsp;Unity</li>
				<li><i class="fa-solid fa-desktop"></i>&nbsp;System Design</li>
				<li><i class="fa-solid fa-trowel-bricks"></i>&nbsp;Firewalls</li>
				<li><i class="fa-solid fa-object-group"></i>&nbsp;SOLID, OOP</li>
				<li><i class="fa-brands fa-atlassian"></i>&nbsp;Agile, Atlassian Suite</li>
				<li><i class="fa-solid fa-microchip"></i>&nbsp;Embedded Systems, Hardware</li>
            </ul>
        </section>
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
                item.style.transform = `translate(${deltaX / 10}px, ${deltaY / 10}px)`;
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
