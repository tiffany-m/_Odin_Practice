// Constraint API
// NOTES:
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
      emailInput.setCustomValidity("Please enter a valid email address.");
      emailInput.reportValidity();
    } else {
      emailInput.setCustomValidity("");
    }
  });

  countryInput.addEventListener("input", function () {
    if (countryInput.validity.patternMismatch) {
      countryInput.setCustomValidity("Please eneter a valid country name.");
      countryInput.reportValidity();
    } else {
      countryInput.setCustomValidity("");
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

  passwordInput.addEventListener("input", function () {
    let password = passwordInput.value;
    let validityMessage = "";

    if (passwordInput.validity.patternMismatch) {
      if (!/[0-9]/.test(password)) {
        validityMessage += "At least one digit ([0-9]).\n";
      }
      if (!/[a-z]/.test(password)) {
        validityMessage += "At least one lowercase letter ([a-z]).\n";
      }
      if (!/[A-Z]/.test(password)) {
        validityMessage += "At least one uppercase letter ([A-Z]).\n";
      }
      if (password.length < 8) {
        validityMessage += "A minimum length of 8 characters.\n";
      }
      passwordInput.setCustomValidity(validityMessage);
      passwordInput.reportValidity();
    } else {
      passwordInput.setCustomValidity("");
    }
  });

  confirmPasswordInput.addEventListener("input", function () {
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      confirmPasswordInput.setCustomValidity("Passwords do not match.");
      confirmPasswordInput.reportValidity();
    } else {
      confirmPasswordInput.setCustomValidity("");
    }
  });
});
