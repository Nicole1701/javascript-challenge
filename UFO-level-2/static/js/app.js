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

// Select the button
button = d3.select("#filter-btn");
form = d3.select("#ufo-form");

const runEnter = () => {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear the previous table
  tbody.html("");

  // Define the input element and value property
  let inputElement = d3.select("#datetime");
  let inputValue = inputElement.property("value");

  // Check inputValue
  console.log(inputValue);

  // Filter data
  let filteredData = tableData.filter(
    (sightings) => sightings.datetime === inputValue
  );

  // Check filteredData
  console.log(filteredData);

  filteredData.forEach((selection) => {
    let row = tbody.append("tr");
    Object.values(selection).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};
// Create event handlers
button.on("click", runEnter);
