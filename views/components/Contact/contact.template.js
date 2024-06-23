export const contactTemplate = `
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
        <input type="button" class="hover-effect" value="Send" id="form_button"/>
    </div>
</form>
</div>
`;
