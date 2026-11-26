// Contact form

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    formMessage.style.color = "green";

    form.reset();

});