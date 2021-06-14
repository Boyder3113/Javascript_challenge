// from data.js
var tableData = data;

// YOUR CODE HERE!
//Create table rows using d3.select method

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn");
var inputField = d3.select("#datetime");
var inputcity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populateTable = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

