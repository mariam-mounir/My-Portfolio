const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});




const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("form-message");

    if (name === "") {
        message.textContent = "Please enter your name!";
        message.style.color = "red";
    }

    else if (email === "") {
        message.textContent = "Please enter your email!";
        message.style.color = "red";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "red";
    }

    else {
        message.textContent = "Thank you! Your message has been received.";
        message.style.color = "green";

        contactForm.reset();
    }

});