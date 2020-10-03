// from data.js
let tableData = data;

// Console.log the bigfoor data from data.js
console.log(data);

// Get a reference to the table body
let tbody = d3.select("tbody");

// Populate the table in html
tableData.forEach((ufoData) => {
  let row = tbody.append("tr");
  Object.values(ufoData).forEach((value) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

//Define filter fields
let dateFilter = d3.select("#datetime");

const runEnter = () => {
  // Select the button and filter references
  let button = d3.select("#filter-btn");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  let inputDate = dateFilter.property("value").trim();
  console.log(inputDate)

// Create event handlers
button.on("click", runEnter);
