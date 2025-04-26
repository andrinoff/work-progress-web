function displayAPIkey() {
    const apiKey = localStorage.getItem('apiKey');
    const apiKeyElement = document.getElementById('apiKey');
    const apiKeyButton = document.getElementById('apiKeyButton');
    
    if (apiKeyElement) {
        apiKeyElement.textContent = apiKey || 'Please login to continue';
        if (apiKeyButton) {
            apiKeyButton.style.display = 'none';
    }
}
    else {
        console.error('API key element not found');
    }
}