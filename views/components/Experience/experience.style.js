export const experienceStyles = `
#Experience {
    margin-top: 50px;
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
.dropdown1,
.dropdown2,
.dropdown3,
.dropdown4,
.dropdown5 {
    padding: 1px;
    text-align: center; /* Center the text */
}

/* Hover styles */
.dropdown1:hover,
.dropdown2:hover,
.dropdown3:hover,
.dropdown4:hover,
.dropdown5:hover,
#info:hover {
    color: black;
}

.dropdown-content1,
.dropdown-content2,
.dropdown-content3,
.dropdown-content4,
.dropdown-content5 {
    width: 85%;
}

.dropdown-content1 p,
.dropdown-content2 p,
.dropdown-content3 p,
.dropdown-content4 p,
.dropdown-content5 p {
    color: black;
    text-align: left; /* Left-justify the text */
}

.arrow1, 
.arrow2, 
.arrow3, 
.arrow4,
.arrow5 {
    font-size: 14px;
}

#dt-link, #minecraft-link, #java_c-link {
    color: blue;
}

@media only screen and (min-width: 768px) {
    .dropdown-content1,
    .dropdown-content2,
    .dropdown-content3,
    .dropdown-content4,
	.dropdown-content5	{
        width: 65%; /* Adjust the width for larger screens */
    }
}
`;
