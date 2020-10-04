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

// Select the button
button = d3.select("#filter-btn");
clearButton = d3.select("#clear-btn");
resetButton = d3.select("#reset-btn");

const filterDate = () => {
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

  if (filteredData.length == 0) {
    alert(
      "No sightings found. Clearly this is a conspiracy! Remember, the truth is out there, but so are lies. Please try again."
    );
    var snd = new Audio("static/sound/xfiles.mp3");
    snd.play();

    // alert("No UFO's found. Clearly this is a conspiracy! Best try again.");
    clearText();
  }

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

function clearText() {
  document.getElementById("datetime").value = "";
  showTable();
}

// Create event handlers
button.on("click", filterDate);
clearButton.on("click", clearText);
resetButton.on("click", resetTable);
