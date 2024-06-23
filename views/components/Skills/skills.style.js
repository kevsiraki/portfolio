export const skillsStyles = `
#Skills {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#Skills .dropdown {
    margin-top: 0px;
    font-size: 24px;
}

#Skills .sub-dropdown {
    margin-top: 0px;
    font-size: 20px;
}

ul {
    padding: 0;
    text-align: center;
    max-width: 1000px;
    margin: auto;
}

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

.skill-set li:hover {
    transform: translate(5px, -5px);
}

.skill-set li:not(.hover-item) {
    cursor: default;
}


`;
