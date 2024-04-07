//array values to use as x-axis/independent values for charts
const htArray = [
  135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205,
];
const bsaArray = [
  1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4,
];

const xAxisLabels = {
  "bsa indexed": bsaArray,
  "height indexed": htArray,
  "height^2.13 indexed": htArray,
};

const models = {
  male: {
    generic: {
      AOV: {
        "bsa indexed": { mean: 11.3, sd: 1.3 },
        "height indexed": { mean: 12.3, sd: 1.2 },
        "height^2.13 indexed": { mean: 6.6, sd: 0.8 },
      },
      SOV: {
        "bsa indexed": { mean: 17.2, sd: 2.5 },
        "height indexed": { mean: 18.6, sd: 2.3 },
        "height^2.13 indexed": { mean: 10.1, sd: 1.5 },
      },
      STJ: {
        "bsa indexed": { mean: 14.8, sd: 2.3 },
        "height indexed": { mean: 16.0, sd: 2.2 },
        "height^2.13 indexed": { mean: 8.7, sd: 1.4 },
      },
    },
    race: {
      Asian: {
        AOV: {
          "bsa indexed": { mean: 11.8, sd: 1.3 },
          "height indexed": { mean: 12.4, sd: 1.2 },
        },
        SOV: {
          "bsa indexed": { mean: 18.2, sd: 2.5 },
          "height indexed": { mean: 19.1, sd: 2.2 },
        },
        STJ: {
          "bsa indexed": { mean: 15.6, sd: 2.2 },
          "height indexed": { mean: 16.3, sd: 2.1 },
        },
      },
      Black: {
        AOV: {
          "bsa indexed": { mean: 10.8, sd: 1.2 },
          "height indexed": { mean: 11.9, sd: 1.1 },
        },
        SOV: {
          "bsa indexed": { mean: 15.8, sd: 2.0 },
          "height indexed": { mean: 17.4, sd: 1.7 },
        },
        STJ: {
          "bsa indexed": { mean: 13.4, sd: 1.9 },
          "height indexed": { mean: 14.8, sd: 1.7 },
        },
      },
      White: {
        AOV: {
          "bsa indexed": { mean: 11.4, sd: 1.3 },
          "height indexed": { mean: 11.9, sd: 1.0 },
        },
        SOV: {
          "bsa indexed": { mean: 17.9, sd: 2.4 },
          "height indexed": { mean: 18.7, sd: 2.1 },
        },
        STJ: {
          "bsa indexed": { mean: 15.7, sd: 2.3 },
          "height indexed": { mean: 16.4, sd: 2.0 },
        },
      },
    },
    age: {
      "18-40": {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.3 },
          "height indexed": { mean: 12.3, sd: 1.1 },
        },
        SOV: {
          "bsa indexed": { mean: 16.5, sd: 2.2 },
          "height indexed": { mean: 17.8, sd: 2.0 },
        },
        STJ: {
          "bsa indexed": { mean: 14.1, sd: 2.0 },
          "height indexed": { mean: 15.2, sd: 1.9 },
        },
      },
      "41-65": {
        AOV: {
          "bsa indexed": { mean: 11.2, sd: 1.4 },
          "height indexed": { mean: 12.3, sd: 1.2 },
        },
        SOV: {
          "bsa indexed": { mean: 17.4, sd: 2.4 },
          "height indexed": { mean: 19.0, sd: 2.1 },
        },
        STJ: {
          "bsa indexed": { mean: 15.0, sd: 2.2 },
          "height indexed": { mean: 16.5, sd: 2.1 },
        },
      },
      ">65": {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.4 },
          "height indexed": { mean: 12.2, sd: 1.2 },
        },
        SOV: {
          "bsa indexed": { mean: 18.2, sd: 2.7 },
          "height indexed": { mean: 19.5, sd: 2.4 },
        },
        STJ: {
          "bsa indexed": { mean: 15.7, sd: 2.6 },
          "height indexed": { mean: 16.9, sd: 2.4 },
        },
      },
    },
  },
  female: {
    generic: {
      AOV: {
        "bsa indexed": { mean: 11.9, sd: 1.4 },
        "height indexed": { mean: 12.2, sd: 1.3 },
        "height^2.13 indexed": { mean: 7.2, sd: 0.9 },
      },
      SOV: {
        "bsa indexed": { mean: 18.0, sd: 2.6 },
        "height indexed": { mean: 18.4, sd: 2.3 },
        "height^2.13 indexed": { mean: 10.8, sd: 1.6 },
      },
      STJ: {
        "bsa indexed": { mean: 15.6, sd: 2.4 },
        "height indexed": { mean: 15.9, sd: 2.2 },
        "height^2.13 indexed": { mean: 9.4, sd: 1.5 },
      },
    },
    race: {
      Asian: {
        AOV: {
          "bsa indexed": { mean: 12.2, sd: 1.5 },
          "height indexed": { mean: 12.1, sd: 1.3 },
        },
        SOV: {
          "bsa indexed": { mean: 18.7, sd: 2.9 },
          "height indexed": { mean: 18.6, sd: 2.6 },
        },
        STJ: {
          "bsa indexed": { mean: 16.2, sd: 2.8 },
          "height indexed": { mean: 16.1, sd: 2.6 },
        },
      },
      Black: {
        AOV: {
          "bsa indexed": { mean: 11.8, sd: 1.5 },
          "height indexed": { mean: 12.7, sd: 1.2 },
        },
        SOV: {
          "bsa indexed": { mean: 17.1, sd: 2.5 },
          "height indexed": { mean: 18.3, sd: 2.1 },
        },
        STJ: {
          "bsa indexed": { mean: 14.7, sd: 2.2 },
          "height indexed": { mean: 15.8, sd: 2.0 },
        },
      },
      White: {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.3 },
          "height indexed": { mean: 11.8, sd: 1.3 },
        },
        SOV: {
          "bsa indexed": { mean: 17.3, sd: 2.7 },
          "height indexed": { mean: 18.1, sd: 2.5 },
        },
        STJ: {
          "bsa indexed": { mean: 15.1, sd: 2.3 },
          "height indexed": { mean: 15.8, sd: 2.0 },
        },
      },
    },
    age: {
      "18-40": {
        AOV: {
          "bsa indexed": { mean: 12.0, sd: 1.4 },
          "height indexed": { mean: 12.1, sd: 1.2 },
        },
        SOV: {
          "bsa indexed": { mean: 17.3, sd: 2.4 },
          "height indexed": { mean: 17.4, sd: 2.3 },
        },
        STJ: {
          "bsa indexed": { mean: 15.0, sd: 2.2 },
          "height indexed": { mean: 15.2, sd: 2.0 },
        },
      },
    },
    "41-65": {
      AOV: {
        "bsa indexed": { mean: 11.7, sd: 1.4 },
        "height indexed": { mean: 12.2, sd: 1.3 },
      },
      SOV: {
        "bsa indexed": { mean: 17.9, sd: 2.4 },
        "height indexed": { mean: 18.6, sd: 2.0 },
      },
      STJ: {
        "bsa indexed": { mean: 15.6, sd: 2.2 },
        "height indexed": { mean: 16.2, sd: 2.0 },
      },
    },
    ">65": {
      AOV: {
        "bsa indexed": { mean: 12.1, sd: 1.6 },
        "height indexed": { mean: 12.3, sd: 1.4 },
      },
      SOV: {
        "bsa indexed": { mean: 19.3, sd: 2.8 },
        "height indexed": { mean: 19.7, sd: 2.1 },
      },
      STJ: {
        "bsa indexed": { mean: 16.6, sd: 2.6 },
        "height indexed": { mean: 17.0, sd: 2.0 },
      },
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
