// Create an EducationSection component
class EducationSection {
    constructor() {
        this.sectionElement = document.getElementById('Education');
    }

    render() {
        const sectionContent = `
        <style>
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
            .dropdown5,
			.dropdown6 {
                padding: 1px;
                text-align: center; /* Center the text */
            }

            /* Hover styles */
            .dropdown5:hover,
			.dropdown6:hover,
            #info:hover {
                color: black;
            }

            .dropdown-content5,
			.dropdown-content6 
			{
				width: 85%;
            }

            .dropdown-content5 p,
			.dropdown-content6 p {
                color: black;
                text-align: left; /* Left-justify the text */
            }

			.arrow5, 
			.arrow6 {
                font-size: 14px;
            }
			
			@media only screen and (min-width: 768px) {
				.dropdown-content5,
				.dropdown-content6 {
					width: 65%; /* Adjust the width for larger screens */
				}
			}
        </style>
		<h1>Education</h1>
		<p class="dropdown5"><span class="arrow5">&#9660;</span><em><b>Computer Science B.S.</b> | CSUN</em><br>8/2020 - 5/2022<br>3.95 GPA | Magna Cum Laude</p>
		<div class="dropdown-content5">
			<p>• Awarded 2 Northrop Foundation Endowed Scholarships for excellent academic achievement and essay.</p>
			<p>• Tutored fellow students in Functional Programming, yielding excellent results and positive feedback.</p>
		</div>
		<p class="dropdown6"><span class="arrow6">&#9660;</span><em><b>Computer Science Transfer</b> | GCC</em><br>8/2017 - 6/2020<br>3.70 GPA | Dean's List</p>
		<div class="dropdown-content6">
			<p>• Part-time Data Structures and Algorithms tutor; Students made significant grade improvements by finals.</p>
			<p>• Participated in a hackathon with fellow students where I showcased my 6502 computer, winning 1st place.</p>
		</div>
    `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the EducationSection component and render it
const educationSection = new EducationSection();
educationSection.render();