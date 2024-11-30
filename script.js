const passwordInput = document.getElementById('password');
const strengthDisplay = document.getElementById('strength');
const timeDisplay = document.getElementById('time-to-crack');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    if (isStrongPassword(password)) {
        strengthDisplay.textContent = 'Very Strong';
        strengthDisplay.style.color = 'green';
        timeDisplay.textContent = 'Years';
        timeDisplay.style.color = 'green';
    } else if (isLessStrongPassword(password)) {
        strengthDisplay.textContent = 'Less Strong';
        strengthDisplay.style.color = 'orange';
        timeDisplay.textContent = 'Minutes to Hours';
        timeDisplay.style.color = 'orange';
    } else if (isWeakPassword(password)) {
        strengthDisplay.textContent = 'Weak';
        strengthDisplay.style.color = 'red';
        timeDisplay.textContent = 'Seconds';
        timeDisplay.style.color = 'red';
    } else {
        strengthDisplay.textContent = 'Very Weak';
        strengthDisplay.style.color = 'red';
        timeDisplay.textContent = 'Instantly';
        timeDisplay.style.color = 'red';
    }
});

// Helper functions
function isStrongPassword(password) {
    return password.length >= 8 &&
           /[a-z]/.test(password) &&
           /[A-Z]/.test(password) &&
           /\d/.test(password) &&
           /\W/.test(password);
}

function isLessStrongPassword(password) {
    return password.length >= 6 &&
           /[a-z]/.test(password) &&
           /[A-Z]/.test(password) &&
           /\d/.test(password);
}

function isWeakPassword(password) {
    return password.length >= 4 &&
           /[a-z]/.test(password) &&
           /[A-Z]/.test(password);
}
