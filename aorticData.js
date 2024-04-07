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
