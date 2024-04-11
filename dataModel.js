//array values to use as x-axis/independent values for charts
const htArray = [
  135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205,
];
const bsaArray = [
  1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4,
];
// colors
const autocolors = window["chartjs-plugin-autocolors"];

const indexType = {
  bsa: "bsa indexed",
  ht: "height indexed",
  ht213: "height^2.13 indexed",
};

const models = {
  male: {
    generic: {
      AOV: {
        "bsa indexed": { mean: 11.3, sd: 1.3, xAxis: bsaArray },
        "height indexed": { mean: 12.3, sd: 1.2, xAxis: htArray },
        "height^2.13 indexed": { mean: 6.6, sd: 0.8, xAxis: htArray },
      },
      SOV: {
        "bsa indexed": { mean: 17.2, sd: 2.5, xAxis: bsaArray },
        "height indexed": { mean: 18.6, sd: 2.3, xAxis: htArray },
        "height^2.13 indexed": { mean: 10.1, sd: 1.5, xAxis: htArray },
      },
      STJ: {
        "bsa indexed": { mean: 14.8, sd: 2.3, xAxis: bsaArray },
        "height indexed": { mean: 16.0, sd: 2.2, xAxis: htArray },
        "height^2.13 indexed": { mean: 8.7, sd: 1.4, xAxis: htArray },
      },
    },
    race: {
      Asian: {
        AOV: {
          "bsa indexed": { mean: 11.8, sd: 1.3, xAxis: bsaArray },
          "height indexed": { mean: 12.4, sd: 1.2, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 18.2, sd: 2.5, xAxis: bsaArray },
          "height indexed": { mean: 19.1, sd: 2.2, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.6, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 16.3, sd: 2.1, xAxis: htArray },
        },
      },
      Black: {
        AOV: {
          "bsa indexed": { mean: 10.8, sd: 1.2, xAxis: bsaArray },
          "height indexed": { mean: 11.9, sd: 1.1, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 15.8, sd: 2.0, xAxis: bsaArray },
          "height indexed": { mean: 17.4, sd: 1.7, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 13.4, sd: 1.9, xAxis: bsaArray },
          "height indexed": { mean: 14.8, sd: 1.7, xAxis: htArray },
        },
      },
      White: {
        AOV: {
          "bsa indexed": { mean: 11.4, sd: 1.3, xAxis: bsaArray },
          "height indexed": { mean: 11.9, sd: 1.0, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.9, sd: 2.4, xAxis: bsaArray },
          "height indexed": { mean: 18.7, sd: 2.1, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.7, sd: 2.3, xAxis: bsaArray },
          "height indexed": { mean: 16.4, sd: 2.0, xAxis: htArray },
        },
      },
    },
    age: {
      "18-40": {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.3, xAxis: bsaArray },
          "height indexed": { mean: 12.3, sd: 1.1, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 16.5, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 17.8, sd: 2.0, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 14.1, sd: 2.0, xAxis: bsaArray },
          "height indexed": { mean: 15.2, sd: 1.9, xAxis: htArray },
        },
      },
      "41-65": {
        AOV: {
          "bsa indexed": { mean: 11.2, sd: 1.4, xAxis: bsaArray },
          "height indexed": { mean: 12.3, sd: 1.2, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.4, sd: 2.4, xAxis: bsaArray },
          "height indexed": { mean: 19.0, sd: 2.1, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.0, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 16.5, sd: 2.1, xAxis: htArray },
        },
      },
      ">65": {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.4, xAxis: bsaArray },
          "height indexed": { mean: 12.2, sd: 1.2, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 18.2, sd: 2.7, xAxis: bsaArray },
          "height indexed": { mean: 19.5, sd: 2.4, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.7, sd: 2.6, xAxis: bsaArray },
          "height indexed": { mean: 16.9, sd: 2.4, xAxis: htArray },
        },
      },
    },
  },
  female: {
    generic: {
      AOV: {
        "bsa indexed": { mean: 11.9, sd: 1.4, xAxis: bsaArray },
        "height indexed": { mean: 12.2, sd: 1.3, xAxis: htArray },
        "height^2.13 indexed": { mean: 7.2, sd: 0.9, xAxis: htArray },
      },
      SOV: {
        "bsa indexed": { mean: 18.0, sd: 2.6, xAxis: bsaArray },
        "height indexed": { mean: 18.4, sd: 2.3, xAxis: htArray },
        "height^2.13 indexed": { mean: 10.8, sd: 1.6, xAxis: htArray },
      },
      STJ: {
        "bsa indexed": { mean: 15.6, sd: 2.4, xAxis: bsaArray },
        "height indexed": { mean: 15.9, sd: 2.2, xAxis: htArray },
        "height^2.13 indexed": { mean: 9.4, sd: 1.5, xAxis: htArray },
      },
    },
    race: {
      Asian: {
        AOV: {
          "bsa indexed": { mean: 12.2, sd: 1.5, xAxis: bsaArray },
          "height indexed": { mean: 12.1, sd: 1.3, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 18.7, sd: 2.9, xAxis: bsaArray },
          "height indexed": { mean: 18.6, sd: 2.6, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 16.2, sd: 2.8, xAxis: bsaArray },
          "height indexed": { mean: 16.1, sd: 2.6, xAxis: htArray },
        },
      },
      Black: {
        AOV: {
          "bsa indexed": { mean: 11.8, sd: 1.5, xAxis: bsaArray },
          "height indexed": { mean: 12.7, sd: 1.2, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.1, sd: 2.5, xAxis: bsaArray },
          "height indexed": { mean: 18.3, sd: 2.1, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 14.7, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 15.8, sd: 2.0, xAxis: htArray },
        },
      },
      White: {
        AOV: {
          "bsa indexed": { mean: 11.3, sd: 1.3, xAxis: bsaArray },
          "height indexed": { mean: 11.8, sd: 1.3, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.3, sd: 2.7, xAxis: bsaArray },
          "height indexed": { mean: 18.1, sd: 2.5, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.1, sd: 2.3, xAxis: bsaArray },
          "height indexed": { mean: 15.8, sd: 2.0, xAxis: htArray },
        },
      },
    },
    age: {
      "18-40": {
        AOV: {
          "bsa indexed": { mean: 12.0, sd: 1.4, xAxis: bsaArray },
          "height indexed": { mean: 12.1, sd: 1.2, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.3, sd: 2.4, xAxis: bsaArray },
          "height indexed": { mean: 17.4, sd: 2.3, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.0, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 15.2, sd: 2.0, xAxis: htArray },
        },
      },
      "41-65": {
        AOV: {
          "bsa indexed": { mean: 11.7, sd: 1.4, xAxis: bsaArray },
          "height indexed": { mean: 12.2, sd: 1.3, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 17.9, sd: 2.4, xAxis: bsaArray },
          "height indexed": { mean: 18.6, sd: 2.0, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 15.6, sd: 2.2, xAxis: bsaArray },
          "height indexed": { mean: 16.2, sd: 2.0, xAxis: htArray },
        },
      },
      ">65": {
        AOV: {
          "bsa indexed": { mean: 12.1, sd: 1.6, xAxis: bsaArray },
          "height indexed": { mean: 12.3, sd: 1.4, xAxis: htArray },
        },
        SOV: {
          "bsa indexed": { mean: 19.3, sd: 2.8, xAxis: bsaArray },
          "height indexed": { mean: 19.7, sd: 2.1, xAxis: htArray },
        },
        STJ: {
          "bsa indexed": { mean: 16.6, sd: 2.6, xAxis: bsaArray },
          "height indexed": { mean: 17.0, sd: 2.0, xAxis: htArray },
        },
      },
    },
  },
};
// Function to generate generic chart data
function generateGenericChart(site, indexingVariable) {
  indexingVariable = indexType[indexingVariable];
  const maleData = models.male.generic[site][indexingVariable];
  const femaleData = models.female.generic[site][indexingVariable];
  //console.log(`male data: ${maleData}, female data: ${femaleData}`);
  // Generate chart data based on the formula (mean + 2 * sd) * x
  maleData.chartData = maleData.xAxis.map((x) => {
    switch (indexingVariable) {
      case "bsa indexed":
        return [x, (maleData.mean + 2 * maleData.sd) * x];
        break;
      case "height indexed":
        return [x, ((maleData.mean + 2 * maleData.sd) * x) / 100];
        break;
      case "height^2.13 indexed":
        return [x, (maleData.mean + 2 * maleData.sd) * Math.pow(x / 100, 2.13)];
        break;
    }
  });
  femaleData.chartData = femaleData.xAxis.map((x) => {
    switch (indexingVariable) {
      case "bsa indexed":
        return [x, (femaleData.mean + 2 * femaleData.sd) * x];
        break;
      case "height indexed":
        return [x, ((femaleData.mean + 2 * femaleData.sd) * x) / 100];
        break;
      case "height^2.13 indexed":
        return [
          x,
          (femaleData.mean + 2 * femaleData.sd) * Math.pow(x / 100, 2.13),
        ];
        break;
    }
  });

  const chartData = {
    labels: maleData.xAxis, // could be either male or female

    datasets: [
      {
        label: "Female",
        data: femaleData.chartData,
        borderColor: "#FF4D6D", // Change border color ["#FF4D6D", "#FFB3C1"],
        backgroundColor: "#FFB3C1", // Change background color
        // You can customize other dataset properties here
      },
      {
        label: "Male",
        data: maleData.chartData,
        borderColor: "#03045E",
        backgroundColor: "#CAF0F8", // Optional: Set background color ["#03045E", "#CAF0F8"],
        // You can customize other dataset properties here
      },
    ],
  };
  // JS - Destroy exiting Chart Instance to reuse <canvas> element
  let chartStatus = Chart.getChart("myChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  //-- End of chart destroy

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      // You can customize chart options here
    },
  });
}

//detail charts (race or age)
function generateDetailChart(gender, detail, site, indexingVariable) {
  indexingVariable = indexType[indexingVariable]; //gets the long description used in the model
  //console.log(gender, detail, site, indexingVariable);
  //either by race or age, there will be three datasets to compare
  const ages = ["18-40", "41-65", ">65"];
  const races = ["Asian", "Black", "White"];
  //read the data from the models
  var detailData = models[gender][detail];
  //console.log(detailData);
  //this is now either race or age collected data
  var set;
  if (detail == "race") {
    set = races;
  } else {
    set = ages;
  }
  //console.log(set);
  //build the chart data

  // colors
  const colorScheme =
    gender == "female"
      ? [ //pinkish
          ["#590D22", "#FFB3C1"],
          ["#A4133C", "#FFB3C1"],
          ["#FF4D6D", "#FFB3C1"],
        ]
      : [ //blueish
          ["#03045E", "#CAF0F8"],
          ["#0077B6", "#CAF0F8"],
          ["#00B4D8", "#CAF0F8"],
        ]; 
  //console.log(colorScheme[0]);
  const chartData = {
    labels: indexingVariable == "bsa indexed" ? bsaArray : htArray,
  };
  chartData.datasets = [];
  set.forEach((item, index) => {
    //console.log(item, index);
    // Get the specific data from detailData based on the current item
    var o = detailData[item][site][indexingVariable];
    //console.log(o);
    chartData.datasets.push({
      label: item,
      data: getDetailChartData(o, indexingVariable),
      borderColor: colorScheme[index][0],
      backgroundColor: colorScheme[index][1],
    });
  });
  //console.log(chartData);
  // JS - Destroy exiting Chart Instance to reuse <canvas> element
  let chartStatus = Chart.getChart("myChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  //-- End of chart destroy

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    plugins: [
      // autocolors
    ],
    options: {
      plugins: {},
    },
  });
}

function getDetailChartData(o, indexingVariable) {
  //the obect passed in (o) is a subset of the model data
  // like this: { mean: xx, sd: yy, xAxis: [a,b,c...] }
  var xAxis = o.xAxis;
  o.chartData = xAxis.map((x) => {
    switch (indexingVariable) {
      case "bsa indexed":
        return [x, (o.mean + 2 * o.sd) * x];
        break;
      case "height indexed":
        return [x, (o.mean + 2 * o.sd) * (x / 100)];
        break;
    }
  });
  return o.chartData;
}
