var tableData = data;
var tbody = d3.select("tbody");
var filterValue = d3.select("#datetime");
var searchBtn = d3.select("#filter-btn");

tableData.forEach(function(ufos){
var row = tbody.append("tr");

Object.entries(ufos).forEach(function([key, value]) {
var cell = tbody.append("td");

cell.text(value)
});
});

searchBtn.on("click", function(){
    var clearTD = d3.selectAll("td").remove();

    d3.event.preventDefault();
    console.log(filterValue.property("value"));

    var filteredData = tableData.filter(date => date.datetime === filterValue.property("value"));
    filteredData.forEach(function(ufos){
    var row = tbody.append("tr");

    Object.entries(ufos).forEach(function([key, value]) {
    var cell = tbody.append("td");

    cell.text(value)
    });
});
});