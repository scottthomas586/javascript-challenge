// from data.js
var tableData = data;

var filter = d3.select("#search");

// reference the table body
var tbody = d3.select("tbody");

// console.log the UFO data from data.js
console.log(tableData);
loadtable(tableData);

function loadtable(tableData) {

    tableData.forEach((infos) => {
        
        var newrow = tbody.append("tr");
        
        Object.entries(infos).forEach(([key, value]) => {
        
            var cell = newrow.append("td");
        
            cell.text(value);
        });    
    });

}


//create event handlers
filter.on("click", filterData);

function filterData() {

    // filter on date
    d3.event.preventDefault();

    tbody.html("");

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var newData = tableData.filter(infor => infor.datetime === inputValue);

    console.log(newData);

    newData.forEach((newInput) => {
        console.log(newInput);
        var row = tbody.append("tr");
        Object.entries(newInput).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

function handleResetButtonClick() {
    loadtable(tableData);
}


