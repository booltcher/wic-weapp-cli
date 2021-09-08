const fs = require("fs");
const path = require("path");
const Grid = require("console-grid");
const tip = require("../../../utils/tip");

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

let userConfig = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../../config/user.config.json"))
);

const showCurrentConfiguration = async () => {
  grid.render(genTableConstruction(userConfig));
};

const showThisKeyConfiguration = (key) => {
  if (!Object.keys(userConfig).includes(key)) {
    tip("warn", "Unset key.");
    return;
  }
  tip("info", userConfig[key]);
};

const setConfigure = (key, value) => {
  userConfig[key] = value;
  fs.writeFileSync(
    path.resolve(__dirname, "../../../config/user.config.json"),
    JSON.stringify(userConfig, null, "\t")
  );
  tip("success", "Set successfully!");
};

const globalConfigAction = (key, value) => {
  if (key === undefined && value === undefined) {
    showCurrentConfiguration();
  } else if (value === undefined) {
    showThisKeyConfiguration(key);
  } else {
    setConfigure(key, value);
  }
};

module.exports = globalConfigAction;
