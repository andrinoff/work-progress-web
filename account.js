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

// This is going to display the user's last report 
const apiKey = localStorage.getItem("apiKey");
const lastTimeElement = document.getElementById("latest-time");
const lastTime = fetch('https://work-progress-backend.vercel.app/api/server', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey: apiKey, sign : "getLatestTime" })
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Session end response:", data);
        if (data && data.latestTime) {
            lastTimeElement.innerHTML = "Last report: " + data.latestTime + " minutes";
        } else {
            lastTimeElement.innerHTML = "No report found.";
        }
    })
    .catch(error => {
        console.error("Error sending session end data:", error);
});

    

