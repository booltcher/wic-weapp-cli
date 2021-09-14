const fs = require("fs");
const path = require("path");
const Grid = require("console-grid");
const { Log } = require("../../lib/utils/logger");

const grid = new Grid();

const genTableConstruction = (config) => {
  return {
    option: {
      sortField: "name",
    },
    columns: [
      {
        id: "name",
        name: "Key",
        type: "string",
        maxWidth: 38,
      },
      {
        id: "value",
        name: "Value",
        type: "string",
        maxWidth: 100,
      },
    ],
    rows: Object.keys(config).map((key) => {
      return {
        name: key,
        value: config[key],
      };
    }),
  };
};
// fixme: get from common
// fixme: set it in cli file ? or user file
let userConfig = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../config/user.config.json"))
);

const showCurrentConfiguration = async () => {
  grid.render(genTableConstruction(userConfig));
};

const showThisKeyConfiguration = (key) => {
  if (!Object.keys(userConfig).includes(key)) {
    Log("warn", "Unset key.");
    return;
  }
  Log("info", userConfig[key]);
};

const setConfigure = (key, value) => {
  userConfig[key] = value;
  fs.writeFileSync(
    path.resolve(__dirname, "../../../config/user.config.json"),
    JSON.stringify(userConfig, null, "\t")
  );
  Log("success", "Set successfully!");
};

const globalConfigAction = (key, value, opt) => {
  if (key === undefined && value === undefined) {
    showCurrentConfiguration();
  } else if (value === undefined) {
    showThisKeyConfiguration(key);
  } else {
    setConfigure(key, value, opt);
  }
};

module.exports = globalConfigAction;
