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

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let formData = new FormData(form);

  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: formData
    });

    if (response.ok) {
      form.reset(); // clear the form
      message.style.display = "block";
      error.style.display = "none";
    } else {
      throw new Error("Form submission failed");
    }
  } catch (err) {
    message.style.display = "none";
    error.style.display = "block";
  }
});
function myfun(){
  alert("Thanks to connect with me!");
}
