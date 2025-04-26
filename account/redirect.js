const signinform = document.getElementById('signin-form');
const signupform = document.getElementById('signup-form');

signinform.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
// TODO add the site
    const isSignIn = fetch("work-progress/signIn", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // TODO add the site
            const apiKey = fetch("work-progress/getApi", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch API key');
                }
            }).then(data => {
                const apiKey = data.apiKey;
                localStorage.setItem('apiKey', apiKey);
                window.location.href = "api.html";
            });
        } else {
            alert("Invalid email or password");
        }
    })
});