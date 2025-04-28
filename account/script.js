const apiKeyElement = document.getElementById("api-key");
console.log(localStorage.getItem("apiKey"))
if (apiKeyElement) {
    const apiKey = localStorage.getItem("apiKey") || "no api key found :(";
    apiKeyElement.textContent = apiKey;
    
}
alert("YOUR API KEY: " + localStorage.getItem("apiKey"));