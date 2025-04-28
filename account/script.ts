const apiKeyElement = document.getElementById("api-key") as HTMLInputElement;
console.log(localStorage.getItem("apiKey"))
if (apiKeyElement) {
    const apiKey = localStorage.getItem("apiKey") || "no api key found :(";
    apiKeyElement.innerHTML = apiKey;
    
}