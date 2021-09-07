const downloadTplFromGithub = require("./downloadTplFromGithub");
const installDependencies = require("./installDependencies");
const initPackageJson = require("./initPackageJson");
const initAppJson = require("./initAppJson");

const baseProcessor = async (appName, tabbarFlag, tabbarList) => {
  await downloadTplFromGithub(appName);
  await installDependencies(appName);
  await initPackageJson(appName);
  await initAppJson(appName, tabbarFlag, tabbarList.split(","));
};

module.exports = baseProcessor;
