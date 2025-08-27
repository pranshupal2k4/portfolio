const roles = ["Frontend Developer", "C++ Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  const typedText = document.querySelector(".typed-text");
  if (!typedText) return;
  current = roles[i];
  typedText.textContent = current.slice(0, j);

  if (!isDeleting && j < current.length) {
    j++; setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--; setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(type, 800);
  }
}
document.addEventListener("DOMContentLoaded", type);
const form = document.getElementById("contact-form");
const message = document.getElementById("mess-sent");
const error = document.getElementById("mess-error");


function myfun(){
  alert("Thanks to connect with me!");
}
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent normal form submission

    let name = document.getElementById("fname").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("sub").value;

    // Replace with your WhatsApp number (with country code, no "+" or leading zeros)
    let phoneNumber = "9026855032";  

    let whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });
