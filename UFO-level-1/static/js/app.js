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
