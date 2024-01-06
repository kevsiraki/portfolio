export const contactStyles = `
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
    border-radius: 25px;
    box-shadow: 0 0 5px #ccc;
    border: 1px solid #f5f5f5;
    background-size: cover;
    margin-bottom: 75px;
    margin-top: 25px;
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
    border-radius: 15px;
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

.wiggle-element {
    animation: wiggle 1s linear infinite;
}

@keyframes wiggle {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    50% {
        transform: translateX(5px);
    }
    75% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

/* Fluctuating size animation for the button text */
@keyframes textFluctuateSize {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
`;
