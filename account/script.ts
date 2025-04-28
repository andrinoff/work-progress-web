const apiKeyElement = document.getElementById("api-key") as HTMLInputElement;
if (apiKeyElement) {
    const apiKey = localStorage.getItem("apiKey") || "no api key found :(";
    apiKeyElement.innerHTML = apiKey;
    
}