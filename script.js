window.onload = function() {
    checkAccessToken();
};

function checkAccessToken() {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
        // If there's no token, redirect to login or show an alert
        alert("You need to log in to access this page.");
        window.location.href = "index.html"; // Redirect to your login page
    } else {
        // If token exists, you can do something with it (e.g., display a message)
        console.log("Access Token:", token);
        // You can also check for expiration if you implement that feature
    }
}
