export const educationStyles = `
#Education {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left; /* Left-justify the text within the component */
}

/* Info styles */
#info {
    font-size: 1.1em;
    text-align: left; /* Left-justify the text */
}

/* Dropdown styles */
.dropdown6,
.dropdown7 {
    padding: 1px;
    text-align: center; /* Center the text */
}

/* Hover styles */
.dropdown6:hover,
.dropdown7:hover,
#info:hover {
    color: black;
}

.dropdown-content6,
.dropdown-content7 
{
    width: 85%;
}

.dropdown-content6 p,
.dropdown-content7 p {
    color: black;
    text-align: left; /* Left-justify the text */
}

.arrow6, 
.arrow7 {
    font-size: 14px;
}

@media only screen and (min-width: 768px) {
    .dropdown-content6,
    .dropdown-content7 {
        width: 65%; /* Adjust the width for larger screens */
    }
}
`;
