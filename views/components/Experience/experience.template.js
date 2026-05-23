export const experienceTemplate = `
<div class="experience-header">
    <h1>Experience</h1>

    <p class="experience-summary">
        Senior Application Developer specializing in .NET, Blazor, enterprise workflow automation, and cloud-integrated internal platforms.
        Experienced delivering secure, scalable solutions across large government organizations supporting operational modernization,
        process automation, and public-facing systems.
    </p>
</div>

<details>
    <summary class="dropdown">
        <b>Senior Application Developer</b><br>
        LA County Board of Supervisors<br>
        <span class="sub">3/2025 – Present</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Led modernization of the Assessment Appeals Board’s eForms ecosystem using Blazor and enterprise service integrations,
                reducing hearing processing time by 60% through workflow automation and system consolidation.
            </li>

            <li>
                Designed and developed a secure Board Correspondence platform leveraging Box CCG, Entra ID SSO,
                and custom MSSQL role-based authorization to support cross-departmental document governance and access control.
            </li>

            <li>
                Architected and delivered enterprise Power Platform solutions integrated with enterprise ITSM workflows,
                automating request intake and approval routing across 30+ Board of Supervisors divisions.
            </li>

            <li>
                Engineered a .NET SendGrid notification microservice to automate cross-county transactional communications.
            </li>
        </ul>
    </div>
</details>

<details>
    <summary class="dropdown">
        <b>Application Developer II</b><br>
        LA County Board of Supervisors<br>
        <span class="sub">6/2024 – 3/2025</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Modernized Board Meeting software supporting weekly public meetings serving Los Angeles County’s 10M+ residents
                by engineering modern .NET/SQL based solutions to reduce legacy code dependencies by 50%.
            </li>

            <li>
                Managed CI/CD pipelines and version control workflows for Vue.js applications integrated with Kontent.ai CMS.
            </li>

            <li>
                Spearheaded migration of legacy webhook infrastructure ahead of vendor deprecation timelines,
                coordinating testing and rollout efforts to ensure uninterrupted integrations and zero critical service disruptions during transition.
            </li>

            <li>
                Led development of a Blazor and MSSQL self-service platform enabling internal teams to manage operational data updates independently,
                reducing developer support workload by approximately 15%.
            </li>

            <li>
                Prototyped AI-driven workflow automation tools for executive operations using the OpenAI Assistants API.
            </li>
        </ul>
    </div>
</details>

<details>
    <summary class="dropdown">
        <b>IT Analyst I</b><br>
        LA County Board of Supervisors<br>
        <span class="sub">4/2024 – 6/2024</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Resolved enterprise technical issues through FootPrints in collaboration with Application Development,
                Cloud Operations, and Infrastructure teams.
            </li>

            <li>
                Managed endpoint compliance and device deployments using Active Directory and Microsoft Intune.
            </li>

            <li>
                Automated device imaging and provisioning with batch scripting to improve deployment efficiency.
            </li>
        </ul>
    </div>
</details>

<details>
    <summary class="dropdown">
        <b>Multimedia Technology Lead</b><br>
        Glendale Unified School District<br>
        <span class="sub">9/2022 – 4/2024</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Built a cloud-based media distribution solution using Google Cloud Storage by digitizing educational DVD content,
                reducing annual licensing costs by $1K+ while improving accessibility across district classrooms.
            </li>
        </ul>
    </div>
</details>

<h1>Freelance Work</h1>

<details>
    <summary class="dropdown">
        <b>Full Stack Developer</b><br>
        Don’t Trip<br>
        <span class="sub">5/2020 – 2/2023</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Built and maintained a production full-stack travel platform using PHP, JavaScript, MySQL,
                and Google Maps APIs, serving 1,500+ users with personalized route recommendation features.
            </li>

            <li>
                Engineered secure authentication and API protection mechanisms including JWT authentication,
                2FA, CSRF/XSS mitigation, rate limiting, and SQL injection prevention.
            </li>

            <li>
                Managed containerization, deployment, and infrastructure using Docker, Git, Ansible,
                Swagger/OpenAPI, and Linux-based LEMP environments.
            </li>
        </ul>
    </div>
</details>

<details>
    <summary class="dropdown">
        <b>Jr. Database Admin</b><br>
        KB Nursery<br>
        <span class="sub">5/2018 – 11/2020</span>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Managed RDBMS infrastructure, optimizing performance efficiency and ensuring continuous availability
                through backup, recovery, and replication strategies.
            </li>

            <li>
                Provided technical support and training documentation while utilizing monitoring tools like Datadog
                to maintain database health and stability.
            </li>
        </ul>
    </div>
</details>

<details>
    <summary class="dropdown">
        <b>Personal Projects</b>
    </summary>

    <div class="dropdown-content">
        <ul>
            <li>
                Currently developing the IoT Environment Analysis API, a REST API for data analysis documented with Swagger
                and tested using J-Unit. The platform receives JSON payloads from ESP32 MCUs, stores them in MySQL,
                and leverages Redis caching, schema normalization, and pagination to reduce API response latency
                by approximately 50 ms per 100 KB response size.
            </li>

            <li>
                Additional projects include cloud-based music streaming microservices,
                in-home server automation software, custom firmware and interfaces for TTL-based DRAM chips,
                and experimental database replication strategies.
            </li>
        </ul>
    </div>
</details>
`;