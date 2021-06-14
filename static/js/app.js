// from data.js
var tableData = data;

// YOUR CODE HERE!
//Create table rows using d3.select method

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populateTable = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

//Populate the table with data
populateTable(data);

//Filter the data
button.on("clilck",() => {
    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var inputCity = inputfieldCity.property("value").toLowerCase().trim();
    var dateFilter = data.filter(data => data.datetime === inputDate);
    var cityFilter = data.filter(data => data.city === inputCity);
    var dataFilter = data.filter(data => data.datetime === inputData && data.city === inputcity);
    console.log(dateFilter)
    console.log(cityFilter)
    console.log(dataFilter)

    tbody.html("");

    let response = {
        dataFilter, cityFilter, dateFilter
    }

    if (response.dataFilter.length !==0){
        populate(dataFilter);
    }
        else if (response.dataFilter.length === 0 && ((respnse.cityFilter.length !==0 || response.dateFilter.length !== 0))){
            populate(cityFilter) || populate(dateFilter);
        }
        else {
            tbody.append("tr").append("td").text("Could not find any matching results")
        }
})

resetbutton.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Table Cleared")
})