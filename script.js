document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    // Clear previous errors
    errorMsg.textContent = ''; 

    // 1. Check for empty submissions
    if (!email || !password) {
        event.preventDefault();
        errorMsg.textContent = 'Both email and password are required.';
        return;
    }

    // 2. Check that email contains "@"
    if (!email.includes('@')) {
        event.preventDefault();
        errorMsg.textContent = 'Please enter a valid email containing an "@" symbol.';
        return;
    }

    // 3. Check password length
    if (password.length < 8) {
        event.preventDefault();
        errorMsg.textContent = 'Password must be at least 8 characters long.';
        return;
    }
});