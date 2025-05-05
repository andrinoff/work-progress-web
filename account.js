// Display the user's email address on the account page
const emailElement = document.getElementById("email-info");
console.log(localStorage.getItem("email"))
const email = localStorage.getItem("email") || "no email found :(";
if (emailElement) {
    emailElement.innerHTML = "Email:" + email;
}


// This is going to listen to the sign out button
const signoutButton = document.getElementById("sign-out");
if (signoutButton) {
    signoutButton.addEventListener("click", function () {
        localStorage.removeItem("apiKey");
        localStorage.removeItem("email");
        localStorage.setItem("signedin", false);
        // DEBUGS
        console.log("Sign out button clicked");
        console.log("API key removed");
        console.log("Email removed");
        console.log("Signed in status set to false");
        console.log(localStorage.getItem("signedin"));
        // Redirect to the index page
        window.location.href = "index.html";
    });
}

// This is going to listen to the show API button
const showApiButton = document.getElementById("show-api");
if (showApiButton) {
    showApiButton.addEventListener("click", function () {
        const apiKey = localStorage.getItem("apiKey");
        if (apiKey) {
            alert("YOUR API KEY: " + apiKey);
        } else {
            alert("No API key found.");
        }
        }
    )
}


// This is going to listen to the delete account button (TODO)
const deleteAccountButton = document.getElementById("delete-account");
if (deleteAccountButton) {
    
        
}