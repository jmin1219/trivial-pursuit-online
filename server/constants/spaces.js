export const SPACES = {
  CH: {
    connections: ["S0-0", "S1-0", "S2-0", "S3-0", "S4-0", "S5-0"],
    color: null,
    rollAgain: false,
  },
  "S0-0": {
    connections: ["CH", "S0-1"],
    color: "green",
    rollAgain: false,
  },
  "S0-1": {
    connections: ["S0-0", "S0-2"],
    color: "blue",
    rollAgain: false,
  },
  "S0-2": {
    connections: ["S0-1", "S0-3"],
    color: "orange",
    rollAgain: false,
  },
  "S0-3": {
    connections: ["S0-2", "S0-4"],
    color: "pink",
    rollAgain: false,
  },
  "S0-4": {
    connections: ["S0-3", "W0"],
    color: "yellow",
    rollAgain: false,
  },
  "S1-0": {
    connections: ["CH", "S1-1"],
    color: "purple",
    rollAgain: false,
  },
  "S1-1": {
    connections: ["S1-0", "S1-2"],
    color: "orange",
    rollAgain: false,
  },
  "S1-2": {
    connections: ["S1-1", "S1-3"],
    color: "yellow",
    rollAgain: false,
  },
  "S1-3": {
    connections: ["S1-2", "S1-4"],
    color: "green",
    rollAgain: false,
  },
  "S1-4": {
    connections: ["S1-3", "W1"],
    color: "pink",
    rollAgain: false,
  },
  "S2-0": {
    connections: ["CH", "S2-1"],
    color: "blue",
    rollAgain: false,
  },
  "S2-1": {
    connections: ["S2-0", "S2-2"],
    color: "yellow",
    rollAgain: false,
  },
  "S2-2": {
    connections: ["S2-1", "S2-3"],
    color: "pink",
    rollAgain: false,
  },
  "S2-3": {
    connections: ["S2-2", "S2-4"],
    color: "purple",
    rollAgain: false,
  },
  "S2-4": {
    connections: ["S2-3", "W2"],
    color: "green",
    rollAgain: false,
  },
  "S3-0": {
    connections: ["CH", "S3-1"],
    color: "orange",
    rollAgain: false,
  },
  "S3-1": {
    connections: ["S3-0", "S3-2"],
    color: "pink",
    rollAgain: false,
  },
  "S3-2": {
    connections: ["S3-1", "S3-3"],
    color: "green",
    rollAgain: false,
  },
  "S3-3": {
    connections: ["S3-2", "S3-4"],
    color: "blue",
    rollAgain: false,
  },
  "S3-4": {
    connections: ["S3-3", "W3"],
    color: "purple",
    rollAgain: false,
  },
  "S4-0": {
    connections: ["CH", "S4-1"],
    color: "yellow",
    rollAgain: false,
  },
  "S4-1": {
    connections: ["S4-0", "S4-2"],
    color: "green",
    rollAgain: false,
  },
  "S4-2": {
    connections: ["S4-1", "S4-3"],
    color: "purple",
    rollAgain: false,
  },
  "S4-3": {
    connections: ["S4-2", "S4-4"],
    color: "orange",
    rollAgain: false,
  },
  "S4-4": {
    connections: ["S4-3", "W4"],
    color: "blue",
    rollAgain: false,
  },
  "S5-0": {
    connections: ["CH", "S5-1"],
    color: "pink",
    rollAgain: false,
  },
  "S5-1": {
    connections: ["S5-0", "S5-2"],
    color: "purple",
    rollAgain: false,
  },
  "S5-2": {
    connections: ["S5-1", "S5-3"],
    color: "blue",
    rollAgain: false,
  },
  "S5-3": {
    connections: ["S5-2", "S5-4"],
    color: "yellow",
    rollAgain: false,
  },
  "S5-4": {
    connections: ["S5-3", "W5"],
    color: "orange",
    rollAgain: false,
  },
  W0: {
    connections: ["S0-4", "O0", "O35"],
    color: "purple",
    rollAgain: false,
  },
  O0: {
    connections: ["W0", "O1"],
    color: "yellow",
    rollAgain: false,
  },
  O1: {
    connections: ["O0", "O2"],
    color: null,
    rollAgain: true,
  },
  O2: {
    connections: ["O1", "O3"],
    rollAgain: false,
    color: "orange",
  },
  O3: {
    connections: ["O2", "O4"],
    rollAgain: false,
    color: "green",
  },
  O4: {
    connections: ["O3", "O5"],
    rollAgain: true,
    color: null,
  },
  O5: {
    connections: ["O4", "W1"],
    rollAgain: false,
    color: "pink",
  },
  W1: {
    connections: ["S1-4", "O5", "O6"],
    rollAgain: false,
    color: "blue",
  },
  O6: {
    connections: ["W1", "O7"],
    rollAgain: false,
    color: "pink",
  },
  O7: {
    connections: ["O6", "O8"],
    rollAgain: true,
    color: null,
  },
  O8: {
    connections: ["O7", "O9"],
    rollAgain: false,
    color: "yellow",
  },
  O9: {
    connections: ["O8", "O10"],
    rollAgain: false,
    color: "purple",
  },
  O10: {
    connections: ["O9", "O11"],
    rollAgain: true,
    color: null,
  },
  O11: {
    connections: ["O10", "W2"],
    rollAgain: false,
    color: "green",
  },
  W2: {
    connections: ["S2-4", "O11", "O12"],
    rollAgain: false,
    color: "orange",
  },
  O12: {
    connections: ["W2", "O13"],
    rollAgain: false,
    color: "green",
  },
  O13: {
    connections: ["O12", "O14"],
    rollAgain: true,
    color: null,
  },
  O14: {
    connections: ["O13", "O15"],
    rollAgain: false,
    color: "pink",
  },
  O15: {
    connections: ["O14", "O16"],
    rollAgain: false,
    color: "blue",
  },
  O16: {
    connections: ["O15", "O17"],
    rollAgain: true,
    color: null,
  },
  O17: {
    connections: ["O16", "W3"],
    rollAgain: false,
    color: "purple",
  },
  W3: {
    connections: ["S3-4", "O17", "O18"],
    rollAgain: false,
    color: "yellow",
  },
  O18: {
    connections: ["W3", "O19"],
    rollAgain: false,
    color: "purple",
  },
  O19: {
    connections: ["O18", "O20"],
    rollAgain: true,
    color: null,
  },
  O20: {
    connections: ["O19", "O21"],
    rollAgain: false,
    color: "green",
  },
  O21: {
    connections: ["O20", "O22"],
    rollAgain: false,
    color: "orange",
  },
  O22: {
    connections: ["O21", "O23"],
    rollAgain: true,
    color: null,
  },
  O23: {
    connections: ["O22", "W4"],
    rollAgain: false,
    color: "blue",
  },
  W4: {
    connections: ["S4-4", "O23", "O24"],
    rollAgain: false,
    color: "pink",
  },
  O24: {
    connections: ["W4", "O25"],
    rollAgain: false,
    color: "blue",
  },
  O25: {
    connections: ["O24", "O26"],
    rollAgain: true,
    color: null,
  },
  O26: {
    connections: ["O25", "O27"],
    rollAgain: false,
    color: "purple",
  },
  O27: {
    connections: ["O26", "O28"],
    rollAgain: false,
    color: "yellow",
  },
  O28: {
    connections: ["O27", "O29"],
    rollAgain: true,
    color: null,
  },
  O29: {
    connections: ["O28", "W5"],
    rollAgain: false,
    color: "orange",
  },
  W5: {
    connections: ["S5-4", "O29", "O30"],
    rollAgain: false,
    color: "green",
  },
  O30: {
    connections: ["W5", "O31"],
    rollAgain: false,
    color: "orange",
  },
  O31: {
    connections: ["O30", "O32"],
    rollAgain: true,
    color: null,
  },
  O32: {
    connections: ["O31", "O33"],
    rollAgain: false,
    color: "blue",
  },
  O33: {
    connections: ["O32", "O34"],
    rollAgain: false,
    color: "pink",
  },
  O34: {
    connections: ["O33", "O35"],
    rollAgain: true,
    color: null,
  },
  O35: {
    connections: ["O34", "W0"],
    rollAgain: false,
    color: "yellow",
  },
};
