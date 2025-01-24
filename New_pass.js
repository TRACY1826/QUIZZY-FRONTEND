// here i am Selecting DOM elements
const newPasswordInput = document.getElementById("new-password"); 
const confirmPasswordInput = document.getElementById("confirm-password"); 
const verifyButton = document.querySelector("button[type='submit']"); 
const passwordToggle = document.querySelector(".password-toggle"); 

// Function to toggle password visibility
passwordToggle.addEventListener("click", () => {
    const type = newPasswordInput.type === "password" ? "text" : "password"; 
    newPasswordInput.type = type;
    confirmPasswordInput.type = type;
    passwordToggle.textContent = type === "password" ? "👁️" : "👁"; 
});

// Adding input validation
verifyButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const newPassword = newPasswordInput.value; 
    const confirmPassword = confirmPasswordInput.value; 

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!"); 
        return;
    }

    // Check for 12-character limit
    if (newPassword.length > 12) {
        alert("Password should not exceed 12 characters!"); 
        return;
    }

    // Check for letters, symbols, and numbers
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,12}$/; 
    if (!passwordPattern.test(newPassword)) {
        alert("Password must include letters, symbols, and numbers!"); 
        return;
    }

    // If all checks pass
    alert("Password is valid and verified!"); 
});
