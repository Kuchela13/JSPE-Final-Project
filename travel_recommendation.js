const resultsContainer = document.getElementById("results");
const recommendations = [];

async function getData() {
    const requestDir = "travel_recommendation_api.json";
    const request = new Request(requestDir);

    const response = await fetch(request);
    const recommendations = await response.json();
}


function search() {
    const keyword = document.getElementById("btnSearch").value.toLowerCase();

    if ((keyword === "beach") || (keyword === "beaches")) {
        results = data.beach;
    }
    else if ((keyword === "temple") || (keyword === "temples")) {
        results = data.temple;
    }
    else if ((keyword === "country") || (keyword === "countries")) {
        results = data.country;
    }

    displayResults(results);
}

document.getElementById("btnSearch").addEventListener("click", search());


function displayResults(results) {
    resultsContainer.innerHTML = "";

    recommendations.forEach(recommendation => {
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `
      <h3>${recommendation.name}</h3>
      <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
      <p>${recommendation.description}</p>
    `;
        resultsContainer.appendChild(resultDiv);
    });

}

getData();
