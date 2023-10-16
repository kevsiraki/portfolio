// Create an EducationSection component
class EducationSection {
    constructor() {
        this.sectionElement = document.getElementById('Education');
    }

    render() {
        const sectionContent = `
		<style>
			/* Info styles */
			#info {
				font-size: 1.1em;
			}
			
			/* Dropdown styles */
			.dropdown4, .dropdown5, .dropdown6, #details {
				padding: 1px;
			}
			
			.dropdown-content4 p, .dropdown-content5 p, .dropdown-content6 p{
				color: black ;
				width: 75%;
				margin-left: auto;
				margin-right: auto;
				text-align: justify-center;
			}
			
			.dropdown3,
            .dropdown4,
            .dropdown5,
			.dropdown-content3,.dropdown-content4,.dropdown-content5,
            #details {
               margin-bottom: 25px;
            }
			
			/* Dropdown hover styles */
			.dropdown4:hover, .dropdown5:hover, .dropdown6:hover, #info:hover, #details:hover {
				color: black ;
			}
			
			/* Details styles */
			#details {
				max-width: 95%;
				margin-left: auto;
				margin-right: auto;
			}
			
			.arrow4, .arrow5, .arrow6 {
				font-size: 14px
			}
		</style>
		<h1>Education</h1>
		<p class="dropdown4"><span class="arrow4">&#9660;</span><em>CSUN | Computer Science B.S.</em><br>8/2020 - 5/2022<br>3.95 GPA | Magna Cum Laude</p>
		<div class="dropdown-content4">
			<p>• Awarded Northrop Foundation Endowed Scholarship.</p>
			<p>• Tutored fellow students in Functional Programming with excellent results.</p>
		</div>
		<p class="dropdown5"><span class="arrow5">&#9660;</span><em>GCC | Computer Science Transfer</em><br>8/2017 - 6/2020<br>3.70 GPA | Dean's List</p>
		<div class="dropdown-content5">
			<p>• Part-time Data Structures tutor, students made significant grade improvements.</p>
		</div>

    `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the EducationSection component and render it
const educationSection = new EducationSection();
educationSection.render();