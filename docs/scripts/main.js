const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneNumberInput');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    console.log('Send button clicked');
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;

    var mail = document.createElement("a");
    mail.target = "_blank";
    mail.href = `mailto:${email}?subject=Message from ${name}&body=${message} - ${phone}`;
    mail.click();

});