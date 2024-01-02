export const skillsStyles = `
/* List styles */
ul {
    padding: 0;
    text-align: center;
    max-width: 1000px;
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
`;
