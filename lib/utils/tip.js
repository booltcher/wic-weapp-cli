const chalk = require("chalk");
const ls = require("log-symbols");

const tipTypeMap = {
  error: {
    icon: ls.error,
    text: chalk.redBright,
  },
  success: {
    icon: ls.success,
    text: chalk.greenBright,
  },
  info: {
    icon: ls.info,
    text: chalk.cyanBright,
  },
  warn: {
    icon: ls.warning,
    text: chalk.yellowBright,
  },
};

const tip = (type, text) => {
  console.log("\n");
  console.log(tipTypeMap[type].icon, tipTypeMap[type].text(text));
};

module.exports = tip;
