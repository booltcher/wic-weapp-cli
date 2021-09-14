const { Log, Spn } = require("../../../lib/utils/logger");
const { commandSpawn } = require("../../../lib/utils/terminal");

const installDependencies = async (appName) => {
  Spn.start("Installing: dependencies...");

  try {
    const commandForOS = process.platform === "win32" ? "npm.cmd" : "npm";
    await commandSpawn(commandForOS, ["install"], {
      cwd: `./${appName}`,
    });

    Spn.stop();
    Log("success", "Done: install dependencies!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = installDependencies;
