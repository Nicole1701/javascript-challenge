// from data.js
let tableData = data;

// Console.log the bigfoor data from data.js
console.log(data);

// Get a reference to the table body
let tbody = d3.select("tbody");

// Create function to show full table
function showTable() {
  tableData.forEach((ufoData) => {
    let row = tbody.append("tr");
    Object.values(ufoData).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

// Show table when loading page
showTable();

// Select the buttons
button = d3.select("#filter-btn");
clearButton = d3.select("#clear-btn");
resetButton = d3.select("#reset-btn");

const runEnter = () => {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear the previous table
  tbody.html("");

  // Define the input elements
  let dateInput = d3.select("#datetime");
  let cityInput = d3.select("#city");
  let stateInput = d3.select("#state");
  let countryInput = d3.select("#country");
  let shapeInput = d3.select("#shape");

  // Define the values and trim/lower case
  let dateValue = dateInput.property("value");
  let cityValue = cityInput.property("value").trim().toLowerCase();
  let stateValue = stateInput.property("value").trim().toLowerCase();
  let countryValue = countryInput.property("value").trim().toLowerCase();
  let shapeValue = shapeInput.property("value").trim().toLowerCase();

  // Grab the data from the filters
  // stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions/44807918
  let filteredData = tableData.filter(function (filter) {
    return (
      (filter.datetime === dateValue || dateValue == "") &&
      (filter.city === cityValue || cityValue == "") &&
      (filter.state === stateValue || stateValue == "") &&
      (filter.country === countryValue || countryValue == "") &&
      (filter.shape === shapeValue || shapeValue == "")
    );
  });

  if (filteredData.length == 0) {
    alert(
      "No sightings found. Clearly this is a conspiracy! Remember, the truth is out there, but so are lies. Please try again."
    );
    var snd = new Audio("static/sound/xfiles.mp3");
    snd.play();
    clearText();
  }

  // Console.log the filteredData
  console.log(filteredData);

  // Create table with only filtered data
  filteredData.forEach((selection) => {
    let row = tbody.append("tr");
    Object.values(selection).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// Add clear filter function
// stackoverflow.com/questions/11072031/clearing-multiple-text-input-boxes-with-one-name
function clearText() {
  document.getElementById("datetime").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("shape").value = "";
  showTable();
}

// Create event handlers
button.on("click", runEnter);
clearButton.on("click", clearText);
resetButton.on("click", showTable);
