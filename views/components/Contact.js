// Create a ContactSection component
class ContactSection {
    constructor() {
        this.sectionElement = document.getElementById('Contact');
    }

    render() {
        const sectionContent = `
        <style>
            /* Button styles */
            button {
                overflow: visible;
            }

            button, select {
                text-transform: none;
            }

            button, input, select, textarea {
                color: #5A5A5A;
                font: inherit;
                margin: 0;
            }

            input {
                line-height: normal;
            }

            textarea {
                overflow: auto;
            }

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

            /* Form styles */
            form {
                padding: 0px;
                margin: 50px 0;
            }

            /* Underline styles */
            .underline {
                border-bottom: solid 2px #474544;
                margin: -0.512em auto;
                width: 80px;
            }

            /* Input styles */
            input[type='text'], [type='email'], select, textarea {
                background: none;
                border: none;
                border-bottom: solid 2px #474544;
                color: #474544;
                font-size: 1.000em;
                font-weight: 400;
                letter-spacing: 1px;
                margin: 0em 0 1.875em 0;
                padding: 0 0 0.875em 0;
                width: 100%;
                box-sizing: border-box;
                transition: all 0.3s;
            }

            /* Input focus styles */
            input[type='text']:focus, [type='email']:focus, textarea:focus {
                outline: none;
                padding: 0 0 0.875em 0;
            }

            /* Message styles */
            .message {
                float: none;
            }

            /* Textarea styles */
            textarea {
                line-height: 150%;
                height: 150px;
                resize: none;
                width: 100%;
            }

            /* Input placeholder styles */
            ::-webkit-input-placeholder {
                color: #474544;
            }

            :-moz-placeholder {
                color: #474544;
                opacity: 1;
            }

            ::-moz-placeholder {
                color: #474544;
                opacity: 1;
            }

            :-ms-input-placeholder {
                color: #474544;
            }

            /* Form button styles */
            #form_button {
                background: none;
                border: solid 2px #474544;
                color: #474544;
                cursor: pointer;
                display: inline-block;
                font-family: 'Helvetica', Arial, sans-serif;
                font-size: 0.875em;
                font-weight: bold;
                outline: none;
                padding: 20px 35px;
                transition: all 0.3s;
            }

            /* Form button hover styles override */
            .hover-effect:hover {
                background: #474544 !important;
                color: #F2F3EB !important;
            }

            #char_counter {
                float: right;
                font-size: 12px;
                margin-top: -20px;
            }
        </style>
        <div id="container">
            <h1>Contact Me</h1>
            <div class="underline"></div>
            <form id="contact_form">
                <div class="name">
                    <label for="name"></label>
                    <input type="text" placeholder="Name" name="name" id="name_input" required>
                </div>
                <div class="email">
                    <label for="email"></label>
                    <input type="email" placeholder="Email" name="email" id="email_input" required>
                </div>
                <div class="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="Your Message" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div id="char_counter"></div>
                <br>
                <div class="submit">
                    <input type="button" class="hover-effect" value="Send" id="form_button" />
                </div>
            </form>
        </div>
        `;
        this.sectionElement.innerHTML = sectionContent;
    }
}

// Instantiate the ContactSection component and render it
const contactSection = new ContactSection();
contactSection.render();

// Get the button and input field references
const contactForm = document.getElementById('contact_form');
const button = document.getElementById('form_button');
const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const messageInput = document.getElementById('message_input');
const charCounter = document.getElementById("char_counter");

// Function to validate email
const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

// Function to set input field style based on validity
const setInputFieldStyle = (inputField, isValid) => {
    if (isValid) {
        inputField.style.borderBottom = "2px solid #90EE90";
    } else {
        inputField.style.borderBottom = "2px solid #FFCCCB";
    }
};

// Function to send the JSON data
const sendData = async () => {
    // Reset input field styles
    setInputFieldStyle(nameInput, true);
    setInputFieldStyle(emailInput, true);
    setInputFieldStyle(messageInput, true);

    // Get the input values
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Create the JSON data object
    const data = {
        name,
        email,
        message
    };

    // Validate inputs
    let isValid = true;

    if (name.trim() === "") {
        setInputFieldStyle(nameInput, false);
        isValid = false;
    }

    if (email.trim() === "" || !isValidEmail(email)) {
        setInputFieldStyle(emailInput, false);
        isValid = false;
    }

    if (message.trim() === "" || message.length>2000) {
        setInputFieldStyle(messageInput, false);
        isValid = false;
    }

    try {
        // Make the fetch request
        const response = await fetch('https://www.kevinsiraki.com/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Handle the response
        const result = await response.json();
        console.log(result);

        if (response.ok) {
            setButtonStyle('#FFD580', 'Sending...');
            setButtonDisabled(true);
            setTimeout(() => {
                contactForm.innerHTML = result.message;
				container.style.boxShadow = "0 0 1px 1px #90EE90";
            }, 2000);
        } else {
            setButtonDisabled(true);
            setButtonStyle('#FFCCCB', result.message);
            // Reset button style after 3 seconds
            setTimeout(() => {
                setButtonDisabled(false);
                setButtonStyle('#474544', 'Send');
            }, 2000);
        }
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
    }
};

// Message length counter
messageInput.addEventListener("input", function() {
    const message = this.value;
    const remainingChars = 2000 - message.length;
    charCounter.textContent = remainingChars + " characters remaining";
    if (remainingChars <= 255) {
        charCounter.style.color = "red";
    } else {
        charCounter.style.color = "black";
    }
	setInputFieldStyle(messageInput, message.trim() !== "" && message.length<=2000);
});

// Event listeners for name and email inputs
nameInput.addEventListener("input", function() {
    setInputFieldStyle(nameInput, this.value.trim() !== "");
});

emailInput.addEventListener("input", function() {
    setInputFieldStyle(emailInput, this.value.trim() !== "" && isValidEmail(this.value));
});

// Function to set button style and value
const setButtonStyle = (borderColor, value) => {
    button.style.border = `solid 2px ${borderColor}`;
    button.value = value;
};

// Function to disable button
const setButtonDisabled = (disabled) => (button.disabled = disabled) ? button.classList.remove("hover-effect") : button.classList.add("hover-effect");

// Add event listener to the button
button.addEventListener('click', sendData);
