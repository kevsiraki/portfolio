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
				color: black !important;
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
				color: black !important;
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
		<p class="dropdown4"><span class="arrow4">&#9660;</span><em>CSU Northridge | Computer Science B.S.</em><br>8/2020 - 5/2022<br>3.95 GPA | Magna Cum Laude</p>
		<div class="dropdown-content4">
			<p>- Awarded Northrop Foundation Endowed Departmental Scholarship for academic excellence.</p>
			<p>- Tutored 4 fellow students in a Functional Programming course.</p>
			<p>- All grades at the end of their research project resulted in an A- or above.</p>
		</div>
		<p class="dropdown5"><span class="arrow5">&#9660;</span><em>GCC | Computer Science Transfer</em><br>8/2017 - 6/2020<br>3.70 GPA | Dean's List</p>
		<div class="dropdown-content5">
			<p>- Tutored students in Data Structures with C++.</p>
			<p>- Students went from a C grade level to As/Bs by finals.</p>
		</div>
		<p class="dropdown6"><span class="arrow6">&#9660;</span><em>Crescenta Valley High School | Diploma</em><br>9/2013 - 6/2017<br>3.70 GPA</p>
		<div class="dropdown-content6">
			<p>- Committee for Armenian Students in Public Schools award for outstanding GPA</p>
			<p>- Participated in the Robotics competition in freshman year.</p>
		</div>
    `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the EducationSection component and render it
const educationSection = new EducationSection();
educationSection.render();