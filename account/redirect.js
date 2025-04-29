// 


// --- Sign In and Sign Up Form Handlers ---
// This script handles the sign-in and sign-up forms on the account page.



const signinform = document.getElementById('signin-form');
const signupform = document.getElementById('signup-form');

// --- Sign In Form Handler (Needs the same fix as below) ---
if (signinform) {
    signinform.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        // TODO: Add loading indicator/disable button

        fetch("https://work-progress-backend.vercel.app/api/server", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                sign: "in" // Corrected typo from "up" to "in" for sign-in
            })
        })
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors (like 401 Unauthorized, 404 Not Found, 500 Server Error)
                // You might want to get more specific error details from the response body if available
                return response.text().then(text => { // Try to get error text
                   throw new Error(`Sign-in failed: ${response.status} ${response.statusText} - ${text || 'No details'}`);
                });
            }
            // If response is OK, parse the JSON body
            return response.json(); // This returns another promise
        })
        .then(data => {
            // --- This block runs ONLY after response.json() is successful ---
            console.log("Sign-in successful, data received:", data);

            // Assuming your backend sends back JSON like: { "apiKey": "your_actual_key" }
            if (data && data.apiKey) {
                // Store the ACTUAL API key from the response data
                localStorage.setItem('apiKey', data.apiKey);
                console.log("API key stored successfully:", data.apiKey);

                // NOW redirect after successfully getting and storing the key
                window.location.href = "api.html";
            } else {
                // Handle cases where the response is OK but doesn't contain the expected apiKey
                throw new Error('Sign-in successful, but API key not found in response.');
            }
        })
        .catch(error => {
            // --- This block catches errors from fetch, network issues, or errors thrown above ---
            console.error('Sign-in Error:', error);
            alert(`Sign-in failed: ${error.message}`); // Show error to the user
            // TODO: Re-enable button, remove loading indicator
        });
    });
}


// --- Sign Up Form Handler (Corrected) ---
if (signupform) {
    signupform.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default page reload
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        // TODO: Add loading indicator/disable button

        fetch("https://work-progress-backend.vercel.app/api/server", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                sign: "up" // Correct for sign-up
            })
        })
        .then(response => {
            // First, check if the response status is OK (e.g., 200, 201)
            if (!response.ok) {
                // If not OK, throw an error to be caught by .catch()
                // Try to get error details from the response body
                 return response.text().then(text => { // Try to get error text
                   throw new Error(`Sign-up failed: ${response.status} ${response.statusText} - ${text || 'No details'}`);
                });
            }
            // If response is OK, parse the JSON body. This returns *another* promise.
            return response.json();
        })
        .then(data => {
            // --- This .then() block runs ONLY after response.json() successfully resolves ---
            console.log("Sign-up successful, data received:", data);

            // Assuming your backend sends back JSON like: { "apiKey": "your_actual_key" }
            // Adjust 'data.apiKey' if your backend uses a different field name
            if (data && data.apiKey) {
                // Store the ACTUAL API key received from the backend
                localStorage.setItem('apiKey', data.apiKey);

                // NOW redirect to api.html because sign-up was successful and key is stored
                window.location.href = "api.html";
            } else {
                // Handle cases where the response is OK but doesn't contain the expected apiKey
                throw new Error('Sign-up successful, but API key not found in response.');
            }
        })
        .catch(error => {
            // --- This .catch() block handles any errors from the fetch chain ---
            console.error('Sign-up Error:', error);
            alert(`Sign-up failed: ${error.message}`); // Inform the user
             // TODO: Re-enable button, remove loading indicator
        });
    });
}

// Add checks for elements in case the script runs on a page without one of the forms
if (!signinform && window.location.pathname.includes('signin.html')) {
    console.error('Could not find the signin form element.');
}
if (!signupform && window.location.pathname.includes('signup.html')) {
     console.error('Could not find the signup form element.');
}

// --- GitHub Sign-In Button Handler ---



// --- GitHub Callback Handler ---
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
if (code) {
    // If the code is present, make a POST request to your backend to exchange it for an API key
    fetch("https://work-progress-backend.vercel.app/api/server", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code,
            sign: "github" // Indicate this is a GitHub sign-in
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.apiKey) {
            localStorage.setItem('apiKey', data.apiKey);
            window.location.href = "api.html";
        } else {
            console.error('GitHub sign-in failed:', data);
            alert('GitHub sign-in failed. '+ data.message);
        }
    })
    .catch(error => {
        console.error('Error during GitHub sign-in:', error);
        alert('An error occurred during GitHub sign-in. Please try again.');
    });
}