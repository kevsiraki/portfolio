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
				<li><i class="fa-brands fa-js"></i>&nbsp;JavaScript/TypeScript</li>
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
				<li><i class="fa-brands fa-node"></i>&nbsp;Node/Express.js</li>
				<li><i class="fa-brands fa-laravel"></i>&nbsp;Laravel</li>
                <li><i class="fa fa-server"></i>&nbsp;Apache/Nginx</li>
                <li><i class="fa-brands fa-aws"></i>&nbsp;AWS</li>
                <li><i class="fa-brands fa-docker"></i>&nbsp;Docker</li>
				<li><i class="fa-solid fa-circle-nodes"></i>&nbsp;Kubernetes</li>
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
            <h1>Operating Systems</h1>
            <ul class="skill-set">
                <li><i class="fa fa-linux"></i>&nbsp;Linux (
				<i class="fa-brands fa-ubuntu"></i>Ubuntu,
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
				<path d="M248.2 .9c-4 .2-8.1 .4-11.4 1.6l-3.4-.5c5.4-.7 10.9-1.1 16.4-1.5c2.4-.2 4.8-.4 7.2-.6c-2.7 .6-5.7 .8-8.8 .9zm132 244.7c3-7.6 5.5-14 5.2-24.4l-4.3 9c4.4-13.2 4-27.1 3.6-40.4c-.2-6-.3-11.8 0-17.4l-1.8-.5c-1.5-45.2-40.6-93.1-75.3-109.4c-30-13.8-76.1-16.2-97.3-5.8c1.3-1.1 4.2-2 6.8-2.7c3.4-1 6.3-1.8 4.3-3c-19.2 1.9-24.9 5.5-31.1 9.4c-4.6 2.9-9.5 6-20.3 8.7c-3.5 3.4 1.7 2 5.8 .9c4.1-1.1 7.2-1.9-.1 2.4c-3.6 1-6.7 1.3-9.7 1.6c-8.3 .8-15.8 1.6-30.7 17c.8 1.3 3.5-.3 5.4-1.4c2.3-1.4 3.4-2-1.7 4.4c-19.1-2.4-60.3 43.7-69.1 59l4.6 .8c-3.2 8-6.8 14.8-10 20.8c-4.3 8.1-7.9 14.9-8.7 21.3c-.4 5.9-1.2 12.9-2 20.3c-3 27.4-6.8 61.3 3.8 73.6l-1.3 13c.6 1.2 1.1 2.3 1.6 3.5c1.2 2.5 2.3 5 3.9 7.4l-3 .2c7 22.2 10.8 22.5 15.1 22.9c4.4 .4 9.3 .9 18.7 24.2c-2.7-.9-5.5-1.9-9.4-7.2c-.5 4.1 5.8 16.3 13.1 25.8l-3.1 3.6c3.2 5.8 6.1 8.1 8.6 10l0 0c.8 .6 1.5 1.1 2.1 1.7c-11.9-6.5 3.2 13.7 11.9 25.2c2.5 3.4 4.5 6 5.1 7l2.4-4.2c-.3 6.1 4.3 13.9 13.1 24.7l7.3-.3c3 6 14 16.7 20.7 17.2l-4.4 5.8c8.1 2.6 10.3 4.3 12.7 6.2c2.6 2.1 5.4 4.3 16.1 8.1l-4.2-7.4c3.5 3 6.2 5.9 8.8 8.7c5.2 5.6 9.9 10.7 19.8 15.4c11.2 3.9 17.1 4.8 23.6 5.9c5.4 .8 11.2 1.8 20.8 4.5c-2.2-.1-4.4-.1-6.7-.2l0 0h0c-16.3-.4-34-.8-46.4-5.2C107.8 480.5 19.5 367.2 26 250.6c-.6-9.9-.3-20.9 0-30.7c.4-13.5 .7-24.8-1.6-28.3l1-3.1c5.3-17.4 11.7-38.2 23.8-62.8l-.1-.2 0-.1 0 0 0 0c.4 .4 3.4 3.4 8.8-5.8c1.3-2.9 2.5-5.8 3.8-8.8l0 0c2.5-6.1 5.1-12.3 8.4-17.9l2.6-.6c1.7-10.1 17-23.8 29.8-35.2l0 0c6.1-5.5 11.6-10.4 14.7-14.1l.7 4.4c17.1-16 45-27.7 66.1-36.6c4.8-2 9.3-3.9 13.3-5.7c-3.4 3.8 2.2 2.7 10 1c4.8-1 10.4-2.1 15.3-2.4c-1.3 .7-2.6 1.4-3.9 2.1l0 0 0 0c-2.7 1.4-5.4 2.8-8 4.6c8.3-2 11.9-1.4 16-.8c3.5 .6 7.3 1.2 14.6 .2c-5.6 .8-12.3 3-11.2 3.8c7.9 .9 12.8-.1 17.2-1c5.6-1.1 10.4-2.1 19.5 .9l-1-4.8c7.5 2.7 13.1 4.4 18 5.9c10 3 17.6 5.3 34.2 14.1c3.2 .2 5.3-.5 7.4-1.2c3.6-1.1 7-2.2 15.3 1.2c.5 .8 .7 1.5 1 2.1c1 2.6 1.7 4.6 14.6 12.2c1.8-.7-3.1-5.1-7-8.7l-.2-.1c32.3 17.3 67.5 54.1 78.2 93.6c-6-11.1-5.2-5.5-4.3 .5c.6 4 1.2 8.1-.2 7.5c4.5 12.1 8.1 24.5 10.4 37.4l-.8-2.9c-3.3-11.8-9.6-34.5-20-49.6c-.4 4.4-2.9 3.9-5.3 3.5c-3.3-.6-6.3-1.2-1.9 12.6c2.6 3.8 3.1 2.4 3.5 1.1c.5-1.5 .9-2.8 4.7 5.2c.1 4.3 1.1 8.5 2.2 13.3l0 0 0 0 0 0 0 0 0 0 0 0c.7 3 1.5 6.2 2.1 9.8c-1.1-.2-2.3-2.2-3.4-4.2l0 0 0 0c-1.4-2.4-2.8-4.7-3.7-3.2c2.4 11.5 6.5 17.4 8 18.3c-.3 .6-.6 .7-1.1 .7c-.8 0-1.8 .1-1.9 5.3c.7 13.7 3.3 12.5 5.3 11.6c.6-.3 1.2-.6 1.7-.4c-.6 2.5-1.6 5.1-2.7 7.9l0 0c-2.8 7.1-6 15.4-3.4 26.1c-.8-3.1-2.1-6.3-3.3-9.3l0 0 0 0c-.5-1.3-1.1-2.6-1.5-3.8c-.6 4.8-.3 8.2-.1 11.3c.4 5.3 .7 10-3 19.9c4.3-14.2 3.8-26.9-.2-20.8c1 11-3.8 20.5-8.1 29.1c-3.6 7.1-6.8 13.5-5.9 19.3l-5.2-7.1c-7.6 11-7 13.3-6.5 15.6c.5 1.9 1 3.8-3.4 10.8c1.7-2.9 1.3-3.6 1-4.2c-.4-.8-.7-1.5 1.7-5.1c-1.6 .1-5.5 3.9-10.1 8.5l0 0c-3.9 3.9-8.5 8.4-12.8 11.8c-37.5 30.1-82.3 34-125.6 17.8l0 0c.2-1-.2-2.1-3.1-4.1c-36.8-28.2-58.5-52.1-50.9-107.5c2.2-1.7 3.7-6.2 5.6-11.6c2.9-8.4 6.5-18.9 14.3-23.9c7.8-17.3 31.3-33.3 56.4-33.7c25.6-1.4 47.2 13.7 58.1 27.9c-19.8-18.4-52.1-24-79.7-10.4c-28.2 12.7-45 43.8-42.5 74.7c.3-.5 .7-.7 1-.9c.6-.5 1.2-.9 1.5-3.4c-.9 60.2 64.8 104.3 112.1 82l.6 1.3c12.7-3.5 15.9-6.5 20.3-10.7c2.2-2.1 4.7-4.5 9-7.4c-.3 .7-1.3 1.7-2.4 2.7c-2.2 2.1-4.6 4.5-1.6 4.6c5.3-1.4 20.1-14.8 30.2-23.8l0 0 0 0c1.6-1.4 3-2.7 4.3-3.9c2-4.3 1.6-5.7 1.3-7.1c-.4-1.6-.8-3.3 2.4-9.6l7.3-3.7c1-2.8 2-5.4 2.9-7.8l0 0zM233.1 321.9a.9 .9 0 1 0 -1.7 0 .9 .9 0 1 0 1.7 0zm-.2 .5l-.2 .4c-.3 .7-.6 1.4-.3 2.4c-12.2-5.7-23.4-14.3-32.6-24.9c4.9 7.1 10.1 14.1 17 19.5c-6.9-2.3-15.2-11.9-21.7-19.4l0 0 0 0c-4.3-5-7.9-9.1-9.7-9.5c19.8 35.5 80.5 62.3 112.3 49c-14.7 .5-33.4 .3-49.9-5.8c-6.3-3.2-14.6-9.6-14.9-11.8zM237.5 7c3.8 .6 7.3 1.2 6.7 2.1c5-1.1 6.1-2.1-9-2.5c.8 .1 1.6 .3 2.4 .4zm92.2 208.4c-1 3.9-1.8 1.4-2.7-1.2c-.5-1.5-1.1-3.1-1.7-3.4c1.4-5.8 5.4-10.7 4.4 4.6zm-6.8 21.2c-1.3 7.9-5 15.5-10.1 22.5c.2-2-1.2-2.4-2.6-2.8c-2.9-.8-5.9-1.6 5.6-16.1c-.5 2-2.3 4.9-4 7.7l0 0c-3.6 5.9-6.7 11 4 4.3l1-1.8c2.6-4.5 5-8.8 6-13.8zM280 276.6c-11.1-1.7-21.2-6-12.7-6.1c7.1 .6 14.1 .6 21-1.1c-2.5 2.4-5.2 4.8-8.3 7.2zM244.2 9.1l-.2 .4-3 .3 3.2-.7zm-69.5 273c3.7 7.2 6.5 11.7 9.1 15.9c2.3 3.7 4.4 7.1 6.8 11.7c-5.2-4.3-8.9-9.8-12.8-15.5c-1.4-2.1-2.8-4.2-4.4-6.2l1.2-5.9zm7.3-10c1.7 3.4 3.3 6.7 5.9 9.5l2.6 7.7-1.3-2.1c-3.2-5.3-6.3-10.6-8-16.7l.8 1.6zm239.1-41.2c-2.3 17.4-7.7 34.6-16 50.3c7.6-14.9 12.5-30.9 14.8-47.2l1.2-3.1zM35.4 109.6c0 .3 0 .5 .1 .7c0-.2 0-.5-.1-.7zm.1 .7c.3 1.2 1.4 .9 2.4 .6c1.9-.5 3.6-.9-.1 7.6c-2.4 1.7-3.8 2.8-4.6 3.4c-.6 .4-.8 .6-.8 .6c0 0 .1-.2 .3-.5c.8-1.4 3.4-5.5 2.9-11.7zm-10.2 42c-.7 3.7-1.5 7.9-3.4 13.9c.2-1.9 0-3.5-.2-4.9c-.4-3.4-.8-6.3 4.3-12.9c-.3 1.2-.5 2.5-.7 3.8z"/></svg>
				Debian,
				<i class="fa-brands fa-redhat"></i>&nbsp;Redhat )</li>
				<li><i class="fa-brands fa-windows"></i>&nbsp;Windows</li>
				<li><i class="fa-brands fa-chrome"></i>&nbsp;ChromeOS</li>
				<li><i class="fa-brands fa-apple"></i>&nbsp;MacOS</li>
            </ul>
        </section>
        <section>
            <h1>Other Skills</h1>
            <ul class="skill-set">
                <li><i class="fa-brands fa-microsoft"></i>&nbsp;MS Office</li>
				<li><i class="fa-solid fa-terminal"></i>&nbsp;Bash/Crontab</li>
                <li><i class="fa-brands fa-git"></i>&nbsp;Git</li>
                <li><i class="fa-brands fa-jira"></i>&nbsp;Jira</li>
				<li><i class="fa-solid fa-timeline"></i></i>&nbsp;CI/CD</li>
                <li><i class="fa-solid fa-code"></i>&nbsp;APIs</li>
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