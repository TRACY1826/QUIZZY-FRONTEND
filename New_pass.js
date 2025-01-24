// Selecting the necessary DOM elements
const newPasswordInput = document.getElementById("new-password"); // What: Target the new password input. Why: To validate user input.
const confirmPasswordInput = document.getElementById("confirm-password"); // What: Target the confirm password input. Why: To check if it matches the new password.
const verifyButton = document.querySelector("button[type='submit']"); // What: Select the Verify Code button. Why: To enable submission on valid inputs.
const passwordToggle = document.querySelector(".password-toggle"); // What: Target the eye icon. Why: To toggle password visibility.

// Function to toggle password visibility
passwordToggle.addEventListener("click", () => {
    const type = newPasswordInput.type === "password" ? "text" : "password"; // What: Toggle input type. Why: To switch between text and password.
    newPasswordInput.type = type;
    confirmPasswordInput.type = type;
    passwordToggle.textContent = type === "password" ? "👁️" : "👁"; // What: Change icon. Why: To reflect visibility state.
});

// Adding input validation
verifyButton.addEventListener("click", (e) => {
    e.preventDefault(); // What: Prevent form submission. Why: To validate inputs first.

    const newPassword = newPasswordInput.value; // What: Get entered password. Why: To validate it.
    const confirmPassword = confirmPasswordInput.value; // What: Get confirm password. Why: To compare it with the new password.

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!"); // What: Show an alert. Why: To inform user about mismatch.
        return;
    }

    // Check for 12-character limit
    if (newPassword.length > 12) {
        alert("Password should not exceed 12 characters!"); // What: Alert for length limit. Why: To enforce the rule.
        return;
    }

    // Check for letters, symbols, and numbers
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,12}$/; // What: Regex pattern. Why: To enforce complexity rules.
    if (!passwordPattern.test(newPassword)) {
        alert("Password must include letters, symbols, and numbers!"); // What: Alert for invalid password. Why: To meet security requirements.
        return;
    }

    // If all checks pass
    alert("Password is valid and verified!"); // What: Show success message. Why: To confirm validation.
});
