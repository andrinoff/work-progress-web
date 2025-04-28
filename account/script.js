const apiKeyElement = document.getElementById("apiKey");
console.log(localStorage.getItem("apiKey"))
if (apiKeyElement) {
    const apiKey = localStorage.getItem("apiKey") || "no api key found :(";
    apiKeyElement.innerHTML = apiKey;
    
}
alert("YOUR API KEY: " + localStorage.getItem("apiKey"));