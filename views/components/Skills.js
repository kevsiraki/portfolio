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
				<li><i class="fa-solid fa-csharp"></i>&nbsp;C#</li>
                <li><i class="fa-solid fa-c"></i>&nbsp;C/C++</li>
                <li><i class="fa-solid fa-microchip"></i>&nbsp;Assembly</li>
            </ul>
        </section>
        <section>
            <h1>Backend</h1>
            <ul class="skill-set">
				<li><i class="fa-solid fa-database"></i>&nbsp;SQL</li>
				<li><i class="fa-solid fa-sitemap"></i></i>&nbsp;MongoDB</li>
				<li><i class="fa-brands fa-node"></i>&nbsp;Node/Express.js</li>
				<li><i class="fa-brands fa-laravel"></i>&nbsp;Laravel</li>
                <li><i class="fa fa-server"></i>&nbsp;Apache/Nginx</li>
                <li><i class="fa-brands fa-aws"></i>&nbsp;AWS</li>
                <li><i class="fa-brands fa-docker"></i>&nbsp;Docker</li>
				<li><i class="fa-solid fa-circle-nodes"></i>&nbsp;Kubernetes</li>
				<li><i class="fa-solid fa-a"></i>&nbsp;Ansible</li>
				<li><i class="fa-brands fa-jenkins"></i>&nbsp;Jenkins</li>
				<li><i class="fa fa-linux"></i>&nbsp;Linux</li>
				<li><i class="fa-solid fa-terminal"></i>&nbsp;Bash/Crontab</li>
				<li><i class="fa-solid fa-trowel-bricks"></i>&nbsp;iptables/UFW</li>
				<li><i class="fa-solid fa-code"></i>&nbsp;Rest APIs</li>
            </ul>
        </section>
        <section>
            <h1>Frontend</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-html5"></i>&nbsp;HTML</li>
                <li><i class="fa-brands fa-css3-alt"></i>&nbsp;CSS</li>
                <li><i class="fa-brands fa-js"></i>&nbsp;JS</li>
				<li><i class="fa-brands fa-css3"></i>&nbsp;Tailwind CSS</li>
				<li><i class="fa-brands fa-bootstrap"></i>&nbsp;Bootstrap</li>
                <li><i class="fa-brands fa-vuejs"></i>&nbsp;Vue.js</li>
				<li><i class="fa-brands fa-react"></i>&nbsp;JS Frameworks</li>
            </ul>
        </section>
        <section>
            <h1>Other Skills</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-microsoft"></i>&nbsp;MS Office</li>
                <li><i class="fa-brands fa-git"></i>&nbsp;Git</li>
				<li><i class="fa-brands fa-confluence"></i>&nbsp;Agile</li>
                <li><i class="fa-brands fa-jira"></i>&nbsp;Jira</li>
				<li><i class="fa-brands fa-atlassian"></i>&nbsp;Atlassian</li>
				<li><i class="fa-solid fa-timeline"></i></i>&nbsp;CI/CD</li>
                <li><i class="fa-solid fa-network-wired"></i>&nbsp;Networking</li>
                <li><i class="fa-solid fa-lightbulb"></i>&nbsp;Embedded Systems</li>
                <li><i class="fa-brands fa-unity"></i>&nbsp;Unity</li>
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

//Questioning putting this back in xD

/*
		<section>
            <h1>Soft Skills</h1>
            <ul class="skill-set">
                <li><i class="fa-solid fa-wand-magic-sparkles"></i>&nbsp;Adaptable</li>
				<li><i class="fa-solid fa-brain"></i>&nbsp;Critical Thinker</li>
                <li><i class="fa-solid fa-calculator"></i></i>&nbsp;Pragmatic</li>
                <li><i class="fa-solid fa-magnifying-glass-dollar"></i>&nbsp;Meticulous</li>
                <li><i class="fa-solid fa-book-atlas"></i>&nbsp;Continuous Learner</li>
                <li><i class="fa-solid fa-users-rectangle"></i>&nbsp;Effective Communicator</li>
            </ul>
        </section>
        <section>
            <h1>Hobbies and Interests</h1>
            <ul class="skill-set">
                <li><i class="fa-solid fa-headset"></i>&nbsp;Gaming</li>
                <li><i class="fa-solid fa-car"></i>&nbsp;Cars</li>
                <li><i class="fa-solid fa-coins"></i>&nbsp;Finance</li>
                <li><i class="fa-solid fa-person-hiking"></i>&nbsp;Hiking</li>
                <li><i class="fa-solid fa-plug-circle-bolt"></i>&nbsp;Circuits</li>
                <li><i class="fa-solid fa-computer"></i>&nbsp;PCs/Servers</li>
                <li><i class="fa-solid fa-people-group"></i>&nbsp;Family</li>
            </ul>
        </section>
*/