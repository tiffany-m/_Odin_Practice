// Constraint API
// Definition: JS methods for applying and managing constraints on HTML form inputs, enabling custom validation beyond the browser's default capabilities,
// can make custom messages.

// Good reference video https://www.youtube.com/watch?v=D9JHizCAx8U&t=112s

// ***I added "novalidate" attribute to HTML form element to disables browser's native form validation, useful in situations where you want to handle
// validation yourself with custom logic in JS

// NOTES
// validity readonly property - a ValidityState object, use console.log(element.vaidity) to see.
// ValidityState object props: (Boolean values)
// { badInput: false;
// customError: false;
// patternMismatch: false;
// rangeOverflow: false;
// rangeUnderflow: false;
// stepMismatch: false;
// tooLong: false;
// tooShort: false;
// typeMismatch: false;
// valid: false; // everything must be false for this to be true
// valueMissing: true; }

// checkValidity(): This method is used to check if an element's value complies with its constraints. It returns a boolean value – true if the element's value is valid according to its constraints (like required, min, max, pattern etc.), and false otherwise. example element.validity.typeMismatch

// reportValidity(): This method also checks the validity of an element's value. However, in addition to returning a boolean value like checkValidity(), it also triggers the display of an error message (if any) to the user.

// setCustomValidity(msg) if called with non-empty string it will change value of validity.valid to false and validity.customError to true,
// need to use with reportValidity() for message to show in browser, otherwise just saves to object
// always set this to empty string to reset property to false so you arent stuck with something saying its failing after user has fixed it

const sampleForm = document.getElementById("sample-form");
const emailInput = document.getElementById("email-input");
const countryInput = document.getElementById("country-input");
const zipcodeInput = document.getElementById("zipcode-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");
const inputs = [
  emailInput,
  countryInput,
  zipcodeInput,
  passwordInput,
  confirmPasswordInput,
];

function updateValidity(input, message = "") {
  input.setCustomValidity(message);
  input.reportValidity();
}

function checkForRequiredDiv(input) {
  let errorDiv = input.parentElement.querySelector(".requiredErrorMsg");

  if (errorDiv.classList.contains("showRequiredErrorMsg")) {
    errorDiv.classList.remove("showRequiredErrorMsg");
  }
}

sampleForm.addEventListener("submit", function (e) {
  inputs.forEach((input) => {
    let errorDiv = input.parentElement.querySelector(".requiredErrorMsg");

    if (!input.validity.valid) {
      e.preventDefault();
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }

    if (!input.value) {
      e.preventDefault();
      if (errorDiv) {
        errorDiv.classList.add("showRequiredErrorMsg");
      }
    } else {
      if (errorDiv) {
        errorDiv.classList.remove("showRequiredErrorMsg");
      }
    }
  });
});

emailInput.addEventListener("input", () => {
  checkForRequiredDiv(emailInput);

  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please enter a valid email address.");
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity("");
  }
});

countryInput.addEventListener("input", function () {
  checkForRequiredDiv(countryInput);

  let formattedName =
    countryInput.value.charAt(0).toUpperCase() + countryInput.value.slice(1);

  countryInput.value = formattedName;
  if (countryInput.validity.patternMismatch) {
    countryInput.setCustomValidity("Please enter a valid country name.");
    countryInput.reportValidity();
  } else {
    countryInput.setCustomValidity("");
  }
});

zipcodeInput.addEventListener("input", function () {
  checkForRequiredDiv(zipcodeInput);

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

  checkForRequiredDiv(passwordInput);

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

  updateValidity(passwordInput, validityMessage);
});

confirmPasswordInput.addEventListener("input", function () {
  checkForRequiredDiv(confirmPasswordInput);

  const validityMessage =
    passwordInput.value !== confirmPasswordInput.value
      ? "Passwords do not match."
      : "";

  updateValidity(confirmPasswordInput, validityMessage);
});
