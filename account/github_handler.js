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