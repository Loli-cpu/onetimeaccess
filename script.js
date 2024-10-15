let tempAuthCode = ''; // Store the temporary auth code for verification

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would normally check username and password against a database
    if (username === "testuser" && password === "password123") {
        tempAuthCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code
        alert(`Your authentication code is: ${tempAuthCode}`); // For demo purposes; replace this with an email/SMS service

        // Show the authenticator section
        document.getElementById('authenticator').style.display = 'block';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
}

function verifyCode() {
    const enteredCode = document.getElementById('authCode').value;

    if (enteredCode === tempAuthCode.toString()) {
        document.getElementById('message').innerText = 'Login successful!';
        // Proceed to the next step (redirect to a new page, etc.)
    } else {
        document.getElementById('message').innerText = 'Invalid authentication code';
    }
}
