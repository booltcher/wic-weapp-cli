const { Log, Spn } = require("../../../lib/utils/logger");
const { updateJson } = require("../../helper");

const initPackageJson = async (appName) => {
  Spn.start("Initing: package.json ...");

  try {
    updateJson(`${appName}/package.json`, 'name', appName);
    Spn.stop();
    Log("success", "Done: init package.json!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = initPackageJson;
