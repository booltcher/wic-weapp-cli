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
  errorTag: {
    icon: chalk.black.bgRed("ERROR"),
    text: chalk.grey,
    subtext: chalk.underline,
  },
  successTag: {
    icon: chalk.black.bgGreen("SUCCESS"),
    text: chalk.grey,
    subtext: chalk.underline,
  },
  doneTag: {
    icon: chalk.black.bgGreen("DONE"),
    text: chalk.grey,
    subtext: chalk.underline,
  },
};

const Log = (type, text, subtext) => {
  console.log(
    LoggerMap[type].icon || "",
    LoggerMap[type].text(text),
    LoggerMap[type].subtext ? LoggerMap[type].subtext(subtext) : ""
  );
};

const SpnInstance = ora("wic");
const Spn = {
  start: (text) => {
    SpnInstance.text = text;
    SpnInstance.start();
  },
  stop: () => {
    SpnInstance.stop();
  },
};

module.exports = {
  Log,
  Spn,
};
