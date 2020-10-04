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

// tableData.forEach((ufoData) => {
//   let row = tbody.append("tr");
//   Object.values(ufoData).forEach((value) => {
//     let cell = row.append("td");
//     cell.text(value);
//   });
// });

// Select the buttons
button = d3.select("#filter-btn");
resetButton = d3.select("#reset-btn");

const runEnter = () => {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear the previous table
  tbody.html("");

  // Define the input element and value property
  // let dateInput = d3.select("#datetime");
  // let cityInput = d3.select("#city");
  // let stateInput = d3.select("#state");
  // let countryInput = d3.select("#country");
  // let shapeInput = d3.select("#shape");

  // let dateValue = dateInput.value;
  // let cityValue = cityInput.property("value").trim().toLowerCase();
  // let stateValue = stateInput.property("value").trim().toLowerCase();
  // let countryValue = countryInput.property("value").trim().toLowerCase();
  // let shapeValue = shapeInput.property("value").trim().toLowerCase();

  // Filter data
  // let filteredData = tableData.filter(
  //   (sightings) =>
  //     sightings.datetime === dateValue &&
  //     sightings.city === cityValue &&
  //     sightings.state === stateValue &&
  //     sightings.country === countryValue &&
  //     sightings.shape === shapeValue
  // );
  // stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions/44807918
  let filteredData = {
    datetime: d3.select("#datetime").property("value"),
    city: d3.select("#city").property("value").trim().toLowerCase(),
    state: d3.select("#state").property("value").trim().toLowerCase(),
    country: d3.select("#country").property("value").trim().toLowerCase(),
    shape: d3.select("#shape").property("value").trim().toLowerCase(),
  };

  //   filters.forEach((selection) => {
  //     let row = tbody.append("tr");
  //     Object.values(selection).forEach((value) => {
  //       let cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });
};

// Create event handlers
button.on("click", runEnter);
resetButton.on("click", showTable);
