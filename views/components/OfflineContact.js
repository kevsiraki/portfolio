// Create a ContactSection component
class ContactSection {
    constructor() {
        this.sectionElement = document.getElementById('Contact');
    }

    render() {
        const sectionContent = `
        <style>
            /* Container styles */
            #container {
                padding: 20px;
                border-radius: 6px;
                box-shadow: 0 0 5px #ccc;
                border: 1px solid #D3D3D3;
                background-size: cover;
				margin-bottom: 75px;
				margin-top: 75px;
				margin-left: auto;
				margin-right: auto;
				width: 85%;
            }
        </style>
        <div id="container">
            <h3>Looks Like You're Offline!  Please Check Your Internet Connection And Try Again.</h3>
            </form>
        </div>
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the ContactSection component and render it
const contactSection = new ContactSection();
contactSection.render();
