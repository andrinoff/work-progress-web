
    
const apiKeyButton = document.getElementById('apiKeyButton');
if (apiKeyButton) {
    apiKeyButton.addEventListener('click', () => {
        const apiKey = localStorage.getItem('apiKey');
        const apiKeyElement = document.getElementById('apiKey');
        if (apiKeyElement) {
            apiKeyElement.textContent = apiKey || 'Please login to continue';
            apiKeyButton.style.display = 'none';
        } else {
            console.error('API key element not found');
        }
    });
}