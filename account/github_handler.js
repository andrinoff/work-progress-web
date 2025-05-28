// This script handles the redirection logic for the account page with GitHub oAuth.

const GITHUBULR = "https://work-progress-backend.vercel.app/api/github";
const GITHUBULRDEV = "https://work-progress-backend-git-dev-dreysekis-projects.vercel.app/api/github";




// --- GitHub Callback Handler ---
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
if (code) {
    // If the code is present, make a POST request to your backend to exchange it for an API key
    fetch(GITHUBULR, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.apiKey && data.email) {
            localStorage.setItem('apiKey', data.apiKey);
            localStorage.setItem('email', data.email);
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