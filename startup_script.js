//  Just returns the API key 
function getAPI() {
    return localStorage.getItem("apiKey");
}
//  This function checks if the user is signed in by checking localStorage
//  for the "signedin" key. It returns true if the user is signed in, false otherwise.
function isSignedIn() {
    console.log("Checking if signed in...");
    console.log(localStorage.getItem("signedin"));
    return localStorage.getItem("signedin") == true;
}

// This will take the "SIGN IN" button and turn it into a "ACCOUNT" button,
// if the user is signed in. Otherwise, it will do nothing.
const signInButton = document.getElementById("sign-in");
const isSignIn = localStorage.getItem("signedin");
console.log("isSignIn: " + isSignIn);

if (isSignIn == "true") {
    signInButton.innerHTML = "Account";
    signInButton.href = "account.html";
    console.log("TRUE")
    console.log(localStorage.getItem("signedin"));
} else if (isSignIn == "false") {
    console.log("FALSE")
    signInButton.innerHTML = "Sign In";
    signInButton.href = "account/signin.html";
}
else {
    console.error("unknown")
}

