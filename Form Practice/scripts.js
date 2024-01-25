// Constraint API
document.addEventListener("DOMContentLoaded", (event) => {
  const sampleForm = document.getElementById("sample-form");
  const emailInput = document.getElementById("email-input");
  const countryInput = document.getElementById("country-input");
  const zipcodeInput = document.getElementById("zipcode-input");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordInput = document.getElementById(
    "confirm-password-input"
  );
  const inputs = [
    emailInput,
    countryInput,
    zipcodeInput,
    passwordInput,
    confirmPasswordInput,
  ];

  sampleForm.addEventListener("submit", function (e) {
    inputs.forEach((input) => {
      console.log(input);
      if (!input.validity.valid) {
        e.preventDefault();
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  });

  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Please provide a properly formatted e-mail address.");
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity("");
    }
  });

  zipcodeInput.addEventListener("input", function () {
    if (zipcodeInput.validity.patternMismatch) {
      zipcodeInput.setCustomValidity("Zipcode must be 5 digits long");
      zipcodeInput.reportValidity();
    } else {
      zipcodeInput.setCustomValidity("");
    }
  });
});
