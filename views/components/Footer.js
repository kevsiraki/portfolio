// Create a Footer component
class Footer {
  constructor() {
    this.footerElement = document.getElementById('footer');
  }

  render() {
    const footerContent = `
	<style>
		footer {
			padding: 25px;
			background-color: #F5F5F5;
			box-shadow: 5px 5px 10px black;
		}
		#hardware {
			margin-left: auto;
			margin-right: 0;
		}
	</style>
    <div>
		<div>
			<p> <a href="views/Kevin Siraki Resume.pdf" download>Downlod Resume</a>  </p>
			<p><a href="mailto:kevsiraki@gmail.com"><i class="fa fa-envelope"></i>&nbsp;kevsiraki@gmail.com</a></p>
			<p>
				<a href="https://github.com/kevsiraki" target="_blank"><i class="fab fa-github"></i>&nbsp;GitHub</a>&nbsp;
				<a href="http://donttrip.org" target="_blank"><i class="fa-solid fa-mountain"></i>&nbsp;Don't Trip</a>
			</p>
        </div>
        <div>&copy; 2023 All rights reserved.  <div id = "hardware"><sub><small><a target="_blank" href="https://donttrip.org/hardware" download>About The Server</a></small></sub></div> </div>
    </div>
    `;
    this.footerElement.innerHTML = footerContent;
  }
}

// Instantiate the Footer component and render it
const footer = new Footer();
footer.render();