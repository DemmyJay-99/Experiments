
const passwordInput = document.getElementById('password');
const passwordStrengthDiv = document.getElementById('password-strength');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    passwordStrengthDiv.innerHTML = strength.message;
    passwordStrengthDiv.className = strength.classs;
});

function checkPasswordStrength(password) {
    let strength = 0;
    let message = '';
    let classs = '';

    // Check for length
    if (password.length < 8) {
        message = 'Password is too short';
        classs = 'weak';
    } else {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    } else {
        message = 'Password should contain at least one uppercase letter';
        classs = 'weak';
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    } else {
        message = 'Password should contain at least one lowercase letter';
        classs = 'weak';
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
        strength += 1;
    } else {
        message = 'Password should contain at least one number';
        classs = 'weak';
    }

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    } else {
        message = 'Password should contain at least one special character';
        classs = 'weak';
    }

    // Determine password strength
    if (strength === 5) {
        message = 'Password is strong';
        classs = 'strong';
    } else if (strength >= 3) {
        message = 'Password is medium';
        classs = 'medium';
    } else {
        message = 'Password is weak';
        classs = 'weak';
    }

    return { message, classs };
}