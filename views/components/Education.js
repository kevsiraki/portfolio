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
				width: 95%;
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
			
            .dropdown-content4 ,
            .dropdown-content5  {
				width: 95%;
				margin: auto;
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
