export const experienceStyles = `
#Experience {
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 100%;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

#info {
    font-size: 1.05em;
    text-align: left;
    width: 100%;
}

.experience-header {
    width: 92%;
    max-width: 760px;

    margin: auto;
    margin-bottom: 35px;

    padding: 28px;

    border-left: 4px solid #444;

    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.04),
        rgba(0, 0, 0, 0.015)
    );

    border-radius: 14px;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.experience-header h1 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #111;
    text-align: center;
}

.experience-summary {
    margin-top: 16px;
    font-size: 1rem;
    line-height: 1.9;
    color: #555;

    overflow-wrap: break-word;
    word-break: break-word;
}

details {
   

    min-width: 300px;
    max-width: 760px;

    margin: 16px auto;

    border-radius: 14px;
    overflow: hidden;

    border: 0px solid rgba(0, 0, 0, 0.08);

    background: #fff;

    transition:
        box-shadow 0.2s ease,
        border-color 0.2s ease;

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
}

details:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
}

.dropdown {
    padding: 22px 28px;

    font-size: 1rem;
    line-height: 1.7;

    cursor: pointer;
    list-style: none;

    text-align: center;

    background: linear-gradient(
        to right,
        #ffffff,
        #f6f6f6
    );

    transition: background 0.2s ease;
}

.dropdown::-webkit-details-marker {
    display: none;
}

.dropdown b {
    display: block;

    margin-bottom: 8px;

    font-size: 1.08rem;
    font-weight: 700;

    color: #111;
}

.sub {
    font-size: 0.9em;
}

.dropdown:hover {
    background: #f7f7f7;
}

.dropdown-content {
    width: 100%;

    padding: 0 24px 24px 24px;

    box-sizing: border-box;
}

.dropdown-content p {
    color: #4b4b4b;

    line-height: 1.85;

    margin-top: 0;
    margin-bottom: 16px;

    font-size: 0.98rem;
}

.section-title {
    width: 92%;
    max-width: 760px;

    margin: 55px auto 20px auto;

    font-size: 1.8rem;
    font-weight: 700;

    color: #111;
}

#dt-link,
#minecraft-link,
#java_c-link {
    color: #222;
    text-decoration: underline;
}

summary {
    cursor: pointer;
}

.dropdown:focus,
summary:active,
summary:focus {
    background-color: #f8f8f8 !important;
    outline: none;
}

/* Smooth dropdown animation */

details[open] .dropdown-content {
    animation: fadeIn 0.25s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */

@media (max-width: 768px) {
    body {
        overflow-x: hidden;
    }

    .experience-header,
    .section-title {
        width: 95%;
        max-width: 95%;
    }

    .experience-header {
        padding: 22px;
    }

    .experience-header h1 {
        font-size: 2rem;
    }

    details {
        width: 95%;

        min-width: unset;
        max-width: 95%;
    }

    .dropdown {
        padding: 18px;
    }

    .dropdown-content {
        padding: 0 18px 18px 18px;
    }
}

.dropdown-content ul {
    margin: 0;
    margin-top: 15px;

    padding: 0;

    list-style: none;
    width: 100%;
}

.dropdown-content li {
    position: relative;

    padding-left: 28px;

    margin-bottom: 18px;

    line-height: 1.85;

    color: #4b4b4b;

    text-align: left;

    width: 100%;

    white-space: normal;

    overflow-wrap: break-word;
    word-break: break-word;
}

.dropdown-content li::before {
    content: "•";

    position: absolute;

    left: 0;
    top: 0.05em;

    font-size: 1.1rem;
    line-height: 1.85;

    color: #222;
}
`;