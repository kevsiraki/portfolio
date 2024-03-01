export const experienceTemplate = `
<h1>Experience</h1>
<details>
    <summary class="dropdown"><b>IT, Technology Lead</b> | GUSD<br>9/2022 - Present</summary>
    <div class="dropdown-content">
        <p>• Configured Group Policy with Active Directory for network devices with the Principle of Least Privilege in mind.</p>
        <p>• Co-trained instructors in creating engaging lessons using Google Workspace and educational software.</p>
        <p>• Resolved an average of 100 inquiries weekly with a ~95% resolution rate, ensuring timely ticket resolution.</p>
        <p>• Revived non-functional systems, resulting in a 30% reduction in e-waste and cost savings for the District.</p>
        <p>• Automated recurring tasks such as printer configuration with Batch/Bash scripts, elevating productivity by 15%.</p>
        <p>• Formulated comprehensive documentation to guide coworkers on technical procedures and security awareness.</p> 
	    <p>• Performed system inspections and configured intrusion detection systems (IDS), reducing downtime significantly.</p>
    </div>
</details>

<details>
    <summary class="dropdown"><b>Full Stack Developer</b> | Freelance<br>1/2019 – Present</summary>
    <details>
        <summary class="dropdown">IoT Analysis API: 1/2024 – Present</summary>
        <div class="dropdown-content">
            <p>• A dynamically navigable <a id="dt-link" href="https://donttrip.org" target = "_blank">REST API</a> strictly adhering to HATEOAS principles; Thoroughly tested with J-Unit.</p>
            <p>• JSON payloads sent from ESP32s connected to DHT11 sensors are stored in a MySQL database.</p>
            <p>• Combined schema normalization, Redis, and pagination to provide a quick response time for clients.</p>
            <p>• Mitigated data redundancy and dropped API response latency by ~50 ms per 100 KB response size.</p>
            <p>• Features endpoints for statistical metrics and data analysis with comprehensive Swagger documentation.</p>
        </div>
    </details>

    <details>
        <summary class="dropdown">SCK: 7/2022 – Present</summary>
        <div class="dropdown-content">
            <p>• Revamping a live notification system into a scaffold for social media, aligning features via Agile methodologies.</p>
            <p>• Utilizing MongoDB Atlas with sharding to transform a monolith into horizontally scalable microservices.</p>
            <p>• MongoDB sharding and LRU cache implementation decreased profile picture load times by 90%.</p>
        </div>
    </details>

    <details>
        <summary class="dropdown">Don't Trip: 1/2021 – 5/2022</summary>
        <div class="dropdown-content">
            <p>• Led a team of 2 developers to create <a id="dt-link" href="https://donttrip.org" target = "_blank">Don't Trip</a>, a platform agnostic road trip planner and landmark discovery platform.</p>
            <p>• Generates personalized curated travel plans (“Tesla EV Charging Stations on the way to Palo Alto, CA”).</p>
            <p>• Integration of Yelp API for localized place ratings drove over 1500 unique page visits during the launch month.</p>
            <p>• Average session duration of 4.5 minutes, primarily from CSUN's professors and academic community.</p>
            <p>• Implemented industry-grade security: 2FA, hashing, email verification, proxy detectors, and DDOS protection.</p>
            <p>• Integrated third-party SSO options for authentication as well as JSON web tokens to replace sessions.</p>
            <p>• Managed Agile development with Git, Jira, and Docker whilst utilizing PHPUnit for robust backend unit testing.</p>
        </div>
    </details>

</details>

<details>
    <summary class="dropdown"><b>Systems Integrator</b> | Freelance<br>5/2018 - 11/2020</summary>
    <div class="dropdown-content">
        <p>• Built and upgraded 100+ systems; Met specifications of 48+ clients within tight budget and time constraints.</p>
        <p>• Utilized equipment like multimeters, oscilloscopes, and EEPROM programmers for precise debugging.</p>
        <p>• Developed a software suite for CPU, FPU, and RAM stability testing in C, PowerShell, Python, & Bash.</p>
        <p>• Contributed to open-source core-by-core test software for AMD Zen 3 architecture (corecycler by sp00n).</p>
        <p>• Achieved a 100% system stability rate, resulting in 0 reported system failures after deployment.</p>
    </div>
</details>
`;
