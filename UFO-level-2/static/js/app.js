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
resetButton = d3.select("#reset-btn");

const runEnter = () => {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear the previous table
  tbody.html("");

  // Define the input element and value property
  let dateInput = d3.select("#datetime");
  let cityInput = d3.select("#city");
  let stateInput = d3.select("#state");
  let countryInput = d3.select("#country");
  let shapeInput = d3.select("#shape");

  let dateValue = dateInput.value.trim().toLowerCase();
  let cityValue = dateInput.value.trim().toLowerCase();
  let stateValue = dateInput.value.trim().toLowerCase();
  let countryValue = dateInput.value.trim().toLowerCase();
  let shapeValue = dateInput.value.trim().toLowerCase();

  // Check inputValue
  console.log(inputValue);

  // Filter data
  let filteredData = tableData.filter(
    (sightings) =>
      sightings.datetime === dateValue &&
      sightings.city === cityValue &&
      sightings.state === stateValue &&
      sightings.country === countryValue &&
      sightings.shape === shapeValue
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

// Reset Table Function
const resetTable = () => {
  tableData.forEach((ufoData) => {
    let row = tbody.append("tr");
    Object.values(ufoData).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// Create event handlers
button.on("click", runEnter);
resetButton.on("click", resetTable);
