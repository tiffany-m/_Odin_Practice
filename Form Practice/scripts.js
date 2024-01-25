// Constraint API
// Def JS methods for applying and managing constraints on HTML form inputs, enabling custom validation beyond the browser's default capabilities.

// Good reference video https://www.youtube.com/watch?v=D9JHizCAx8U&t=112s

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

// validationMessage - readonly prop from browser validation or setCustomValidity( ) method

// checkValidity() checks element, returns boolean, fires the invalid event

// reportValidity() checks AND reports result this shows the browser tooltip with warning, can be called at any point to show message

// setCustomValidity(msg) if called with non-empty string it will change value of validity.valid to false and validity.customError to true,
//    need to use with reportValidity() for message to show in browser, otherwise just saves to object

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
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please enter a valid email address.");
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity("");
  }
});

countryInput.addEventListener("input", function () {
  if (countryInput.validity.patternMismatch) {
    countryInput.setCustomValidity("Please enter a valid country name.");
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

  if (validityMessage !== "") {
    passwordInput.setCustomValidity(validityMessage);
  } else {
    passwordInput.setCustomValidity("");
  }

  passwordInput.reportValidity();
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
