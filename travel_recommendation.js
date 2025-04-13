const resultsContainer = document.getElementById("results");

//Fetch data from JSON file
async function fetchData() {
    const requestDir = "travel_recommendation_api.json";
    const request = new Request(requestDir);
try {
    const response = await fetch(request);
    const recommendations = await response.json();
    return recommendations;
} catch (error) {
    console.log('Error big dawg:', error)
}
}
 
//Keyword Searches  
async function search() {
    const recommendations= await fetchData();
    const keyword = document.getElementById("search").value.toLowerCase();
    let results=[];
    if ((keyword === "beach") || (keyword === "beaches")) {
        results = recommendations.beaches;
    }
    else if ((keyword === "temple") || (keyword === "temples")) {
        results = recommendations.temples;
    }
    else if ((keyword === "country") || (keyword === "countries")) {
       
        recommendations.countries.forEach(country => {
            country.cities.forEach(city => {
                results.push(city);
            });
        });
    }

    if (results.length>0) {
        displayResults(results);
    }
    else {
        resultsContainer.innerHTML="<p>No recommendations found for the given keyword.<p>";
    }
    //
    
}


//Display Results

function displayResults(results) {
    resultsContainer.innerHTML = "";

    results.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `
      <h3>${result.name}</h3>
      <img src="${result.imageUrl}" alt="${result.name}">
      <p>${result.description}</p>
    `;
        resultsContainer.appendChild(resultDiv);
    });

}

//Clear Results
function clearResults() {
    resultsContainer.innerHTML="";
}

//Search Button
document.getElementById("btnSearch").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    search(); // Call the search function
});
