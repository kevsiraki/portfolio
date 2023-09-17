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
                background: rgba(0, 0, 0, .75);
                border-radius: 35px;
                color: #FFF;
                display: inline-block;
                list-style: none;
                margin: 5px 5px 5px 5px;
                padding: 15px;
                text-align: center;
            }
        </style>
        <section>
            <h1>Programming Languages</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-php"></i>&nbsp;PHP</li>
                <li><i class="fa-solid fa-database"></i>&nbsp;SQL</li>
                <li><i class="fa-brands fa-html5"></i>&nbsp;HTML</li>
                <li><i class="fa-brands fa-css3-alt"></i>&nbsp;CSS</li>
                <li><i class="fa-brands fa-js"></i>&nbsp;JS</li>
                <li><i class="fa-solid fa-c"></i>&nbsp;C/C++</li>
                <li><i class="fa-brands fa-java"></i>&nbsp;Java</li>
                <li><i class="fa-brands fa-python"></i>&nbsp;Python</li>
                <li><i class="fa-solid fa-microchip"></i>&nbsp;Assembly</li>
            </ul>
        </section>
        <section>
            <h1>Server-Side Technologies</h1>
            <ul class="skill-set">
                <li><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;Linux</li>
                <li><i class="fa fa-server" aria-hidden="true"></i>&nbsp;Apache</li>
                <li><i class="fa fa-server" aria-hidden="true"></i>&nbsp;Nginx</li>
                <li><i class="fa-brands fa-aws"></i>&nbsp;AWS (EC2)</li>
                <li><i class="fa-brands fa-docker"></i>&nbsp;Docker</li>
            </ul>
        </section>
        <section>
            <h1>Stacks and Frameworks</h1>
            <ul class="skill-set">
                <li><i class="fa-solid fa-sitemap"></i>&nbsp;LAMP/LEMP</li>
                <li><i class="fa-brands fa-bootstrap"></i>&nbsp;Bootstrap</li>
                <li><i class="fa-brands fa-css3"></i>&nbsp;Tailwind CSS</li>
                <li><i class="fa-brands fa-laravel"></i>&nbsp;Laravel</li>
                <li><i class="fa-brands fa-vuejs"></i>&nbsp;Vue.js</li>
            </ul>
        </section>
        <section>
            <h1>Miscellaneous Skills</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-microsoft"></i>&nbsp;MS Office</li>
                <li><i class="fa-brands fa-git"></i>&nbsp;Git</li>
                <li><i class="fa-brands fa-jira"></i>&nbsp;Jira</li>
                <li><i class="fa-solid fa-code"></i>&nbsp;APIs</li>
                <li><i class="fa-solid fa-network-wired"></i>&nbsp;Networking</li>
                <li><i class="fa-solid fa-code"></i>&nbsp;Embedded Systems</li>
                <li><i class="fa-solid fa-lightbulb"></i>&nbsp;Electronics</li>
                <li><i class="fa-brands fa-unity"></i>&nbsp;Unity</li>
            </ul>
        </section>
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
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the SkillsSection component and render it
const skillsSection = new SkillsSection();
skillsSection.render();
