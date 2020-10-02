// from data.js
let tableData = data;

// Console.log the bigfoor data from data.js
console.log(data);

// Get a reference to the table body
const tbody = d3.select("tbody");

// Populate the table in html
tableData.forEach((ufoData) => {
  let row = tbody.append("tr");
  Object.values(ufoData).forEach((value) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

const runEnter = () => {

  // Select the button and filter references
  let button = d3.select("#filter-btn");
  

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  let dateinput = d3.select("#datetime"),
    dateValue = inputElement.property("value");

  console.log(dateinput);
  console.log(dateValue);
  
  let filteredDate = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredDate);

// Create event handlers 
button.on("click", runEnter);
