// Create a ContactSection component

import { contactTemplate } from './contact.template.js';
import { contactStyles } from './contact.style.js';

class ContactSection {
    constructor() {
        this.sectionElement = document.getElementById('Contact');
    }

    render() {
        const sectionContent = `
            <style>${contactStyles}</style>
            ${contactTemplate}
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
        const response = await fetch('https://www.kevinsiraki.com/api/send-message', {
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
			button.style.animation = 'textFluctuateSize 1.5s infinite';
            setButtonDisabled(true);
            setTimeout(() => {
                contactForm.innerHTML = result.message;
				container.style.boxShadow = "0 0 1px 1px #90EE90";
            }, 2000);
        } else {
            setButtonDisabled(true);
            setButtonStyle('#FFCCCB', result.message);
			button.classList.add("wiggle-element");
            // Reset button style after 3 seconds
            setTimeout(() => {
                setButtonDisabled(false);
				button.classList.remove("wiggle-element");
                setButtonStyle('#474544', 'Send');
            }, 1500);
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