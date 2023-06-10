// Create a Header component
class Header {
    constructor() {
        this.headerElement = document.getElementById('header');
    }

    render() {
        const headerContent = `
        <style>
            header {
                padding-top: 25px;
				padding-bottom: 25px;
                background-color: #F5F5F5;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
                box-shadow: -12px -8px 15px 0px #000;
            }

            /* Name styles */
            .name h1 {
                font-family: 'Open Sans', sans-serif;
                font-size: 2em;
                text-align: center;
            }

            .name h1 em {
                color: rgba(0, 0, 0, .5);
                font-style: normal;
                font-weight: 700;
            }
            .name p {
                color: rgba(0, 0, 0, .75);
                font-size: .75em;
                line-height: 1.5;
                margin: 0 8px 0 0;
                text-align: center;
            }
        </style>
        <div class="name">
            <h1 class="name-heading">Kevin <em>Siraki</em></h1>
            <p>
                &nbsp;&nbsp;<a href="#Experience"><i class="fa-solid fa-briefcase"></i>&nbsp;Experience</a>&nbsp;
                <a href="#Education"><i class="fa-solid fa-school"></i>&nbsp;Education</a>&nbsp;
                <a href="#Skills"><i class="fa-solid fa-hammer"></i>&nbsp;Skills</a>&nbsp;
                <a href="#Contact"><i class="fa-solid fa-address-card"></i>&nbsp;Contact</a>
            </p>
        </div>
        `;
        this.headerElement.innerHTML = headerContent;
    }
}

// Instantiate the Header component and render it
const header = new Header();
header.render();

// Smooth Scroll
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const targetOffsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: targetOffsetTop - headerHeight + 25,
            behavior: 'smooth'
        });
    });
});

// Get the header container element
const headerContainer = document.querySelector('.name-heading');

// Listen for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerContainer.innerText = "";
    } else {
        headerContainer.innerHTML = "Kevin <em>Siraki</em>";
    }
});

// JavaScript code to handle Safari orientation change
window.addEventListener('orientationchange', function() {
	if (navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i)) {
		setTimeout(function() {
			document.querySelector('.name p').style.fontSize = '0.50em';
			document.querySelectorAll('.fa-solid')[0].style.fontSize = '1.5em';
			document.querySelectorAll('.fa-solid')[1].style.fontSize = '1.5em';
			document.querySelectorAll('.fa-solid')[2].style.fontSize = '1.5em';
			document.querySelectorAll('.fa-solid')[3].style.fontSize = '1.5em';
		}, 500);
	}
});
