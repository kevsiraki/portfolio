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
	</style>
    <div>
		<div>
			<p><a href="mailto:kevsiraki@gmail.com"><i class="fa fa-envelope"></i>&nbsp;kevsiraki@gmail.com</a></p>
			<a href="https://github.com/kevsiraki" target="_blank"><i class="fab fa-github"></i>&nbsp;GitHub</a>
			&nbsp;
			<a href="http://donttrip.org" target="_blank"><i class="fa-solid fa-mountain"></i>&nbsp;Don't Trip</a>
        </div>
        <br>
        <p><i class="fa-solid fa-map"></i>&nbsp;Glendale, CA</p>
        <div>&copy; 2023 All rights reserved.</div>
    </div>
    `;

    this.footerElement.innerHTML = footerContent;
  }
}

// Instantiate the Footer component and render it
const footer = new Footer();
footer.render();