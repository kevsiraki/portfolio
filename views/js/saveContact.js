let saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
    // Get the contact information from the website
    let contact = {
        name: "Kevin Siraki",
        phone: "818-940-6022",
        email: "kevsiraki@gmail.com"
    };
    // Create a vCard file
    let vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
    let blob = new Blob([vcard], { type: "text/vcard" });
    let url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
});
