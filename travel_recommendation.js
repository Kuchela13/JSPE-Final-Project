const resultsContainer = document.getElementById("results");

function getData() {
    fetch("travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

//
document.getElementById("btnSearch").addEventListener("click", getRec);

function getRec() {
    document.getElementById("search").value.toLowerCase();


    getData().then(data => {
        data.filter(item => item.category.includes("keyword"));
        let results = [];

        if ((keyword === beach) || (keyword === beaches)) {
            results = data.beach;
        }
        else if ((keyword === temple) || (keyword === temples)) {
            results = data.temple;
        }
        else if ((keyword === country) || (keyword === countries)) {
            results = data.country;
        }
        else {
            resultsContainer.innerHTML = "Please try again.";
            return;
        }

        displayResults(results);
    });
}

function displayResults(results) {
    resultsContainer.innerHTML = "";

    recommendations.forEach(recommendation => {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
      <h3>${recommendation.name}</h3>
      <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
      <p>${recommendation.description}</p>
    `;
        resultsContainer.appendChild(resultDiv);
    });

}
function clearResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
}
document.getElementById("btnClear").addEventListener('click', clearResults);







