const searchButton = document.getElementById("btnSearch");
const clearButton = document.getElementById("btnClear")
const resultsContainer = document.querySelector("results");

function getData() {
fetch ("travel_recommendation_api.json")
.then(response=>response.json())
.then(data=> {

    console.log(data);
})
.catch(error=>console.error("Error fetching data:", error));
}

//
function getRec(keyword) {
document.getElementById("search").value.toLowerCase();

getData().then (data=> {
return data.filter(item=>item.category.includes("keyword"))
let results=[];

    if ((keyword===beach)||(keyword===beaches)) {
        results=data.beach
    }
    else if ((keyword===temple)||(keyword===temples)){
    results=data.temple
    } 
    else if ((keyword===country)||(keyword===countries)) {
    results=data.country
    }
    else {
    resultsContainer="Please try again."
    return  
    }

    displayResults(results);
})
}



