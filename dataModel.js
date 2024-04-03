//array values to use as x-axis/independent values for charts
const htArray = [
  135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205,
];
const bsaArray = [
  1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4,
];

const models = {
  sov: {
    label: "Sinus of valsalva",
    raw: {
      label: "unadjusted raw values",
      "x-axis": null,
      male: [32.2, 2.7],
      female: [29.3, 3.6],
    },
    bsa: {
      label: "indexed to BSA",
      "x-axis": bsaArray,
      male: [17.2, 2.5],
      female: [18.0, 2.6],
    },
    ht: {
      label: "indexed to height (in meters)",
      "x-axis": htArray,
      male: [18.6, 2.3],
      female: [18.4, 2.3],
    },
    ht213: {
      label: "indexed to height raised to the power of 2.13",
      "x-axis": htArray,
      male: [10.1, 1.5],
      female: [10.8, 1.6],
    },
  },
};

// Function to generate chart data
function generateChartData(model, sex, index) {
  const data = models[model][index];
  const xValues = data["x-axis"];
  const sexData = data[sex];
  const mean = sexData[0];
  const sd = sexData[1];

  // Generate chart data based on the formula (mean + 2 * sd) * x
  const chartData = xValues.map((x) => {
    return [x, (mean + 2 * sd) * x];
  });

  return chartData;
}
const maleData = generateChartData("sov", "male", "bsa");
const femaleData = generateChartData("sov", "female", "bsa");

const chartData = {
  labels: bsaArray,

  datasets: [
    {
      label: "Male",
      data: maleData,
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)", // Optional: Set background color
      // You can customize other dataset properties here
    },
    {
      label: "Female",
      data: femaleData,
      borderColor: "red",
      backgroundColor: "rgba(255, 0, 0, 0.2)", // Optional: Set background color
      // You can customize other dataset properties here
    },
  ],
};

// Example chart configuration using Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    // You can customize chart options here
  },
});
