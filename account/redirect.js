const signinform = document.getElementById('signin-form');
const signupform = document.getElementById('signup-form');

signinform.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
// TODO add the site

    const apiKey = fetch("https://work-progress-backend.vercel.app/api/server", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    sign: "in"
                })
            }).then(response => {

                if (response.ok) {
                    localStorage.setItem('apiKey', apiKey);
                    window.location.href = "api.html";
                    return response.json();
                } else {
                    throw new Error('Failed to fetch API key');
                }
            })});


signupform.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
// TODO add the site

    const apiKey = fetch("https://work-progress-backend.vercel.app/api/server", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    sign: "up"
                })
            }).then(response => {

                if (response.ok) {
                    localStorage.setItem('apiKey', apiKey);
                    window.location.href = "api.html";
                    return response.json();
                } else {
                    throw new Error('Failed to fetch API key');
                }
            })});