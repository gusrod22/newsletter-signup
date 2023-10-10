const input = document.querySelector("input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const error = document.querySelector(".error");
  if (!input.value) {
    error.style.display = "block";
    input.classList.add("error-input");
  } else if (input.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(input.value);
    if (!isEmailValid) {
      error.style.display = "block";
      input.classList.add("error-input");
    } else {
      error.style.display = "none";
      input.classList.remove("error-input");
    }
  }
});

function removeErrorClass() {
  input.classList.remove("error-input");
}

input.addEventListener("input", removeErrorClass);
