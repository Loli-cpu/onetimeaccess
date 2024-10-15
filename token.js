// On the protected page, check for the access token
window.onload = function() {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
        alert("Access denied. Please log in.");
        window.location.href = "index.html"; // Redirect to login page
    } else {
        // Allow access and do something with the token if needed
        console.log("Access granted. Token:", token);
    }
};
