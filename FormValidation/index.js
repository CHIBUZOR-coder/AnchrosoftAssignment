// Toggle password visibility
document
  .getElementById("showPassword")
  .addEventListener("change", function (e) {
    const passwordField = document.getElementById("password");
    if (e.target.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });

// Form validation
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Clear any previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Validate username
    const username = document.getElementById("username").value;
    if (!username) {
      document.getElementById("usernameError").textContent =
        "Username is required";
      isValid = false;
    }

    // Validate password
    const password = document.getElementById("password").value;
    const uppercasePattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password) {
      document.getElementById("passwordError").textContent =
        "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters or more";
      isValid = false;
    } else if (password.charAt(0) !== password.charAt(0).toUpperCase()) {
      document.getElementById("passwordError").textContent =
        "Password must start with a capital letter";
      isValid = false;
    } else if (!uppercasePattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!specialCharacterPattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must contain at least one special character";
      isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
      alert("Form submitted successfully!");
     
    }
  });
