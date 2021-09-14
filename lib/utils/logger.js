const chalk = require("chalk");
const ora = require("ora");
const ls = require("log-symbols");

const LoggerMap = {
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

const Log = (type, text) => {
  console.log(LoggerMap[type].icon, LoggerMap[type].text(text));
};

const SpnInstance = ora("wic");
const Spn = {
  start: (text) => {
    SpnInstance.text = text
    Spn.start()
  }, 
  stop: () => {
    Spn.stop()
  }
};

module.exports = {
  Log,
  Spn
};
